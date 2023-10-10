<?php
// In this file you can tell what this module contains or have here something that should be loaded before your models, routes, ..etc
use PromCMS\Core\Mailer;
use PromCMS\Core\Services\RenderingService;
use Slim\App;

/**
 * Cart implementation that stores data of current cart for current session
 */
class Cart {
    public static array $defaultState = [ 'items' => []];
    protected array $state;

    public function __construct(array|null $initialState = null) {
        $this->state = $initialState ?? Cart::$defaultState;
    }

    public function setState(array $nextState) {
        $this->state = $nextState;
    }

    public function getState() {
        return $this->state;
    }
}

return function (App $app) {
    /**
     * @var DI\Container;
     */
    $container = $app->getContainer();
    $mailer = $container->get(Mailer::class);
    $rendering = $container->get(RenderingService::class);
   

    // Special condition - mailtrap does not transfer messages via SSL and thats okay in development
    if (str_contains($_ENV['MAIL_HOST'], 'mailtrap')) {
        $mailer->SMTPSecure = false;
    }

    $container->set(Cart::class, new Cart());

    $adcardsMiddleware = function ($request, $handler) use ($rendering, $container) {
        $session = $container->get('session');
        $cartFromSession = $container->get(Cart::class);

        // Load cart items from session into Cart class instance
        $cartFromSession->setState($session->get('cart', Cart::$defaultState));
        // Add cart state into each template (at least to those that render page components, since this variable is only added on request)
        $rendering->getEnvironment()->addGlobal('cart', $cartFromSession->getState());

        // Handle request or run different middleware
        $response = $handler->handle($request);
        
        return $response;
    };

    $app->add($adcardsMiddleware);

};

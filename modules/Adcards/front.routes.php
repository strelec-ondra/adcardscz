<?php

use PromCMS\Core\Services\EntryTypeService;
use PromCMS\Core\Services\RenderingService;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Slim\App;
use Slim\Routing\RouteCollectorProxy;
use PromCMS\Modules\Adcards\Cart;
use PromCMS\Modules\Adcards\Enums\CartItemTypes;

// FIXME: This file is being run twice for some reason - fix this
$runCount = 0;

return function (App $app, RouteCollectorProxy $router) use (&$runCount) {
    $container = $app->getContainer();
    $twig = $container->get(RenderingService::class);
    $productsService = new EntryTypeService(new Products());
    $cart = $container->get(Cart::class);

    $router->get('/', function (
        ServerRequestInterface $request,
        ResponseInterface      $response,
                               $args,
    ) use ($twig) {
        $cardMaterialService = new EntryTypeService(new CardMaterial());
        $sliderItemsService = new EntryTypeService(new MainPageSlides());

        return $twig->render($response, '@modules:Adcards/pages/home.twig', [
            "cards" => [
                "materials" => $cardMaterialService->getMany([], 1, 999)["data"],
            ],
            "slider" => [
                "items" => $sliderItemsService->getMany([], 1, 999, ["order" => "desc", "id" => "desc"])["data"]
            ],
        ]);
    });

    $router->get('/karty/builder', function (
        ServerRequestInterface $request,
        ResponseInterface      $response,
                               $args
    ) use ($twig) {
        $cardMaterialService = new EntryTypeService(new CardMaterial());
        $countriesService = new EntryTypeService(new Countries());
        $cardSizesService = new EntryTypeService(new CardSizes());
        $cardBackgroundsService = new EntryTypeService(new CardBackgrounds());

        return $twig->render($response, '@modules:Adcards/pages/builder.twig', [
            "materials" => $cardMaterialService->getMany([], 1, 999)["data"],
            "sizes" => $cardSizesService->getMany([], 1, 999)["data"],
            "countries" => $countriesService->getMany([], 1, 999)["data"],
            "backgrounds" => $cardBackgroundsService->getMany([], 1, 999)["data"],
        ]);
    })->setName("builder");

    $router->get('/faq', function (
        ServerRequestInterface $request,
        ResponseInterface      $response,
                               $args,
    ) use ($twig) {

        return $twig->render($response, '@modules:Adcards/pages/faq.twig');
    })->setName("faq");

    $router->get('/kontakt', function (
        ServerRequestInterface $request,
        ResponseInterface      $response,
                               $args,
    ) use ($twig) {

        return $twig->render($response, '@modules:Adcards/pages/kontakt.twig');
    })->setName("contact");

    $router->get('/kosik', function (
        ServerRequestInterface $request,
        ResponseInterface      $response,
                               $args,
    ) use ($twig, $cart, $productsService) {
        return $twig->render($response, '@modules:Adcards/pages/kosik.twig', [
            "cart" => getCartStateForTemplates($cart)
        ]);
    })->setName("cart");

    $router->get('/team', function (
        ServerRequestInterface $request,
        ResponseInterface      $response,
                               $args,
    ) use ($twig) {

        return $twig->render($response, '@modules:Adcards/pages/team.twig');
    })->setName("team");

    $router->get('/produkty', function (
        ServerRequestInterface $request,
        ResponseInterface      $response,
                               $args,
    ) use ($twig) {
        $productsService = new EntryTypeService(new Products());

        return $twig->render($response, '@modules:Adcards/pages/produkty.twig', [
            "products" => $productsService->getMany([], 1, 999)["data"],
        ]);
    })->setName("products");

    if ($runCount == 0) {
        $app->redirect('/obchodni-podminky', '/pdf/trade-agreement.pdf', 301)->setName("trade-agreement");
        $app->redirect('/gdpr', '/pdf/gdpr.pdf', 301)->setName("gdpr");
    }
    $runCount++;
};

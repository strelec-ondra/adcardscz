import{r,G as m,m as p,j as s,J as f,K as v,A as b,Q as h,R as g,e as x,V as C,a as L,W as k,X as y,h as u,F as d,Y as I,Z as N,_ as w}from"./index.b593dde9.js";function E(){const[o,t]=r.exports.useState(!1),a=r.exports.useRef(null),e=r.exports.useCallback(()=>t(!0),[]),l=r.exports.useCallback(()=>t(!1),[]);return r.exports.useEffect(()=>{if(a.current)return a.current.addEventListener("mouseenter",e),a.current.addEventListener("mouseleave",l),()=>{var n,i;(n=a.current)==null||n.removeEventListener("mouseenter",e),(i=a.current)==null||i.removeEventListener("mouseleave",l)}},[]),{ref:a,hovered:o}}const F=({fileUrl:o})=>{const{hovered:t,ref:a}=E(),e=m(),{t:l}=p(),n=()=>e.copy(o);return s(f,{label:l("File URL"),type:"string",className:"w-full",autoComplete:"off",value:o.pathname,rightSection:s(v,{label:l(e.copied?"Link copied!":"Copy link to clipboard"),position:"left",radius:"xl",transition:"fade",transitionDuration:200,opened:t||e.copied,children:s(b,{ref:a,onClick:n,color:"blue",variant:"filled",size:"xl",className:"mr-2",children:s(h,{className:"h-7 w-7"})})}),disabled:!0},"fileUrl")},M=()=>{const{t:o}=p(),{fileId:t}=g(),a=x(),{data:e,isLoading:l}=C("files",t),n=r.exports.useMemo(()=>!!t&&L.files.getAssetUrl(t),[t]),i=r.exports.useMemo(()=>{var c;return(c=e==null?void 0:e.mimeType)==null?void 0:c.startsWith("image/")},[e]);return s(k,{size:"xl",opened:!0,onClose:()=>a(-1),padding:"xl",position:"right",closeButtonLabel:o("Close"),title:s(y,{order:4,children:l?o("Loading, please wait..."):u(d,{children:["File info of '",s("span",{className:"text-blue-500",children:e.filename}),"'"]})}),children:!l&&e&&!!n?u(d,{children:[s(I,{mb:"lg",mt:"sm",size:"sm"}),i?s(N.Wrapper,{label:o("File preview"),className:"py-3",labelProps:{className:"font-semibold"},children:s(w,{quality:80,width:450,imageId:t,className:"mb-3 w-full"})}):null,s(F,{fileUrl:n})]}):null})};export{M as default};

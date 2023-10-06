import{r as a,N as K,u as Y,a as D,b as _,c as G,d as J,e as X,s as O,j as t,F as P,t as y,f as L,g as ee,h as g,i as te,U as se,k as C,H as oe,l as Q,m as I,P as z,n as re,o as q,M as le,A as U,T as V,L as ae,p as ne,S as ie,q as ce,v as de,w as ue,x as H,y as me,I as pe,z as fe,B as he,C as ge,D as xe,O as be}from"./index.b593dde9.js";import{B as Fe}from"./Button.6ab03472.js";function we(){const s=a.exports.useContext(K);if(!s)throw new Error("@mantine/notifications: use-notifications hook was called outside of NotificationsProvider context");return s}const Ne=s=>()=>D.folders.getMany(s).then(o=>o.data.data),Ce=s=>{const o=a.exports.useMemo(()=>["folders",s],[s]),e=Y(o,Ne(s),{enabled:!!s});return a.exports.useMemo(()=>({...e,key:o}),[e,o])},T=s=>{const o=_(),{data:e,isError:l,isLoading:r,key:n,refetch:d}=G("files",{params:{path:s,limit:9999}}),{data:m,isError:c,key:p,refetch:x}=Ce(s),u=a.exports.useCallback(F=>o.setQueryData(n,F),[o,n]),h=a.exports.useCallback(F=>{o.setQueryData(p,F)},[o,p]);return a.exports.useMemo(()=>({data:(e==null?void 0:e.data)||m?{files:e==null?void 0:e.data,folders:m}:void 0,isError:l||c,isLoading:r||!c&&!m,mutateFiles:u,mutateFolders:h,refetchFolders:x,refetchFiles:d}),[u,h,x,d,r,c,m,l,e])},ke=(s,o)=>o.map(e=>({key:`${s==="/"?"":s}/${e.name}`,file:e,formattedSize:e.size/1e6+"MB",name:e.name.split(".").slice(0,-1).join(),uploaded:!1})),Z={currentPath:"/",uploadingFiles:[],showNewFolderCreator:!1,workingFolders:{},files:void 0,isError:!1,isLoading:!0,mutateFiles:()=>{},mutateFolders:()=>{},getDropZoneInputProps:()=>{},getDropZoneRootProps:()=>{},openFilePicker:()=>{},updateValue:()=>{}},W=a.exports.createContext(Z),S=()=>a.exports.useContext(W);function ve(s,{name:o,value:e}){return{...s,[o]:e}}const ye=te(),Pe=({children:s})=>{const[o,e]=a.exports.useReducer(ve,Z),l=J("folder"),r=X(),n=a.exports.useMemo(()=>(l||"/").replaceAll("//","/"),[l]),{data:d,isError:m,isLoading:c,mutateFiles:p,mutateFolders:x,refetchFiles:u}=T(n),h=a.exports.useCallback((f,b)=>{if(f==="currentPath"){r({search:`?folder=${b}`});return}e({name:f,value:b})},[e,r]),F=a.exports.useCallback(async f=>{let b=ke(n,f);h("uploadingFiles",b);const M="on-drop-file-info";O({id:M,message:t(P,{children:y("Working")}),title:y("Uploading files...").toString(),color:"blue",autoClose:!1});for(const{key:k,file:E}of b){try{await D.files.create(E,{root:n})}catch(j){L({id:M,message:t(P,{children:y("Error")}),title:y("An error happened").toString(),color:"red",autoClose:2e3}),ye.error(`An error happened during onDrop creation: ${j.message}`)}b=b.filter(({key:j})=>j!==k),h("uploadingFiles",b),await u(),L({id:M,message:t(P,{children:y("Success")}),title:y("All files has been uploaded").toString(),color:"green",autoClose:2e3})}},[h,n,p]),{getInputProps:w,getRootProps:N,open:v}=ee({onDrop:F,noClick:!0,noKeyboard:!0}),i=a.exports.useMemo(()=>({...o,files:d,isError:m,isLoading:c,updateValue:h,openFilePicker:v,getDropZoneRootProps:N,getDropZoneInputProps:w,currentPath:n,mutateFiles:p,mutateFolders:x}),[d,m,c,h,v,N,w,n,p,x,o]);return g(W.Provider,{value:i,children:[t("input",{...w({className:"hidden"})}),s]})},R=({isLast:s,onClick:o,icon:e,title:l,label:r})=>g(P,{children:[g(se,{onClick:o,className:C("flex flex-none items-center",s&&"pointer-events-none"),title:r,children:[t(e,{className:"w-6 text-blue-500"}),l&&t("span",{className:C("ml-2 text-lg font-semibold",s&&"underline"),children:l})]}),!s&&t("span",{className:"mx-2 flex-none text-2xl font-semibold text-gray-300",children:"/"})]}),De=()=>{const{currentPath:s,updateValue:o}=S(),e=a.exports.useMemo(()=>s.split("/").filter(r=>!!r),[s]),l=a.exports.useCallback(r=>()=>{o("currentPath",r)},[o]);return g("nav",{role:"navigation",className:"flex w-full items-center overflow-auto rounded-2xl border-2 border-project-border bg-white px-4",children:[t(R,{icon:oe,onClick:l("/"),isLast:!e.length}),e.map((r,n)=>t(R,{icon:Q,label:"/"+e.slice(0,n+1).join("/"),onClick:l("/"+e.slice(0,n+1).join("/")),title:r,isLast:n===e.length-1},r))]})},Se=()=>{const{updateValue:s,openFilePicker:o}=S(),{t:e}=I();return t("div",{className:"ml-3 grid aspect-square h-full flex-none",children:g(z,{offset:10,position:"bottom-end",children:[t(z.Target,{children:t(Fe,{color:"success",className:"relative flex aspect-square h-full cursor-pointer",children:t(re,{size:32,className:"absolute left-3 top-3"})})}),t(z.Dropdown,{children:g(q,{children:[t(q.Item,{icon:"FilePlus",title:"Add new file to current folder",onClick:o,children:e("Add new file")}),t(q.Item,{icon:"FolderPlus",onClick:()=>s("showNewFolderCreator",!0),title:"Add new folder to current folder",children:e("Add new folder")})]})})]})})},Me=()=>g("section",{className:"mb-5 flex h-[55px]",children:[t(De,{}),t(Se,{})]}),Le=({isOpen:s,onClose:o})=>{const{getDropZoneRootProps:e}=S(),{t:l}=I();return t(le,{opened:s,onClose:o,children:t("div",{...e({className:"flex h-full min-h-[750px] w-full rounded-2xl border-4 border-dashed border-blue-300 bg-gray-100"}),children:t("div",{className:"m-auto text-center",children:t("p",{className:"text-xl font-semibold text-gray-400",children:l("Drag your files here here")})})})})},A=()=>({itemsWrap:C("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7 items-start"),itemRoot:C("relative block group"),itemSquare:(s=!0)=>C("aspect-square w-full rounded-lg bg-white shadow-md overflow-hidden relative",s?"group-hover:shadow-lg duration-200":"cursor-default"),itemLabel:C("mt-2 overflow-hidden text-ellipsis font-semibold group-hover:underline")}),B=A(),Ie=({itemId:s,children:o,className:e,...l})=>t(ae,{to:ne.files.view(s),...l,children:o}),Ae=({id:s,filename:o,mimeType:e,onDeleteClick:l})=>{var c;const r=o.split(".").at(-1)||"unknown",d=(((c=e==null?void 0:e.split("/"))==null?void 0:c[0])||"unknown")==="image",m=a.exports.useCallback(()=>l(s),[s,l]);return g("article",{className:B.itemRoot,children:[g(Ie,{itemId:s,children:[t("div",{className:B.itemSquare(),children:d?t("img",{alt:"uploaded file",className:"absolute top-0 left-0 h-full w-full object-cover",src:D.files.getAssetUrl(s,{w:"250",q:"60"}).toString()}):t("div",{className:"flex h-full w-full",children:t("p",{className:"m-auto text-3xl font-bold text-gray-400",children:r})})}),t("h3",{className:B.itemLabel,children:o})]}),t("div",{className:"absolute top-0 right-0 m-2.5",children:t(U,{onClick:m,size:45,color:"red",className:"border-2 border-project-border bg-white",children:t(V,{size:25})})})]})},$=()=>{const s=A();return t(ie,{className:s.itemSquare(!1)})},Ee=({itemKey:s,name:o,onClick:e,onDeleteClick:l})=>{var w,N;const{currentPath:r,workingFolders:n}=S(),[d,m]=a.exports.useState(!1),c=A(),p=a.exports.useMemo(()=>`${r==="/"?"":r}/${s}`,[s,r]),x=()=>m(!d),u=a.exports.useMemo(()=>d?Q:ce,[d]),h=a.exports.useCallback(()=>e(p),[e,p]),F=a.exports.useCallback(()=>l(p),[l,p]);return g("div",{className:c.itemRoot,onMouseEnter:x,onMouseLeave:x,role:"link",children:[t("div",{className:C(c.itemSquare(),"flex cursor-pointer"),onClick:h,children:t(u,{className:"m-auto block h-28 w-28 text-blue-500"})}),t("h3",{className:C(c.itemLabel,"cursor-pointer text-left"),onClick:h,children:o}),t("div",{className:"absolute top-0 right-0 m-2.5",children:t(U,{onClick:F,size:45,color:"red",className:"border-2 border-project-border bg-white",disabled:((w=n[p])==null?void 0:w.type)==="deleting"||((N=n[p])==null?void 0:N.type)==="uploading",children:t(V,{size:25})})})]})},je=({styles:s={}})=>{var F,w;const{updateValue:o,currentPath:e}=S(),l=A(),{t:r}=I(),{register:n,handleSubmit:d,setFocus:m,formState:c,setError:p}=de(),{refetchFolders:x}=T(e);a.exports.useEffect(()=>{m("name")},[m]);const u=async({name:N})=>{var v;try{await D.folders.create(`${e}/${N}`),await x(),o("showNewFolderCreator",!1)}catch(i){if(H.isAxiosError(i)&&((v=i.response)==null?void 0:v.status)===409)return p("name",{message:"This folder already exists"}),!1;throw i}},h=()=>{c.isSubmitting||o("showNewFolderCreator",!1)};return g("div",{className:C(l.itemRoot,"text-left",c.isSubmitting&&"cursor-wait"),style:s,children:[t("div",{className:C(l.itemSquare(!1),"flex"),children:t(ue,{className:"m-auto h-28 w-28 text-blue-500"})}),g("form",{onSubmit:d(u),className:"relative",children:[t("input",{className:"mt-1 w-full !border-b-4 !border-blue-500 bg-transparent text-lg font-medium outline-0 disabled:opacity-50",disabled:c.isSubmitting||c.isSubmitSuccessful,autoComplete:"off",...n("name",{onBlur:h})}),((w=(F=c.errors)==null?void 0:F.name)==null?void 0:w.message)&&t("small",{className:"b-0 translate-y-full text-lg font-semibold text-red-500",children:r(c.errors.name.message)})]})]})},ze=()=>{var N,v;const{isLoading:s,isError:o,files:e,showNewFolderCreator:l,updateValue:r,uploadingFiles:n,workingFolders:d,mutateFiles:m,mutateFolders:c}=S(),p=we(),x=A(),{t:u}=I(),h=a.exports.useCallback(i=>{r("currentPath",i)},[r]),F=a.exports.useCallback(async i=>{var b;const f="Deleting folder";if(O({id:f,loading:!0,title:u("Deleting folder"),message:u("Deleting folder")+"...",autoClose:!1,disallowClose:!0}),confirm(u("Do you really want to delete this folder?"))){const M=i.split("/").at(-1);r("workingFolders",{...d,path:{type:"deleting"}});try{await D.folders.delete(i),c(k=>k==null?void 0:k.filter(E=>E!==M)),r("workingFolders",{...d,path:{type:"none"}}),L({id:f,color:"green",message:u("Your folder has been deleted"),autoClose:2e3})}catch(k){if(console.log(k),H.isAxiosError(k)&&((b=k.response)==null?void 0:b.status)===400){L({id:f,color:"red",message:u("This folder is not empty! Delete its contents first"),autoClose:2e3});return}L({id:f,color:"red",message:u("An unexpected error happened"),autoClose:2e3})}}},[d,r,c,u,p]),w=a.exports.useCallback(async i=>{confirm(u("Do you really want to delete this file?"))&&(await D.files.delete(i),m(f=>f&&{...f,data:f.data.filter(b=>b.id!==i)}))},[m,u]);return s||o?t("div",{className:x.itemsWrap,children:new Array(10).fill(!0).map((i,f)=>t($,{},f))}):t(P,{children:((N=e==null?void 0:e.files)==null?void 0:N.length)||((v=e==null?void 0:e.folders)==null?void 0:v.length)||l?t("div",{className:x.itemsWrap,children:g(P,{children:[(e==null?void 0:e.folders)&&e.folders.map(i=>t(Ee,{itemKey:i,name:i,onClick:h,onDeleteClick:F},i)),(e==null?void 0:e.files)&&e.files.map(i=>t(Ae,{onDeleteClick:w,...i},i.id)),t(me,{mounted:l,transition:"pop-top-left",duration:200,timingFunction:"ease",children:i=>t(je,{styles:i})}),Object.entries(n).map(([i])=>t($,{},i))]})}):t(pe,{})})},qe=()=>{const[s,o]=a.exports.useState(!1),e=a.exports.useCallback(n=>{var d;n.preventDefault(),!s&&(((d=n==null?void 0:n.dataTransfer)==null?void 0:d.types)||[]).join("")==="Files"&&o(!0)},[s,o]),l=a.exports.useCallback(n=>{n.preventDefault(),s&&o(!1)},[s,o]),r=a.exports.useCallback(()=>o(!1),[o]);return t(Pe,{children:g("div",{onDragOver:e,onDrop:l,children:[t(Me,{}),t(ze,{}),t(Le,{isOpen:s,onClose:r})]})})},$e=()=>{const{t:s}=I(),o=fe("files");return o?g(ge,{children:[t("div",{className:"flex w-full flex-col justify-between gap-5 py-10 md:flex-row",children:t("h1",{className:"text-3xl font-semibold capitalize",children:s(xe(o.tableName||""))})}),t(qe,{}),t(be,{})]}):t(he,{text:s("This model with this id does not exist.")})};export{$e as default};
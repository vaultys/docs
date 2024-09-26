"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[9586],{92697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(86070),s=n(25710),a=n(50278);const o={},i="\ud83d\udcc2 Folder Management",c={id:"administrateur/manage-folders/index",title:"\ud83d\udcc2 Folder Management",description:"Folders?",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/administrateur/manage-folders/index.md",sourceDirName:"administrateur/manage-folders",slug:"/administrateur/manage-folders/",permalink:"/en/docs/administrateur/manage-folders/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"userguideSidebar",previous:{title:"Add a simple application",permalink:"/en/docs/administrateur/manage-apps/add-simple-app"},next:{title:"Create your folders",permalink:"/en/docs/administrateur/manage-folders/create"}},l={},d=[{value:"Folders?",id:"folders",level:2}];function u(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"-folder-management",children:"\ud83d\udcc2 Folder Management"})}),"\n",(0,r.jsx)(t.h2,{id:"folders",children:"Folders?"}),"\n",(0,r.jsx)(t.p,{children:"Folders in SmartLink allow you to organize access in your SmartLink in an optimal way."}),"\n",(0,r.jsx)(t.p,{children:"You can create a folder structure and assign applications and users to each of them."}),"\n","\n",(0,r.jsx)(a.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},50278:(e,t,n)=>{n.d(t,{A:()=>j});n(30758);var r=n(13526),s=n(2026),a=n(18991),o=n(84690),i=n(34813),c=n(23284),l=n(53863);const d={cardContainer:"cardContainer_RqXD",cardTitle:"cardTitle_wVlG",cardDescription:"cardDescription_tsIr"};var u=n(86070);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(a.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:a}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:s,children:[n," ",s]}),a&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,i.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(h,{item:t});case"category":return(0,u.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const a=(0,s.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:a.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},84690:(e,t,n)=>{n.d(t,{W:()=>d});var r=n(30758),s=n(791),a=n(65640);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return a.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function d(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&a.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),o=n.pluralForms.indexOf(s);return r[Math.min(o,r.length-1)]}(n,t,e)}}},25710:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(30758);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
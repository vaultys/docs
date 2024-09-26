"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[7696],{32432:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var r=n(86070),s=n(25710),a=n(50278);const i={},o="\ud83d\udee0\ufe0f Anwendungsverwaltung",c={id:"administrateur/manage-apps/index",title:"\ud83d\udee0\ufe0f Anwendungsverwaltung",description:"",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/administrateur/manage-apps/index.mdx",sourceDirName:"administrateur/manage-apps",slug:"/administrateur/manage-apps/",permalink:"/de/docs/administrateur/manage-apps/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"userguideSidebar",previous:{title:"Zugriffsverwaltung",permalink:"/de/docs/administrateur/manage-users/access"},next:{title:"App Store",permalink:"/de/docs/administrateur/manage-apps/add-appstore"}},l={},u=[];function d(e){const t={h1:"h1",header:"header",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"\ufe0f-anwendungsverwaltung",children:"\ud83d\udee0\ufe0f Anwendungsverwaltung"})}),"\n","\n",(0,r.jsx)(a.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50278:(e,t,n)=>{n.d(t,{A:()=>w});n(30758);var r=n(13526),s=n(2026),a=n(18991),i=n(84690),o=n(34813),c=n(23284),l=n(53863);const u={cardContainer:"cardContainer_RqXD",cardTitle:"cardTitle_wVlG",cardDescription:"cardDescription_tsIr"};var d=n(86070);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(a.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:s,description:a}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),a&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(w,{items:n.items,className:t})}function w(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const a=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:a.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},84690:(e,t,n)=>{n.d(t,{W:()=>u});var r=n(30758),s=n(791),a=n(65640);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return a.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&a.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},25710:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var r=n(30758);const s={},a=r.createContext(s);function i(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);
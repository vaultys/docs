"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[9278],{57012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(86070),s=n(25710),i=n(50278);const a={},o="\ud83d\udc65 Benutzerverwaltung",c={id:"administrateur/manage-users/index",title:"\ud83d\udc65 Benutzerverwaltung",description:"",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/administrateur/manage-users/index.md",sourceDirName:"administrateur/manage-users",slug:"/administrateur/manage-users/",permalink:"/de/docs/administrateur/manage-users/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"userguideSidebar",previous:{title:"Konfigurieren Sie Ihre Organisation",permalink:"/de/docs/administrateur/start/organisation"},next:{title:"Benutzer per E-Mail einladen",permalink:"/de/docs/administrateur/manage-users/invite-user"}},l={},u=[];function d(e){const t={h1:"h1",header:"header",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"-benutzerverwaltung",children:"\ud83d\udc65 Benutzerverwaltung"})}),"\n","\n",(0,r.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},50278:(e,t,n)=>{n.d(t,{A:()=>j});n(30758);var r=n(13526),s=n(2026),i=n(18991),a=n(84690),o=n(34813),c=n(23284),l=n(53863);const u={cardContainer:"cardContainer_RqXD",cardTitle:"cardTitle_wVlG",cardDescription:"cardDescription_tsIr"};var d=n(86070);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function f(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function p(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},84690:(e,t,n)=>{n.d(t,{W:()=>u});var r=n(30758),s=n(791),i=n(65640);const a=["zero","one","two","few","many","other"];function o(e){return a.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return i.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&i.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),a=n.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(n,t,e)}}},25710:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(30758);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
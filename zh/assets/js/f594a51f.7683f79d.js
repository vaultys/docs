"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[1156],{53551:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(86070),s=r(25710),o=r(50278);const i={sidebar_position:3,title:"\ud83d\udcf1 \u7528\u6237\u7c7b\u578b"},c=void 0,l={id:"user/VaultysID/profiletype/index",title:"\ud83d\udcf1 \u7528\u6237\u7c7b\u578b",description:"",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user/VaultysID/profiletype/index.md",sourceDirName:"user/VaultysID/profiletype",slug:"/user/VaultysID/profiletype/",permalink:"/zh/docs/user/VaultysID/profiletype/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\ud83d\udcf1 \u7528\u6237\u7c7b\u578b"},sidebar:"userguideSidebar",previous:{title:"\ud83d\ude4b \u8fde\u63a5\u5230\u8054\u7cfb\u4eba",permalink:"/zh/docs/user/VaultysID/connection/contact"},next:{title:"hardware",permalink:"/zh/docs/user/VaultysID/profiletype/hardware"}},a={},u=[];function d(e){return(0,n.jsx)(o.A,{})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d()}},50278:(e,t,r)=>{r.d(t,{A:()=>y});r(30758);var n=r(13526),s=r(2026),o=r(18991),i=r(84690),c=r(34813),l=r(23284),a=r(53863);const u={cardContainer:"cardContainer_RqXD",cardTitle:"cardTitle_wVlG",cardDescription:"cardDescription_tsIr"};var d=r(86070);function p(e){let{href:t,children:r}=e;return(0,d.jsx)(o.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:s,description:o}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:s,children:[r," ",s]}),o&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function f(e){let{item:t}=e;const r=(0,s.Nr)(t),n=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function h(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const r=(0,s.$S)();return(0,d.jsx)(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(g,{...e});const o=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},84690:(e,t,r)=>{r.d(t,{W:()=>u});var n=r(30758),s=r(791),o=r(65640);const i=["zero","one","two","few","many","other"];function c(e){return i.filter((t=>e.includes(t)))}const l={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return o.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),l}}),[e])}function u(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&o.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const s=r.select(t),i=r.pluralForms.indexOf(s);return n[Math.min(i,n.length-1)]}(r,t,e)}}},25710:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(30758);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);
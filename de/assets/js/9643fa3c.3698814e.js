"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[5300],{32387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>u});var r=n(86070),i=n(25710),s=n(83147);const o={title:"\ud83d\ude0e Administrator"},c=void 0,a={id:"administrateur/index",title:"\ud83d\ude0e Administrator",description:"",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/administrateur/index.md",sourceDirName:"administrateur",slug:"/administrateur/",permalink:"/de/docs/administrateur/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"\ud83d\ude0e Administrator"},sidebar:"userguideSidebar",previous:{title:"\u2699\ufe0f Einstellungen",permalink:"/de/docs/user/VaultysID/settings"},next:{title:"\ud83d\ude80 Einf\xfchrung",permalink:"/de/docs/administrateur/integration/"}},l={},u=[];function d(e){return(0,r.jsx)(s.A,{})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d()}},83147:(e,t,n)=>{n.d(t,{A:()=>j});n(30758);var r=n(13526),i=n(19284),s=n(40802),o=n(49779),c=n(38330),a=n(37961),l=n(71386);const u={cardContainer:"cardContainer_xzjE",cardTitle:"cardTitle_FxNJ",cardDescription:"cardDescription_dFdd"};var d=n(86070);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function f(e){let{href:t,icon:n,title:i,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,i.Nr)(t),r=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(f,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function h(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(f,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.$S)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},49779:(e,t,n)=>{n.d(t,{W:()=>u});var r=n(30758),i=n(43814),s=n(65640);const o=["zero","one","two","few","many","other"];function c(e){return o.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:c(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:c(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return s.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function u(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&s.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),o=n.pluralForms.indexOf(i);return r[Math.min(o,r.length-1)]}(n,t,e)}}},25710:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var r=n(30758);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
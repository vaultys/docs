"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[6054],{52357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(86070),s=n(62907),i=n(70061);const a={},o="\ud83d\udcc2 \u6587\u4ef6\u5939\u7ba1\u7406",c={id:"administrateur/manage-folders/index",title:"\ud83d\udcc2 \u6587\u4ef6\u5939\u7ba1\u7406",description:"\u6587\u4ef6\u5939\uff1f",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/administrateur/manage-folders/index.md",sourceDirName:"administrateur/manage-folders",slug:"/administrateur/manage-folders/",permalink:"/zh/docs/administrateur/manage-folders/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"userguideSidebar",previous:{title:"\u6dfb\u52a0\u7b80\u5355\u5e94\u7528",permalink:"/zh/docs/administrateur/manage-apps/add-simple-app"},next:{title:"\u521b\u5efa\u60a8\u7684\u6587\u4ef6\u5939",permalink:"/zh/docs/administrateur/manage-folders/create"}},l={},u=[{value:"\u6587\u4ef6\u5939\uff1f",id:"\u6587\u4ef6\u5939",level:2}];function d(e){const t={h1:"h1",h2:"h2",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"-\u6587\u4ef6\u5939\u7ba1\u7406",children:"\ud83d\udcc2 \u6587\u4ef6\u5939\u7ba1\u7406"})}),"\n",(0,r.jsx)(t.h2,{id:"\u6587\u4ef6\u5939",children:"\u6587\u4ef6\u5939\uff1f"}),"\n",(0,r.jsx)(t.p,{children:"\u5728 SmartLink \u4e2d\uff0c\u6587\u4ef6\u5939\u53ef\u4ee5\u5e2e\u52a9\u60a8\u4ee5\u6700\u4f73\u65b9\u5f0f\u7ec4\u7ec7 SmartLink \u7684\u8bbf\u95ee\u6743\u9650\u3002"}),"\n",(0,r.jsx)(t.p,{children:"\u60a8\u53ef\u4ee5\u521b\u5efa\u6587\u4ef6\u5939\u7ed3\u6784\uff0c\u5e76\u4e3a\u6bcf\u4e2a\u6587\u4ef6\u5939\u5206\u914d\u5e94\u7528\u7a0b\u5e8f\u548c\u7528\u6237\u3002"}),"\n","\n",(0,r.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},70061:(e,t,n)=>{n.d(t,{A:()=>j});n(30758);var r=n(13526),s=n(49648),i=n(48387),a=n(77860),o=n(35825),c=n(60653),l=n(90627);const u={cardContainer:"cardContainer_O6U5",cardTitle:"cardTitle_YmpR",cardDescription:"cardDescription_Lqpl"};var d=n(86070);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,s.Nr)(t),r=function(){const{selectMessage:e}=(0,a.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.$S)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},77860:(e,t,n)=>{n.d(t,{W:()=>u});var r=n(30758),s=n(36619),i=n(65640);const a=["zero","one","two","few","many","other"];function o(e){return a.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,s.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return i.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&i.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),a=n.pluralForms.indexOf(s);return r[Math.min(a,r.length-1)]}(n,t,e)}}},62907:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(30758);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);
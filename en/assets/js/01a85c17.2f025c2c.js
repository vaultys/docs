"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[8209],{71949:(e,t,s)=>{s.d(t,{A:()=>v});var a=s(30758),i=s(13526),r=s(20802),l=s(50491),n=s(40802),c=s(37961),o=s(25557),d=s(48199);function m(e){const{pathname:t}=(0,o.zy)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.ys)(e.permalink,t))}(e,t)))),[e,t])}const u={sidebar:"sidebar_UrRD",sidebarItemTitle:"sidebarItemTitle_EaEy",sidebarItemList:"sidebarItemList_uStM",sidebarItem:"sidebarItem_r8yp",sidebarItemLink:"sidebarItemLink_hSSq",sidebarItemLinkActive:"sidebarItemLinkActive_CIIX"};var b=s(86070);function g(e){let{sidebar:t}=e;const s=m(t.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.A)(u.sidebar,"thin-scrollbar"),"aria-label":(0,c.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.A)(u.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,b.jsx)("ul",{className:(0,i.A)(u.sidebarItemList,"clean-list"),children:s.map((e=>(0,b.jsx)("li",{className:u.sidebarItem,children:(0,b.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:u.sidebarItemLink,activeClassName:u.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var h=s(5506);function p(e){let{sidebar:t}=e;const s=m(t.items);return(0,b.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(n.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function j(e){return(0,b.jsx)(h.GX,{component:p,props:e})}function x(e){let{sidebar:t}=e;const s=(0,l.l)();return t?.items.length?"mobile"===s?(0,b.jsx)(j,{sidebar:t}):(0,b.jsx)(g,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...l}=e,n=t&&t.items.length>0;return(0,b.jsx)(r.A,{...l,children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(x,{sidebar:t}),(0,b.jsx)("main",{className:(0,i.A)("col",{"col--7":n,"col--9 col--offset-1":!n}),children:a}),s&&(0,b.jsx)("div",{className:"col col--2",children:s})]})})})}},36537:(e,t,s)=>{s.r(t),s.d(t,{default:()=>p});s(30758);var a=s(13526),i=s(37961);const r=()=>(0,i.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var l=s(73293),n=s(10249),c=s(71949),o=s(45088),d=s(71386);const m={tag:"tag_Ut89"};var u=s(86070);function b(e){let{letterEntry:t}=e;return(0,u.jsxs)("article",{children:[(0,u.jsx)(d.A,{as:"h2",id:t.letter,children:t.letter}),(0,u.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,u.jsx)("li",{className:m.tag,children:(0,u.jsx)(o.A,{...e})},e.permalink)))}),(0,u.jsx)("hr",{})]})}function g(e){let{tags:t}=e;const s=function(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return(0,u.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,u.jsx)(b,{letterEntry:e},e.letter)))})}var h=s(2113);function p(e){let{tags:t,sidebar:s}=e;const i=r();return(0,u.jsxs)(l.e3,{className:(0,a.A)(n.G.wrapper.blogPages,n.G.page.blogTagsListPage),children:[(0,u.jsx)(l.be,{title:i}),(0,u.jsx)(h.A,{tag:"blog_tags_list"}),(0,u.jsxs)(c.A,{sidebar:s,children:[(0,u.jsx)(d.A,{as:"h1",children:i}),(0,u.jsx)(g,{tags:t})]})]})}},45088:(e,t,s)=>{s.d(t,{A:()=>n});s(30758);var a=s(13526),i=s(40802);const r={tag:"tag_RLvK",tagRegular:"tagRegular_pw1b",tagWithCount:"tagWithCount_bMUN"};var l=s(86070);function n(e){let{permalink:t,label:s,count:n,description:c}=e;return(0,l.jsxs)(i.A,{href:t,title:c,className:(0,a.A)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}}}]);
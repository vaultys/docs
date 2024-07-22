"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[616],{11665:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>m});var i=t(86070),r=t(25710);const s={sidebar_position:5},a="Mise en place",o={id:"administrateur/integration/process",title:"Mise en place",description:"Pour mettre en place SmartLink dans votre organisation, nous proposons un canvas issue de l'exp\xe9rience avec nos clients existants",source:"@site/docs/administrateur/integration/process.md",sourceDirName:"administrateur/integration",slug:"/administrateur/integration/process",permalink:"/docs/administrateur/integration/process",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"userguideSidebar",previous:{title:"Pour les collaborateurs",permalink:"/docs/administrateur/integration/collaborators"},next:{title:"\ud83c\udfac D\xe9marrage",permalink:"/docs/administrateur/start/"}},c={},m=[];function d(n){const e={h1:"h1",mermaid:"mermaid",p:"p",...(0,r.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"mise-en-place",children:"Mise en place"}),"\n",(0,i.jsx)(e.p,{children:"Pour mettre en place SmartLink dans votre organisation, nous proposons un canvas issue de l'exp\xe9rience avec nos clients existants"}),"\n",(0,i.jsx)(e.mermaid,{value:"sequenceDiagram\n    participant Owner as Directeur\n    participant Admin as Administrateur\n    participant Users as Collaborateurs\n    participant System as SmartLink\n\n    Owner->>Admin: Nomination\n    Admin->>Users: Sensibilisation\n    Owner->>Admin: D\xe9cision de Lancement\n    Admin->>System: Cr\xe9ation du SmartLink\n    Admin->>Users: Collecte informations applications\n    Admin->>Users: Collecte informations collaborateurs\n    Admin->>System: Configuration\n    rect rgb(100, 255, 100)\n      Admin->>Users: R\xe9union de mise en place et de formation\n      Owner->>Users: Lancement\n    end\n    loop tous les jours\n      Users->>System: Utilisation du SmartLink\n    end\n    rect rgb(191, 223, 255)\n      Owner->>Users: R\xe9union post lancement\n    end"})]})}function u(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(d,{...n})}):d(n)}},25710:(n,e,t)=>{t.d(e,{R:()=>a,x:()=>o});var i=t(30758);const r={},s=i.createContext(r);function a(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);
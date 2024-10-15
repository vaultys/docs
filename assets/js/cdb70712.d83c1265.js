"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[3393],{27535:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=n(86070),s=n(25710);const r={sidebar_position:2},a="Configuration",o={id:"administrateur/integration/setup",title:"Configuration",description:"Recensement par l\u2019Admin des collaborateurs",source:"@site/docs/administrateur/integration/setup.md",sourceDirName:"administrateur/integration",slug:"/administrateur/integration/setup",permalink:"/docs/administrateur/integration/setup",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"userguideSidebar",previous:{title:"Choisir un administrateur",permalink:"/docs/administrateur/integration/select-administrator"},next:{title:"Pour les collaborateurs",permalink:"/docs/administrateur/integration/collaborators"}},l={},c=[{value:"Recensement par l\u2019Admin des collaborateurs",id:"recensement-par-ladmin-des-collaborateurs",level:2},{value:"Inventaire des applications et services web \xe0 s\xe9curiser",id:"inventaire-des-applications-et-services-web-\xe0-s\xe9curiser",level:2},{value:"Cr\xe9ation du compte administrateur",id:"cr\xe9ation-du-compte-administrateur",level:2},{value:"Information des collaborateurs",id:"information-des-collaborateurs",level:2},{value:"Liste des ressources disponibles",id:"liste-des-ressources-disponibles",level:2}];function u(e){const i={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(i.h2,{id:"recensement-par-ladmin-des-collaborateurs",children:"Recensement par l\u2019Admin des collaborateurs"}),"\n",(0,t.jsx)(i.p,{children:"L'administrateur effectue un recensement exhaustif de tous les collaborateurs. Chaque collaborateur pourra \xeatre identifier de la fa\xe7on suivante:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Nom"}),"\n",(0,t.jsx)(i.li,{children:"Pr\xe9nom"}),"\n",(0,t.jsx)(i.li,{children:"Email professionnel"}),"\n",(0,t.jsx)(i.li,{children:"T\xe9l\xe9phone professionnel (facultatif)"}),"\n",(0,t.jsxs)(i.li,{children:["Groupes (facultatif, s\xe9par\xe9s par des virgules). Les groupes sont utiles pour g\xe9rer notammne le partage d'acc\xe8s. Typiquement on peut imaginer que des groupes comme ",(0,t.jsx)(i.strong,{children:"marketing"}),", ",(0,t.jsx)(i.strong,{children:"comptabilit\xe9"}),", ",(0,t.jsx)(i.strong,{children:"vente"}),", ",(0,t.jsx)(i.strong,{children:"direction"}),", ",(0,t.jsx)(i.strong,{children:"RH"})," etc... qui vont partager les m\xeames ressources."]}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"La notion de groupe est tr\xe8s souple. Pour certaine activit\xe9s comme des entreprises de communication qui op\xe8re au nom de leur client, on peut imaginer un groupe par client pour partager les connexions LinkedIn, Facebook et autres r\xe9seaux sociaux avec une liste limit\xe9e de collaborateurs."})}),"\n",(0,t.jsx)(i.p,{children:"un example de fichier est le suivant"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"nom;prenom;email;telephone;groupes\nMartin;Pierre;p.martin@example.com;0123456789;vente\nDubois;Marie;m.dubois@example.com;9876543210;marketing,RH\nLefevre;Jean;j.lefevre@example.com;;comptabilit\xe9\nDurand;Sophie;sophie.durand@example.com;1234567890;direction\nPetit;Paul;p.petit@example.com;;vente,RH\nThomas;Anne;anne.thomas@example.com;2345678901;comptabilit\xe9\nRobert;Julie;julie.robert@example.com;3456789012;vente\nRichard;Philippe;philippe.richard@example.com;4567890123;marketing\nMoreau;Isabelle;i.moreau@example.com;;comptabilit\xe9\nSimon;Christophe;ch.simon@example.com;5678901234;RH\nLefevre;Catherine;c.lefevre@example.com;;direction\nLeroy;Guillaume;guillaume.leroy@example.com;6789012345;vente\nGarcia;Sylvie;s.garcia@example.com;;marketing\nBonnet;Nicolas;nicolas.bonnet@example.com;7890123456;RH\nAndre;Val\xe9rie;valerie.andre@example.com;8901234567;comptabilit\xe9,direction\nMercier;Marie;m.mercier@example.com;;vente\nDupuis;David;d.dupuis@example.com;9012345678;RH\nMarchand;Caroline;caroline.marchand@example.com;0123456789;comptabilit\xe9\nDumas;Laure;l.dumas@example.com;;marketing\nGirard;Patrick;patrick.girard@example.com;9876543210;direction\nRoux;Sylvain;sylvain.roux@example.com;2345678901;vente\n"})}),"\n",(0,t.jsx)(i.h2,{id:"inventaire-des-applications-et-services-web-\xe0-s\xe9curiser",children:"Inventaire des applications et services web \xe0 s\xe9curiser"}),"\n",(0,t.jsx)(i.p,{children:"Avant toute mise en \u0153uvre, l'administrateur proc\xe8de \xe0 l'identification minutieuse des applications et des services web n\xe9cessitant une s\xe9curisation via SmartLink. Cette \xe9tape strat\xe9gique garantit que seules les ressources essentielles et sensibles sont int\xe9gr\xe9es dans le syst\xe8me. Typiquement les collaborateurs utilisent des favoris enregistr\xe9s dans leur navigateur et/ou un gestionnnaire de mots de passe. Ils peuvent faire remonter \xe0 l'administrateur les applications utilis\xe9es avec les \xe9l\xe9ments suivant:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"nom de l'application"}),"\n",(0,t.jsxs)(i.li,{children:["url, par example ",(0,t.jsx)(i.code,{children:"https://application.en.ligne.com"}),")"]}),"\n",(0,t.jsx)(i.li,{children:"si ils se connectent avec un mot de passe. Si oui, est ce que le mot de passe est partag\xe9 au sein d'un groupe ou est-il utilis\xe9 \xe0 titre personnel. Nommer le groupe le cas \xe9ch\xe9ant"}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Une fois l'inventaire r\xe9alis\xe9, le fichier consolider pourra \xeatre directement int\xe9gr\xe9 \xe0 SmartLink"}),"\n",(0,t.jsx)(i.admonition,{type:"tip",children:(0,t.jsx)(i.p,{children:"Ne vous formalisez pas trop sur les d\xe9tails notamment de partage ou de groupes, il sera toujours possible d'affiner ces r\xe9glages directement dans SmartLink."})}),"\n",(0,t.jsx)(i.p,{children:"un example de fichier est le suivant"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-csv",children:"application;URL;mdp;groupe\nGoogle Workspace;https://workspace.google.com;Oui;Direction\nSalesforce;https://www.salesforce.com;Oui;Vente\nMicrosoft 365;https://www.office.com;Oui;Comptabilit\xe9,RH\nSlack;https://slack.com;Oui;Marketing,RH\nJIRA;https://www.atlassian.com/software/jira;Oui;D\xe9veloppement\nConfluence;https://www.atlassian.com/software/confluence;Oui;D\xe9veloppement\nZoom;https://zoom.us;Oui;Direction, Vente\nDropbox Business;https://www.dropbox.com/business;Oui;Marketing\nGitHub;https://github.com;Oui;D\xe9veloppement\nLinkedIn;https://www.linkedin.com;Oui;Marketing\nFacebook;https://www.facebook.com;Oui;Marketing\nTwitter;https://twitter.com;Non;\nInstagram;https://www.instagram.com;Non;\nTrello;https://trello.com;Oui;Vente\nAsana;https://asana.com;Oui;Comptabilit\xe9\nZendesk;https://www.zendesk.com;Oui;Support client\nWordPress;https://wordpress.com;Oui;Marketing\nGoogle Analytics;https://analytics.google.com;Non;\nStripe;https://stripe.com;Oui;Finance\nShopify;https://www.shopify.com;Oui;Vente\n"})}),"\n",(0,t.jsx)(i.h2,{id:"cr\xe9ation-du-compte-administrateur",children:"Cr\xe9ation du compte administrateur"}),"\n",(0,t.jsx)(i.p,{children:"Une fois les applications identifi\xe9es et les collaborateurs recens\xe9s, l'administrateur proc\xe8de \xe0 la cr\xe9ation du compte administrateur pour SmartLink. Ce compte centralis\xe9 permettra une gestion efficace des politiques de s\xe9curit\xe9 et des acc\xe8s au sein de l'entreprise."}),"\n",(0,t.jsx)(i.h2,{id:"information-des-collaborateurs",children:"Information des collaborateurs"}),"\n",(0,t.jsx)(i.p,{children:"Les collaborateurs sont inform\xe9s de mani\xe8re proactive sur l'int\xe9gration de SmartLink et des changements qui en d\xe9coulent concernant l'acc\xe8s aux applications et aux services. Une communication claire et d\xe9taill\xe9e est essentielle pour assurer une transition fluide et minimiser toute perturbation dans les op\xe9rations quotidiennes."}),"\n",(0,t.jsx)(i.p,{children:"Pour cel\xe0 nous avons"}),"\n",(0,t.jsx)(i.h2,{id:"liste-des-ressources-disponibles",children:"Liste des ressources disponibles"}),"\n",(0,t.jsx)(i.p,{children:"Enfin, une liste compl\xe8te des ressources disponibles via SmartLink est \xe9tablie et mise \xe0 la disposition des collaborateurs. Cette ressource facilite l'acc\xe8s rapide aux informations cruciales sur les applications s\xe9curis\xe9es et renforce la transparence au sein de l'entreprise."}),"\n",(0,t.jsx)(i.p,{children:"En suivant ce processus m\xe9thodique, l'entreprise peut int\xe9grer efficacement SmartLink, renfor\xe7ant ainsi la s\xe9curit\xe9 de ses donn\xe9es tout en optimisant la gestion des acc\xe8s et des utilisateurs."})]})}function p(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},25710:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var t=n(30758);const s={},r=t.createContext(s);function a(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);
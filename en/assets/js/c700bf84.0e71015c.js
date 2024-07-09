"use strict";(self.webpackChunksmartlink_doc=self.webpackChunksmartlink_doc||[]).push([[6389],{48459:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var s=n(86070),t=n(25710);const r={sidebar_position:3},a="Gestion des applications",o={id:"administrateur/manage-apps",title:"Gestion des applications",description:'Dans le contexte de notre document, le terme "Applications" fait r\xe9f\xe9rence \xe0 deux aspects principaux :',source:"@site/docs/administrateur/manage-apps.md",sourceDirName:"administrateur",slug:"/administrateur/manage-apps",permalink:"/docs/en/docs/administrateur/manage-apps",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"userguideSidebar",previous:{title:"Gestion des utilisateurs",permalink:"/docs/en/docs/administrateur/manage-users"},next:{title:"Gestion par groupes",permalink:"/docs/en/docs/administrateur/manage-groups"}},l={},u=[{value:"Inventaire de vos applications",id:"inventaire-de-vos-applications",level:2},{value:"Modification et suppression d&#39;une application",id:"modification-et-suppression-dune-application",level:2}];function d(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"gestion-des-applications",children:"Gestion des applications"}),"\n",(0,s.jsx)(i.h1,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(i.p,{children:'Dans le contexte de notre document, le terme "Applications" fait r\xe9f\xe9rence \xe0 deux aspects principaux :'}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:'Par "Applications", nous parlons des outils ou services num\xe9riques auxquels les utilisateurs acc\xe8dent habituellement via un navigateur web ou un raccourci. Ces applications peuvent \xeatre des services en ligne, des plateformes de m\xe9dias sociaux, des outils de productivit\xe9, des logiciels de gestion de projets, et plus encore. Elles sont g\xe9n\xe9ralement repr\xe9sent\xe9es par des ic\xf4nes, tout comme les applications que nous trouvons sur nos smartphones.'}),"\n",(0,s.jsx)(i.li,{children:"Par extension, le terme \"Applications\" peut \xe9galement faire r\xe9f\xe9rence \xe0 tous les liens URL qui permettent aux utilisateurs d'acc\xe9der \xe0 un r\xe9pertoire ou une base de donn\xe9es stock\xe9s sur le cloud. Ces liens URL peuvent inclure des chemins d'acc\xe8s \xe0 des fichiers ou des documents stock\xe9s en ligne, des bases de donn\xe9es distantes ou m\xeame des r\xe9pertoires entiers de ressources en ligne."}),"\n"]}),"\n",(0,s.jsx)(i.h1,{id:"importer-vos-applications",children:"Importer vos applications"}),"\n",(0,s.jsxs)(i.p,{children:["Pour commencer, lors de la premi\xe8re utilisation, l'administrateur d'une organisation doit importer une liste d'applications \xe0 partir d'un fichier CSV ou les cr\xe9er directement via le formulaire. Le fichier CSV doit respecter le format suivant : ",(0,s.jsx)(i.code,{children:"title;url;description;slug;groups;iconUrl"}),"."]}),"\n",(0,s.jsx)(i.p,{children:'Voici un exemple du contenu du fichier CSV  avec quelques lignes contenant des applications web connues r\xe9parties entre les groupes "marketing" et "developper" :'}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{children:"title;url;description;slug;groups;iconUrl\nGoogle;www.google.com;Moteur de recherche;google;marketing;url_icon_google\nFacebook;www.facebook.com;R\xe9seau social;facebook;marketing;url_icon_facebook\nTwitter;www.twitter.com;Plateforme de microblogging;twitter;marketing;url_icon_twitter\nLinkedIn;www.linkedin.com;R\xe9seau social professionnel;linkedin;marketing;url_icon_linkedin\nInstagram;www.instagram.com;Plateforme de partage de photos et vid\xe9os;instagram;marketing;url_icon_instagram\nGitHub;www.github.com;Plateforme de d\xe9veloppement;github;developper;url_icon_github\nFigma;www.figma.com;Outil de design et prototypage;figma;developper;url_icon_figma\n\n"})}),"\n",(0,s.jsxs)(i.p,{children:["Il est important de noter que seul le champ ",(0,s.jsx)(i.code,{children:"url"})," est obligatoire. SmartLink fera de son mieux pour trouver les valeurs des autres champs. Ces valeurs peuvent \xeatre corrig\xe9es apr\xe8s l'import."]}),"\n",(0,s.jsx)(i.h1,{id:"param\xe9trage",children:"Param\xe9trage"}),"\n",(0,s.jsx)(i.p,{children:"Dans la gestion des applications, chaque application peut \xeatre configur\xe9e pour g\xe9rer des mots de passe. Cette configuration peut \xeatre effectu\xe9e \xe0 diff\xe9rents niveaux :"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Au niveau de l'utilisateur : cela permet \xe0 chaque utilisateur d'avoir un contr\xf4le individuel sur ses mots de passe."}),"\n",(0,s.jsx)(i.li,{children:"Au niveau du groupe : cela permet une gestion des mots de passe au niveau d'un ensemble sp\xe9cifique d'utilisateurs."}),"\n",(0,s.jsx)(i.li,{children:"Au niveau de l'organisation : Cela permet de partager un mots de passe avec tous les utilisateurs autoris\xe9s."}),"\n"]}),"\n",(0,s.jsx)("aside",{children:(0,s.jsx)(i.p,{children:"\ud83d\udca1 Ce param\xe9trage permet notamment de partager les mots de passe en toute s\xe9curit\xe9, \xe9vitant ainsi l'utilisation de classeurs Excel ou de post-it qui peuvent \xeatre facilement perdus ou compromis."})}),"\n",(0,s.jsx)(i.h1,{id:"appstore",children:"AppStore"}),"\n",(0,s.jsx)(i.h2,{id:"inventaire-de-vos-applications",children:"Inventaire de vos applications"}),"\n",(0,s.jsx)(i.p,{children:"Vous devez au pr\xe9alable faire un inventaire de toutes les applications utilis\xe9es par vos collaborateurs ainsi que les droits d\u2019acc\xe8s qui refl\xe9t\xe9es dans SmartLink. Nous avons con\xe7u une biblioth\xe8que qui va \xe9voluer pour vous proposer un catalogue d\u2019applications pr\xe9configur\xe9e."}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:'Si elles sont disponibles dans l\'App Store du SmartLink, s\xe9lectionnez-les et cliquez sur le bouton "Ajouter".'}),"\n",(0,s.jsxs)(i.li,{children:["Si elles ne sont pas dans l'App Store du SmartLink, l'administrateur peut les ajouter lui-m\xeame, soit avec un fichier d'import ou manuellement, une par une, comme suit :","\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsxs)(i.li,{children:['Dans le menu "Applications", cliquez en haut \xe0 droite sur "Import" (voir iii.) ou sur l\'ic\xf4ne ',(0,s.jsx)(i.strong,{children:"+"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Renseignez l'URL du site web (page d'accueil de la soci\xe9t\xe9 qui propose l'application)."}),"\n"]}),"\n","!",(0,s.jsx)(i.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/eb753ceb-d1b6-492d-9fda-aa31aea51a0a/8a441d0d-3c2c-45d0-ae02-40391e67548b/Untitled.png",children:"https://prod-files-secure.s3.us-west-2.amazonaws.com/eb753ceb-d1b6-492d-9fda-aa31aea51a0a/8a441d0d-3c2c-45d0-ae02-40391e67548b/Untitled.png"})]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Indiquez uniquement l'URL. Les autres lignes et le logo de l'entreprise devraient appara\xeetre en quelques secondes. Ensuite, cliquez sur \"Cr\xe9er une application\"."}),"\n",(0,s.jsx)(i.p,{children:"Une fois l'application cr\xe9\xe9e, vous acc\xe9dez au menu suivant :"}),"\n",(0,s.jsxs)(i.p,{children:["!",(0,s.jsx)(i.a,{href:"https://prod-files-secure.s3.us-west-2.amazonaws.com/eb753ceb-d1b6-492d-9fda-aa31aea51a0a/ff5c81db-e760-40d8-a448-0ce6883a4b4d/Untitled.png",children:"https://prod-files-secure.s3.us-west-2.amazonaws.com/eb753ceb-d1b6-492d-9fda-aa31aea51a0a/ff5c81db-e760-40d8-a448-0ce6883a4b4d/Untitled.png"})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\xc0 propos"})," : Nom de l'application, ic\xf4ne et compteur indiquant le nombre de connexions, plus la possibilit\xe9 d'affecter un ou plusieurs groupes \xe0 l'application."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"\xc9diter"})," : Nom, lien URL de l'application, possibilit\xe9 d'ajouter un lien URL pour le logo si celui trouv\xe9 n'est pas de bonne qualit\xe9, etc."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Mots de passe"})," : Possibilit\xe9 de lancer le gestionnaire de mots de passe int\xe9gr\xe9 avec trois niveaux :","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Mot de passe unique pour toute l'organisation."}),"\n",(0,s.jsx)(i.li,{children:"Mot de passe unique pour un groupe entier."}),"\n",(0,s.jsx)(i.li,{children:"Mot de passe par utilisateur."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"Dans les deux premiers cas, l'administrateur renseigne l'identifiant et le mot de passe. Dans le dernier cas, chaque utilisateur doit renseigner son identifiant et son mot de passe lors de la premi\xe8re utilisation."}),"\n",(0,s.jsx)(i.h2,{id:"modification-et-suppression-dune-application",children:"Modification et suppression d'une application"}),"\n",(0,s.jsx)(i.p,{children:"Vous pouvez modifier les applications en acc\xe9dant au menu Applications :"}),"\n",(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:"Chaque champ (Nom, Description, URL, Slug) peut \xeatre modifi\xe9."}),"\n",(0,s.jsx)(i.li,{children:"En cliquant sur le bouton d\u2019\xe9dition, vous pouvez effectuer d'autres modifications."}),"\n",(0,s.jsx)(i.li,{children:"En cochant l'application, vous avez la possibilit\xe9 de la supprimer."}),"\n"]})]})}function c(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},25710:(e,i,n)=>{n.d(i,{R:()=>a,x:()=>o});var s=n(30758);const t={},r=s.createContext(t);function a(e){const i=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function o(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:i},e.children)}}}]);
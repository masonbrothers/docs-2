"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[910],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(3117),a=(n(7294),n(3905));const o={title:"Managing Server Roles",weight:60},i=void 0,l={unversionedId:"installation/server-roles",id:"installation/server-roles",title:"Managing Server Roles",description:"Starting the K3s server with --cluster-init will run all control-plane components, including the apiserver, controller-manager, scheduler, and etcd. It is possible to disable specific components in order to split the control-plane and etcd roles on to separate nodes.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/installation/server-roles.md",sourceDirName:"installation",slug:"/installation/server-roles",permalink:"/kr/installation/server-roles",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/installation/server-roles.md",tags:[],version:"current",lastUpdatedAt:1694712126,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{title:"Managing Server Roles",weight:60},sidebar:"mySidebar",previous:{title:"Air-Gap Install",permalink:"/kr/installation/airgap"},next:{title:"Managing Packaged Components",permalink:"/kr/installation/packaged-components"}},s={},d=[{value:"Dedicated <code>etcd</code> Nodes",id:"dedicated-etcd-nodes",level:2},{value:"Dedicated <code>control-plane</code> Nodes",id:"dedicated-control-plane-nodes",level:2},{value:"Adding Roles To Existing Servers",id:"adding-roles-to-existing-servers",level:2},{value:"Configuration File Syntax",id:"configuration-file-syntax",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Starting the K3s server with ",(0,a.kt)("inlineCode",{parentName:"p"},"--cluster-init")," will run all control-plane components, including the apiserver, controller-manager, scheduler, and etcd. It is possible to disable specific components in order to split the control-plane and etcd roles on to separate nodes."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This document is only relevant when using embedded etcd. When not using embedded etcd, all servers will have the control-plane role and run control-plane components.")),(0,a.kt)("h2",{id:"dedicated-etcd-nodes"},"Dedicated ",(0,a.kt)("inlineCode",{parentName:"h2"},"etcd")," Nodes"),(0,a.kt)("p",null,"To create a server with only the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," role, start K3s with all the control-plane components disabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -fL https://get.k3s.io | sh -s - server --cluster-init --disable-apiserver --disable-controller-manager --disable-scheduler\n")),(0,a.kt)("p",null,"This first node will start etcd, and wait for additional ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," and/or ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," nodes to join. The cluster will not be usable until you join an additional server with the ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," components enabled."),(0,a.kt)("h2",{id:"dedicated-control-plane-nodes"},"Dedicated ",(0,a.kt)("inlineCode",{parentName:"h2"},"control-plane")," Nodes"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"A dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," node cannot be the first server in the cluster; there must be an existing node with the ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," role before joining dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," nodes.")),(0,a.kt)("p",null,"To create a server with only the ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," role, start k3s with etcd disabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl -fL https://get.k3s.io | sh -s - server --token <token> --disable-etcd --server https://<etcd-only-node>:6443 \n")),(0,a.kt)("p",null,"After creating dedicated server nodes, the selected roles will be visible in ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl get node"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get nodes\nNAME           STATUS   ROLES                       AGE     VERSION\nk3s-server-1   Ready    etcd                        5h39m   v1.20.4+k3s1\nk3s-server-2   Ready    control-plane,master        5h39m   v1.20.4+k3s1\n")),(0,a.kt)("h2",{id:"adding-roles-to-existing-servers"},"Adding Roles To Existing Servers"),(0,a.kt)("p",null,"Roles can be added to existing dedicated nodes by restarting K3s with the disable flags removed. For example ,if you want to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"control-plane")," role to a dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," node, you can remove the ",(0,a.kt)("inlineCode",{parentName:"p"},"--disable-apiserver --disable-controller-manager --disable-scheduler")," flags from the systemd unit or config file, and restart the service."),(0,a.kt)("h2",{id:"configuration-file-syntax"},"Configuration File Syntax"),(0,a.kt)("p",null,"As with all other CLI flags, you can use the  ",(0,a.kt)("a",{parentName:"p",href:"/kr/installation/configuration#configuration-file"},"Configuration File")," to disable components, instead of passing the options as CLI flags. For example, to create a dedicated ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," node, you can place the following values in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/rancher/k3s/config.yaml"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"cluster-init: true\ndisable-apiserver: true\ndisable-controller-manager: true\ndisable-scheduler: true\n")))}p.isMDXComponent=!0}}]);
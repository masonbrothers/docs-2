"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[9176],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>s});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),s=a,u=m["".concat(p,".").concat(s)]||m[s]||k[s]||l;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8545:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(3117),a=(n(7294),n(3905));const l={title:"\uba85\ub839\uc904 \ub3c4\uad6c",weight:1},i=void 0,o={unversionedId:"cli/cli",id:"cli/cli",title:"\uba85\ub839\uc904 \ub3c4\uad6c",description:"K3s \ubc14\uc774\ub108\ub9ac\uc5d0\ub294 \ud074\ub7ec\uc2a4\ud130 \uad00\ub9ac\uc5d0 \ub3c4\uc6c0\uc774 \ub418\ub294 \uc5ec\ub7ec \uac00\uc9c0 \ucd94\uac00 \ub3c4\uad6c\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/kr/docusaurus-plugin-content-docs/current/cli/cli.md",sourceDirName:"cli",slug:"/cli/",permalink:"/kr/cli/",draft:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/cli/cli.md",tags:[],version:"current",lastUpdatedAt:1694712126,formattedLastUpdatedAt:"Sep 14, 2023",frontMatter:{title:"\uba85\ub839\uc904 \ub3c4\uad6c",weight:1},sidebar:"mySidebar",previous:{title:"\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38",permalink:"/kr/faq/"},next:{title:"server",permalink:"/kr/cli/server"}},p={},d=[],c={toc:d};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"K3s \ubc14\uc774\ub108\ub9ac\uc5d0\ub294 \ud074\ub7ec\uc2a4\ud130 \uad00\ub9ac\uc5d0 \ub3c4\uc6c0\uc774 \ub418\ub294 \uc5ec\ub7ec \uac00\uc9c0 \ucd94\uac00 \ub3c4\uad6c\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s server")),(0,a.kt)("td",{parentName:"tr",align:null},"\ub370\uc774\ud130\uc2a4\ud1a0\uc5b4\uc640 \uc5d0\uc774\uc804\ud2b8 \ucef4\ud3ec\ub10c\ud2b8 \uc678\uc5d0 \ucfe0\ubc84\ub124\ud2f0\uc2a4 ",(0,a.kt)("inlineCode",{parentName:"td"},"apiserver"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"scheduler"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"controller-manager"),", \uadf8\ub9ac\uace0 ",(0,a.kt)("inlineCode",{parentName:"td"},"cloud-controller-manager")," \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc2e4\ud589\ud558\ub294 K3s \uc11c\ubc84 \ub178\ub4dc\ub97c \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",{parentName:"td",href:"/kr/cli/server"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s server")," \uba85\ub839\uc5b4 \uc124\uba85\uc11c"),"\ub97c \ucc38\uace0\ud558\uc138\uc694.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s agent")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"containerd"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"flannel"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"kube-router")," \ub124\ud2b8\uc6cc\ud06c \uc815\ucc45 \ucee8\ud2b8\ub864\ub7ec\uc640 \ucfe0\ubc84\ub124\ud2f0\uc2a4 ",(0,a.kt)("inlineCode",{parentName:"td"},"kubelet")," \ubc0f ",(0,a.kt)("inlineCode",{parentName:"td"},"kube-proxy")," \uad6c\uc131 \uc694\uc18c\ub97c \uc2e4\ud589\ud558\ub294 K3s \uc5d0\uc774\uc804\ud2b8 \ub178\ub4dc\ub97c \uc2e4\ud589\ud55c\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",{parentName:"td",href:"/kr/cli/agent"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s agent")," \uba85\ub839\uc5b4 \uc124\uba85\uc11c"),"\ub97c \ucc38\uc870\ud558\uc138\uc694.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s kubectl")),(0,a.kt)("td",{parentName:"tr",align:null},"\uc784\ubca0\ub4dc\ub41c ",(0,a.kt)("a",{parentName:"td",href:"https://kubernetes.io/ko/docs/reference/kubectl"},(0,a.kt)("inlineCode",{parentName:"a"},"kubectl")," \uba85\ub839"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4 apiserver\uc640 \uc0c1\ud638\uc791\uc6a9\ud558\uae30 \uc704\ud55c CLI\uc785\ub2c8\ub2e4. ",(0,a.kt)("inlineCode",{parentName:"td"},"KUBECONFIG")," \ud658\uacbd \ubcc0\uc218\uac00 \uc124\uc815\ub418\uc5b4 \uc788\uc9c0 \uc54a\uc73c\uba74, \uc790\ub3d9\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"td"},"/etc/rancher/k3s/k3s.yaml"),"\uc5d0\uc11c kubeconfig\ub97c \uc0ac\uc6a9\ud558\ub824\uace0 \uc2dc\ub3c4\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s crictl")),(0,a.kt)("td",{parentName:"tr",align:null},"\uc784\ubca0\ub4dc\ub41c ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/kubernetes-sigs/cri-tools/blob/master/docs/crictl.md"},(0,a.kt)("inlineCode",{parentName:"a"},"crictl")," \uba85\ub839"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc774\uac83\uc740 \ucfe0\ubc84\ub124\ud2f0\uc2a4\uc758 \ucee8\ud14c\uc774\ub108 \ub7f0\ud0c0\uc784 \uc778\ud130\ud398\uc774\uc2a4(CRI: Container Runtime Interface)\uc640 \uc0c1\ud638 \uc791\uc6a9\ud558\uae30 \uc704\ud55c CLI\uc785\ub2c8\ub2e4. \ub514\ubc84\uae45\uc5d0 \uc720\uc6a9\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s ctr")),(0,a.kt)("td",{parentName:"tr",align:null},"\ub0b4\uc7a5\ub41c ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/projectatomic/containerd/blob/master/docs/cli.md"},(0,a.kt)("inlineCode",{parentName:"a"},"ctr")," \uba85\ub839"),"\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4. \uc774\ub294 K3s\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub294 \ucee8\ud14c\uc774\ub108 \ub370\ubaac\uc778 containerd\uc758 CLI\uc785\ub2c8\ub2e4. \ub514\ubc84\uae45\uc5d0 \uc720\uc6a9\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s token")),(0,a.kt)("td",{parentName:"tr",align:null},"\ubd80\ud2b8\uc2a4\ud2b8\ub7a9 \ud1a0\ud070\uc744 \uad00\ub9ac\ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",{parentName:"td",href:"/kr/cli/token"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s token")," \uba85\ub839\uc5b4 \uc124\uba85\uc11c"),"\ub97c \ucc38\uc870\ud558\uc138\uc694.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s etcd-snapshot")),(0,a.kt)("td",{parentName:"tr",align:null},"K3s \ud074\ub7ec\uc2a4\ud130 \ub370\uc774\ud130\uc758 \uc628\ub514\ub9e8\ub4dc \ubc31\uc5c5\uc744 \uc218\ud589\ud558\uc5ec S3\uc5d0 \uc5c5\ub85c\ub4dc\ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",{parentName:"td",href:"/kr/cli/etcd-snapshot"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s etcd-snapshot")," \uba85\ub839\uc5b4 \uc124\uba85\uc11c"),"\ub97c \ucc38\uc870\ud558\uc138\uc694.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s secrets-encrypt")),(0,a.kt)("td",{parentName:"tr",align:null},"\ud074\ub7ec\uc2a4\ud130\uc5d0 \uc2dc\ud06c\ub9bf\uc744 \uc800\uc7a5\ud560 \ub54c \uc554\ud638\ud654\ud558\ub3c4\ub85d K3s\ub97c \uad6c\uc131\ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",{parentName:"td",href:"/kr/cli/secrets-encrypt"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s secrets-encrypt")," \uba85\ub839\uc5b4 \uc124\uba85\uc11c"),"\ub97c \ucc38\uc870\ud558\uc138\uc694.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s certificate")),(0,a.kt)("td",{parentName:"tr",align:null},"K3s \uc778\uc99d\uc11c\ub97c \uad00\ub9ac\ud569\ub2c8\ub2e4. \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,a.kt)("a",{parentName:"td",href:"/kr/cli/certificate"},(0,a.kt)("inlineCode",{parentName:"a"},"k3s certificate")," \uba85\ub839\uc5b4 \uc124\uba85\uc11c"),"\ub97c \ucc38\uc870\ud558\uc138\uc694.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s completion")),(0,a.kt)("td",{parentName:"tr",align:null},"k3s\uc6a9 \uc178 \uc790\ub3d9\uc644\uc131 \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0dd\uc131\ud569\ub2c8\ub2e4.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"k3s help")),(0,a.kt)("td",{parentName:"tr",align:null},"\uba85\ub839 \ubaa9\ub85d \ub610\ub294 \ud55c \uba85\ub839\uc5b4\uc5d0 \ub300\ud55c \ub3c4\uc6c0\ub9d0\uc744 \ud45c\uc2dc\ud569\ub2c8\ub2e4.")))))}k.isMDXComponent=!0}}]);
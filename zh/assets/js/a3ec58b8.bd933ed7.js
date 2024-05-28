"use strict";(self.webpackChunkk_3_s_docs=self.webpackChunkk_3_s_docs||[]).push([[992],{7550:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var r=n(5893),t=n(1151);const l={title:"\u624b\u52a8\u5347\u7ea7"},c=void 0,d={id:"upgrades/manual",title:"\u624b\u52a8\u5347\u7ea7",description:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 K3s\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u6240\u9700\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/upgrades/manual.md",sourceDirName:"upgrades",slug:"/upgrades/manual",permalink:"/zh/upgrades/manual",draft:!1,unlisted:!1,editUrl:"https://github.com/k3s-io/docs/edit/main/docs/upgrades/manual.md",tags:[],version:"current",lastUpdatedAt:1716923727e3,frontMatter:{title:"\u624b\u52a8\u5347\u7ea7"},sidebar:"mySidebar",previous:{title:"\u505c\u6b62 K3s",permalink:"/zh/upgrades/killall"},next:{title:"\u81ea\u52a8\u5347\u7ea7",permalink:"/zh/upgrades/automated"}},i={},a=[{value:"\u7248\u672c Channels",id:"\u7248\u672c-channels",level:3},{value:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 K3s",id:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7-k3s",level:3},{value:"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7 K3s",id:"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7-k3s",level:3},{value:"\u91cd\u542f K3s",id:"\u91cd\u542f-k3s",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 K3s\uff0c\u4e5f\u53ef\u4ee5\u624b\u52a8\u5b89\u88c5\u6240\u9700\u7248\u672c\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsx)(s.p,{children:"\u5347\u7ea7\u65f6\u4f1a\u5148\u5347\u7ea7 Server \u8282\u70b9\uff0c\u7136\u540e\u518d\u5347\u7ea7 Agent \u8282\u70b9\u3002"})}),"\n",(0,r.jsx)(s.h3,{id:"\u7248\u672c-channels",children:"\u7248\u672c Channels"}),"\n",(0,r.jsxs)(s.p,{children:["\u901a\u8fc7\u5b89\u88c5\u811a\u672c\u6216\u4f7f\u7528\u6211\u4eec\u7684",(0,r.jsx)(s.a,{href:"/zh/upgrades/automated",children:"\u81ea\u52a8\u5347\u7ea7"}),"\u529f\u80fd\u6267\u884c\u7684\u5347\u7ea7\u53ef\u4ee5\u7ed1\u5b9a\u5230\u4e0d\u540c\u7684\u7248\u672c channels\u3002\u4ee5\u4e0b\u662f\u53ef\u7528\u7684 channels\uff1a"]}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Channel"}),(0,r.jsx)(s.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"stable"}),(0,r.jsx)(s.td,{children:"\uff08\u9ed8\u8ba4\uff09\u751f\u4ea7\u73af\u5883\u5efa\u8bae\u4f7f\u7528\u7a33\u5b9a\u7248\u3002\u8fd9\u4e9b\u7248\u672c\u5df2\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u7684\u793e\u533a\u5f3a\u5316\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"latest"}),(0,r.jsx)(s.td,{children:"\u5efa\u8bae\u4f7f\u7528\u6700\u65b0\u7248\u672c\u6765\u8bd5\u7528\u6700\u65b0\u529f\u80fd\u3002\u8fd9\u4e9b\u7248\u672c\u5df2\u7ecf\u8fc7\u4e00\u6bb5\u65f6\u95f4\u7684\u793e\u533a\u5f3a\u5316\u3002"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"v1.26\uff08\u793a\u4f8b\uff09"}),(0,r.jsx)(s.td,{children:"\u6bcf\u4e2a Kubernetes \u6b21\u8981\u7248\u672c\u90fd\u6709\u4e00\u4e2a release channel\uff0c\u5305\u62ec EOL \u7684\u7248\u672c\u3002\u8fd9\u4e9b channel \u4f1a\u9009\u62e9\u53ef\u7528\u7684\u6700\u65b0\u8865\u4e01\uff0c\u4e0d\u4e00\u5b9a\u662f\u7a33\u5b9a\u7248\u672c\u3002"})]})]})]}),"\n",(0,r.jsxs)(s.p,{children:["\u6709\u5173\u8be6\u7ec6\u7684\u6700\u65b0 channel \u5217\u8868\uff0c\u4f60\u53ef\u4ee5\u8bbf\u95ee ",(0,r.jsx)(s.a,{href:"https://update.k3s.io/v1-release/channels",children:"k3s channel \u670d\u52a1 API"}),"\u3002\u6709\u5173 channel \u5982\u4f55\u5de5\u4f5c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,r.jsx)(s.a,{href:"https://github.com/rancher/channelserver",children:"channelserver \u9879\u76ee"}),"\u3002"]}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsxs)(s.p,{children:["\u5c1d\u8bd5\u5347\u7ea7\u5230 K3s \u65b0\u7248\u672c\u65f6\uff0c",(0,r.jsx)(s.a,{href:"https://kubernetes.io/docs/setup/release/version-skew-policy/",children:"Kubernetes \u7248\u672c\u503e\u659c\u7b56\u7565"}),"\u9002\u7528\u3002\u786e\u4fdd\u4f60\u7684\u8ba1\u5212\u5728\u5347\u7ea7\u65f6\u4e0d\u4f1a\u8df3\u8fc7\u4e2d\u95f4\u6b21\u8981\u7248\u672c\u3002system-upgrade-controller \u672c\u8eab\u4e0d\u4f1a\u9632\u6b62\u66f4\u6539\u5230\u4e0d\u652f\u6301\u7684 Kubernetes \u7248\u672c\u3002"]})}),"\n",(0,r.jsx)(s.h3,{id:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7-k3s",children:"\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u5347\u7ea7 K3s"}),"\n",(0,r.jsx)(s.p,{children:"\u8981\u5347\u7ea7\u65e7\u7248\u672c\u7684 K3s\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u6700\u521d\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u65f6\u4f7f\u7528\u7684\u76f8\u540c\u914d\u7f6e\u9009\u9879\u91cd\u65b0\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u3002"}),"\n",(0,r.jsxs)(s.admonition,{type:"info",children:[(0,r.jsxs)(s.p,{children:["\u5b89\u88c5\u811a\u672c\u4f7f\u7528 ",(0,r.jsx)(s.code,{children:"INSTALL_K3S_EXEC"})," \u53d8\u91cf\u3001",(0,r.jsx)(s.code,{children:"K3S_"})," \u53d8\u91cf\u548c\u5c3e\u968f\u7684 shell \u53c2\u6570\u6765\u751f\u6210 systemd \u5355\u5143\u548c\u73af\u5883\u6587\u4ef6\u3002\n\u5982\u679c\u4f60\u5728\u6700\u521d\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u65f6\u8fdb\u884c\u4e86\u914d\u7f6e\uff0c\u4f46\u5728\u91cd\u65b0\u8fd0\u884c\u5b89\u88c5\u811a\u672c\u65f6\u6ca1\u6709\u91cd\u65b0\u8bbe\u7f6e\uff0c\u5219\u539f\u59cb\u503c\u5c06\u4f1a\u4e22\u5931\u3002"]}),(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/zh/installation/configuration#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6",children:"\u914d\u7f6e\u6587\u4ef6"})," \u7684\u5185\u5bb9\u4e0d\u53d7\u5b89\u88c5\u811a\u672c\u7ba1\u7406\u3002\n\u8981\u8ba9\u4f60\u7684\u914d\u7f6e\u72ec\u7acb\u4e8e\u5b89\u88c5\u811a\u672c\uff0c\u8bf7\u4f7f\u7528\u914d\u7f6e\u6587\u4ef6\u800c\u4e0d\u662f\u4f20\u9012\u73af\u5883\u53d8\u91cf\u6216\u4f7f\u7528\u5b89\u88c5\u811a\u672c\u53c2\u6570\u3002"]})]}),"\n",(0,r.jsx)(s.p,{children:"\u4f8b\u5982\uff0c\u8981\u5347\u7ea7\u5230\u5f53\u524d\u7684\u7a33\u5b9a\u7248\u672c\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"curl -sfL https://get.k3s.io | <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u60f3\u5347\u7ea7\u5230\u7279\u5b9a channel\uff08\u5982 latest\uff09\u4e2d\u7684\u66f4\u65b0\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u6307\u5b9a channel\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"curl -sfL https://get.k3s.io | INSTALL_K3S_CHANNEL=latest <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u5982\u679c\u8981\u5347\u7ea7\u5230\u7279\u5b9a\u7248\u672c\uff0c\u53ef\u4ee5\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"curl -sfL https://get.k3s.io | INSTALL_K3S_VERSION=vX.Y.Z-rc1 <EXISTING_K3S_ENV> sh -s - <EXISTING_K3S_ARGS>\n"})}),"\n",(0,r.jsx)(s.h3,{id:"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7-k3s",children:"\u4f7f\u7528\u4e8c\u8fdb\u5236\u6587\u4ef6\u624b\u52a8\u5347\u7ea7 K3s"}),"\n",(0,r.jsx)(s.p,{children:"\u6216\u8005\u624b\u52a8\u5347\u7ea7 K3s\uff1a"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\u4ece ",(0,r.jsx)(s.a,{href:"https://github.com/k3s-io/k3s/releases",children:"releases"})," \u9875\u9762\u4e0b\u8f7d\u6240\u9700\u7248\u672c\u7684 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6"]}),"\n",(0,r.jsxs)(s.li,{children:["\u5c06\u4e0b\u8f7d\u7684\u4e8c\u8fdb\u5236\u6587\u4ef6\u590d\u5236\u5230 ",(0,r.jsx)(s.code,{children:"/usr/local/bin/k3s"}),"\uff08\u6216\u4f60\u60f3\u8981\u7684\u4f4d\u7f6e\uff09"]}),"\n",(0,r.jsx)(s.li,{children:"\u505c\u6b62\u65e7\u7684 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6"}),"\n",(0,r.jsx)(s.li,{children:"\u542f\u52a8\u65b0\u7684 K3s \u4e8c\u8fdb\u5236\u6587\u4ef6"}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"\u91cd\u542f-k3s",children:"\u91cd\u542f K3s"}),"\n",(0,r.jsx)(s.p,{children:"systemd \u548c OpenRC \u7684\u5b89\u88c5\u811a\u672c\u652f\u6301\u91cd\u542f K3s\u3002"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"systemd"})}),"\n",(0,r.jsx)(s.p,{children:"\u624b\u52a8\u91cd\u542f Server\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"sudo systemctl restart k3s\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u624b\u52a8\u91cd\u542f Agent\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"sudo systemctl restart k3s-agent\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"OpenRC"})}),"\n",(0,r.jsx)(s.p,{children:"\u624b\u52a8\u91cd\u542f Server\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"sudo service k3s restart\n"})}),"\n",(0,r.jsx)(s.p,{children:"\u624b\u52a8\u91cd\u542f Agent\uff1a"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-sh",children:"sudo service k3s-agent restart\n"})})]})}function o(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>d,a:()=>c});var r=n(7294);const t={},l=r.createContext(t);function c(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);
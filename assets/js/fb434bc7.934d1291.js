(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[61531],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),b=a,m=s["".concat(u,".").concat(b)]||s[b]||p[b]||l;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},46910:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),o=["components"],i={title:"Taro.removeTabBarBadge(option)",sidebar_label:"removeTabBarBadge"},u=void 0,c={unversionedId:"apis/ui/tab-bar/removeTabBarBadge",id:"version-2.x/apis/ui/tab-bar/removeTabBarBadge",isDocsHomePage:!1,title:"Taro.removeTabBarBadge(option)",description:"\u79fb\u9664 tabBar \u67d0\u4e00\u9879\u53f3\u4e0a\u89d2\u7684\u6587\u672c",source:"@site/versioned_docs/version-2.x/apis/ui/tab-bar/removeTabBarBadge.md",sourceDirName:"apis/ui/tab-bar",slug:"/apis/ui/tab-bar/removeTabBarBadge",permalink:"/taro/docs/2.x/apis/ui/tab-bar/removeTabBarBadge",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/ui/tab-bar/removeTabBarBadge.md",version:"2.x",frontMatter:{title:"Taro.removeTabBarBadge(option)",sidebar_label:"removeTabBarBadge"},sidebar:"version-2.x/API",previous:{title:"setTabBarBadge",permalink:"/taro/docs/2.x/apis/ui/tab-bar/setTabBarBadge"},next:{title:"hideTabBarRedDot",permalink:"/taro/docs/2.x/apis/ui/tab-bar/hideTabBarRedDot"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={toc:d};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u79fb\u9664 tabBar \u67d0\u4e00\u9879\u53f3\u4e0a\u89d2\u7684\u6587\u672c"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/tab-bar/wx.removeTabBarBadge.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"index"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"tabBar \u7684\u54ea\u4e00\u9879\uff0c\u4ece\u5de6\u8fb9\u7b97\u8d77")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.removeTabBarBadge"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);
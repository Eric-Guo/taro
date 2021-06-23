(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[91407],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return k}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),k=l,m=p["".concat(u,".").concat(k)]||p[k]||s[k]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,a=new Array(i);a[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,a[1]=o;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},25020:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(22122),l=n(19756),i=(n(67294),n(3905)),a=["components"],o={title:"Taro.onWindowResize(callback)",sidebar_label:"onWindowResize"},u=void 0,c={unversionedId:"apis/ui/window/onWindowResize",id:"version-3.x/apis/ui/window/onWindowResize",isDocsHomePage:!1,title:"Taro.onWindowResize(callback)",description:"\u76d1\u542c\u7a97\u53e3\u5c3a\u5bf8\u53d8\u5316\u4e8b\u4ef6",source:"@site/versioned_docs/version-3.x/apis/ui/window/onWindowResize.md",sourceDirName:"apis/ui/window",slug:"/apis/ui/window/onWindowResize",permalink:"/taro/docs/apis/ui/window/onWindowResize",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/ui/window/onWindowResize.md",version:"3.x",frontMatter:{title:"Taro.onWindowResize(callback)",sidebar_label:"onWindowResize"},sidebar:"version-3.x/API",previous:{title:"getMenuButtonBoundingClientRect",permalink:"/taro/docs/apis/ui/menu/getMenuButtonBoundingClientRect"},next:{title:"offWindowResize",permalink:"/taro/docs/apis/ui/window/offWindowResize"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]},{value:"Size",id:"size",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],s={toc:d};function p(e){var t=e.components,n=(0,l.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u76d1\u542c\u7a97\u53e3\u5c3a\u5bf8\u53d8\u5316\u4e8b\u4ef6"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/window/wx.onWindowResize.html"},"\u53c2\u8003\u6587\u6863"))),(0,i.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("h3",{id:"callback"},"Callback"),(0,i.kt)("p",null,"\u7a97\u53e3\u5c3a\u5bf8\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"\u53c2\u6570"),(0,i.kt)("th",null,"\u7c7b\u578b"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"result"),(0,i.kt)("td",null,(0,i.kt)("code",null,"CallbackResult"))))),(0,i.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"\u53c2\u6570"),(0,i.kt)("th",null,"\u7c7b\u578b"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"size"),(0,i.kt)("td",null,(0,i.kt)("code",null,"Size"))))),(0,i.kt)("h3",{id:"size"},"Size"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"\u53c2\u6570"),(0,i.kt)("th",null,"\u7c7b\u578b"),(0,i.kt)("th",null,"\u8bf4\u660e"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"windowHeight"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",null,"\u53d8\u5316\u540e\u7684\u7a97\u53e3\u9ad8\u5ea6\uff0c\u5355\u4f4d px")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"windowWidth"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",null,"\u53d8\u5316\u540e\u7684\u7a97\u53e3\u5bbd\u5ea6\uff0c\u5355\u4f4d px")))),(0,i.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Taro.onWindowResize"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);
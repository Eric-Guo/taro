(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[27186],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22827:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return f}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l=["components"],c={title:"Taro.offLocalServiceResolveFail(callback)",sidebar_label:"offLocalServiceResolveFail"},i=void 0,s={unversionedId:"apis/network/mdns/offLocalServiceResolveFail",id:"apis/network/mdns/offLocalServiceResolveFail",isDocsHomePage:!1,title:"Taro.offLocalServiceResolveFail(callback)",description:"\u53d6\u6d88\u76d1\u542c mDNS \u670d\u52a1\u89e3\u6790\u5931\u8d25\u7684\u4e8b\u4ef6",source:"@site/docs/apis/network/mdns/offLocalServiceResolveFail.md",sourceDirName:"apis/network/mdns",slug:"/apis/network/mdns/offLocalServiceResolveFail",permalink:"/taro/docs/next/apis/network/mdns/offLocalServiceResolveFail",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/network/mdns/offLocalServiceResolveFail.md",version:"current",frontMatter:{title:"Taro.offLocalServiceResolveFail(callback)",sidebar_label:"offLocalServiceResolveFail"},sidebar:"API",previous:{title:"onLocalServiceDiscoveryStop",permalink:"/taro/docs/next/apis/network/mdns/onLocalServiceDiscoveryStop"},next:{title:"offLocalServiceLost",permalink:"/taro/docs/next/apis/network/mdns/offLocalServiceLost"}},p=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u53d6\u6d88\u76d1\u542c mDNS \u670d\u52a1\u89e3\u6790\u5931\u8d25\u7684\u4e8b\u4ef6"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/mdns/wx.offLocalServiceResolveFail.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"callback"},"Callback"),(0,o.kt)("p",null,"mDNS \u670d\u52a1\u89e3\u6790\u5931\u8d25\u7684\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(res: CallbackResult) => void\n")),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"res"),(0,o.kt)("td",null,(0,o.kt)("code",null,"CallbackResult"))))),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.offLocalServiceResolveFail"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}f.isMDXComponent=!0}}]);
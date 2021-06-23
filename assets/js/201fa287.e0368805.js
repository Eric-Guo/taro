(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[75001],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return i},kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},i=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,i=c(t,["components","mdxType","originalType","parentName"]),d=u(n),k=r,m=d["".concat(s,".").concat(k)]||d[k]||p[k]||l;return n?a.createElement(m,o(o({ref:e},i),{},{components:n})):a.createElement(m,o({ref:e},i))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},32807:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return i},default:function(){return d}});var a=n(22122),r=n(19756),l=(n(67294),n(3905)),o=["components"],c={title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},s=void 0,u={unversionedId:"apis/device/compass/onCompassChange",id:"version-2.x/apis/device/compass/onCompassChange",isDocsHomePage:!1,title:"Taro.onCompassChange(callback)",description:"\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\uff1a5 \u6b21/\u79d2\uff0c\u63a5\u53e3\u8c03\u7528\u540e\u4f1a\u81ea\u52a8\u5f00\u59cb\u76d1\u542c\uff0c\u53ef\u4f7f\u7528 Taro.stopCompass \u505c\u6b62\u76d1\u542c\u3002",source:"@site/versioned_docs/version-2.x/apis/device/compass/onCompassChange.md",sourceDirName:"apis/device/compass",slug:"/apis/device/compass/onCompassChange",permalink:"/taro/docs/2.x/apis/device/compass/onCompassChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/compass/onCompassChange.md",version:"2.x",frontMatter:{title:"Taro.onCompassChange(callback)",sidebar_label:"onCompassChange"},sidebar:"version-2.x/API",previous:{title:"startCompass",permalink:"/taro/docs/2.x/apis/device/compass/startCompass"},next:{title:"offCompassChange",permalink:"/taro/docs/2.x/apis/device/compass/offCompassChange"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"OnCompassChangeCallbackResult",id:"oncompasschangecallbackresult",children:[]},{value:"accuracy",id:"accuracy",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={toc:i};function d(t){var e=t.components,n=(0,r.Z)(t,o);return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76d1\u542c\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u3002\u9891\u7387\uff1a5 \u6b21/\u79d2\uff0c\u63a5\u53e3\u8c03\u7528\u540e\u4f1a\u81ea\u52a8\u5f00\u59cb\u76d1\u542c\uff0c\u53ef\u4f7f\u7528 Taro.stopCompass \u505c\u6b62\u76d1\u542c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/compass/wx.onCompassChange.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"\u7f57\u76d8\u6570\u636e\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnCompassChangeCallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"OnCompassChangeCallbackResult"))))),(0,l.kt)("h3",{id:"oncompasschangecallbackresult"},"OnCompassChangeCallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"accuracy"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string | number")),(0,l.kt)("td",null,"\u7cbe\u5ea6",(0,l.kt)("br",null),(0,l.kt)("br",null),"\u7531\u4e8e\u5e73\u53f0\u5dee\u5f02\uff0caccuracy \u5728 iOS/Android \u7684\u503c\u4e0d\u540c\u3002",(0,l.kt)("br",null),(0,l.kt)("br",null),"- iOS\uff1aaccuracy \u662f\u4e00\u4e2a number \u7c7b\u578b\u7684\u503c\uff0c\u8868\u793a\u76f8\u5bf9\u4e8e\u78c1\u5317\u6781\u7684\u504f\u5dee\u30020 \u8868\u793a\u8bbe\u5907\u6307\u5411\u78c1\u5317\uff0c90 \u8868\u793a\u6307\u5411\u4e1c\uff0c180 \u8868\u793a\u6307\u5411\u5357\uff0c\u4f9d\u6b64\u7c7b\u63a8\u3002",(0,l.kt)("br",null),"- Android\uff1aaccuracy \u662f\u4e00\u4e2a string \u7c7b\u578b\u7684\u679a\u4e3e\u503c\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"direction"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",null,"\u9762\u5bf9\u7684\u65b9\u5411\u5ea6\u6570")))),(0,l.kt)("h3",{id:"accuracy"},"accuracy"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"high"),(0,l.kt)("td",null,"\u9ad8\u7cbe\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"medium"),(0,l.kt)("td",null,"\u4e2d\u7b49\u7cbe\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"low"),(0,l.kt)("td",null,"\u4f4e\u7cbe\u5ea6")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"no-contact"),(0,l.kt)("td",null,"\u4e0d\u53ef\u4fe1\uff0c\u4f20\u611f\u5668\u5931\u53bb\u8fde\u63a5")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"unreliable"),(0,l.kt)("td",null,"\u4e0d\u53ef\u4fe1\uff0c\u539f\u56e0\u672a\u77e5")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"unknow ","{value}"),(0,l.kt)("td",null,"\u672a\u77e5\u7684\u7cbe\u5ea6\u679a\u4e3e\u503c\uff0c\u5373\u8be5 Android \u7cfb\u7edf\u6b64\u65f6\u8fd4\u56de\u7684\u8868\u793a\u7cbe\u5ea6\u7684 value \u4e0d\u662f\u4e00\u4e2a\u6807\u51c6\u7684\u7cbe\u5ea6\u679a\u4e3e\u503c")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.onCompassChange(function (res) {\n  console.log(res.direction)\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.onCompassChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0}}]);
(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[19324],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),s=u(n),h=a,k=s["".concat(i,".").concat(h)]||s[h]||p[h]||l;return n?r.createElement(k,o(o({ref:e},d),{},{components:n})):r.createElement(k,o({ref:e},d))}));function h(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=s;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},26302:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return s}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o=["components"],c={title:"Taro.onBluetoothAdapterStateChange(callback)",sidebar_label:"onBluetoothAdapterStateChange"},i=void 0,u={unversionedId:"apis/device/bluetooth/onBluetoothAdapterStateChange",id:"version-2.x/apis/device/bluetooth/onBluetoothAdapterStateChange",isDocsHomePage:!1,title:"Taro.onBluetoothAdapterStateChange(callback)",description:"\u76d1\u542c\u84dd\u7259\u9002\u914d\u5668\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6",source:"@site/versioned_docs/version-2.x/apis/device/bluetooth/onBluetoothAdapterStateChange.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/onBluetoothAdapterStateChange",permalink:"/taro/docs/2.x/apis/device/bluetooth/onBluetoothAdapterStateChange",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/device/bluetooth/onBluetoothAdapterStateChange.md",version:"2.x",frontMatter:{title:"Taro.onBluetoothAdapterStateChange(callback)",sidebar_label:"onBluetoothAdapterStateChange"},sidebar:"version-2.x/API",previous:{title:"onBluetoothDeviceFound",permalink:"/taro/docs/2.x/apis/device/bluetooth/onBluetoothDeviceFound"},next:{title:"getConnectedBluetoothDevices",permalink:"/taro/docs/2.x/apis/device/bluetooth/getConnectedBluetoothDevices"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={toc:d};function s(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u76d1\u542c\u84dd\u7259\u9002\u914d\u5668\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.onBluetoothAdapterStateChange.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: Callback) => void\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"callback"},"Callback"),(0,l.kt)("p",null,"\u84dd\u7259\u9002\u914d\u5668\u72b6\u6001\u53d8\u5316\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: CallbackResult) => void\n")),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"result"),(0,l.kt)("td",null,(0,l.kt)("code",null,"CallbackResult"))))),(0,l.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"available"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u84dd\u7259\u9002\u914d\u5668\u662f\u5426\u53ef\u7528")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"discovering"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",null,"\u84dd\u7259\u9002\u914d\u5668\u662f\u5426\u5904\u4e8e\u641c\u7d22\u72b6\u6001")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.onBluetoothAdapterStateChange(function (res) {\n  console.log('adapterState changed, now is', res)\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.onBluetoothAdapterStateChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);
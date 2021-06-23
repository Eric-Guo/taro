(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[76094],{3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return s},kt:function(){return k}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function a(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var c=n.createContext({}),u=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,l=t.originalType,c=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),p=u(r),k=o,v=p["".concat(c,".").concat(k)]||p[k]||d[k]||l;return r?n.createElement(v,i(i({ref:e},s),{},{components:r})):n.createElement(v,i({ref:e},s))}));function k(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=r.length,i=new Array(l);i[0]=p;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:o,i[1]=a;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},10985:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return a},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=r(22122),o=r(19756),l=(r(67294),r(3905)),i=["components"],a={title:"Taro.startBluetoothDevicesDiscovery(option)",sidebar_label:"startBluetoothDevicesDiscovery"},c=void 0,u={unversionedId:"apis/device/bluetooth/startBluetoothDevicesDiscovery",id:"version-3.x/apis/device/bluetooth/startBluetoothDevicesDiscovery",isDocsHomePage:!1,title:"Taro.startBluetoothDevicesDiscovery(option)",description:"\u5f00\u59cb\u641c\u5bfb\u9644\u8fd1\u7684\u84dd\u7259\u5916\u56f4\u8bbe\u5907\u3002\u6b64\u64cd\u4f5c\u6bd4\u8f83\u8017\u8d39\u7cfb\u7edf\u8d44\u6e90\uff0c\u8bf7\u5728\u641c\u7d22\u5e76\u8fde\u63a5\u5230\u8bbe\u5907\u540e\u8c03\u7528 Taro.stopBluetoothDevicesDiscovery \u65b9\u6cd5\u505c\u6b62\u641c\u7d22\u3002",source:"@site/versioned_docs/version-3.x/apis/device/bluetooth/startBluetoothDevicesDiscovery.md",sourceDirName:"apis/device/bluetooth",slug:"/apis/device/bluetooth/startBluetoothDevicesDiscovery",permalink:"/taro/docs/apis/device/bluetooth/startBluetoothDevicesDiscovery",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/bluetooth/startBluetoothDevicesDiscovery.md",version:"3.x",frontMatter:{title:"Taro.startBluetoothDevicesDiscovery(option)",sidebar_label:"startBluetoothDevicesDiscovery"},sidebar:"version-3.x/API",previous:{title:"stopBluetoothDevicesDiscovery",permalink:"/taro/docs/apis/device/bluetooth/stopBluetoothDevicesDiscovery"},next:{title:"openBluetoothAdapter",permalink:"/taro/docs/apis/device/bluetooth/openBluetoothAdapter"}},s=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],d={toc:s};function p(t){var e=t.components,r=(0,o.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u5f00\u59cb\u641c\u5bfb\u9644\u8fd1\u7684\u84dd\u7259\u5916\u56f4\u8bbe\u5907\u3002",(0,l.kt)("strong",{parentName:"p"},"\u6b64\u64cd\u4f5c\u6bd4\u8f83\u8017\u8d39\u7cfb\u7edf\u8d44\u6e90\uff0c\u8bf7\u5728\u641c\u7d22\u5e76\u8fde\u63a5\u5230\u8bbe\u5907\u540e\u8c03\u7528 Taro.stopBluetoothDevicesDiscovery \u65b9\u6cd5\u505c\u6b62\u641c\u7d22\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth/wx.startBluetoothDevicesDiscovery.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<Promised>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"promised"},"Promised"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"allowDuplicatesKey"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u662f\u5426\u5141\u8bb8\u91cd\u590d\u4e0a\u62a5\u540c\u4e00\u8bbe\u5907\u3002\u5982\u679c\u5141\u8bb8\u91cd\u590d\u4e0a\u62a5\uff0c\u5219 Taro.onBlueToothDeviceFound \u65b9\u6cd5\u4f1a\u591a\u6b21\u4e0a\u62a5\u540c\u4e00\u8bbe\u5907\uff0c\u4f46\u662f RSSI \u503c\u4f1a\u6709\u4e0d\u540c\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"interval"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u4e0a\u62a5\u8bbe\u5907\u7684\u95f4\u9694\u30020 \u8868\u793a\u627e\u5230\u65b0\u8bbe\u5907\u7acb\u5373\u4e0a\u62a5\uff0c\u5176\u4ed6\u6570\u503c\u6839\u636e\u4f20\u5165\u7684\u95f4\u9694\u4e0a\u62a5\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"services"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u8981\u641c\u7d22\u7684\u84dd\u7259\u8bbe\u5907\u4e3b service \u7684 uuid \u5217\u8868\u3002\u67d0\u4e9b\u84dd\u7259\u8bbe\u5907\u4f1a\u5e7f\u64ad\u81ea\u5df1\u7684\u4e3b service \u7684 uuid\u3002\u5982\u679c\u8bbe\u7f6e\u6b64\u53c2\u6570\uff0c\u5219\u53ea\u641c\u7d22\u5e7f\u64ad\u5305\u6709\u5bf9\u5e94 uuid \u7684\u4e3b\u670d\u52a1\u7684\u84dd\u7259\u8bbe\u5907\u3002\u5efa\u8bae\u4e3b\u8981\u901a\u8fc7\u8be5\u53c2\u6570\u8fc7\u6ee4\u6389\u5468\u8fb9\u4e0d\u9700\u8981\u5904\u7406\u7684\u5176\u4ed6\u84dd\u7259\u8bbe\u5907\u3002")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"// \u4ee5\u5fae\u4fe1\u786c\u4ef6\u5e73\u53f0\u7684\u84dd\u7259\u667a\u80fd\u706f\u4e3a\u4f8b\uff0c\u4e3b\u670d\u52a1\u7684 UUID \u662f FEE7\u3002\u4f20\u5165\u8fd9\u4e2a\u53c2\u6570\uff0c\u53ea\u641c\u7d22\u4e3b\u670d\u52a1 UUID \u4e3a FEE7 \u7684\u8bbe\u5907\nTaro.startBluetoothDevicesDiscovery({\n  services: ['FEE7'],\n  success: function (res) {\n    console.log(res)\n  }\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.startBluetoothDevicesDiscovery"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);
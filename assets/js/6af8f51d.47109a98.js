(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37409],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return f}});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},l=Object.keys(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(i=0;i<l.length;i++)n=l[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=i.createContext({}),u=function(t){var e=i.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=u(t.components);return i.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),p=u(n),f=r,k=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?i.createElement(k,a(a({ref:e},c),{},{components:n})):i.createElement(k,a({ref:e},c))}));function f(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,a=new Array(l);a[0]=p;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,a[1]=o;for(var u=2;u<l;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6757:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var i=n(22122),r=n(19756),l=(n(67294),n(3905)),a=["components"],o={title:"Taro.setWifiList(option)",sidebar_label:"setWifiList"},s=void 0,u={unversionedId:"apis/device/wifi/setWifiList",id:"version-3.x/apis/device/wifi/setWifiList",isDocsHomePage:!1,title:"Taro.setWifiList(option)",description:"\u8bbe\u7f6e wifiList \u4e2d AP \u7684\u76f8\u5173\u4fe1\u606f\u3002\u5728 onGetWifiList \u56de\u8c03\u540e\u8c03\u7528\uff0ciOS\u7279\u6709\u63a5\u53e3\u3002",source:"@site/versioned_docs/version-3.x/apis/device/wifi/setWifiList.md",sourceDirName:"apis/device/wifi",slug:"/apis/device/wifi/setWifiList",permalink:"/taro/docs/apis/device/wifi/setWifiList",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/wifi/setWifiList.md",version:"3.x",frontMatter:{title:"Taro.setWifiList(option)",sidebar_label:"setWifiList"},sidebar:"version-3.x/API",previous:{title:"startWifi",permalink:"/taro/docs/apis/device/wifi/startWifi"},next:{title:"onWifiConnected",permalink:"/taro/docs/apis/device/wifi/onWifiConnected"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"WifiData",id:"wifidata",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],d={toc:c};function p(t){var e=t.components,n=(0,r.Z)(t,a);return(0,l.kt)("wrapper",(0,i.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u8bbe\u7f6e ",(0,l.kt)("inlineCode",{parentName:"p"},"wifiList")," \u4e2d AP \u7684\u76f8\u5173\u4fe1\u606f\u3002\u5728 ",(0,l.kt)("inlineCode",{parentName:"p"},"onGetWifiList")," \u56de\u8c03\u540e\u8c03\u7528\uff0c",(0,l.kt)("strong",{parentName:"p"},"iOS\u7279\u6709\u63a5\u53e3"),"\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8be5\u63a5\u53e3\u53ea\u80fd\u5728 ",(0,l.kt)("inlineCode",{parentName:"li"},"onGetWifiList")," \u56de\u8c03\u4e4b\u540e\u624d\u80fd\u8c03\u7528\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u5ba2\u6237\u7aef\u4f1a\u6302\u8d77\uff0c\u7b49\u5f85\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e Wi-Fi \u4fe1\u606f\uff0c\u8bf7\u52a1\u5fc5\u5c3d\u5feb\u8c03\u7528\u8be5\u63a5\u53e3\uff0c\u82e5\u65e0\u6570\u636e\u8bf7\u4f20\u5165\u4e00\u4e2a\u7a7a\u6570\u7ec4\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u6709\u53ef\u80fd\u968f\u7740\u5468\u8fb9 Wi-Fi \u5217\u8868\u7684\u5237\u65b0\uff0c\u5355\u4e2a\u6d41\u7a0b\u5185\u6536\u5230\u591a\u6b21\u5e26\u6709\u5b58\u5728\u91cd\u590d\u7684 Wi-Fi \u5217\u8868\u7684\u56de\u8c03\u3002")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/wifi/wx.setWifiList.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<WifiError>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"wifiList"),(0,l.kt)("td",null,(0,l.kt)("code",null,"WifiData[]")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u63d0\u4f9b\u9884\u8bbe\u7684 Wi-Fi \u4fe1\u606f\u5217\u8868")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: WifiError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: WifiError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: WifiError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h3",{id:"wifidata"},"WifiData"),(0,l.kt)("p",null,"\u63d0\u4f9b\u9884\u8bbe\u7684 Wi-Fi \u4fe1\u606f\u5217\u8868"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"BSSID"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"Wi-Fi \u7684 BSSID")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"SSID"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"Wi-Fi \u7684 SSID")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"password"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"Wi-Fi \u8bbe\u5907\u5bc6\u7801")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.onGetWifiList(function (res) {\n  if (res.wifiList.length) {\n    Taro.setWifiList({\n      wifiList: [{\n        SSID: res.wifiList[0].SSID,\n        BSSID: res.wifiList[0].BSSID,\n        password: '123456'\n      }]\n    })\n  } else {\n    Taro.setWifiList({\n      wifiList: []\n    })\n  }\n})\nTaro.getWifiList()\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.setWifiList"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);
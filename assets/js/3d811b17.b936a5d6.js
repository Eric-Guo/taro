(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[70226],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return p}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),i=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=i(t.components);return r.createElement(c.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,c=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),s=i(n),p=o,g=s["".concat(c,".").concat(p)]||s[p]||k[p]||l;return n?r.createElement(g,a(a({ref:e},d),{},{components:n})):r.createElement(g,a({ref:e},d))}));function p(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,a=new Array(l);a[0]=s;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:o,a[1]=u;for(var i=2;i<l;i++)a[i]=n[i];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},31706:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return d},default:function(){return s}});var r=n(22122),o=n(19756),l=(n(67294),n(3905)),a=["components"],u={title:"Taro.setBackgroundColor(option)",sidebar_label:"setBackgroundColor"},c=void 0,i={unversionedId:"apis/ui/background/setBackgroundColor",id:"apis/ui/background/setBackgroundColor",isDocsHomePage:!1,title:"Taro.setBackgroundColor(option)",description:"\u52a8\u6001\u8bbe\u7f6e\u7a97\u53e3\u7684\u80cc\u666f\u8272",source:"@site/docs/apis/ui/background/setBackgroundColor.md",sourceDirName:"apis/ui/background",slug:"/apis/ui/background/setBackgroundColor",permalink:"/taro/docs/next/apis/ui/background/setBackgroundColor",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/ui/background/setBackgroundColor.md",version:"current",frontMatter:{title:"Taro.setBackgroundColor(option)",sidebar_label:"setBackgroundColor"},sidebar:"API",previous:{title:"setBackgroundTextStyle",permalink:"/taro/docs/next/apis/ui/background/setBackgroundTextStyle"},next:{title:"showTabBarRedDot",permalink:"/taro/docs/next/apis/ui/tab-bar/showTabBarRedDot"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],k={toc:d};function s(t){var e=t.components,n=(0,o.Z)(t,a);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u52a8\u6001\u8bbe\u7f6e\u7a97\u53e3\u7684\u80cc\u666f\u8272"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/ui/background/wx.setBackgroundColor.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"backgroundColor"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"backgroundColorBottom"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5e95\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff0c\u4ec5 iOS \u652f\u6301")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"backgroundColorTop"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u9876\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\uff0c\u5fc5\u987b\u4e3a\u5341\u516d\u8fdb\u5236\u989c\u8272\u503c\uff0c\u4ec5 iOS \u652f\u6301")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.setBackgroundColor({\n  backgroundColor: '#ffffff', // \u7a97\u53e3\u7684\u80cc\u666f\u8272\u4e3a\u767d\u8272\n})\nTaro.setBackgroundColor({\n  backgroundColorTop: '#ffffff', // \u9876\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\u4e3a\u767d\u8272\n  backgroundColorBottom: '#ffffff', // \u5e95\u90e8\u7a97\u53e3\u7684\u80cc\u666f\u8272\u4e3a\u767d\u8272\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.setBackgroundColor"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f\uff08\u4ec5Android\uff09")))))}s.isMDXComponent=!0}}]);
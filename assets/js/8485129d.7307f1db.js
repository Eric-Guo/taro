(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[12453],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return g},kt:function(){return s}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},g=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,g=u(e,["components","mdxType","originalType","parentName"]),l=d(r),s=a,m=l["".concat(c,".").concat(s)]||l[s]||p[s]||o;return r?n.createElement(m,i(i({ref:t},g),{},{components:r})):n.createElement(m,i({ref:t},g))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},43859:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return g},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],u={title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},c=void 0,d={unversionedId:"apis/media/background-audio/getBackgroundAudioManager",id:"apis/media/background-audio/getBackgroundAudioManager",isDocsHomePage:!1,title:"Taro.getBackgroundAudioManager()",description:"\u83b7\u53d6\u5168\u5c40\u552f\u4e00\u7684\u80cc\u666f\u97f3\u9891\u7ba1\u7406\u5668\u3002",source:"@site/docs/apis/media/background-audio/getBackgroundAudioManager.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/getBackgroundAudioManager",permalink:"/taro/docs/next/apis/media/background-audio/getBackgroundAudioManager",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/background-audio/getBackgroundAudioManager.md",version:"current",frontMatter:{title:"Taro.getBackgroundAudioManager()",sidebar_label:"getBackgroundAudioManager"},sidebar:"API",previous:{title:"getBackgroundAudioPlayerState",permalink:"/taro/docs/next/apis/media/background-audio/getBackgroundAudioPlayerState"},next:{title:"BackgroundAudioManager",permalink:"/taro/docs/next/apis/media/background-audio/BackgroundAudioManager"}},g=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={toc:g};function l(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u83b7\u53d6",(0,o.kt)("strong",{parentName:"p"},"\u5168\u5c40\u552f\u4e00"),"\u7684\u80cc\u666f\u97f3\u9891\u7ba1\u7406\u5668\u3002\n\u5c0f\u7a0b\u5e8f\u5207\u5165\u540e\u53f0\uff0c\u5982\u679c\u97f3\u9891\u5904\u4e8e\u64ad\u653e\u72b6\u6001\uff0c\u53ef\u4ee5\u7ee7\u7eed\u64ad\u653e\u3002\u4f46\u662f\u540e\u53f0\u72b6\u6001\u4e0d\u80fd\u901a\u8fc7\u8c03\u7528API\u64cd\u7eb5\u97f3\u9891\u7684\u64ad\u653e\u72b6\u6001\u3002"),(0,o.kt)("p",null,"\u4ece\u5fae\u4fe1\u5ba2\u6237\u7aef6.7.2\u7248\u672c\u5f00\u59cb\uff0c\u82e5\u9700\u8981\u5728\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u540e\u7ee7\u7eed\u64ad\u653e\u97f3\u9891\uff0c\u9700\u8981\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html"},"app.json")," \u4e2d\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},"requiredBackgroundModes")," \u5c5e\u6027\u3002\u5f00\u53d1\u7248\u548c\u4f53\u9a8c\u7248\u4e0a\u53ef\u4ee5\u76f4\u63a5\u751f\u6548\uff0c\u6b63\u5f0f\u7248\u8fd8\u9700\u901a\u8fc7\u5ba1\u6838\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"() => BackgroundAudioManager\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const backgroundAudioManager = Taro.getBackgroundAudioManager()\nbackgroundAudioManager.title = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.epname = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.singer = '\u8bb8\u5dcd'\nbackgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'\nbackgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46' // \u8bbe\u7f6e\u4e86 src \u4e4b\u540e\u4f1a\u81ea\u52a8\u64ad\u653e\n")),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.getBackgroundAudioManager"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}l.isMDXComponent=!0}}]);
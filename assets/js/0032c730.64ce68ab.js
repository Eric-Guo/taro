(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[4636],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),d=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=d(t.components);return r.createElement(u.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,u=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),k=d(n),s=a,m=k["".concat(u,".").concat(s)]||k[s]||p[s]||l;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},40151:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return k}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o=["components"],i={title:"Taro.playBackgroundAudio(option)",sidebar_label:"playBackgroundAudio"},u=void 0,d={unversionedId:"apis/media/background-audio/playBackgroundAudio",id:"version-2.x/apis/media/background-audio/playBackgroundAudio",isDocsHomePage:!1,title:"Taro.playBackgroundAudio(option)",description:"\u4f7f\u7528\u540e\u53f0\u64ad\u653e\u5668\u64ad\u653e\u97f3\u4e50\uff0c\u5bf9\u4e8e\u5fae\u4fe1\u5ba2\u6237\u7aef\u6765\u8bf4\uff0c\u53ea\u80fd\u540c\u65f6\u6709\u4e00\u4e2a\u540e\u53f0\u97f3\u4e50\u5728\u64ad\u653e\u3002\u5f53\u7528\u6237\u79bb\u5f00\u5c0f\u7a0b\u5e8f\u540e\uff0c\u97f3\u4e50\u5c06\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u70b9\u51fb\u201c\u663e\u793a\u5728\u804a\u5929\u9876\u90e8\u201d\u65f6\uff0c\u97f3\u4e50\u4e0d\u4f1a\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u5728\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u5360\u7528\u4e86\u97f3\u4e50\u64ad\u653e\u5668\uff0c\u539f\u6709\u5c0f\u7a0b\u5e8f\u5185\u7684\u97f3\u4e50\u5c06\u505c\u6b62\u64ad\u653e\u3002",source:"@site/versioned_docs/version-2.x/apis/media/background-audio/playBackgroundAudio.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/playBackgroundAudio",permalink:"/taro/docs/2.x/apis/media/background-audio/playBackgroundAudio",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/background-audio/playBackgroundAudio.md",version:"2.x",frontMatter:{title:"Taro.playBackgroundAudio(option)",sidebar_label:"playBackgroundAudio"},sidebar:"version-2.x/API",previous:{title:"seekBackgroundAudio",permalink:"/taro/docs/2.x/apis/media/background-audio/seekBackgroundAudio"},next:{title:"pauseBackgroundAudio",permalink:"/taro/docs/2.x/apis/media/background-audio/pauseBackgroundAudio"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={toc:c};function k(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4f7f\u7528\u540e\u53f0\u64ad\u653e\u5668\u64ad\u653e\u97f3\u4e50\uff0c\u5bf9\u4e8e\u5fae\u4fe1\u5ba2\u6237\u7aef\u6765\u8bf4\uff0c\u53ea\u80fd\u540c\u65f6\u6709\u4e00\u4e2a\u540e\u53f0\u97f3\u4e50\u5728\u64ad\u653e\u3002\u5f53\u7528\u6237\u79bb\u5f00\u5c0f\u7a0b\u5e8f\u540e\uff0c\u97f3\u4e50\u5c06\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u70b9\u51fb\u201c\u663e\u793a\u5728\u804a\u5929\u9876\u90e8\u201d\u65f6\uff0c\u97f3\u4e50\u4e0d\u4f1a\u6682\u505c\u64ad\u653e\uff1b\u5f53\u7528\u6237\u5728\u5176\u4ed6\u5c0f\u7a0b\u5e8f\u5360\u7528\u4e86\u97f3\u4e50\u64ad\u653e\u5668\uff0c\u539f\u6709\u5c0f\u7a0b\u5e8f\u5185\u7684\u97f3\u4e50\u5c06\u505c\u6b62\u64ad\u653e\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.playBackgroundAudio.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"dataUrl"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u97f3\u4e50\u94fe\u63a5\uff0c\u76ee\u524d\u652f\u6301\u7684\u683c\u5f0f\u6709 m4a, aac, mp3, wav")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"coverImgUrl"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u5c01\u9762URL")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"title"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u97f3\u4e50\u6807\u9898")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.playBackgroundAudio({\n  dataUrl: '',\n  title: '',\n  coverImgUrl: ''\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.playBackgroundAudio"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}k.isMDXComponent=!0}}]);
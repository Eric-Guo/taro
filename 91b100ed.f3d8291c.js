(window.webpackJsonp=window.webpackJsonp||[]).push([[990],{1058:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var r=n(3),l=n(7),c=(n(0),n(1792)),b=["components"],a={title:"Taro.getAvailableAudioSources(option)",sidebar_label:"getAvailableAudioSources"},i={unversionedId:"apis/media/audio/getAvailableAudioSources",id:"version-3.x/apis/media/audio/getAvailableAudioSources",isDocsHomePage:!1,title:"Taro.getAvailableAudioSources(option)",description:"\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90",source:"@site/versioned_docs/version-3.x/apis/media/audio/getAvailableAudioSources.md",slug:"/apis/media/audio/getAvailableAudioSources",permalink:"/taro/docs/apis/media/audio/getAvailableAudioSources",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/media/audio/getAvailableAudioSources.md",version:"3.x",sidebar_label:"getAvailableAudioSources",sidebar:"version-3.x/API",previous:{title:"Taro.pauseVoice(option)",permalink:"/taro/docs/apis/media/audio/pauseVoice"},next:{title:"Taro.createInnerAudioContext()",permalink:"/taro/docs/apis/media/audio/createInnerAudioContext"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"audioSources",id:"audiosources",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={rightToc:o};function d(e){var t=e.components,n=Object(l.a)(e,b);return Object(c.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u83b7\u53d6\u5f53\u524d\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.getAvailableAudioSources.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"audioSources"),Object(c.b)("td",null,Object(c.b)("code",null,'("auto" | "buildInMic" | "headsetMic" | "mic" | "camcorder" | "voice_communication" | "voice_recognition")[]')),Object(c.b)("td",null,"\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90\u5217\u8868\uff0c\u53ef\u5728 ",Object(c.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/recorder/RecorderManager.start.html"},"RecorderManager.start()")," \u63a5\u53e3\u4e2d\u4f7f\u7528\u3002\u8fd4\u56de\u503c\u5b9a\u4e49\u53c2\u8003 https://developer.android.com/reference/kotlin/android/media/MediaRecorder.AudioSource")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"audiosources"},"audioSources"),Object(c.b)("p",null,"\u652f\u6301\u7684\u97f3\u9891\u8f93\u5165\u6e90"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"auto"),Object(c.b)("td",null,"\u81ea\u52a8\u8bbe\u7f6e\uff0c\u9ed8\u8ba4\u4f7f\u7528\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u63d2\u4e0a\u8033\u9ea6\u540e\u81ea\u52a8\u5207\u6362\u4f7f\u7528\u8033\u673a\u9ea6\u514b\u98ce\uff0c\u6240\u6709\u5e73\u53f0\u9002\u7528")),Object(c.b)("tr",null,Object(c.b)("td",null,"buildInMic"),Object(c.b)("td",null,"\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u4ec5\u9650 iOS")),Object(c.b)("tr",null,Object(c.b)("td",null,"headsetMic"),Object(c.b)("td",null,"\u8033\u673a\u9ea6\u514b\u98ce\uff0c\u4ec5\u9650 iOS")),Object(c.b)("tr",null,Object(c.b)("td",null,"mic"),Object(c.b)("td",null,"\u9ea6\u514b\u98ce\uff08\u6ca1\u63d2\u8033\u9ea6\u65f6\u662f\u624b\u673a\u9ea6\u514b\u98ce\uff0c\u63d2\u8033\u9ea6\u65f6\u662f\u8033\u673a\u9ea6\u514b\u98ce\uff09\uff0c\u4ec5\u9650 Android")),Object(c.b)("tr",null,Object(c.b)("td",null,"camcorder"),Object(c.b)("td",null,"\u540c mic\uff0c\u9002\u7528\u4e8e\u5f55\u5236\u97f3\u89c6\u9891\u5185\u5bb9\uff0c\u4ec5\u9650 Android")),Object(c.b)("tr",null,Object(c.b)("td",null,"voice_communication"),Object(c.b)("td",null,"\u540c mic\uff0c\u9002\u7528\u4e8e\u5b9e\u65f6\u6c9f\u901a\uff0c\u4ec5\u9650 Android")),Object(c.b)("tr",null,Object(c.b)("td",null,"voice_recognition"),Object(c.b)("td",null,"\u540c mic\uff0c\u9002\u7528\u4e8e\u8bed\u97f3\u8bc6\u522b\uff0c\u4ec5\u9650 Android")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Taro.getAvailableAudioSources"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"}),Object(c.b)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0},1792:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var r=n(0),l=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=l.a.createContext({}),u=function(e){var t=l.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=u(e.components);return l.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},O=l.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=u(n),O=r,j=d["".concat(b,".").concat(O)]||d[O]||s[O]||c;return n?l.a.createElement(j,a(a({ref:t},o),{},{components:n})):l.a.createElement(j,a({ref:t},o))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=O;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a.mdxType="string"==typeof e?e:r,b[1]=a;for(var o=2;o<c;o++)b[o]=n[o];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);
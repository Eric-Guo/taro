(window.webpackJsonp=window.webpackJsonp||[]).push([[267],{1792:function(e,t,l){"use strict";l.d(t,"a",(function(){return O})),l.d(t,"b",(function(){return p}));var b=l(0),n=l.n(b);function c(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,b)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){c(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,b,n=function(e,t){if(null==e)return{};var l,b,n={},c=Object.keys(e);for(b=0;b<c.length;b++)l=c[b],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(b=0;b<c.length;b++)l=c[b],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var d=n.a.createContext({}),o=function(e){var t=n.a.useContext(d),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},O=function(e){var t=o(e.components);return n.a.createElement(d.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},i=n.a.forwardRef((function(e,t){var l=e.components,b=e.mdxType,c=e.originalType,a=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),O=o(l),i=b,p=O["".concat(a,".").concat(i)]||O[i]||j[i]||c;return l?n.a.createElement(p,r(r({ref:t},d),{},{components:l})):n.a.createElement(p,r({ref:t},d))}));function p(e,t){var l=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var c=l.length,a=new Array(c);a[0]=i;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:b,a[1]=r;for(var d=2;d<c;d++)a[d]=l[d];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,l)}i.displayName="MDXCreateElement"},335:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return r})),l.d(t,"metadata",(function(){return u})),l.d(t,"rightToc",(function(){return d})),l.d(t,"default",(function(){return O}));var b=l(3),n=l(7),c=(l(0),l(1792)),a=["components"],r={title:"InnerAudioContext",sidebar_label:"InnerAudioContext"},u={unversionedId:"apis/media/audio/InnerAudioContext",id:"version-2.x/apis/media/audio/InnerAudioContext",isDocsHomePage:!1,title:"InnerAudioContext",description:"InnerAudioContext \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.createInnerAudioContext \u63a5\u53e3\u83b7\u53d6\u5b9e\u4f8b\u3002",source:"@site/versioned_docs/version-2.x/apis/media/audio/InnerAudioContext.md",slug:"/apis/media/audio/InnerAudioContext",permalink:"/taro/docs/2.x/apis/media/audio/InnerAudioContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/media/audio/InnerAudioContext.md",version:"2.x",sidebar_label:"InnerAudioContext",sidebar:"version-2.x/API",previous:{title:"AudioContext",permalink:"/taro/docs/2.x/apis/media/audio/AudioContext"},next:{title:"Taro.stopBackgroundAudio(option)",permalink:"/taro/docs/2.x/apis/media/background-audio/stopBackgroundAudio"}},d=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"play",id:"play",children:[]},{value:"pause",id:"pause",children:[]},{value:"stop",id:"stop",children:[]},{value:"seek",id:"seek",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"onCanplay",id:"oncanplay",children:[]},{value:"onPlay",id:"onplay",children:[]},{value:"onPause",id:"onpause",children:[]},{value:"onStop",id:"onstop",children:[]},{value:"onEnded",id:"onended",children:[]},{value:"onTimeUpdate",id:"ontimeupdate",children:[]},{value:"onError",id:"onerror",children:[]},{value:"onWaiting",id:"onwaiting",children:[]},{value:"onSeeking",id:"onseeking",children:[]},{value:"onSeeked",id:"onseeked",children:[]},{value:"offCanplay",id:"offcanplay",children:[]},{value:"offPlay",id:"offplay",children:[]},{value:"offPause",id:"offpause",children:[]},{value:"offStop",id:"offstop",children:[]},{value:"offEnded",id:"offended",children:[]},{value:"offTimeUpdate",id:"offtimeupdate",children:[]},{value:"offError",id:"offerror",children:[]},{value:"offWaiting",id:"offwaiting",children:[]},{value:"offSeeking",id:"offseeking",children:[]},{value:"offSeeked",id:"offseeked",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"onErrorDetail",id:"onerrordetail",children:[]},{value:"onErrorDetailErrCode",id:"onerrordetailerrcode",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],o={rightToc:d};function O(e){var t=e.components,l=Object(n.a)(e,a);return Object(c.b)("wrapper",Object(b.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"InnerAudioContext \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.createInnerAudioContext \u63a5\u53e3\u83b7\u53d6\u5b9e\u4f8b\u3002"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"\u652f\u6301\u683c\u5f0f")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:null},"\u683c\u5f0f"),Object(c.b)("th",{parentName:"tr",align:null},"iOS"),Object(c.b)("th",{parentName:"tr",align:null},"Android"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"flac"),Object(c.b)("td",{parentName:"tr",align:null},"x"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"m4a"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"ogg"),Object(c.b)("td",{parentName:"tr",align:null},"x"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"ape"),Object(c.b)("td",{parentName:"tr",align:null},"x"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"amr"),Object(c.b)("td",{parentName:"tr",align:null},"x"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"wma"),Object(c.b)("td",{parentName:"tr",align:null},"x"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"wav"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"mp3"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"mp4"),Object(c.b)("td",{parentName:"tr",align:null},"x"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"aac"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"aiff"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a"),Object(c.b)("td",{parentName:"tr",align:null},"x")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:null},"caf"),Object(c.b)("td",{parentName:"tr",align:null},"\u221a"),Object(c.b)("td",{parentName:"tr",align:null},"x")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/InnerAudioContext.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",{style:{textAlign:"center"}},"\u53ea\u8bfb"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"autoplay"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u81ea\u52a8\u5f00\u59cb\u64ad\u653e")),Object(c.b)("tr",null,Object(c.b)("td",null,"buffered"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u97f3\u9891\u7f13\u51b2\u7684\u65f6\u95f4\u70b9\uff0c\u4ec5\u4fdd\u8bc1\u5f53\u524d\u64ad\u653e\u65f6\u95f4\u70b9\u5230\u6b64\u65f6\u95f4\u70b9\u5185\u5bb9\u5df2\u7f13\u51b2")),Object(c.b)("tr",null,Object(c.b)("td",null,"currentTime"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u5f53\u524d\u97f3\u9891\u7684\u64ad\u653e\u4f4d\u7f6e\uff08\u5355\u4f4d s\uff09\u3002\u53ea\u6709\u5728\u5f53\u524d\u6709\u5408\u6cd5\u7684 src \u65f6\u8fd4\u56de\uff0c\u65f6\u95f4\u4fdd\u7559\u5c0f\u6570\u70b9\u540e 6 \u4f4d")),Object(c.b)("tr",null,Object(c.b)("td",null,"duration"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u5f53\u524d\u97f3\u9891\u7684\u957f\u5ea6\uff08\u5355\u4f4d s\uff09\u3002\u53ea\u6709\u5728\u5f53\u524d\u6709\u5408\u6cd5\u7684 src \u65f6\u8fd4\u56de")),Object(c.b)("tr",null,Object(c.b)("td",null,"loop"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"false")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u5faa\u73af\u64ad\u653e")),Object(c.b)("tr",null,Object(c.b)("td",null,"obeyMuteSwitch"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"true")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u662f\u5426\u9075\u5faa\u7cfb\u7edf\u9759\u97f3\u5f00\u5173\u3002\u5f53\u6b64\u53c2\u6570\u4e3a ",Object(c.b)("code",null,"false")," \u65f6\uff0c\u5373\u4f7f\u7528\u6237\u6253\u5f00\u4e86\u9759\u97f3\u5f00\u5173\uff0c\u4e5f\u80fd\u7ee7\u7eed\u53d1\u51fa\u58f0\u97f3\u3002\u4ece 2.3.0 \u7248\u672c\u5f00\u59cb\u6b64\u53c2\u6570\u4e0d\u751f\u6548\uff0c\u4f7f\u7528 ",Object(c.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/audio/wx.setInnerAudioOption.html"},"Taro.setInnerAudioOption")," \u63a5\u53e3\u7edf\u4e00\u8bbe\u7f6e\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"paused"),Object(c.b)("td",null,Object(c.b)("code",null,"boolean")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u5f53\u524d\u662f\u662f\u5426\u6682\u505c\u6216\u505c\u6b62\u72b6\u6001")),Object(c.b)("tr",null,Object(c.b)("td",null,"src"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u97f3\u9891\u8d44\u6e90\u7684\u5730\u5740\uff0c\u7528\u4e8e\u76f4\u63a5\u64ad\u653e\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"startTime"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"0")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f00\u59cb\u64ad\u653e\u7684\u4f4d\u7f6e\uff08\u5355\u4f4d\uff1as\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"volume"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,"1")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u97f3\u91cf\u3002\u8303\u56f4 0~1\u3002")))),Object(c.b)("h3",{id:"play"},"play"),Object(c.b)("p",null,"\u64ad\u653e"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),Object(c.b)("h3",{id:"pause"},"pause"),Object(c.b)("p",null,"\u6682\u505c"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),Object(c.b)("h3",{id:"stop"},"stop"),Object(c.b)("p",null,"\u505c\u6b62"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),Object(c.b)("h3",{id:"seek"},"seek"),Object(c.b)("p",null,"\u8df3\u8f6c\u5230\u6307\u5b9a\u4f4d\u7f6e\uff0c\u5355\u4f4d s"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(position: number) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"position"),Object(c.b)("td",null,Object(c.b)("code",null,"number"))))),Object(c.b)("h3",{id:"destroy"},"destroy"),Object(c.b)("p",null,"\u9500\u6bc1\u5f53\u524d\u5b9e\u4f8b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),Object(c.b)("h3",{id:"oncanplay"},"onCanplay"),Object(c.b)("p",null,"\u97f3\u9891\u8fdb\u5165\u53ef\u4ee5\u64ad\u653e\u72b6\u6001\uff0c\u4f46\u4e0d\u4fdd\u8bc1\u540e\u9762\u53ef\u4ee5\u6d41\u7545\u64ad\u653e"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"onplay"},"onPlay"),Object(c.b)("p",null,"\u97f3\u9891\u64ad\u653e\u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"onpause"},"onPause"),Object(c.b)("p",null,"\u97f3\u9891\u6682\u505c\u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"onstop"},"onStop"),Object(c.b)("p",null,"\u97f3\u9891\u505c\u6b62\u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"onended"},"onEnded"),Object(c.b)("p",null,"\u97f3\u9891\u81ea\u7136\u64ad\u653e\u7ed3\u675f\u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"ontimeupdate"},"onTimeUpdate"),Object(c.b)("p",null,"\u97f3\u9891\u64ad\u653e\u8fdb\u5ea6\u66f4\u65b0\u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"onerror"},"onError"),Object(c.b)("p",null,"\u97f3\u9891\u64ad\u653e\u9519\u8bef\u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: (res: onErrorDetail) => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: onErrorDetail) => void"))))),Object(c.b)("h3",{id:"onwaiting"},"onWaiting"),Object(c.b)("p",null,"\u97f3\u9891\u52a0\u8f7d\u4e2d\u4e8b\u4ef6\uff0c\u5f53\u97f3\u9891\u56e0\u4e3a\u6570\u636e\u4e0d\u8db3\uff0c\u9700\u8981\u505c\u4e0b\u6765\u52a0\u8f7d\u65f6\u4f1a\u89e6\u53d1"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"onseeking"},"onSeeking"),Object(c.b)("p",null,"\u97f3\u9891\u8fdb\u884c seek \u64cd\u4f5c\u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"onseeked"},"onSeeked"),Object(c.b)("p",null,"\u97f3\u9891\u5b8c\u6210 seek \u64cd\u4f5c\u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"offcanplay"},"offCanplay"),Object(c.b)("p",null,"\u53d6\u6d88\u76d1\u542c onCanplay \u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"offplay"},"offPlay"),Object(c.b)("p",null,"\u53d6\u6d88\u76d1\u542c onPlay \u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"offpause"},"offPause"),Object(c.b)("p",null,"\u53d6\u6d88\u76d1\u542c onPause \u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"offstop"},"offStop"),Object(c.b)("p",null,"\u53d6\u6d88\u76d1\u542c onStop \u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"offended"},"offEnded"),Object(c.b)("p",null,"\u53d6\u6d88\u76d1\u542c onEnded \u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"offtimeupdate"},"offTimeUpdate"),Object(c.b)("p",null,"\u53d6\u6d88\u76d1\u542c onTimeUpdate \u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"offerror"},"offError"),Object(c.b)("p",null,"\u53d6\u6d88\u76d1\u542c onError \u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"offwaiting"},"offWaiting"),Object(c.b)("p",null,"\u53d6\u6d88\u76d1\u542c onWaiting \u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"offseeking"},"offSeeking"),Object(c.b)("p",null,"\u53d6\u6d88\u76d1\u542c onSeeking \u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h3",{id:"offseeked"},"offSeeked"),Object(c.b)("p",null,"\u53d6\u6d88\u76d1\u542c onSeeked \u4e8b\u4ef6"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"() => void"))))),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"onerrordetail"},"onErrorDetail"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"errCode"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u9519\u8bef\u7801")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u9519\u8bef\u4fe1\u606f")))),Object(c.b)("h3",{id:"onerrordetailerrcode"},"onErrorDetailErrCode"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"10001"),Object(c.b)("td",null,"\u7cfb\u7edf\u9519\u8bef")),Object(c.b)("tr",null,Object(c.b)("td",null,"10002"),Object(c.b)("td",null,"\u7f51\u7edc\u9519\u8bef")),Object(c.b)("tr",null,Object(c.b)("td",null,"10003"),Object(c.b)("td",null,"\u6587\u4ef6\u9519\u8bef")),Object(c.b)("tr",null,Object(c.b)("td",null,"10004"),Object(c.b)("td",null,"\u683c\u5f0f\u9519\u8bef")),Object(c.b)("tr",null,Object(c.b)("td",null,"-1"),Object(c.b)("td",null,"\u672a\u77e5\u9519\u8bef")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"const innerAudioContext = Taro.createInnerAudioContext()\ninnerAudioContext.autoplay = true\ninnerAudioContext.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'\ninnerAudioContext.onPlay(() => {\n  console.log('\u5f00\u59cb\u64ad\u653e')\n})\ninnerAudioContext.onError((res) => {\n  console.log(res.errMsg)\n  console.log(res.errCode)\n})\n")))}O.isMDXComponent=!0}}]);
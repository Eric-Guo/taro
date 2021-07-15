(window.webpackJsonp=window.webpackJsonp||[]).push([[1070],{1138:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return r})),b.d(t,"metadata",(function(){return O})),b.d(t,"rightToc",(function(){return j})),b.d(t,"default",(function(){return u}));var l=b(3),n=b(7),c=(b(0),b(1792)),a=["components"],r={title:"SocketTask",sidebar_label:"SocketTask"},O={unversionedId:"apis/network/webSocket/SocketTask",id:"version-3.x/apis/network/webSocket/SocketTask",isDocsHomePage:!1,title:"SocketTask",description:"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 Taro.connectSocket() \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002",source:"@site/versioned_docs/version-3.x/apis/network/webSocket/SocketTask.md",slug:"/apis/network/webSocket/SocketTask",permalink:"/taro/docs/apis/network/webSocket/SocketTask",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/network/webSocket/SocketTask.md",version:"3.x",sidebar_label:"SocketTask",sidebar:"version-3.x/API",previous:{title:"Taro.closeSocket(option)",permalink:"/taro/docs/apis/network/webSocket/closeSocket"},next:{title:"Taro.stopLocalServiceDiscovery(option)",permalink:"/taro/docs/apis/network/mdns/stopLocalServiceDiscovery"}},j=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"close",id:"close",children:[]},{value:"onClose",id:"onclose",children:[]},{value:"onError",id:"onerror",children:[]},{value:"onMessage",id:"onmessage",children:[]},{value:"onOpen",id:"onopen",children:[]},{value:"send",id:"send",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"CloseOption",id:"closeoption",children:[]},{value:"OnCloseCallback",id:"onclosecallback",children:[]},{value:"OnCloseCallbackResult",id:"onclosecallbackresult",children:[]},{value:"OnErrorCallback",id:"onerrorcallback",children:[]},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",children:[]},{value:"OnMessageCallback",id:"onmessagecallback",children:[]},{value:"OnMessageCallbackResult",id:"onmessagecallbackresult",children:[]},{value:"OnOpenCallback",id:"onopencallback",children:[]},{value:"OnOpenCallbackResult",id:"onopencallbackresult",children:[]},{value:"SendOption",id:"sendoption",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-6",children:[]}],o={rightToc:j};function u(e){var t=e.components,b=Object(n.a)(e,a);return Object(c.b)("wrapper",Object(l.a)({},o,b,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"WebSocket \u4efb\u52a1\uff0c\u53ef\u901a\u8fc7 ",Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html"},"Taro.connectSocket()")," \u63a5\u53e3\u521b\u5efa\u8fd4\u56de\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"socketTaskId"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"websocket \u5f53\u524d\u7684\u8fde\u63a5 ID\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"readyState"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"websocket \u5f53\u524d\u7684\u8fde\u63a5\u72b6\u6001\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"websocket \u63a5\u53e3\u8c03\u7528\u7ed3\u679c\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"CONNECTING"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"websocket \u72b6\u6001\u503c\uff1a\u8fde\u63a5\u4e2d\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"OPEN"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"websocket \u72b6\u6001\u503c\uff1a\u5df2\u8fde\u63a5\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"CLOSING"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"websocket \u72b6\u6001\u503c\uff1a\u5173\u95ed\u4e2d\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"CLOSED"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"websocket \u72b6\u6001\u503c\uff1a\u5df2\u5173\u95ed\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"ws"),Object(c.b)("td",null,Object(c.b)("code",null,"WebSocket")),Object(c.b)("td",null,"\u6d4f\u89c8\u5668 websocket \u5b9e\u4f8b\u3002\uff08h5 \u7aef\u72ec\u6709\uff09")))),Object(c.b)("h3",{id:"close"},"close"),Object(c.b)("p",null,"\u5173\u95ed WebSocket \u8fde\u63a5"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.close.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(option: CloseOption) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"option"),Object(c.b)("td",null,Object(c.b)("code",null,"CloseOption"))))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.close"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),Object(c.b)("h3",{id:"onclose"},"onClose"),Object(c.b)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onClose.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnCloseCallback) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"OnCloseCallback")),Object(c.b)("td",null,"WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.onClose"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),Object(c.b)("h3",{id:"onerror"},"onError"),Object(c.b)("p",null,"\u76d1\u542c WebSocket \u9519\u8bef\u4e8b\u4ef6"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onError.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnErrorCallback) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"OnErrorCallback")),Object(c.b)("td",null,"WebSocket \u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.onError"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),Object(c.b)("h3",{id:"onmessage"},"onMessage"),Object(c.b)("p",null,"\u76d1\u542c WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onMessage.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"<T = any>(callback: OnMessageCallback<T>) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"T")),Object(c.b)("td",null,"WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.onMessage"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),Object(c.b)("h3",{id:"onopen"},"onOpen"),Object(c.b)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.onOpen.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnOpenCallback) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"callback"),Object(c.b)("td",null,Object(c.b)("code",null,"OnOpenCallback")),Object(c.b)("td",null,"WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.onOpen"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),Object(c.b)("h3",{id:"send"},"send"),Object(c.b)("p",null,"\u901a\u8fc7 WebSocket \u8fde\u63a5\u53d1\u9001\u6570\u636e"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/SocketTask.send.html"},"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(option: SendOption) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"option"),Object(c.b)("td",null,Object(c.b)("code",null,"SendOption"))))),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6-5"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.send"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"closeoption"},"CloseOption"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"code"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"reason"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002\u8fd9\u4e2a\u5b57\u7b26\u4e32\u5fc5\u987b\u662f\u4e0d\u957f\u4e8e 123 \u5b57\u8282\u7684 UTF-8 \u6587\u672c\uff08\u4e0d\u662f\u5b57\u7b26\uff09\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"onclosecallback"},"OnCloseCallback"),Object(c.b)("p",null,"WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(result: OnCloseCallbackResult) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"result"),Object(c.b)("td",null,Object(c.b)("code",null,"OnCloseCallbackResult"))))),Object(c.b)("h3",{id:"onclosecallbackresult"},"OnCloseCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"code"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"reason"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")))),Object(c.b)("h3",{id:"onerrorcallback"},"OnErrorCallback"),Object(c.b)("p",null,"WebSocket \u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(result: OnErrorCallbackResult) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"result"),Object(c.b)("td",null,Object(c.b)("code",null,"OnErrorCallbackResult"))))),Object(c.b)("h3",{id:"onerrorcallbackresult"},"OnErrorCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u9519\u8bef\u4fe1\u606f")))),Object(c.b)("h3",{id:"onmessagecallback"},"OnMessageCallback"),Object(c.b)("p",null,"WebSocket \u63a5\u53d7\u5230\u670d\u52a1\u5668\u7684\u6d88\u606f\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(result: OnMessageCallbackResult<T>) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"result"),Object(c.b)("td",null,Object(c.b)("code",null,"OnMessageCallbackResult<T>"))))),Object(c.b)("h3",{id:"onmessagecallbackresult"},"OnMessageCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"data"),Object(c.b)("td",null,Object(c.b)("code",null,"T")),Object(c.b)("td",null,"\u670d\u52a1\u5668\u8fd4\u56de\u7684\u6d88\u606f")))),Object(c.b)("h3",{id:"onopencallback"},"OnOpenCallback"),Object(c.b)("p",null,"WebSocket \u8fde\u63a5\u6253\u5f00\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-tsx"},"(result: OnOpenCallbackResult) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"result"),Object(c.b)("td",null,Object(c.b)("code",null,"OnOpenCallbackResult"))))),Object(c.b)("h3",{id:"onopencallbackresult"},"OnOpenCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"header"),Object(c.b)("td",null,Object(c.b)("code",null,"Record<string, any>")),Object(c.b)("td",null,"\u8fde\u63a5\u6210\u529f\u7684 HTTP \u54cd\u5e94 Header")))),Object(c.b)("h3",{id:"sendoption"},"SendOption"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"data"),Object(c.b)("td",null,Object(c.b)("code",null,"string | ArrayBuffer")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u9700\u8981\u53d1\u9001\u7684\u5185\u5bb9")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"API"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",{parentName:"tr",align:"center"},"H5"),Object(c.b)("th",{parentName:"tr",align:"center"},"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.close"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.onClose"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.onError"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.onMessage"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.onOpen"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"SocketTask.send"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),Object(c.b)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}u.isMDXComponent=!0},1792:function(e,t,b){"use strict";b.d(t,"a",(function(){return u})),b.d(t,"b",(function(){return p}));var l=b(0),n=b.n(l);function c(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function a(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,l)}return b}function r(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?a(Object(b),!0).forEach((function(t){c(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):a(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function O(e,t){if(null==e)return{};var b,l,n=function(e,t){if(null==e)return{};var b,l,n={},c=Object.keys(e);for(l=0;l<c.length;l++)b=c[l],t.indexOf(b)>=0||(n[b]=e[b]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)b=c[l],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(n[b]=e[b])}return n}var j=n.a.createContext({}),o=function(e){var t=n.a.useContext(j),b=t;return e&&(b="function"==typeof e?e(t):r(r({},t),e)),b},u=function(e){var t=o(e.components);return n.a.createElement(j.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},i=n.a.forwardRef((function(e,t){var b=e.components,l=e.mdxType,c=e.originalType,a=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),u=o(b),i=l,p=u["".concat(a,".").concat(i)]||u[i]||d[i]||c;return b?n.a.createElement(p,r(r({ref:t},j),{},{components:b})):n.a.createElement(p,r({ref:t},j))}));function p(e,t){var b=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=b.length,a=new Array(c);a[0]=i;var r={};for(var O in t)hasOwnProperty.call(t,O)&&(r[O]=t[O]);r.originalType=e,r.mdxType="string"==typeof e?e:l,a[1]=r;for(var j=2;j<c;j++)a[j]=b[j];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,b)}i.displayName="MDXCreateElement"}}]);
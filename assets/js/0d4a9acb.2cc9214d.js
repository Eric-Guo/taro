(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[53501],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return s}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},a=Object.keys(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(l=0;l<a.length;l++)n=a[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=l.createContext({}),u=function(t){var e=l.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=u(t.components);return l.createElement(i.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},p=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,i=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),p=u(n),s=r,m=p["".concat(i,".").concat(s)]||p[s]||k[s]||a;return n?l.createElement(m,o(o({ref:e},d),{},{components:n})):l.createElement(m,o({ref:e},d))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30602:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var l=n(22122),r=n(19756),a=(n(67294),n(3905)),o=["components"],c={title:"RichText",sidebar_label:"RichText"},i=void 0,u={unversionedId:"components/base/rich-text",id:"version-2.x/components/base/rich-text",isDocsHomePage:!1,title:"RichText",description:"\u5bcc\u6587\u672c",source:"@site/versioned_docs/version-2.x/components/base/rich-text.md",sourceDirName:"components/base",slug:"/components/base/rich-text",permalink:"/taro/docs/2.x/components/base/rich-text",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/base/rich-text.md",version:"2.x",frontMatter:{title:"RichText",sidebar_label:"RichText"},sidebar:"version-2.x/components",previous:{title:"Progress",permalink:"/taro/docs/2.x/components/base/progress"},next:{title:"Button",permalink:"/taro/docs/2.x/components/forms/button"}},d=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"RichTextProps",id:"richtextprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TSpace",id:"tspace",children:[]},{value:"Text",id:"text",children:[]},{value:"HTMLElement",id:"htmlelement",children:[]}]},{value:"Nodes",id:"nodes",children:[{value:"\u7c7b\u578b",id:"\u7c7b\u578b-1",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],k={toc:d};function p(t){var e=t.components,n=(0,r.Z)(t,o);return(0,a.kt)("wrapper",(0,l.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5bcc\u6587\u672c"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/rich-text.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<RichTextProps>\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  state = {\n    nodes: [{\n      name: 'div',\n      attrs: {\n        class: 'div_class',\n        style: 'line-height: 60px; color: red;'\n      },\n      children: [{\n        type: 'text',\n        text: 'Hello World!'\n      }]\n    }]\n  }\n  render () {\n    return (\n      <RichText nodes={this.state.nodes} />\n    )\n  }\n}\n")),(0,a.kt)("h2",{id:"richtextprops"},"RichTextProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"nodes"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Nodes")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u8282\u70b9\u5217\u8868/ HTML String")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"space"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"ensp" | "emsp" | "nbsp"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u663e\u793a\u8fde\u7eed\u7a7a\u683c")))),(0,a.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"RichTextProps.space"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"tspace"},"TSpace"),(0,a.kt)("p",null,"space \u7684\u5408\u6cd5\u503c"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"ensp"),(0,a.kt)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u4e00\u534a\u5927\u5c0f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"emsp"),(0,a.kt)("td",null,"\u4e2d\u6587\u5b57\u7b26\u7a7a\u683c\u5927\u5c0f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"nbsp"),(0,a.kt)("td",null,"\u6839\u636e\u5b57\u4f53\u8bbe\u7f6e\u7684\u7a7a\u683c\u5927\u5c0f")))),(0,a.kt)("h3",{id:"text"},"Text"),(0,a.kt)("p",null,"\u6587\u672c\u8282\u70b9"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",null,"\u8bf4\u660e"),(0,a.kt)("th",null,"\u5907\u6ce8"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"text"')),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",null,"\u6587\u672c\u7c7b\u578b"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"text"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'""')),(0,a.kt)("td",null,"\u6587\u672c\u5b57\u7b26\u4e32"),(0,a.kt)("td",null,(0,a.kt)("code",null,"\u652f\u6301 entities"))))),(0,a.kt)("h3",{id:"htmlelement"},"HTMLElement"),(0,a.kt)("p",null,"\u5143\u7d20\u8282\u70b9\uff0c\u9ed8\u8ba4\u4e3a\u5143\u7d20\u8282\u70b9\n\u5168\u5c40\u652f\u6301class\u548cstyle\u5c5e\u6027\uff0c\u4e0d\u652f\u6301 id \u5c5e\u6027\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"),(0,a.kt)("th",null,"\u5907\u6ce8"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"node"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"HTML \u7c7b\u578b"),(0,a.kt)("td",null)),(0,a.kt)("tr",null,(0,a.kt)("td",null,"name"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,a.kt)("td",null,"\u6807\u7b7e\u540d"),(0,a.kt)("td",null,(0,a.kt)("code",null,"\u652f\u6301\u90e8\u5206\u53d7\u4fe1\u4efb\u7684 HTML \u8282\u70b9"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"attrs"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Object")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5c5e\u6027"),(0,a.kt)("td",null,(0,a.kt)("code",null,"\u652f\u6301\u90e8\u5206\u53d7\u4fe1\u4efb\u7684\u5c5e\u6027\uff0c\u9075\u5faa Pascal \u547d\u540d\u6cd5"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"children"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Nodes")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5b50\u8282\u70b9\u5217\u8868"),(0,a.kt)("td",null,(0,a.kt)("code",null,"\u7ed3\u6784\u548c nodes \u4e00\u81f4"))))),(0,a.kt)("h2",{id:"nodes"},"Nodes"),(0,a.kt)("p",null,"\u8282\u70b9\u7c7b\u578b"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u73b0\u652f\u6301\u4e24\u79cd\u8282\u70b9\uff0c\u901a\u8fc7type\u6765\u533a\u5206\uff0c\u5206\u522b\u662f\u5143\u7d20\u8282\u70b9\u548c\u6587\u672c\u8282\u70b9\uff0c\u9ed8\u8ba4\u662f\u5143\u7d20\u8282\u70b9\uff0c\u5728\u5bcc\u6587\u672c\u533a\u57df\u91cc\u663e\u793a\u7684HTML\u8282\u70b9 \u5143\u7d20\u8282\u70b9\uff1atype = node*")),(0,a.kt)("h3",{id:"\u7c7b\u578b-1"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(Text | HTMLElement)[] | string\n")),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"RichText"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);
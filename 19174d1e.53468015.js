(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{368:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),b=o,m=d["".concat(i,".").concat(b)]||d[b]||p[b]||r;return n?a.a.createElement(m,c(c({ref:t},l),{},{components:n})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},369:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}},370:function(e,t,n){"use strict";var o=n(0),a=Object(o.createContext)(void 0);t.a=a},371:function(e,t,n){"use strict";var o=n(0),a=n(370);t.a=function(){var e=Object(o.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},372:function(e,t,n){"use strict";var o=n(0),a=n.n(o),r=n(371),i=n(369),c=n(47),s=n.n(c),l=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,d=e.values,p=e.groupId,b=Object(r.a)(),m=b.tabGroupChoices,f=b.setTabGroupChoices,h=Object(o.useState)(c),v=h[0],O=h[1],g=Object(o.useState)(!1),y=g[0],j=g[1];if(null!=p){var w=m[p];null!=w&&w!==v&&d.some((function(e){return e.value===w}))&&O(w)}var N=function(e){O(e),null!=p&&f(p,e)},k=[],E=function(e){e.metaKey||e.altKey||e.ctrlKey||j(!0)},T=function(){j(!1)};return Object(o.useEffect)((function(){window.addEventListener("keydown",E),window.addEventListener("mousedown",T)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":t})},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(i.a)("tabs__item",s.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(k,e.target,e),E(e)},onFocus:function(){return N(t)},onClick:function(){N(t),j(!1)},onPointerDown:function(){return j(!1)}},n)}))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},o.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},373:function(e,t,n){"use strict";var o=n(0),a=n.n(o);t.a=function(e){return a.a.createElement("div",null,e.children)}},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),r=(n(0),n(368)),i=n(372),c=n(373),s={id:"root",title:"Root",sidebar_label:"Root"},l={unversionedId:"docs/root",id:"version-7.7.0/docs/root",isDocsHomePage:!1,title:"Root",description:"The root is where the application layout structure is defined. It is typically the first UI element a user interacts with. The root can be changed multiple times during the lifespan of the application. For example, if an app requires users to login, it's common to use a stack-based root and transition to either tabs- or SideMenu-based root if login is successful.",source:"@site/versioned_docs/version-7.7.0/docs/docs-root.mdx",slug:"/docs/root",permalink:"/react-native-navigation/7.7.0/docs/root",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.7.0/docs/docs-root.mdx",version:"7.7.0",sidebar_label:"Root",sidebar:"version-7.7.0/docs",previous:{title:"External Component",permalink:"/react-native-navigation/7.7.0/docs/externalComponent"},next:{title:"Modal",permalink:"/react-native-navigation/7.7.0/docs/modal"}},u=[{value:"Setting root on app launch",id:"setting-root-on-app-launch",children:[]},{value:"Conditional initial root",id:"conditional-initial-root",children:[]},{value:"Common root structures",id:"common-root-structures",children:[]}],d={rightToc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The root is where the application layout structure is defined. It is typically the first UI element a user interacts with. The root can be changed multiple times during the lifespan of the application. For example, if an app requires users to login, it's common to use a stack-based root and transition to either tabs- or SideMenu-based root if login is successful."),Object(r.b)("h2",{id:"setting-root-on-app-launch"},"Setting root on app launch"),Object(r.b)("p",null,"RNN exposes an appLaunched listener which is invoked whenever root needs to be set."),Object(r.b)("p",null,"On iOS, the app launched event is usually emitted once in the lifespan of the application - when the app is opened for the first time. On Android things become a little bit more complicated. Like on iOS, the event is emitted when an app is opened for the first time. Since the system can destroy the Activity when the app is in the background to free resources, the event is emitted when the app returns to foreground after the activity has been destroyed."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Navigation.events().registerAppLaunchedListener(() => {\n  Navigation.setRoot({\n    root: {\n\n    }\n  });\n});\n")),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"important")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"registerAppLaunchedListener() must be called as soon as the bundle is executed. Otherwise the event, which is emitted from native to JS, won't be handled at the correct moment in time."))),Object(r.b)("h2",{id:"conditional-initial-root"},"Conditional initial root"),Object(r.b)("p",null,"A common use case is to set the initial root according to a condition of some sort. For example:"),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"If a user is logged in, show the application main root; otherwise show a login screen.")),Object(r.b)("p",null,"To do this, simply set the appropriate root according to your needs."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Navigation.events().registerAppLaunchedListener(() => {\n  if (isUserLoggedIn()) {\n    setMainRoot();\n  } else {\n    setLoginRoot();\n  }\n});\n")),Object(r.b)("h2",{id:"common-root-structures"},"Common root structures"),Object(r.b)(i.a,{defaultValue:"stack",values:[{label:"Stack root",value:"stack"},{label:"BottomTabs root",value:"bottomTabs"},{label:"SideMenu root",value:"sideMenu"}],mdxType:"Tabs"},Object(r.b)(c.a,{value:"stack",mdxType:"TabItem"},"Stacks are usually used as root for small scale apps or for short-lived flows within one big app. For example, here's a login flow:",Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    stack: {\n      children: [\n        {\n          component: {\n            name: 'LOGIN_SCREEN'\n          }\n        }\n      ]\n    }\n  }\n});\n"))),Object(r.b)(c.a,{value:"bottomTabs",mdxType:"TabItem"},"Typically, stacks are used as direct children of BottomTabs and each child is an independent root. This lets users seamlessly switch between tabs as each tab has its own navigation hierarchy.",Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    bottomTabs: {\n      children: [\n        {\n          stack: {\n            children: [\n              {\n                component: {\n                  name: 'FEED_SCREEN'\n                }\n              }\n            ]\n          }\n        },\n        {\n          stack: {\n            children: [\n              {\n                component: {\n                  name: 'CHAT_LIST'\n                }\n              }\n            ]\n          }\n        },\n        {\n          stack: {\n            children: [\n              {\n                component: {\n                  name: 'PROFILE_SCREEN'\n                }\n              }\n            ]\n          }\n        }\n      ]\n    }\n  }\n});\n"))),Object(r.b)(c.a,{value:"sideMenu",mdxType:"TabItem"},"When a SideMenu layout is used as root, the center screen would typically be a stack. The center stack should be treated as a root - you can push child screens into it, or replace it alltogether by calling `setStackRoot`.",Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"Navigation.setRoot({\n  root: {\n    sideMenu: {\n      center: {\n        stack: {\n          children: [\n            {\n              component: {\n                name: 'HOME_SCREEN'\n              }\n            }\n          ]\n        }\n      },\n      left: {\n        component: {\n          name: 'MENU_SCREEN'\n        }\n      }\n    }\n  }\n});\n")))))}p.isMDXComponent=!0}}]);
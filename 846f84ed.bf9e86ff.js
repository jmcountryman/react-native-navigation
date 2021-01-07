(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{213:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(368)),c={id:"layout-stack",title:"Stack",sidebar_label:"Stack"},o={unversionedId:"api/layout-stack",id:"version-7.7.0/api/layout-stack",isDocsHomePage:!1,title:"Stack",description:"A stack is a container layout promoting a hierarchical navigation. It is used to navigate between screens at consecutive levels of hierarchy, steps in a flow or across an app.",source:"@site/versioned_docs/version-7.7.0/api/layout-stack.mdx",slug:"/api/layout-stack",permalink:"/react-native-navigation/7.7.0/api/layout-stack",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/versioned_docs/version-7.7.0/api/layout-stack.mdx",version:"7.7.0",sidebar_label:"Stack",sidebar:"version-7.7.0/api",previous:{title:"Component",permalink:"/react-native-navigation/7.7.0/api/layout-component"},next:{title:"Bottom Tabs",permalink:"/react-native-navigation/7.7.0/api/layout-bottomTabs"}},l=[{value:"<code>id</code>",id:"id",children:[]},{value:"<code>children</code>",id:"children",children:[]},{value:"<code>options</code>",id:"options",children:[]}],b={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"A stack is a container layout promoting a hierarchical navigation. It is used to navigate between screens at consecutive levels of hierarchy, steps in a flow or across an app."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"{\n  id: 'PROFILE_TAB',\n  children: [\n    {\n      component: {\n        id: 'PROFILE_SCREEN',\n        name: 'ProfileScreen'\n      }\n    }\n  ]\n}\n")),Object(i.b)("h2",{id:"id"},Object(i.b)("inlineCode",{parentName:"h2"},"id")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Unique id used to interact with the view via the Navigation api, usually ",Object(i.b)("inlineCode",{parentName:"td"},"Navigation.mergeOptions")," which accepts the componentId as it's first argument.")))),Object(i.b)("h2",{id:"children"},Object(i.b)("inlineCode",{parentName:"h2"},"children")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/7.7.0/api/layout-layout"}),"Layout[]")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"YES"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Child layouts of any kind.")))),Object(i.b)("h2",{id:"options"},Object(i.b)("inlineCode",{parentName:"h2"},"options")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/7.7.0/api/options-root"}),"Options")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options that will apply to all screens in stack")))))}p.isMDXComponent=!0},368:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(a),d=n,O=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return a?r.a.createElement(O,o(o({ref:t},b),{},{components:a})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var b=2;b<i;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);
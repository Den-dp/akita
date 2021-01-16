(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{177:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),a=n(9),o=(n(0),n(191)),c={title:"Caching Support"},i={id:"additional/cache",isDocsHomePage:!1,title:"Caching Support",description:"Akita has built-in cache support that will provide information about whether you already have data in the store. For example, in many cases we want to perform an HTTP request only once, and from that point on, to get the cached data from the store.",source:"@site/docs/additional/cache.mdx",permalink:"/akita/docs/additional/cache",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/additional/cache.mdx",sidebar:"docs",previous:{title:"Using Immer",permalink:"/akita/docs/immer"},next:{title:"Store Middleware",permalink:"/akita/docs/additional/middleware"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Akita has built-in cache support that will provide information about whether you already have data in the store. For example, in many cases we want to perform an HTTP request only once, and from that point on, to get the cached data from the store."),Object(o.b)("p",null,"Now, when we call ",Object(o.b)("inlineCode",{parentName:"p"},"EntityStore.set()"),", Akita internally marks the store as ",Object(o.b)("inlineCode",{parentName:"p"},"cached"),". We can also manually mark the store as cached by calling the ",Object(o.b)("inlineCode",{parentName:"p"},"Store.setHasCache(boolean)")," method."),Object(o.b)("p",null,"Akita exposes two query methods that you can use to query the ",Object(o.b)("inlineCode",{parentName:"p"},"cache")," value - ",Object(o.b)("inlineCode",{parentName:"p"},"selectHasCache()")," and ",Object(o.b)("inlineCode",{parentName:"p"},"getHasCache()"),"."),Object(o.b)("p",null,"In addition to that, it exposes the ",Object(o.b)("inlineCode",{parentName:"p"},"cacheable")," function.\nThis method takes a ",Object(o.b)("inlineCode",{parentName:"p"},"Store")," and an ",Object(o.b)("inlineCode",{parentName:"p"},"observable"),".\nWhen we call it, it'll subscribe to the ",Object(o.b)("inlineCode",{parentName:"p"},"observable")," only if the ",Object(o.b)("inlineCode",{parentName:"p"},"cache")," value is currently ",Object(o.b)("inlineCode",{parentName:"p"},"false"),".\nOtherwise, it'll return ",Object(o.b)("inlineCode",{parentName:"p"},"EMPTY")," observable."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="products.service.ts"',title:'"products.service.ts"'}),"import { cacheable } from '@datorama/akita';\n\nexport class ProductsService {\n  constructor(private productsStore: ProductsStore,\n              private http: Http) {}\n\n  getProducts() {\n    const request$ = this.http.get().pipe(\n      tap(products) => productsStore.set(products)\n    );\n\n    return cacheable(this.productsStore, request$);\n  }\n}\n")),Object(o.b)("p",null,"But that\u2019s not all\u200a\u2014\u200awe can also define a ",Object(o.b)("inlineCode",{parentName:"p"},"ttl")," (time to live) which when expires will automatically invalidate the cache for you. For example:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="products.store.ts"',title:'"products.store.ts"'}),"@StoreConfig({\n  name: 'products',\n  cache: {\n    ttl: 3600000\n  }\n})\nexport class ProductsStore extends EntityStore<ProductsState> {\n  constructor() {\n    super();\n  }\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts",metastring:'title="products.service.ts"',title:'"products.service.ts"'}),"import { EMPTY } from 'rxjs';\n\nexport class ProductsService {\n  constructor(private productsStore: ProductsStore,\n              private productsQuery: ProductsQuery,\n              private http: Http) {}\n\n  getProducts() {\n    return this.productsQuery.selectHasCache().pipe(\n      switchMap(hasCache => {\n         const apiCall = this.http.get(..).pipe(\n           tap(products => this.productsStore.set(products))\n         );\n\n         return hasCache ? EMPTY : apiCall;\n      })\n    )\n  }\n}\n")),Object(o.b)("p",null,"In the code above, every hour Akita invalidates the cache, which causes the ",Object(o.b)("inlineCode",{parentName:"p"},"selectHasCache()")," stream to fire, causing the products to be fetched again from the server."))}l.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,h=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(h,i({ref:t},p,{components:n})):a.a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<o;p++)c[p]=n[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),u=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=u(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(n),d=a,m=l["".concat(r,".").concat(d)]||l[d]||f[d]||o;return n?i.a.createElement(m,c(c({ref:t},p),{},{components:n})):i.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return r})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),i=(n(0),n(107));const o={title:"Effects"},r={unversionedId:"angular/effects",id:"angular/effects",isDocsHomePage:!1,title:"Effects",description:"Effects can be used to execute side effects (actions, http requests and other operations) upon action events. First, install the package:",source:"@site/docs/angular/effects.mdx",slug:"/angular/effects",permalink:"/akita/docs/angular/effects",editUrl:"https://github.com/datorama/akita/edit/master/docs/docs/angular/effects.mdx",version:"current",sidebar:"docs",previous:{title:"Ng Entity Service",permalink:"/akita/docs/angular/entity-service"},next:{title:"Angular Router Store",permalink:"/akita/docs/angular/router"}},c=[{value:"Setup Actions",id:"setup-actions",children:[]},{value:"Setup Effects",id:"setup-effects",children:[{value:"Possible use case",id:"possible-use-case",children:[]}]}],s={rightToc:c};function p({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Effects can be used to execute side effects (actions, http requests and other operations) upon action events. First, install the package:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm i @datorama/akita-ng-effects\n")),Object(i.b)("p",null,"Next, to register effects, simply run ",Object(i.b)("inlineCode",{parentName:"p"},"AkitaNgEffects.forRoot()")," and register the effect classes:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="app.module.ts"',title:'"app.module.ts"'}),"import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';\nimport { NavigationEffects } from './path/to/effects';\n\n// Only use .forRoot() once in your base module.\n@NgModule({\n  imports: [CommonModule, AkitaNgEffectsModule.forRoot([NavigationEffects])],\n})\nexport class AppModule {}\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="product.module.ts"',title:'"product.module.ts"'}),"import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';\nimport { ProductEffects } from './path/to/effects';\n\n// Use .forFeature() on any feature module\n@NgModule({\n  imports: [CommonModule, AkitaNgEffectsModule.forFeature([ProductEffects])],\n})\nexport class FeatureModule {}\n")),Object(i.b)("h2",{id:"setup-actions"},"Setup Actions"),Object(i.b)("p",null,"An action always holds a type property and an optional payload."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="navigation.actions.ts"',title:'"navigation.actions.ts"'}),"import { createAction } from '@datorama/akita-ng-effects';\n\nexport const loadMainNavigation = createAction('[Navigation] Load Main Navigation');\n\nexport const loadMainNavigationSuccess = createAction(\n  '[Navigation] Load Main Navigation Success',\n   props<{ mainNav: { id: number; path: string } }>()\n);\n")),Object(i.b)("h2",{id:"setup-effects"},"Setup Effects"),Object(i.b)("p",null,"You can use the actions to act upon any action event:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="navigation.effect.ts"',title:'"navigation.effect.ts"'}),"import { Actions } from '@datorama/akita-ng-effects';\n\n@Injectable()\nexport class NavigationEffects {\n  constructor(\n    private actions$: Actions,\n    private navigationService: NavigationService,\n  ) {}\n\n  loadMainNavigation$ = createEffect(() =>\n    this.actions$.pipe(\n      ofType(loadMainNavigation),\n      switchMap((_) =>\n         this.navigationService.loadMainNavigation().pipe(\n           map((mainNav) => loadMainNavigationSuccess({ mainNav }))\n        )\n      )\n    ), { dispatch: true }\n  );\n\n  // Or use the decorator\n  @Effect()\n  loadMainNavigationSuccess$ = this.actions$.pipe(\n    ofType(loadMainNavigationSuccess),\n    map(({ mainNav }) => this.navigationService.updateNavigationTree(mainNav)),\n    tap((mainRoutes) => this.store.updateNavigation(mainRoutes))\n  );\n}\n")),Object(i.b)("h4",{id:"the-parameter-dispatch"},"The parameter ",Object(i.b)("inlineCode",{parentName:"h4"},"dispatch")),Object(i.b)("p",null,"This parameter dictates if the effect can dispatch an action. Set ",Object(i.b)("inlineCode",{parentName:"p"},"true")," if you want the effect to dispatch an action. Set to ",Object(i.b)("inlineCode",{parentName:"p"},"false")," or omit if the effect should not dispatch any action."),Object(i.b)("h3",{id:"possible-use-case"},"Possible use case"),Object(i.b)("p",null,"This is one possible use case for an action inside a guard to initialize fetching of a navigation."),Object(i.b)("p",null,"You can also use them in components in order to fetch data."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="init-route.guard.ts"',title:'"init-route.guard.ts"'}),"@Injectable({\n  providedIn: 'root',\n})\nexport class InitRouterGuard implements CanActivate {\n  constructor(private actions: Actions, private navigationQuery: NavigationQuery) {}\n\n  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> {\n    return this.navigationQuery.isNavInitialized$.pipe(\n      tap((isInit) => {\n        if (!isInit) this.actions.dispatch(loadMainNavigation());\n      }),\n      filter((isInit) => isInit),\n      map((_) => true)\n    );\n  }\n}\n")))}p.isMDXComponent=!0}}]);
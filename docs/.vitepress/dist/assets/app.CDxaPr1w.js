import{Z as s,a6 as p,a7 as u,a8 as l,a9 as c,aa as f,ab as d,ac as m,ad as h,ae as g,af as A,ag as P,d as _,x as v,B as R,I as w,ah as y,ai as C,aj as E,ak as b}from"./chunks/framework.DI4jW7Xc.js";import{R as T}from"./chunks/theme.B3CIiGP4.js";function i(e){if(e.extends){const a=i(e.extends);return{...a,...e,async enhanceApp(t){a.enhanceApp&&await a.enhanceApp(t),e.enhanceApp&&await e.enhanceApp(t)}}}return e}const o=i(T),S=_({name:"VitePressApp",setup(){const{site:e,lang:a,dir:t}=v();return R(()=>{w(()=>{document.documentElement.lang=a.value,document.documentElement.dir=t.value})}),e.value.router.prefetchLinks&&y(),C(),E(),o.setup&&o.setup(),()=>b(o.Layout)}});async function D(){globalThis.__VITEPRESS__=!0;const e=x(),a=j();a.provide(u,e);const t=l(e.route);return a.provide(c,t),a.component("Content",f),a.component("ClientOnly",d),Object.defineProperties(a.config.globalProperties,{$frontmatter:{get(){return t.frontmatter.value}},$params:{get(){return t.page.value.params}}}),o.enhanceApp&&await o.enhanceApp({app:a,router:e,siteData:m}),{app:a,router:e,data:t}}function j(){return h(S)}function x(){let e=s,a;return g(t=>{let n=A(t),r=null;return n&&(e&&(a=n),(e||a===n)&&(n=n.replace(/\.js$/,".lean.js")),r=P(()=>import(n),[],import.meta.url)),s&&(e=!1),r},o.NotFound)}s&&D().then(({app:e,router:a,data:t})=>{a.go().then(()=>{p(a.route,t.site),e.mount("#app")})});export{D as createApp};
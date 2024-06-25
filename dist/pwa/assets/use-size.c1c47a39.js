import{a,g as b}from"./index.e49c0332.js";function D(e){return e.appContext.config.globalProperties.$router!==void 0}function E(e){return e.isUnmounted===!0||e.isDeactivated===!0}function R(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function S(e,r){return(e.aliasOf||e)===(r.aliasOf||r)}function K(e,r){for(const s in r){const t=r[s],u=e[s];if(typeof t=="string"){if(t!==u)return!1}else if(Array.isArray(u)===!1||u.length!==t.length||t.some((h,d)=>h!==u[d]))return!1}return!0}function L(e,r){return Array.isArray(r)===!0?e.length===r.length&&e.every((s,t)=>s===r[t]):e.length===1&&e[0]===r}function j(e,r){return Array.isArray(e)===!0?L(e,r):Array.isArray(r)===!0?L(r,e):e===r}function q(e,r){if(Object.keys(e).length!==Object.keys(r).length)return!1;for(const s in e)if(j(e[s],r[s])===!1)return!1;return!0}const B={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},H={...B,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function T({fallbackTag:e,useDisableForRouterLinkProps:r=!0}={}){const s=b(),{props:t,proxy:u,emit:h}=s,d=D(s),g=a(()=>t.disable!==!0&&t.href!==void 0),$=r===!0?a(()=>d===!0&&t.disable!==!0&&g.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""):a(()=>d===!0&&g.value!==!0&&t.to!==void 0&&t.to!==null&&t.to!==""),f=a(()=>$.value===!0?x(t.to):null),o=a(()=>f.value!==null),p=a(()=>g.value===!0||o.value===!0),C=a(()=>t.type==="a"||p.value===!0?"a":t.tag||e||"div"),O=a(()=>g.value===!0?{href:t.href,target:t.target}:o.value===!0?{href:f.value.href,target:t.target}:{}),k=a(()=>{if(o.value===!1)return-1;const{matched:n}=f.value,{length:i}=n,l=n[i-1];if(l===void 0)return-1;const c=u.$route.matched;if(c.length===0)return-1;const v=c.findIndex(S.bind(null,l));if(v!==-1)return v;const P=R(n[i-2]);return i>1&&R(l)===P&&c[c.length-1].path!==P?c.findIndex(S.bind(null,n[i-2])):v}),m=a(()=>o.value===!0&&k.value!==-1&&K(u.$route.params,f.value.params)),y=a(()=>m.value===!0&&k.value===u.$route.matched.length-1&&q(u.$route.params,f.value.params)),z=a(()=>o.value===!0?y.value===!0?` ${t.exactActiveClass} ${t.activeClass}`:t.exact===!0?"":m.value===!0?` ${t.activeClass}`:"":"");function x(n){try{return u.$router.resolve(n)}catch{}return null}function A(n,{returnRouterError:i,to:l=t.to,replace:c=t.replace}={}){if(t.disable===!0)return n.preventDefault(),Promise.resolve(!1);if(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey||n.button!==void 0&&n.button!==0||t.target==="_blank")return Promise.resolve(!1);n.preventDefault();const v=u.$router[c===!0?"replace":"push"](l);return i===!0?v:v.then(()=>{}).catch(()=>{})}function I(n){if(o.value===!0){const i=l=>A(n,l);h("click",n,i),n.defaultPrevented!==!0&&i()}else h("click",n)}return{hasRouterLink:o,hasHrefLink:g,hasLink:p,linkTag:C,resolvedLink:f,linkIsActive:m,linkIsExactActive:y,linkClass:z,linkAttrs:O,getLink:x,navigateToRouterLink:A,navigateOnClick:I}}const M={xs:18,sm:24,md:32,lg:38,xl:46},_={size:String};function N(e,r=M){return a(()=>e.size!==void 0?{fontSize:e.size in r?`${r[e.size]}px`:e.size}:null)}export{T as a,_ as b,N as c,B as d,M as e,H as u,E as v};

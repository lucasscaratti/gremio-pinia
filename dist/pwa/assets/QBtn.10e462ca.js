import{a as l,c as F,r as $,s as f,q as O,T as H,N as V,b as X,h as o,m as G,l as J,g as Y,U as Z}from"./index.e49c0332.js";import{Q as _,R as p}from"./Ripple.223cc529.js";import{Q as ee}from"./QSpinner.f814708a.js";import{b as te,d as ne,c as ae,a as ue}from"./use-size.c1c47a39.js";import{b as le}from"./render.7c7394e0.js";const A={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},ie=Object.keys(A),re={align:{type:String,validator:e=>ie.includes(e)}};function oe(e){return l(()=>{const r=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${A[r]}`})}const j={none:0,xs:4,sm:8,md:16,lg:24,xl:32},se={xs:8,sm:10,md:14,lg:20,xl:24},ce=["button","submit","reset"],de=/[^\s]\/[^\s]/,ve=["flat","outline","push","unelevated"];function fe(e,r){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":r}const be={...te,...ne,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...ve.reduce((e,r)=>(e[r]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...re.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},ge={...be,round:Boolean};function me(e){const r=ae(e,se),v=oe(e),{hasRouterLink:E,hasLink:x,linkTag:L,linkAttrs:w,navigateOnClick:S}=ue({fallbackTag:"button"}),P=l(()=>{const a=e.fab===!1&&e.fabMini===!1?r.value:{};return e.padding!==void 0?Object.assign({},a,{padding:e.padding.split(/\s+/).map(d=>d in j?j[d]+"px":d).join(" "),minWidth:"0",minHeight:"0"}):a}),R=l(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),h=l(()=>e.disable!==!0&&e.loading!==!0),B=l(()=>h.value===!0?e.tabindex||0:-1),n=l(()=>fe(e,"standard")),C=l(()=>{const a={tabindex:B.value};return x.value===!0?Object.assign(a,w.value):ce.includes(e.type)===!0&&(a.type=e.type),L.value==="a"?(e.disable===!0?a["aria-disabled"]="true":a.href===void 0&&(a.role="button"),E.value!==!0&&de.test(e.type)===!0&&(a.type=e.type)):e.disable===!0&&(a.disabled="",a["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(a,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),a}),c=l(()=>{let a;e.color!==void 0?e.flat===!0||e.outline===!0?a=`text-${e.textColor||e.color}`:a=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(a=`text-${e.textColor}`);const d=e.round===!0?"round":`rectangle${R.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${n.value} q-btn--${d}`+(a!==void 0?" "+a:"")+(h.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),y=l(()=>v.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:c,style:P,innerClasses:y,attributes:C,hasLink:x,linkTag:L,navigateOnClick:S,isActionable:h}}const{passiveCapture:i}=J;let b=null,g=null,m=null;var xe=F({name:"QBtn",props:{...ge,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:r,emit:v}){const{proxy:E}=Y(),{classes:x,style:L,innerClasses:w,attributes:S,hasLink:P,linkTag:R,navigateOnClick:h,isActionable:B}=me(e),n=$(null),C=$(null);let c=null,y,a=null;const d=l(()=>e.label!==void 0&&e.label!==null&&e.label!==""),Q=l(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:P.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),K=l(()=>({center:e.round})),z=l(()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}}),N=l(()=>{if(e.loading===!0)return{onMousedown:q,onTouchstart:q,onClick:q,onKeydown:q,onKeyup:q};if(B.value===!0){const t={onClick:M,onKeydown:I,onMousedown:U};if(E.$q.platform.has.touch===!0){const u=e.onTouchstart!==void 0?"":"Passive";t[`onTouchstart${u}`]=W}return t}return{onClick:f}}),D=l(()=>({ref:n,class:"q-btn q-btn-item non-selectable no-outline "+x.value,style:L.value,...S.value,...N.value}));function M(t){if(n.value!==null){if(t!==void 0){if(t.defaultPrevented===!0)return;const u=document.activeElement;if(e.type==="submit"&&u!==document.body&&n.value.contains(u)===!1&&u.contains(n.value)===!1){n.value.focus();const T=()=>{document.removeEventListener("keydown",f,!0),document.removeEventListener("keyup",T,i),n.value!==null&&n.value.removeEventListener("blur",T,i)};document.addEventListener("keydown",f,!0),document.addEventListener("keyup",T,i),n.value.addEventListener("blur",T,i)}}h(t)}}function I(t){n.value!==null&&(v("keydown",t),O(t,[13,32])===!0&&g!==n.value&&(g!==null&&k(),t.defaultPrevented!==!0&&(n.value.focus(),g=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("keyup",s,!0),n.value.addEventListener("blur",s,i)),f(t)))}function W(t){n.value!==null&&(v("touchstart",t),t.defaultPrevented!==!0&&(b!==n.value&&(b!==null&&k(),b=n.value,c=t.target,c.addEventListener("touchcancel",s,i),c.addEventListener("touchend",s,i)),y=!0,a!==null&&clearTimeout(a),a=setTimeout(()=>{a=null,y=!1},200)))}function U(t){n.value!==null&&(t.qSkipRipple=y===!0,v("mousedown",t),t.defaultPrevented!==!0&&m!==n.value&&(m!==null&&k(),m=n.value,n.value.classList.add("q-btn--active"),document.addEventListener("mouseup",s,i)))}function s(t){if(n.value!==null&&!(t!==void 0&&t.type==="blur"&&document.activeElement===n.value)){if(t!==void 0&&t.type==="keyup"){if(g===n.value&&O(t,[13,32])===!0){const u=new MouseEvent("click",t);u.qKeyEvent=!0,t.defaultPrevented===!0&&H(u),t.cancelBubble===!0&&V(u),n.value.dispatchEvent(u),f(t),t.qKeyEvent=!0}v("keyup",t)}k()}}function k(t){const u=C.value;t!==!0&&(b===n.value||m===n.value)&&u!==null&&u!==document.activeElement&&(u.setAttribute("tabindex",-1),u.focus()),b===n.value&&(c!==null&&(c.removeEventListener("touchcancel",s,i),c.removeEventListener("touchend",s,i)),b=c=null),m===n.value&&(document.removeEventListener("mouseup",s,i),m=null),g===n.value&&(document.removeEventListener("keyup",s,!0),n.value!==null&&n.value.removeEventListener("blur",s,i),g=null),n.value!==null&&n.value.classList.remove("q-btn--active")}function q(t){f(t),t.qSkipRipple=!0}return X(()=>{k(!0)}),Object.assign(E,{click:t=>{B.value===!0&&M(t)}}),()=>{let t=[];e.icon!==void 0&&t.push(o(_,{name:e.icon,left:e.stack!==!0&&d.value===!0,role:"img","aria-hidden":"true"})),d.value===!0&&t.push(o("span",{class:"block"},[e.label])),t=le(r.default,t),e.iconRight!==void 0&&e.round===!1&&t.push(o(_,{name:e.iconRight,right:e.stack!==!0&&d.value===!0,role:"img","aria-hidden":"true"}));const u=[o("span",{class:"q-focus-helper",ref:C})];return e.loading===!0&&e.percentage!==void 0&&u.push(o("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[o("span",{class:"q-btn__progress-indicator fit block",style:z.value})])),u.push(o("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+w.value},t)),e.loading!==null&&u.push(o(Z,{name:"q-transition--fade"},()=>e.loading===!0?[o("span",{key:"loading",class:"absolute-full flex flex-center"},r.loading!==void 0?r.loading():[o(ee)])]:null)),G(o(R.value,D.value,u),[[p,Q.value,void 0,K.value]])}}});export{xe as Q};

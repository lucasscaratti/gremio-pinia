import{e as s}from"./use-size.c1c47a39.js";import{a as i,c,h as r}from"./index.e49c0332.js";const o={size:{type:[String,Number],default:"1em"},color:String};function a(e){return{cSize:i(()=>e.size in s?`${s[e.size]}px`:e.size),classes:i(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var m=c({name:"QSpinner",props:{...o,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=a(e);return()=>r("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[r("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});export{m as Q};
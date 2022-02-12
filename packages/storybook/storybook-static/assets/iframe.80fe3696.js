var h=Object.defineProperty,_=Object.defineProperties;var T=Object.getOwnPropertyDescriptors;var i=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var u=(e,o,t)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,l=(e,o)=>{for(var t in o||(o={}))x.call(o,t)&&u(e,t,o[t]);if(i)for(var t of i(o))E.call(o,t)&&u(e,t,o[t]);return e},d=(e,o)=>_(e,T(o));import{j as g,a as p,b as O,c as F,d as L,e as A,l as D,f as S,g as v,h as w,i as P,k as M,m as j,n as N,o as U,p as q,q as z,r as I}from"./vendor.0799764b.js";const W=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}};W();const $={actions:{argTypesRegex:"^on[A-Z].*"},viewMode:"docs",controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var H=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:$});const f=({children:e,primary:o=!1,onClick:t,backgroundColor:n="#D1D5DB",color:r="#1F2937"})=>g("button",{type:"button",onClick:t,style:{fontWeight:700,padding:"10px 20px",border:0,cursor:"pointer",display:"inline-block",lineHeight:1,backgroundColor:o?"#2563EB":n,color:o?"#F3F4F6":r},children:e});var J={parameters:{storySource:{source:`// src/component/button/button.stories.tsx
import { Story, Meta } from "@storybook/react/types-6-0"

import { Button, ButtonProps } from "./button"

export default {
  title: "Button",
  component: Button,
  description: "A button.",
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
    primary: { control: "boolean" },
  },
} as Meta

// \u{1F447} We create a \u201Ctemplate\u201D of how args map to rendering
const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>Click me</Button>
)

// \u{1F447} Each story then reuses that template
export const Default = Template.bind({})
Default.args = {}

export const Primary = Template.bind({})
Primary.args = {
  primary: true,
}

export const CustomBackground = Template.bind({})
CustomBackground.args = {
  backgroundColor: "#A78BFA",
}

export const CustomFontColor = Template.bind({})
CustomFontColor.args = {
  color: "#1E40AF",
}

export const OnClick = Template.bind({})
OnClick.args = {
  
  onClick: () => alert("Clicked the button!"),
}
`,locationsMap:{default:{startLoc:{col:37,line:18},endLoc:{col:1,line:20},startBody:{col:37,line:18},endBody:{col:1,line:20}},primary:{startLoc:{col:37,line:18},endLoc:{col:1,line:20},startBody:{col:37,line:18},endBody:{col:1,line:20}},"custom-background":{startLoc:{col:37,line:18},endLoc:{col:1,line:20},startBody:{col:37,line:18},endBody:{col:1,line:20}},"custom-font-color":{startLoc:{col:37,line:18},endLoc:{col:1,line:20},startBody:{col:37,line:18},endBody:{col:1,line:20}},"on-click":{startLoc:{col:37,line:18},endLoc:{col:1,line:20},startBody:{col:37,line:18},endBody:{col:1,line:20}}}}},title:"Button",component:f,description:"A button.",argTypes:{backgroundColor:{control:"color"},color:{control:"color"},primary:{control:"boolean"}}};const a=e=>g(f,d(l({},e),{children:"Click me"})),m=a.bind({});m.args={};const y=a.bind({});y.args={primary:!0};const b=a.bind({});b.args={backgroundColor:"#A78BFA"};const k=a.bind({});k.args={color:"#1E40AF"};const B=a.bind({});B.args={onClick:()=>alert("Clicked the button!")};const K=["Default","Primary","CustomBackground","CustomFontColor","OnClick"];var R=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J,Default:m,Primary:y,CustomBackground:b,CustomFontColor:k,OnClick:B,__namedExportsOrder:K});const Z=[v,w,P,M,j,N,U,q,z,I,H];Z.forEach(e=>{Object.keys(e).forEach(o=>{const t=e[o];switch(o){case"args":case"argTypes":return D.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(t));case"decorators":return t.forEach(n=>A(n,!1));case"loaders":return t.forEach(n=>L(n,!1));case"parameters":return p(l({},t),!1);case"argTypesEnhancers":return t.forEach(n=>F(n));case"argsEnhancers":return t.forEach(n=>O(n));case"globals":case"globalTypes":{const n={};return n[o]=t,p(n,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(o+" was not supported :( !")}})});function C(e){return{"/Users/derek/work/toro/toro-design/packages/metaui/src/button/Button.stories.tsx":R}[e]}Object.assign(C,{keys:()=>["/Users/derek/work/toro/toro-design/packages/metaui/src/button/Button.stories.tsx"],resolve:e=>({"/Users/derek/work/toro/toro-design/packages/metaui/src/button/Button.stories.tsx":"/Users/derek/work/toro/toro-design/packages/metaui/src/button/Button.stories.tsx"})[e]});S(C,{hot:!1},!1);
//# sourceMappingURL=iframe.80fe3696.js.map

import{r as t,c as n,h as a}from"./index-e970ef30.js";import{r as o}from"./randomIdGenerator.util-17972493-3e0a24fb.js";const e=".sc-digi-navigation-tab-h{--digi--navigation-tab--box-shadow--focus:solid 2px var(--digi--color--border--secondary)}.sc-digi-navigation-tab-h .digi-navigation-tab.sc-digi-navigation-tab:focus-visible{box-shadow:var(--digi--navigation-tab--box-shadow--focus);outline:none}",s=class{constructor(i){t(this,i),this.afOnToggle=n(this,"afOnToggle",7),this.afAriaLabel=void 0,this.afId=o("digi-navigation-tab"),this.afActive=void 0}toggleHandler(i){i&&this.afOnToggle.emit(i)}render(){return a("div",{class:"digi-navigation-tab",tabindex:"0",role:"tabpanel",id:this.afId,"aria-label":this.afAriaLabel,hidden:!this.afActive},a("slot",null))}static get watchers(){return{afActive:["toggleHandler"]}}};s.style=e;export{s as digi_navigation_tab};

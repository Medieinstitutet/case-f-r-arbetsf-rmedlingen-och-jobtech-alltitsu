import{r as t,aH as a,aI as i,h as o}from"./index-e970ef30.js";const u=`.sc-digi-layout-columns-h{--digi--layout-columns--gap--column:var(--digi--gutter--largest);--digi--layout-columns--gap--row:var(--digi--gutter--largest);--digi--layout-columns--min-width:0}.sc-digi-layout-columns-h .digi-layout-columns.sc-digi-layout-columns{display:grid;grid-column-gap:var(--digi--layout-columns--gap--column);grid-row-gap:var(--digi--layout-columns--gap--row);grid-template-columns:repeat(auto-fit, minmax(var(--digi--layout-columns--min-width), 1fr))}.sc-digi-layout-columns-h .digi-layout-columns--one.sc-digi-layout-columns{--digi--layout-columns--min-width:100%}.sc-digi-layout-columns-h .digi-layout-columns--two.sc-digi-layout-columns{--digi--layout-columns--min-width:calc(
    50% - var(--digi--layout-columns--gap--column)
  )}.sc-digi-layout-columns-h .digi-layout-columns--three.sc-digi-layout-columns{--digi--layout-columns--min-width:calc(
    33% - var(--digi--layout-columns--gap--column)
  )}`,s=class{constructor(l){t(this,l),this.afElement=a.DIV,this.afVariation=void 0}get cssModifiers(){return{"digi-layout-columns--one":this.afVariation===i.ONE,"digi-layout-columns--two":this.afVariation===i.TWO,"digi-layout-columns--three":this.afVariation===i.THREE}}render(){return o(this.afElement,{class:Object.assign({"digi-layout-columns":!0},this.cssModifiers)},o("slot",null))}};s.style=u;export{s as digi_layout_columns};

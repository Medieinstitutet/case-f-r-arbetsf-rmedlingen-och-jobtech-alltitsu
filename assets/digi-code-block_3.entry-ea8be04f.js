import{r as c,l as e,aD as l,h as i,a as g,B as n,c as d,aE as r,aF as b,aG as k,g as s}from"./index-e970ef30.js";import{p as t}from"./prism-git-2023026c-6f6f425f.js";import{_ as f}from"./text-2fb6c0c4-138bda8d.js";import{r as a}from"./randomIdGenerator.util-17972493-3e0a24fb.js";const u="digi-code-block{--digi--code-block--background:var(--digi--color--background--primary);--digi--code-block--border-radius:0.3rem;--digi--code-block--border:1px solid var(--digi--color--border--neutral-3);display:block}digi-code-block .digi-code-block{border-radius:var(--digi--code-block--border-radius);border:var(--digi--code-block--border);overflow:hidden;position:relative}digi-code-block .digi-code-block pre{margin:0}digi-code-block .digi-code-block--light{}digi-code-block .digi-code-block--light code[class*=language-],digi-code-block .digi-code-block--light pre[class*=language-]{color:#545454;background:none;font-family:var(--digi--global--typography--font-family--mono);text-align:left;white-space:pre-wrap;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;hyphens:none}digi-code-block .digi-code-block--light pre[class*=language-]{padding:1em;overflow:auto}digi-code-block .digi-code-block--light :not(pre)>code[class*=language-],digi-code-block .digi-code-block--light pre[class*=language-]{background:#fefefe}digi-code-block .digi-code-block--light :not(pre)>code[class*=language-]{padding:0.1em;white-space:normal}digi-code-block .digi-code-block--light .token.comment,digi-code-block .digi-code-block--light .token.prolog,digi-code-block .digi-code-block--light .token.doctype,digi-code-block .digi-code-block--light .token.cdata{color:#696969}digi-code-block .digi-code-block--light .token.punctuation{color:#545454}digi-code-block .digi-code-block--light .token.property,digi-code-block .digi-code-block--light .token.tag,digi-code-block .digi-code-block--light .token.constant,digi-code-block .digi-code-block--light .token.symbol,digi-code-block .digi-code-block--light .token.deleted{color:#007faa}digi-code-block .digi-code-block--light .token.boolean,digi-code-block .digi-code-block--light .token.number{color:#008000}digi-code-block .digi-code-block--light .token.selector,digi-code-block .digi-code-block--light .token.attr-name,digi-code-block .digi-code-block--light .token.string,digi-code-block .digi-code-block--light .token.char,digi-code-block .digi-code-block--light .token.builtin,digi-code-block .digi-code-block--light .token.inserted{color:#aa5d00}digi-code-block .digi-code-block--light .token.operator,digi-code-block .digi-code-block--light .token.entity,digi-code-block .digi-code-block--light .token.url,digi-code-block .digi-code-block--light .language-css .token.string,digi-code-block .digi-code-block--light .style .token.string,digi-code-block .digi-code-block--light .token.variable{color:#008000}digi-code-block .digi-code-block--light .token.atrule,digi-code-block .digi-code-block--light .token.attr-value,digi-code-block .digi-code-block--light .token.function{color:#aa5d00}digi-code-block .digi-code-block--light .token.keyword{color:#d91e18}digi-code-block .digi-code-block--light .token.regex,digi-code-block .digi-code-block--light .token.important{color:#d91e18}digi-code-block .digi-code-block--light .token.important,digi-code-block .digi-code-block--light .token.bold{font-weight:bold}digi-code-block .digi-code-block--light .token.italic{font-style:italic}digi-code-block .digi-code-block--light .token.entity{cursor:help}@media screen and (-ms-high-contrast: active){digi-code-block .digi-code-block--light code[class*=language-],digi-code-block .digi-code-block--light pre[class*=language-]{color:windowText;background:window}digi-code-block .digi-code-block--light :not(pre)>code[class*=language-],digi-code-block .digi-code-block--light pre[class*=language-]{background:window}digi-code-block .digi-code-block--light .token.important{background:highlight;color:window;font-weight:normal}digi-code-block .digi-code-block--light .token.atrule,digi-code-block .digi-code-block--light .token.attr-value,digi-code-block .digi-code-block--light .token.function,digi-code-block .digi-code-block--light .token.keyword,digi-code-block .digi-code-block--light .token.operator,digi-code-block .digi-code-block--light .token.selector{font-weight:bold}digi-code-block .digi-code-block--light .token.attr-value,digi-code-block .digi-code-block--light .token.comment,digi-code-block .digi-code-block--light .token.doctype,digi-code-block .digi-code-block--light .token.function,digi-code-block .digi-code-block--light .token.keyword,digi-code-block .digi-code-block--light .token.operator,digi-code-block .digi-code-block--light .token.property,digi-code-block .digi-code-block--light .token.string{color:highlight}digi-code-block .digi-code-block--light .token.attr-value,digi-code-block .digi-code-block--light .token.url{font-weight:normal}}digi-code-block .digi-code-block--dark{}digi-code-block .digi-code-block--dark .digi-code-block__button{--digi--button--color--text--function--default:var(--digi--color--text--inverted);--digi--button--color--text--function--hover:var(--digi--color--text--inverted)}digi-code-block .digi-code-block--dark code[class*=language-],digi-code-block .digi-code-block--dark pre[class*=language-]{color:#f8f8f2;background:none;font-family:var(--digi--global--typography--font-family--mono);text-align:left;white-space:pre-wrap;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;hyphens:none}digi-code-block .digi-code-block--dark pre[class*=language-]{padding:1em;overflow:auto}digi-code-block .digi-code-block--dark :not(pre)>code[class*=language-],digi-code-block .digi-code-block--dark pre[class*=language-]{--digi--color--background--inverted-3:#272727;background:var(--digi--color--background--inverted-3)}digi-code-block .digi-code-block--dark :not(pre)>code[class*=language-]{padding:0.1em;white-space:normal}digi-code-block .digi-code-block--dark .token.comment,digi-code-block .digi-code-block--dark .token.prolog,digi-code-block .digi-code-block--dark .token.doctype,digi-code-block .digi-code-block--dark .token.cdata{color:#d4d0ab}digi-code-block .digi-code-block--dark .token.punctuation{color:#fefefe}digi-code-block .digi-code-block--dark .token.property,digi-code-block .digi-code-block--dark .token.tag,digi-code-block .digi-code-block--dark .token.constant,digi-code-block .digi-code-block--dark .token.symbol,digi-code-block .digi-code-block--dark .token.deleted{color:#ffa07a}digi-code-block .digi-code-block--dark .token.boolean,digi-code-block .digi-code-block--dark .token.number{color:#00e0e0}digi-code-block .digi-code-block--dark .token.selector,digi-code-block .digi-code-block--dark .token.attr-name,digi-code-block .digi-code-block--dark .token.string,digi-code-block .digi-code-block--dark .token.char,digi-code-block .digi-code-block--dark .token.builtin,digi-code-block .digi-code-block--dark .token.inserted{color:#abe338}digi-code-block .digi-code-block--dark .token.operator,digi-code-block .digi-code-block--dark .token.entity,digi-code-block .digi-code-block--dark .token.url,digi-code-block .digi-code-block--dark .language-css .token.string,digi-code-block .digi-code-block--dark .style .token.string,digi-code-block .digi-code-block--dark .token.variable{color:#00e0e0}digi-code-block .digi-code-block--dark .token.atrule,digi-code-block .digi-code-block--dark .token.attr-value,digi-code-block .digi-code-block--dark .token.function{color:#ffd700}digi-code-block .digi-code-block--dark .token.keyword{color:#00e0e0}digi-code-block .digi-code-block--dark .token.regex,digi-code-block .digi-code-block--dark .token.important{color:#ffd700}digi-code-block .digi-code-block--dark .token.important,digi-code-block .digi-code-block--dark .token.bold{font-weight:bold}digi-code-block .digi-code-block--dark .token.italic{font-style:italic}digi-code-block .digi-code-block--dark .token.entity{cursor:help}@media screen and (-ms-high-contrast: active){digi-code-block .digi-code-block--dark code[class*=language-],digi-code-block .digi-code-block--dark pre[class*=language-]{color:windowText;background:window}digi-code-block .digi-code-block--dark :not(pre)>code[class*=language-],digi-code-block .digi-code-block--dark pre[class*=language-]{background:window}digi-code-block .digi-code-block--dark .token.important{background:highlight;color:window;font-weight:normal}digi-code-block .digi-code-block--dark .token.atrule,digi-code-block .digi-code-block--dark .token.attr-value,digi-code-block .digi-code-block--dark .token.function,digi-code-block .digi-code-block--dark .token.keyword,digi-code-block .digi-code-block--dark .token.operator,digi-code-block .digi-code-block--dark .token.selector{font-weight:bold}digi-code-block .digi-code-block--dark .token.attr-value,digi-code-block .digi-code-block--dark .token.comment,digi-code-block .digi-code-block--dark .token.doctype,digi-code-block .digi-code-block--dark .token.function,digi-code-block .digi-code-block--dark .token.keyword,digi-code-block .digi-code-block--dark .token.operator,digi-code-block .digi-code-block--dark .token.property,digi-code-block .digi-code-block--dark .token.string{color:highlight}digi-code-block .digi-code-block--dark .token.attr-value,digi-code-block .digi-code-block--dark .token.url{font-weight:normal}}digi-code-block .digi-code-block__toolbar{padding-bottom:0.5rem;display:flex;justify-content:flex-end;position:absolute;bottom:0;width:100%}digi-code-block .digi-code-block__button{margin-right:var(--digi--margin--smaller)}",h=class{constructor(o){c(this,o),this.highlightedCode=void 0,this.afCode=void 0,this.afVariation=e.DARK,this.afLanguage=l.HTML,this.afLang="en",this.afHideToolbar=!1}componentWillLoad(){t.manual=!0,this.formatCode()}formatCode(){this.highlightedCode=t.highlight(this.afCode,t.languages[this.afLanguage],this.afLanguage)}copyButtonClickHandler(){navigator.clipboard.writeText(this.afCode).then(()=>{},o=>{console.error(o)})}get cssModifiers(){return{"digi-code-block--light":this.afVariation===e.LIGHT,"digi-code-block--dark":this.afVariation===e.DARK}}render(){return i("div",{class:Object.assign({"digi-code-block":!0},this.cssModifiers)},i("pre",{class:`digi-code-block__pre language-${this.afLanguage}`},i("code",{class:"digi-code-block__code",lang:this.afLang,innerHTML:this.highlightedCode})),!this.afHideToolbar&&i("div",{class:"digi-code-block__toolbar"},i("digi-button",{class:"digi-code-block__button",onAfOnClick:()=>this.copyButtonClickHandler(),afVariation:g.FUNCTION,afSize:n.SMALL},i("digi-icon",{class:"digi-code-block__icon","aria-hidden":"true",afName:"copy",slot:"icon"}),f.code.copy)))}static get watchers(){return{afCode:["formatCode"]}}};h.style=u;const m=".sc-digi-form-fieldset-h{--digi--form-fieldset--padding:0;--digi--form-fieldset--border:none;--digi--form-fieldset--legend--font-weight:var(--digi--typography--description--font-weight--desktop);--digi--form-fieldset--legend--font-family:var(--digi--global--typography--font-family--default);--digi--form-fieldset--legend--font-size:var(--digi--typography--description--font-size--desktop);--digi--form-fieldset--legend--color:var(--digi--color--text--primary);--digi--form-fieldset--legend--margin:var(--digi--margin--h2-large)}.sc-digi-form-fieldset-h .digi-form-fieldset.sc-digi-form-fieldset{margin:0px;padding:var(--digi--form-fieldset--padding);border:var(--digi--form-fieldset--border)}.sc-digi-form-fieldset-h .digi-form-fieldset__legend.sc-digi-form-fieldset{font-weight:var(--digi--form-fieldset--legend--font-weight);font-family:var(--digi--form-fieldset--legend--font-family);font-size:var(--digi--form-fieldset--legend--font-size);color:var(--digi--form-fieldset--legend--color);margin-block-end:var(--digi--form-fieldset--legend--margin);padding:0px}",p=class{constructor(o){c(this,o),this.afLegend=void 0,this.afName=void 0,this.afForm=void 0,this.afId=a("digi-form-fieldset")}render(){return i("fieldset",{class:"digi-form-fieldset",name:this.afName,form:this.afForm,id:this.afId},this.afLegend&&i("legend",{class:"digi-form-fieldset__legend"},this.afLegend),i("slot",null))}};p.style=m;const y='.sc-digi-form-radiobutton-h{--digi--form-radiobutton--border-color:var(--digi--color--border--primary);--digi--form-radiobutton--border-color--primary:var(--digi--color--border--radio-primary);--digi--form-radiobutton--border-color--secondary:var(--digi--color--border--radio-secondary);--digi--form-radiobutton--border-color--error:var(--digi--color--border--danger);--digi--form-radiobutton--box-shadow--error:var(--digi--color--border--danger);--digi--form-radiobutton--background-color:var(--digi--color--background--primary);--digi--form-radiobutton--background-color--primary:var(--digi--color--background--radio-primary);--digi--form-radiobutton--background-color--secondary:var(--digi--color--background--radio-secondary);--digi--form-radiobutton--background-color--error:var(--digi--color--background--danger-2);--digi--form-radiobutton--label--background-color--hover:var(--digi--color--background--input-empty);--digi--form-radiobutton--input--focus--shadow:var(--digi--shadow--input-focus);--digi--form-radiobutton--border-width:var(--digi--border-width--primary);--digi--form-radiobutton--color--marker:var(--digi--color--background--radio-marker);--digi--form-radiobutton--size:1.25rem;--digi--form-radiobutton--marker--size:calc(var(--digi--typography--input--font-size--desktop-large) * 0.4);--digi--form-radiobutton--height:var(--digi--input-height--large);--digi--form-radiobutton--border-radius:var(--digi--border-radius--primary);--digi--form-radiobutton--padding:var(--digi--gutter--icon);--digi--form-radiobutton--padding--block:var(--digi--gutter--small);--digi--form-radiobutton--padding--inline:var(--digi--gutter--icon)}.sc-digi-form-radiobutton-h .digi-form-radiobutton.sc-digi-form-radiobutton{--BACKGROUND--DEFAULT:var(--digi--form-radiobutton--background-color);--BORDER-COLOR--DEFAULT:var(--digi--form-radiobutton--border-color);position:relative}.sc-digi-form-radiobutton-h .digi-form-radiobutton--primary.sc-digi-form-radiobutton{--BACKGROUND--CHECKED:var(--digi--form-radiobutton--background-color--primary);--BORDER-COLOR--CHECKED:var(--digi--form-radiobutton--border-color--primary)}.sc-digi-form-radiobutton-h .digi-form-radiobutton--secondary.sc-digi-form-radiobutton{--BACKGROUND--CHECKED:var(--digi--form-radiobutton--background-color--secondary);--BORDER-COLOR--CHECKED:var(--digi--form-radiobutton--border-color--secondary)}.sc-digi-form-radiobutton-h .digi-form-radiobutton--error.sc-digi-form-radiobutton .digi-form-radiobutton__input.sc-digi-form-radiobutton:not(:checked)~.digi-form-radiobutton__label.sc-digi-form-radiobutton .digi-form-radiobutton__circle.sc-digi-form-radiobutton{--BACKGROUND--CHECKED:var(--digi--form-radiobutton--background-color--error);--BORDER-COLOR--CHECKED:var(--digi--form-radiobutton--border-color--error)}.sc-digi-form-radiobutton-h .digi-form-radiobutton--error.sc-digi-form-radiobutton .digi-form-radiobutton__input.sc-digi-form-radiobutton~.digi-form-radiobutton__label.sc-digi-form-radiobutton .digi-form-radiobutton__circle.sc-digi-form-radiobutton{background-color:var(--BACKGROUND--CHECKED);border-color:var(--BORDER-COLOR--CHECKED);box-shadow:0 0 0 var(--digi--border-width--primary) var(--digi--form-radiobutton--box-shadow--error)}.digi-form-radiobutton__input.sc-digi-form-radiobutton{position:absolute;opacity:0;cursor:pointer;height:0;width:0;top:0;left:0}.digi-form-radiobutton__label.sc-digi-form-radiobutton{display:inline-flex;align-items:center;gap:var(--digi--gutter--icon);font-family:var(--digi--global--typography--font-family--default);font-size:var(--digi--typography--body--font-size--desktop);color:var(--digi--color--text--primary);font-weight:var(--digi--typography--body--font-weight--desktop);cursor:pointer}.digi-form-radiobutton--layout-block.sc-digi-form-radiobutton .digi-form-radiobutton__label.sc-digi-form-radiobutton{display:flex;padding:var(--digi--form-radiobutton--padding--block) var(--digi--form-radiobutton--padding--inline);border-radius:var(--digi--border-radius--primary)}.digi-form-radiobutton--layout-block.sc-digi-form-radiobutton .digi-form-radiobutton__label.sc-digi-form-radiobutton:hover{background-color:var(--digi--form-radiobutton--label--background-color--hover)}.digi-form-radiobutton__circle.sc-digi-form-radiobutton{flex-shrink:0;align-self:flex-start;cursor:pointer;background-color:var(--BACKGROUND--DEFAULT);border-color:var(--BORDER-COLOR--DEFAULT);border-width:var(--digi--form-radiobutton--border-width);border-style:solid;height:var(--digi--form-radiobutton--size);width:var(--digi--form-radiobutton--size);border-radius:var(--digi--form-radiobutton--size);position:relative}.digi-form-radiobutton__input.sc-digi-form-radiobutton:focus-visible~.digi-form-radiobutton__label.sc-digi-form-radiobutton .digi-form-radiobutton__circle.sc-digi-form-radiobutton{box-shadow:var(--digi--form-radiobutton--input--focus--shadow)}.digi-form-radiobutton--layout-block.sc-digi-form-radiobutton .digi-form-radiobutton__input.sc-digi-form-radiobutton:focus-visible~.digi-form-radiobutton__label.sc-digi-form-radiobutton{box-shadow:none;outline:var(--digi--focus-outline);background-color:var(--digi--form-radiobutton--label--background-color--hover)}.digi-form-radiobutton__input.sc-digi-form-radiobutton:checked~.digi-form-radiobutton__label.sc-digi-form-radiobutton .digi-form-radiobutton__circle.sc-digi-form-radiobutton{background-color:var(--BACKGROUND--CHECKED);border-color:var(--BORDER-COLOR--CHECKED)}.digi-form-radiobutton__input.sc-digi-form-radiobutton:checked~.digi-form-radiobutton__label.sc-digi-form-radiobutton .digi-form-radiobutton__circle.sc-digi-form-radiobutton::after{content:"";width:var(--digi--form-radiobutton--marker--size);height:var(--digi--form-radiobutton--marker--size);border-radius:var(--digi--form-radiobutton--marker--size);background:var(--digi--form-radiobutton--color--marker);position:absolute;left:calc(50% - var(--digi--form-radiobutton--marker--size) / 2);top:calc(50% - var(--digi--form-radiobutton--marker--size) / 2)}',v=class{constructor(o){c(this,o),this.afOnChange=d(this,"afOnChange",7),this.afOnBlur=d(this,"afOnBlur",7),this.afOnFocus=d(this,"afOnFocus",7),this.afOnFocusout=d(this,"afOnFocusout",7),this.afOnInput=d(this,"afOnInput",7),this.afOnDirty=d(this,"afOnDirty",7),this.afOnTouched=d(this,"afOnTouched",7),this.afOnReady=d(this,"afOnReady",3),this.dirty=!1,this.touched=!1,this.afLabel=void 0,this.afVariation=r.PRIMARY,this.afLayout=b.INLINE,this.afName=void 0,this.afId=a("digi-form-radiobutton"),this.afRequired=void 0,this.value=void 0,this.afValue=void 0,this.checked=void 0,this.afChecked=void 0,this.afValidation=void 0,this.afAriaLabelledby=void 0,this.afAriaDescribedby=void 0,this.afAutofocus=void 0}onValueChanged(o){this.afValue=o}onAfValueChanged(o){this.value=o}onCheckedChanged(o){this.afChecked=o}onAfCheckedChanged(o){this.checked=o}async afMGetFormControlElement(){return this._input}componentDidLoad(){this.value&&(this.afValue=this.value),this.afOnReady.emit()}get cssModifiers(){return{"digi-form-radiobutton--error":this.afValidation===k.ERROR,"digi-form-radiobutton--primary":this.afVariation===r.PRIMARY,"digi-form-radiobutton--secondary":this.afVariation===r.SECONDARY,[`digi-form-radiobutton--layout-${this.afLayout}`]:!!this.afLayout}}blurHandler(o){this.touched||(this.afOnTouched.emit(o),this.touched=!0),this.afOnBlur.emit(o)}changeHandler(o){this.afOnChange.emit(o)}focusHandler(o){this.afOnFocus.emit(o)}focusoutHandler(o){this.afOnFocusout.emit(o)}inputHandler(o){this.dirty||(this.afOnDirty.emit(o),this.dirty=!0),this.afOnInput.emit(o)}render(){return i("div",{class:Object.assign({"digi-form-radiobutton":!0},this.cssModifiers)},i("input",{class:"digi-form-radiobutton__input",ref:o=>this._input=o,onInput:o=>this.inputHandler(o),onBlur:o=>this.blurHandler(o),onChange:o=>this.changeHandler(o),onFocus:o=>this.focusHandler(o),onFocusout:o=>this.focusoutHandler(o),"aria-describedby":this.afAriaDescribedby,"aria-labelledby":this.afAriaLabelledby,required:this.afRequired,id:this.afId,name:this.afName,type:"radio",checked:this.afChecked,value:this.afValue,autofocus:this.afAutofocus?this.afAutofocus:null}),i("label",{htmlFor:this.afId,class:"digi-form-radiobutton__label"},i("span",{class:"digi-form-radiobutton__circle"}),this.afLabel))}get hostElement(){return s(this)}static get watchers(){return{value:["onValueChanged"],afValue:["onAfValueChanged"],checked:["onCheckedChanged"],afChecked:["onAfCheckedChanged"]}}};v.style=y;export{h as digi_code_block,p as digi_form_fieldset,v as digi_form_radiobutton};

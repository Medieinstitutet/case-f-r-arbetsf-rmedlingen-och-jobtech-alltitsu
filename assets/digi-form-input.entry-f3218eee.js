import{r as d,c as t,I as e,aN as o,J as s,aO as n,aP as a,h as r,g as u}from"./index-e970ef30.js";import{r as f}from"./randomIdGenerator.util-17972493-3e0a24fb.js";const g=".sc-digi-form-input-h{--digi--form-input--height--small:var(--digi--input-height--small);--digi--form-input--height--medium:var(--digi--input-height--medium);--digi--form-input--height--large:var(--digi--input-height--large);--digi--form-input--border-radius:var(--digi--border-radius--input);--digi--form-input--padding:0 var(--digi--gutter--medium);--digi--form-input--background--empty:var(--digi--color--background--input-empty);--digi--form-input--background--neutral:var(--digi--color--background--input);--digi--form-input--background--success:var(--digi--color--background--success-2);--digi--form-input--background--warning:var(--digi--color--background--warning-3);--digi--form-input--background--error:var(--digi--color--background--danger-2);--digi--form-input--border--neutral:var(--digi--border-width--input-regular) solid;--digi--form-input--border--error:var(--digi--border-width--input-validation) solid;--digi--form-input--border--success:var(--digi--border-width--input-validation) solid;--digi--form-input--border--warning:var(--digi--border-width--input-validation) solid;--digi--form-input--border-color--neutral:var(--digi--color--border--neutral-3);--digi--form-input--border-color--success:var(--digi--color--border--success);--digi--form-input--border-color--warning:var(--digi--color--border--neutral-3);--digi--form-input--border-color--error:var(--digi--color--border--danger)}.sc-digi-form-input-h .digi-form-input.sc-digi-form-input{display:flex;flex-direction:column;gap:0.4em}.sc-digi-form-input-h .digi-form-input--small.sc-digi-form-input{--HEIGHT:var(--digi--form-input--height--small)}.sc-digi-form-input-h .digi-form-input--medium.sc-digi-form-input{--HEIGHT:var(--digi--form-input--height--medium)}.sc-digi-form-input-h .digi-form-input--large.sc-digi-form-input{--HEIGHT:var(--digi--form-input--height--large)}.sc-digi-form-input-h .digi-form-input--neutral.sc-digi-form-input{--BORDER:var(--digi--form-input--border--neutral);--BORDER-COLOR:var(--digi--form-input--border-color--neutral);--BACKGROUND:var(--digi--form-input--background--neutral)}.sc-digi-form-input-h .digi-form-input--empty.sc-digi-form-input:not(:focus-within){--BACKGROUND:var(--digi--form-input--background--empty)}.sc-digi-form-input-h .digi-form-input--success.sc-digi-form-input{--BORDER:var(--digi--form-input--border--success);--BORDER-COLOR:var(--digi--form-input--border-color--success);--BACKGROUND:var(--digi--form-input--background--success)}.sc-digi-form-input-h .digi-form-input--warning.sc-digi-form-input{--BORDER:var(--digi--form-input--border--warning);--BORDER-COLOR:var(--digi--form-input--border-color--warning);--BACKGROUND:var(--digi--form-input--background--warning)}.sc-digi-form-input-h .digi-form-input--error.sc-digi-form-input{--BORDER:var(--digi--form-input--border--error);--BORDER-COLOR:var(--digi--form-input--border-color--error);--BACKGROUND:var(--digi--form-input--background--error)}.digi-form-input__input-wrapper.sc-digi-form-input{position:relative;display:flex}.digi-form-input__input-wrapper.sc-digi-form-input-s>[slot^=button] button,.digi-form-input__input-wrapper .sc-digi-form-input-s>[slot^=button] button{--MIN-HEIGHT:100%}.digi-form-input--button-variation-primary .digi-form-input__input-wrapper.sc-digi-form-input-s>[slot^=button] button,.digi-form-input--button-variation-primary .digi-form-input__input-wrapper .sc-digi-form-input-s>[slot^=button] button{border-start-start-radius:0;border-end-start-radius:0}.digi-form-input--button-variation-secondary.digi-form-input--has-button-true.sc-digi-form-input .digi-form-input__input-wrapper.sc-digi-form-input{gap:var(--digi--gutter--medium);flex-wrap:wrap}.digi-form-input__input.sc-digi-form-input{flex:1;height:var(--HEIGHT);font-family:var(--digi--global--typography--font-family--default);font-size:var(--digi--typography--body--font-size--desktop);padding:var(--digi--form-input--padding);color:var(--digi--color--text--primary);background:var(--BACKGROUND);border:var(--BORDER);border-color:var(--BORDER-COLOR);border-radius:var(--digi--form-input--border-radius);box-sizing:border-box}.digi-form-input__input.sc-digi-form-input:focus-visible{box-shadow:var(--digi--focus-shadow);outline:var(--digi--focus-outline)}.digi-form-input--button-variation-primary.digi-form-input--has-button-true.sc-digi-form-input .digi-form-input__input.sc-digi-form-input{border-end-end-radius:0;border-start-end-radius:0}",p=class{constructor(i){d(this,i),this.afOnChange=t(this,"afOnChange",7),this.afOnBlur=t(this,"afOnBlur",7),this.afOnKeyup=t(this,"afOnKeyup",7),this.afOnFocus=t(this,"afOnFocus",7),this.afOnFocusout=t(this,"afOnFocusout",7),this.afOnInput=t(this,"afOnInput",7),this.afOnDirty=t(this,"afOnDirty",7),this.afOnTouched=t(this,"afOnTouched",7),this.afOnReady=t(this,"afOnReady",3),this.hasActiveValidationMessage=!1,this.hasButton=void 0,this.dirty=!1,this.touched=!1,this.afLabel=void 0,this.afLabelDescription=void 0,this.afType=e.TEXT,this.afInputmode=o.DEFAULT,this.afButtonVariation=s.PRIMARY,this.afAutofocus=void 0,this.afVariation=n.MEDIUM,this.afName=void 0,this.afId=f("digi-form-input"),this.afMaxlength=void 0,this.afMinlength=void 0,this.afRequired=void 0,this.afRequiredText=void 0,this.afAnnounceIfOptional=!1,this.afAnnounceIfOptionalText=void 0,this.value=void 0,this.afValue=void 0,this.afValidation=a.NEUTRAL,this.afValidationText=void 0,this.afRole=void 0,this.afAutocomplete=void 0,this.afMin=void 0,this.afMax=void 0,this.afList=void 0,this.afStep=void 0,this.afDirname=void 0,this.afAriaAutocomplete=void 0,this.afAriaActivedescendant=void 0,this.afAriaLabelledby=void 0,this.afAriaDescribedby=void 0}onValueChanged(i){this.afValue=i}onAfValueChanged(i){this.value=i}afValidationTextWatch(){this.setActiveValidationMessage()}async afMGetFormControlElement(){return this._input}componentWillLoad(){this.afValue?this.value=this.afValue:this.afValue=this.value,this.setActiveValidationMessage(),this.setHasButton()}componentWillUpdate(){this.setHasButton()}componentDidLoad(){this.afOnReady.emit()}setActiveValidationMessage(){this.hasActiveValidationMessage=!!this.afValidationText}get cssModifiers(){return{"digi-form-input--small":this.afVariation===n.SMALL,"digi-form-input--medium":this.afVariation===n.MEDIUM,"digi-form-input--large":this.afVariation===n.LARGE,"digi-form-input--neutral":this.afValidation===a.NEUTRAL,"digi-form-input--success":this.afValidation===a.SUCCESS,"digi-form-input--error":this.afValidation===a.ERROR,"digi-form-input--warning":this.afValidation===a.WARNING,[`digi-form-input--button-variation-${this.afButtonVariation}`]:!!this.afButtonVariation,[`digi-form-input--has-button-${this.hasButton}`]:!0,"digi-form-input--empty":!this.afValue&&(!this.afValidation||this.afValidation===a.NEUTRAL)}}blurHandler(i){this.touched||(this.afOnTouched.emit(i),this.touched=!0),this.afOnBlur.emit(i)}changeHandler(i){this.setActiveValidationMessage(),this.afOnChange.emit(i)}focusHandler(i){this.afOnFocus.emit(i)}focusoutHandler(i){this.afOnFocusout.emit(i)}keyupHandler(i){this.afOnKeyup.emit(i)}inputHandler(i){this.afValue=this.value=this.afType===e.NUMBER?parseFloat(i.target.value):i.target.value,this.dirty||(this.afOnDirty.emit(i),this.dirty=!0),this.setActiveValidationMessage(),this.afOnInput.emit(i)}setHasButton(){this.hasButton=!!this.hostElement.querySelector('[slot="button"]')}render(){return r("div",{class:Object.assign({"digi-form-input":!0},this.cssModifiers)},r("digi-form-label",{class:"digi-form-input__label",afFor:this.afId,afLabel:this.afLabel,afDescription:this.afLabelDescription,afRequired:this.afRequired,afAnnounceIfOptional:this.afAnnounceIfOptional,afRequiredText:this.afRequiredText,afAnnounceIfOptionalText:this.afAnnounceIfOptionalText}),r("div",{class:"digi-form-input__input-wrapper"},r("input",Object.assign({class:"digi-form-input__input",ref:i=>this._input=i,onBlur:i=>this.blurHandler(i),onChange:i=>this.changeHandler(i),onFocus:i=>this.focusHandler(i),onFocusout:i=>this.focusoutHandler(i),onKeyUp:i=>this.keyupHandler(i),onInput:i=>this.inputHandler(i),"aria-activedescendant":this.afAriaActivedescendant,"aria-describedby":this.afAriaDescribedby,"aria-labelledby":this.afAriaLabelledby,"aria-autocomplete":this.afAriaAutocomplete,"aria-invalid":this.afValidation!=a.NEUTRAL?"true":"false",autocomplete:this.afAutocomplete,autofocus:this.afAutofocus?this.afAutofocus:null,maxLength:this.afMaxlength,minLength:this.afMinlength,max:this.afMax,min:this.afMin,step:this.afStep,list:this.afList,role:this.afRole,dirName:this.afDirname,required:this.afRequired,id:this.afId,name:this.afName,type:this.afType,value:this.afValue},this.afInputmode==o.DEFAULT?{}:{inputmode:this.afInputmode})),r("slot",{name:"button"})),r("div",{class:"digi-form-input__footer"},r("div",{class:"digi-form-input__validation","aria-atomic":"true",role:"alert",id:`${this.afId}--validation-message`},this.hasActiveValidationMessage&&this.afValidation!=a.NEUTRAL&&r("digi-form-validation-message",{class:"digi-form-input__validation-message","af-variation":this.afValidation},this.afValidationText))))}get hostElement(){return u(this)}static get watchers(){return{value:["onValueChanged"],afValue:["onAfValueChanged"],afValidationText:["afValidationTextWatch"]}}};p.style=g;export{p as digi_form_input};

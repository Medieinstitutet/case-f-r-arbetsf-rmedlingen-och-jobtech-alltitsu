import{r as o,c as i,U as r,V as e,h as t,g as d}from"./index-e970ef30.js";import{r as s}from"./randomIdGenerator.util-17972493-3e0a24fb.js";const n=".sc-digi-form-textarea-h{--digi--form-textarea--height--small:4.6875rem;--digi--form-textarea--height--medium:8.4375rem;--digi--form-textarea--height--large:10.3125rem;--digi--form-textarea--height--auto:auto;--digi--form-textarea--border-radius:var(--digi--border-radius--input);--digi--form-textarea--padding:calc(var(--digi--gutter--medium) / 2) var(--digi--gutter--medium);--digi--form-textarea--background--empty:var(--digi--color--background--input-empty);--digi--form-textarea--background--neutral:var(--digi--color--background--input);--digi--form-textarea--background--success:var(--digi--color--background--success-2);--digi--form-textarea--background--warning:var(--digi--color--background--warning-2);--digi--form-textarea--background--error:var(--digi--color--background--danger-2);--digi--form-textarea--border--neutral:var(--digi--border-width--input-regular) solid;--digi--form-textarea--border--error:var(--digi--border-width--input-validation) solid;--digi--form-textarea--border--success:var(--digi--border-width--input-validation) solid;--digi--form-textarea--border--warning:var(--digi--border-width--input-validation) solid;--digi--form-textarea--border-color--neutral:var(--digi--color--border--neutral-3);--digi--form-textarea--border-color--success:var(--digi--color--border--success);--digi--form-textarea--border-color--warning:var(--digi--color--border--neutral-3);--digi--form-textarea--border-color--error:var(--digi--color--border--danger)}.sc-digi-form-textarea-h .digi-form-textarea.sc-digi-form-textarea{display:flex;flex-direction:column;gap:0.4em}.sc-digi-form-textarea-h .digi-form-textarea--small.sc-digi-form-textarea{--HEIGHT:var(--digi--form-textarea--height--small)}.sc-digi-form-textarea-h .digi-form-textarea--medium.sc-digi-form-textarea{--HEIGHT:var(--digi--form-textarea--height--medium)}.sc-digi-form-textarea-h .digi-form-textarea--large.sc-digi-form-textarea{--HEIGHT:var(--digi--form-textarea--height--large)}.sc-digi-form-textarea-h .digi-form-textarea--neutral.sc-digi-form-textarea{--BORDER:var(--digi--form-textarea--border--neutral);--BORDER-COLOR:var(--digi--form-textarea--border-color--neutral);--BACKGROUND:var(--digi--form-textarea--background--neutral)}.sc-digi-form-textarea-h .digi-form-textarea--empty.sc-digi-form-textarea:not(:focus-within){--BACKGROUND:var(--digi--form-textarea--background--empty)}.sc-digi-form-textarea-h .digi-form-textarea--success.sc-digi-form-textarea{--BORDER:var(--digi--form-textarea--border--success);--BORDER-COLOR:var(--digi--form-textarea--border-color--success);--BACKGROUND:var(--digi--form-textarea--background--success)}.sc-digi-form-textarea-h .digi-form-textarea--warning.sc-digi-form-textarea{--BORDER:var(--digi--form-textarea--border--warning);--BORDER-COLOR:var(--digi--form-textarea--border-color--warning);--BACKGROUND:var(--digi--form-textarea--background--warning)}.sc-digi-form-textarea-h .digi-form-textarea--error.sc-digi-form-textarea{--BORDER:var(--digi--form-textarea--border--error);--BORDER-COLOR:var(--digi--form-textarea--border-color--error);--BACKGROUND:var(--digi--form-textarea--background--error)}.sc-digi-form-textarea-h .digi-form-textarea__content.sc-digi-form-textarea{width:100%}.sc-digi-form-textarea-h .digi-form-textarea__textarea.sc-digi-form-textarea{height:var(--HEIGHT);width:inherit;font-family:var(--digi--global--typography--font-family--default);font-size:var(--digi--typography--body--font-size--desktop);padding:var(--digi--form-textarea--padding);color:var(--digi--color--text--primary);background:var(--BACKGROUND);border:var(--BORDER);border-color:var(--BORDER-COLOR);border-radius:var(--digi--form-textarea--border-radius);box-sizing:border-box}.sc-digi-form-textarea-h .digi-form-textarea__textarea.sc-digi-form-textarea:focus-visible{box-shadow:0 0 0.1rem 0.05rem var(--digi--color--border--informative);box-shadow:var(--digi--focus-shadow);outline:var(--digi--focus-outline)}",f=class{constructor(a){o(this,a),this.afOnChange=i(this,"afOnChange",7),this.afOnBlur=i(this,"afOnBlur",7),this.afOnKeyup=i(this,"afOnKeyup",7),this.afOnFocus=i(this,"afOnFocus",7),this.afOnFocusout=i(this,"afOnFocusout",7),this.afOnInput=i(this,"afOnInput",7),this.afOnDirty=i(this,"afOnDirty",7),this.afOnTouched=i(this,"afOnTouched",7),this.afOnReady=i(this,"afOnReady",3),this.hasActiveValidationMessage=!1,this.dirty=!1,this.touched=!1,this.afLabel=void 0,this.afLabelDescription=void 0,this.afVariation=r.MEDIUM,this.afName=void 0,this.afId=s("digi-form-textarea"),this.afMaxlength=void 0,this.afMinlength=void 0,this.afRequired=void 0,this.afRequiredText=void 0,this.afAnnounceIfOptional=!1,this.afAnnounceIfOptionalText=void 0,this.value=void 0,this.afValue=void 0,this.afValidation=e.NEUTRAL,this.afValidationText=void 0,this.afRole=void 0,this.afAriaActivedescendant=void 0,this.afAriaLabelledby=void 0,this.afAriaDescribedby=void 0,this.afAutofocus=void 0}onValueChanged(a){this.afValue=a}onAfValueChanged(a){this.value=a}afValidationTextWatch(){this.setActiveValidationMessage()}async afMGetFormControlElement(){return this._textarea}componentWillLoad(){this.afValue?this.value=this.afValue:this.afValue=this.value,this.setActiveValidationMessage()}componentDidLoad(){this.afOnReady.emit()}setActiveValidationMessage(){this.hasActiveValidationMessage=!!this.afValidationText}get cssModifiers(){return{"digi-form-textarea--small":this.afVariation===r.SMALL,"digi-form-textarea--medium":this.afVariation===r.MEDIUM,"digi-form-textarea--large":this.afVariation===r.LARGE,"digi-form-textarea--auto":this.afVariation===r.AUTO,"digi-form-textarea--neutral":this.afValidation===e.NEUTRAL,"digi-form-textarea--success":this.afValidation===e.SUCCESS,"digi-form-textarea--error":this.afValidation===e.ERROR,"digi-form-textarea--warning":this.afValidation===e.WARNING,"digi-form-textarea--empty":!this.afValue&&(!this.afValidation||this.afValidation===e.NEUTRAL)}}blurHandler(a){this.touched||(this.afOnTouched.emit(a),this.touched=!0),this.setActiveValidationMessage(),this.afOnBlur.emit(a)}changeHandler(a){this.afOnChange.emit(a)}focusHandler(a){this.afOnFocus.emit(a)}focusoutHandler(a){this.afOnFocusout.emit(a)}keyupHandler(a){this.afOnKeyup.emit(a)}inputHandler(a){this.afValue=this.value=a.target.value,this.dirty||(this.afOnDirty.emit(a),this.dirty=!0),this.setActiveValidationMessage(),this.afOnInput.emit(a)}render(){return t("div",{class:Object.assign({"digi-form-textarea":!0},this.cssModifiers)},t("div",{class:"digi-form-textarea__label"},t("digi-form-label",{afFor:this.afId,afLabel:this.afLabel,afDescription:this.afLabelDescription,afRequired:this.afRequired,afAnnounceIfOptional:this.afAnnounceIfOptional,afRequiredText:this.afRequiredText,afAnnounceIfOptionalText:this.afAnnounceIfOptionalText})),t("div",{class:"digi-form-textarea__content"},t("textarea",{class:"digi-form-textarea__textarea",ref:a=>this._textarea=a,onBlur:a=>this.blurHandler(a),onChange:a=>this.changeHandler(a),onFocus:a=>this.focusHandler(a),onFocusout:a=>this.focusoutHandler(a),onKeyUp:a=>this.keyupHandler(a),onInput:a=>this.inputHandler(a),"aria-activedescendant":this.afAriaActivedescendant,"aria-describedby":this.afAriaDescribedby,"aria-labelledby":this.afAriaLabelledby,"aria-invalid":this.afValidation!=e.NEUTRAL?"true":"false",maxLength:this.afMaxlength,minLength:this.afMinlength,role:this.afRole,required:this.afRequired,id:this.afId,name:this.afName,value:this.afValue,autofocus:this.afAutofocus?this.afAutofocus:null})),t("div",{class:"digi-form-textarea__footer"},t("div",{class:"digi-form-textarea__validation","aria-atomic":"true",role:"alert",id:`${this.afId}--validation-message`},this.hasActiveValidationMessage&&this.afValidation!=e.NEUTRAL&&t("digi-form-validation-message",{class:"digi-form-textarea__validation-message","af-variation":this.afValidation},this.afValidationText))))}get hostElement(){return d(this)}static get watchers(){return{value:["onValueChanged"],afValue:["onAfValueChanged"],afValidationText:["afValidationTextWatch"]}}};f.style=n;export{f as digi_form_textarea};

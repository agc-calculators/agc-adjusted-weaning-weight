/*! Built with http://stenciljs.com */
const{h:t}=window.AgcAdjustedWeaningWeight,e=(t,e)=>{let a=t.querySelector(`[name="${e}"]`),i=t.querySelector(`[data-validates="${e}"`);return a.checkValidity()?(a.className=a.className.replace(" invalid",""),i.style.display="none",!0):(-1===a.className.indexOf("invalid")&&(a.className+=" invalid"),i.style.display="block",!1)},a=(t,e)=>+(Math.round(new Number(`${t}e+${e}`).valueOf())+"e-"+e);class i{constructor(){this.socket="",this.tract="",this.units={weight:"lbs"},this.mode="step",this.currentStep=0,this.cache={},this.submitted=!1,this.results={}}render(){return t("div",null,t("form",{onSubmit:t=>t.preventDefault(),ref:t=>this.form=t,"data-wizard":"agc-adjusted-weaning-weight","data-wizard-mode":this.mode,class:"agc-wizard"},t("slot",null),t("section",{"data-wizard-section":"1"},t("div",{class:"agc-wizard__field"},t("label",{"data-i18n":"fields.gender"},"Gender"),t("div",{class:"agc-wizard__radio-group"},t("input",{id:"maleGender",name:"gender",type:"radio",value:"male"})," ",t("span",{"data-i18n":"options.gender.male"},"Male"),t("input",{id:"femaleGender",name:"gender",type:"radio",value:"male"})," ",t("span",{"data-i18n":"options.gender.female"},"Female")),t("p",{"data-i18n":"hints.gender"},"⮤ Select the gender.")),t("div",{class:"agc-wizard__actions"},"step"===this.mode&&t("button",{class:"agc-wizard__actions-next","data-i18n":"actions.next",onClick:this.nextPrev.bind(this,1)},"Next 🠖"))),t("section",{"data-wizard-section":"2"},t("div",{class:"agc-wizard__field"},t("label",{"data-i18n":"fields.birth-weight"},"Birth Weight"),t("input",{name:"birthWeight",type:"number",required:!0,min:"1"}),t("p",{class:"agc-wizard__validation-message","data-i18n":"validation.birth-weight.required","data-validates":"birthWeight"},"Please enter a valid weight in whole numbers."),t("p",{"data-i18n":`hints.birth-weight.${this.units.weight}`},"⮤ Enter the weight at birth in pounds.")),t("div",{class:"agc-wizard__actions"},"step"===this.mode&&[t("button",{class:"agc-wizard__actions-prev","data-i18n":"actions.back",onClick:this.nextPrev.bind(this,-1)},"🠔 Back"),t("button",{class:"agc-wizard__actions-next","data-i18n":"actions.next",onClick:this.nextPrev.bind(this,1)},"Next 🠖")])),t("section",{"data-wizard-section":"3"},t("div",{class:"agc-wizard__field"},t("label",{"data-i18n":"fields.current-weight"},"Current Weight"),t("input",{name:"currentWeight",type:"number",required:!0,min:"1"}),t("p",{class:"agc-wizard__validation-message","data-i18n":"validation.current-weight.required","data-validates":"currentWeight"},"Please enter a valid weight in whole numbers."),t("p",{"data-i18n":`hints.current-weight.${this.units.weight}`},"⮤ Enter the current weight in pounds.")),t("div",{class:"agc-wizard__actions"},"step"===this.mode&&[t("button",{class:"agc-wizard__actions-prev","data-i18n":"actions.back",onClick:this.nextPrev.bind(this,-1)},"🠔 Back"),t("button",{class:"agc-wizard__actions-next","data-i18n":"actions.next",onClick:this.nextPrev.bind(this,1)},"Next 🠖")])),t("section",{"data-wizard-section":"4"},t("div",{class:"agc-wizard__field"},t("label",{"data-i18n":"fields.current-age"},"Current Age"),t("input",{name:"currentAge",type:"number",required:!0,min:"1"}),t("p",{class:"agc-wizard__validation-message","data-i18n":"validation.current-age.required","data-validates":"currentAge"},"Please enter a valid weight in whole numbers."),t("p",{"data-i18n":`hints.current-age.${this.units.weight}`},"⮤ Enter the current age in days.")),t("div",{class:"agc-wizard__actions"},"step"===this.mode&&[t("button",{class:"agc-wizard__actions-prev","data-i18n":"actions.back",onClick:this.nextPrev.bind(this,-1)},"🠔 Back"),t("button",{class:"agc-wizard__actions-next","data-i18n":"actions.next",onClick:this.nextPrev.bind(this,1)},"Next 🠖")])),t("section",{"data-wizard-section":"5"},t("div",{class:"agc-wizard__field"},t("label",{"data-i18n":"fields.age-of-dam"},"Age of Dam"),t("select",{name:"ageOfDam"},t("option",{value:"2","data-i18n":"options.age-of-dam.2"},"2 years old"),t("option",{value:"3","data-i18n":"options.age-of-dam.3"},"3 years old"),t("option",{value:"4","data-i18n":"options.age-of-dam.4"},"4 years old"),t("option",{value:"5","data-i18n":"options.age-of-dam.5"},"5 - 10 years old"),t("option",{value:"11","data-i18n":"options.age-of-dam.11"},"Over 10 years old")),t("p",{"data-i18n":"hints.age-of-dam"},"⮤ Select the age of the dam.")),t("div",{class:"agc-wizard__actions"},"step"===this.mode&&t("button",{class:"agc-wizard__actions-back","data-i18n":"actions.back",onClick:this.nextPrev.bind(this,-1)},"🠔 Back"),t("button",{class:"agc-wizard__actions-next","data-i18n":"actions.finish",onClick:this.nextPrev.bind(this,"step"===this.mode?1:2)},"Calculate 🠖"))),t("section",{"data-wizard-results":!0},t("slot",{name:"results"}))))}showTab(t){"step"===this.mode&&(this.cache.sections[t].style.display="block"),this.socket&&this.agcStepChanged.emit({socket:this.socket,tract:this.tract,step:this.currentStep})}reset(){this.currentStep=0,this.submitted=!1,this.showTab(0)}validateForm(){let t=!0;return 1!==this.currentStep&&"full"!==this.mode||e(this.form,"birthWeight")||(t=!1),2!==this.currentStep&&"full"!==this.mode||e(this.form,"currentWeight")||(t=!1),3!==this.currentStep&&"full"!==this.mode||e(this.form,"currentAge")||(t=!1),t}nextPrev(t,e){if(e&&e.preventDefault(),"full"===this.mode){if(!this.validateForm())return!1}else if(1==t&&!this.validateForm())return!1;if("step"===this.mode&&(this.cache.sections[this.currentStep].style.display="none"),this.currentStep=this.currentStep+t,this.currentStep>=this.cache.sections.length)return this.submitted=!0,this.showResults.call(this),!1;this.showTab.call(this,this.currentStep)}showResults(){let t=this.form.querySelector("#maleGender").checked?"male":"female",e=parseFloat(this.form.querySelector('[name="birthWeight"').value),i=parseFloat(this.form.querySelector('[name="currentWeight"').value),s=parseInt(this.form.querySelector('[name="currentAge"').value),n=this.form.querySelector('[name="ageOfDam').value,r={2:{male:60,female:54},3:{male:40,female:36},4:{male:20,female:18},5:{male:0,female:0},11:{male:20,female:18}}[n][t],c=i-e,d=a(c/s,2),l=a(e+r+205*d,0),o={socket:this.socket,tract:this.tract,gender:t,birthWeight:e,currentWeight:i,currentAge:s,ageOfDam:n,adjustment:r,weightGain:c,averageDailyGain:d,adjustedWeaningWeight:l,units:this.units};console.log("results",o),this.socket&&this.agcCalculated.emit({socket:this.socket,tract:this.tract,results:Object.assign({},o)}),this.results=Object.assign({},o),this.cache.results.forEach(t=>{t.style.display="block"})}handleAction(t){"reset"===t.detail.action&&this.reset()}componentDidLoad(){var t=Array.from(this.form.querySelectorAll("[data-wizard-section]")).map(t=>t).map(t=>t),e=Array.from(this.form.querySelectorAll("[data-wizard-results]")).map(t=>t).map(t=>t);this.cache=Object.assign({},this.cache,{sections:t,results:e}),window.document.addEventListener("agcAction",this.handleAction.bind(this)),this.form.querySelector('[name="ageOfDam"]').options[3].defaultSelected=!0,this.form.querySelector("#maleGender").defaultChecked=!0,this.showTab(0)}componentDidUnload(){window.document.removeEventListener("agcAction",this.handleAction)}static get is(){return"agc-adjusted-weaning-weight"}static get properties(){return{cache:{state:!0},currentStep:{state:!0},mode:{type:String,attr:"mode"},results:{state:!0},socket:{type:String,attr:"socket"},submitted:{state:!0},tract:{type:String,attr:"tract"},units:{type:"Any",attr:"units"}}}static get events(){return[{name:"agcCalculated",method:"agcCalculated",bubbles:!0,cancelable:!0,composed:!0},{name:"agcStepChanged",method:"agcStepChanged",bubbles:!0,cancelable:!0,composed:!0}]}}export{i as AgcAdjustedWeaningWeight};
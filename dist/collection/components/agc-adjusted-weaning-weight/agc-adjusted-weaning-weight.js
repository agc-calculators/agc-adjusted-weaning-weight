import { validate, round } from '../../utils';
export class AgcAdjustedWeaningWeight {
    constructor() {
        this.socket = "";
        this.tract = "";
        this.units = { weight: 'lbs' };
        this.mode = 'step';
        this.currentStep = 0;
        this.cache = {};
        this.submitted = false;
        this.results = {};
    }
    render() {
        return (h("div", null,
            h("form", { onSubmit: (e) => e.preventDefault(), ref: c => this.form = c, "data-wizard": "agc-adjusted-weaning-weight", "data-wizard-mode": this.mode, class: "agc-wizard" },
                h("slot", null),
                h("section", { "data-wizard-section": "1" },
                    h("div", { class: "agc-wizard__field" },
                        h("label", { "data-i18n": "fields.gender" }, "Gender"),
                        h("div", { class: "agc-wizard__radio-group" },
                            h("input", { id: "maleGender", name: "gender", type: "radio", value: "male" }),
                            " ",
                            h("span", { "data-i18n": "options.gender.male" }, "Male"),
                            h("input", { id: "femaleGender", name: "gender", type: "radio", value: "male" }),
                            " ",
                            h("span", { "data-i18n": "options.gender.female" }, "Female")),
                        h("p", { "data-i18n": "hints.gender" }, "\u2BA4 Select the gender.")),
                    h("div", { class: "agc-wizard__actions" }, this.mode === 'step' && h("button", { class: "agc-wizard__actions-next", "data-i18n": "actions.next", onClick: this.nextPrev.bind(this, 1) }, "Next \uD83E\uDC16"))),
                h("section", { "data-wizard-section": "2" },
                    h("div", { class: "agc-wizard__field" },
                        h("label", { "data-i18n": "fields.birth-weight" }, "Birth Weight"),
                        h("input", { name: "birthWeight", type: "number", required: true, min: "1" }),
                        h("p", { class: "agc-wizard__validation-message", "data-i18n": "validation.birth-weight.required", "data-validates": "birthWeight" }, "Please enter a valid weight in whole numbers."),
                        h("p", { "data-i18n": `hints.birth-weight.${this.units['weight']}` }, "\u2BA4 Enter the weight at birth in pounds.")),
                    h("div", { class: "agc-wizard__actions" }, this.mode === 'step' && [
                        h("button", { class: "agc-wizard__actions-prev", "data-i18n": "actions.back", onClick: this.nextPrev.bind(this, -1) }, "\uD83E\uDC14 Back"),
                        h("button", { class: "agc-wizard__actions-next", "data-i18n": "actions.next", onClick: this.nextPrev.bind(this, 1) }, "Next \uD83E\uDC16")
                    ])),
                h("section", { "data-wizard-section": "3" },
                    h("div", { class: "agc-wizard__field" },
                        h("label", { "data-i18n": "fields.current-weight" }, "Current Weight"),
                        h("input", { name: "currentWeight", type: "number", required: true, min: "1" }),
                        h("p", { class: "agc-wizard__validation-message", "data-i18n": "validation.current-weight.required", "data-validates": "currentWeight" }, "Please enter a valid weight in whole numbers."),
                        h("p", { "data-i18n": `hints.current-weight.${this.units['weight']}` }, "\u2BA4 Enter the current weight in pounds.")),
                    h("div", { class: "agc-wizard__actions" }, this.mode === 'step' && [
                        h("button", { class: "agc-wizard__actions-prev", "data-i18n": "actions.back", onClick: this.nextPrev.bind(this, -1) }, "\uD83E\uDC14 Back"),
                        h("button", { class: "agc-wizard__actions-next", "data-i18n": "actions.next", onClick: this.nextPrev.bind(this, 1) }, "Next \uD83E\uDC16")
                    ])),
                h("section", { "data-wizard-section": "4" },
                    h("div", { class: "agc-wizard__field" },
                        h("label", { "data-i18n": "fields.current-age" }, "Current Age"),
                        h("input", { name: "currentAge", type: "number", required: true, min: "1" }),
                        h("p", { class: "agc-wizard__validation-message", "data-i18n": "validation.current-age.required", "data-validates": "currentAge" }, "Please enter a valid weight in whole numbers."),
                        h("p", { "data-i18n": `hints.current-age.${this.units['weight']}` }, "\u2BA4 Enter the current age in days.")),
                    h("div", { class: "agc-wizard__actions" }, this.mode === 'step' && [
                        h("button", { class: "agc-wizard__actions-prev", "data-i18n": "actions.back", onClick: this.nextPrev.bind(this, -1) }, "\uD83E\uDC14 Back"),
                        h("button", { class: "agc-wizard__actions-next", "data-i18n": "actions.next", onClick: this.nextPrev.bind(this, 1) }, "Next \uD83E\uDC16")
                    ])),
                h("section", { "data-wizard-section": "5" },
                    h("div", { class: "agc-wizard__field" },
                        h("label", { "data-i18n": "fields.age-of-dam" }, "Age of Dam"),
                        h("select", { name: "ageOfDam" },
                            h("option", { value: "2", "data-i18n": "options.age-of-dam.2" }, "2 years old"),
                            h("option", { value: "3", "data-i18n": "options.age-of-dam.3" }, "3 years old"),
                            h("option", { value: "4", "data-i18n": "options.age-of-dam.4" }, "4 years old"),
                            h("option", { value: "5", "data-i18n": "options.age-of-dam.5" }, "5 - 10 years old"),
                            h("option", { value: "11", "data-i18n": "options.age-of-dam.11" }, "Over 10 years old")),
                        h("p", { "data-i18n": "hints.age-of-dam" }, "\u2BA4 Select the age of the dam.")),
                    h("div", { class: "agc-wizard__actions" },
                        this.mode === 'step' && h("button", { class: "agc-wizard__actions-back", "data-i18n": "actions.back", onClick: this.nextPrev.bind(this, -1) }, "\uD83E\uDC14 Back"),
                        h("button", { class: "agc-wizard__actions-next", "data-i18n": "actions.finish", onClick: this.nextPrev.bind(this, this.mode === 'step' ? 1 : 2) }, "Calculate \uD83E\uDC16"))),
                h("section", { "data-wizard-results": true },
                    h("slot", { name: "results" })))));
    }
    showTab(n) {
        if (this.mode === 'step') {
            this.cache['sections'][n].style.display = "block";
        }
        if (this.socket) {
            this.agcStepChanged.emit({ socket: this.socket, tract: this.tract, step: this.currentStep });
        }
    }
    reset() {
        this.currentStep = 0;
        this.submitted = false;
        this.showTab(0);
    }
    validateForm() {
        let valid = true;
        if (this.currentStep === 1 || this.mode === 'full') {
            if (!validate(this.form, 'birthWeight')) {
                valid = false;
            }
        }
        if (this.currentStep === 2 || this.mode === 'full') {
            if (!validate(this.form, 'currentWeight')) {
                valid = false;
            }
        }
        if (this.currentStep === 3 || this.mode === 'full') {
            if (!validate(this.form, 'currentAge')) {
                valid = false;
            }
        }
        return valid;
    }
    nextPrev(n, e) {
        e && e.preventDefault();
        if (this.mode === 'full') {
            if (!this.validateForm())
                return false;
        }
        else if (n == 1 && !this.validateForm())
            return false;
        if (this.mode === 'step') {
            this.cache['sections'][this.currentStep].style.display = "none";
        }
        this.currentStep = this.currentStep + n;
        if (this.currentStep >= this.cache['sections'].length) {
            this.submitted = true;
            this.showResults.call(this);
            return false;
        }
        this.showTab.call(this, this.currentStep);
    }
    showResults() {
        const adjustments = {
            "2": { "male": 60, "female": 54 },
            "3": { "male": 40, "female": 36 },
            "4": { "male": 20, "female": 18 },
            "5": { "male": 0, "female": 0 },
            "11": { "male": 20, "female": 18 }
        };
        let male = this.form.querySelector('#maleGender').checked;
        let gender = male ? 'male' : 'female';
        let birthWeight = parseFloat(this.form.querySelector('[name="birthWeight"').value);
        let currentWeight = parseFloat(this.form.querySelector('[name="currentWeight"').value);
        let currentAge = parseInt(this.form.querySelector('[name="currentAge"').value);
        let ageOfDam = this.form.querySelector('[name="ageOfDam').value;
        let adjustment = adjustments[ageOfDam][gender];
        let weightGain = currentWeight - birthWeight;
        let averageDailyGain = round(weightGain / currentAge, 2);
        let adjustedWeaningWeight = round((birthWeight + adjustment) + (averageDailyGain * 205), 0);
        let results = {
            socket: this.socket,
            tract: this.tract,
            gender,
            birthWeight,
            currentWeight,
            currentAge,
            ageOfDam,
            adjustment,
            weightGain,
            averageDailyGain,
            adjustedWeaningWeight,
            units: this.units
        };
        console.log('results', results);
        if (this.socket) {
            this.agcCalculated.emit({ socket: this.socket, tract: this.tract, results: Object.assign({}, results) });
        }
        this.results = Object.assign({}, results);
        this.cache['results'].forEach(result => {
            result.style.display = 'block';
        });
    }
    handleAction(e) {
        if (e.detail['action'] === 'reset') {
            this.reset();
        }
    }
    componentDidLoad() {
        var sections = Array.from(this.form.querySelectorAll('[data-wizard-section]')).map(c => c).map(c => c);
        var results = Array.from(this.form.querySelectorAll('[data-wizard-results]')).map(c => c).map(c => c);
        this.cache = Object.assign({}, this.cache, { sections: sections, results: results });
        window.document.addEventListener('agcAction', this.handleAction.bind(this));
        this.form.querySelector('[name="ageOfDam"]').options[3].defaultSelected = true;
        this.form.querySelector('#maleGender').defaultChecked = true;
        this.showTab(0);
    }
    componentDidUnload() {
        window.document.removeEventListener('agcAction', this.handleAction);
    }
    static get is() { return "agc-adjusted-weaning-weight"; }
    static get properties() { return {
        "cache": {
            "state": true
        },
        "currentStep": {
            "state": true
        },
        "mode": {
            "type": String,
            "attr": "mode"
        },
        "results": {
            "state": true
        },
        "socket": {
            "type": String,
            "attr": "socket"
        },
        "submitted": {
            "state": true
        },
        "tract": {
            "type": String,
            "attr": "tract"
        },
        "units": {
            "type": "Any",
            "attr": "units"
        }
    }; }
    static get events() { return [{
            "name": "agcCalculated",
            "method": "agcCalculated",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }, {
            "name": "agcStepChanged",
            "method": "agcStepChanged",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
}

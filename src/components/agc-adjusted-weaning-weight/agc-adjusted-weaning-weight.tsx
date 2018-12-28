
import { Component, State, Event, EventEmitter, Prop } from '@stencil/core';
import { validate, round } from '../../utils'

@Component({
    tag: 'agc-adjusted-weaning-weight'
})
export class AgcAdjustedWeaningWeight {

    @Prop() socket: string = ""
    @Prop() tract: string = ""
    @Prop() units: any = { weight: 'lbs' }
    @Prop() mode: 'full' | 'step' = 'step'
    @State() currentStep = 0
    @State() cache = {}
    @State() submitted = false
    @State() results = {}
    @Event({
        eventName: 'agcCalculated'
      }) agcCalculated: EventEmitter;
    @Event({
        eventName: 'agcStepChanged'
    }) agcStepChanged: EventEmitter;

    form: HTMLFormElement

    render() {
        return (
            <div>
                <form onSubmit={(e) => e.preventDefault()} ref={c => this.form = c as HTMLFormElement} data-wizard="agc-adjusted-weaning-weight" 
                    data-wizard-mode={this.mode}
                    class="agc-wizard">
                    <slot></slot>
                    <section data-wizard-section="1">
                        <div class="agc-wizard__field">
                            <label data-i18n="fields.gender">Gender</label>
                            <select name="gender">
                                <option value="male" data-i18n="options.gender.male">Male</option>
                                <option value="female" data-i18n="options.gender.female">Female</option>
                            </select>
                            <p data-i18n="hints.gender">⮤ Select the gender of the calf.</p>
                        </div>                        
                        <div class="agc-wizard__actions">
                            {this.mode === 'step' && <button class="agc-wizard__actions-next" data-i18n="actions.next" onClick={this.nextPrev.bind(this, 1)}>Next 🠖</button>}
                        </div>
                    </section>
                    <section data-wizard-section="2">
                        <div class="agc-wizard__field">
                            <label data-i18n="fields.birth-weight">Birth Weight</label>
                            <input name="birthWeight" type="number" required min="1" />
                            <p class="agc-wizard__validation-message" data-i18n="validation.birth-weight.required" data-validates="birthWeight">Please enter a valid weight in whole numbers.</p>
                            <p data-i18n={`hints.birth-weight.${this.units['weight']}`}>⮤ Enter the weight at birth to the nearest pound.</p>
                        </div>
                        <div class="agc-wizard__actions">
                            {this.mode === 'step' && [
                                <button class="agc-wizard__actions-prev" data-i18n="actions.back" onClick={this.nextPrev.bind(this, -1)}>🠔 Back</button>,
                                <button class="agc-wizard__actions-next" data-i18n="actions.next" onClick={this.nextPrev.bind(this, 1)}>Next 🠖</button>]}
                        </div>
                    </section>
                    <section data-wizard-section="3">
                        <div class="agc-wizard__field">
                            <label data-i18n="fields.current-weight">Current Weight</label>
                            <input name="currentWeight" type="number" required min="1" />
                            <p class="agc-wizard__validation-message" data-i18n="validation.current-weight.required" data-validates="currentWeight">Please enter a valid weight in whole numbers.</p>
                            <p data-i18n={`hints.current-weight.${this.units['weight']}`}>⮤ Enter the current weight to the nearest pound.</p>
                        </div>
                        <div class="agc-wizard__actions">
                            {this.mode === 'step' && [
                                <button class="agc-wizard__actions-prev" data-i18n="actions.back" onClick={this.nextPrev.bind(this, -1)}>🠔 Back</button>,
                                <button class="agc-wizard__actions-next" data-i18n="actions.next" onClick={this.nextPrev.bind(this, 1)}>Next 🠖</button>]}
                        </div>
                    </section>
                    <section data-wizard-section="4">
                        <div class="agc-wizard__field">
                            <label data-i18n="fields.current-age">Current Age</label>
                            <input name="currentAge" type="number" required min="1" />
                            <p class="agc-wizard__validation-message" data-i18n="validation.current-age.required" data-validates="currentAge">Please enter a valid weight in whole numbers.</p>
                            <p data-i18n={`hints.current-age.${this.units['weight']}`}>⮤ Enter the age in days when the current weight was taken.</p>
                        </div>
                        <div class="agc-wizard__actions">
                            {this.mode === 'step' && [
                                <button class="agc-wizard__actions-prev" data-i18n="actions.back" onClick={this.nextPrev.bind(this, -1)}>🠔 Back</button>,
                                <button class="agc-wizard__actions-next" data-i18n="actions.next" onClick={this.nextPrev.bind(this, 1)}>Next 🠖</button>]}
                        </div>
                    </section>
                    <section data-wizard-section="5">
                        <div class="agc-wizard__field">
                            <label data-i18n="fields.age-of-dam">Age of Dam</label>
                            <select name="ageOfDam">
                                <option value="2" data-i18n="options.age-of-dam.2">2 years old</option>
                                <option value="3" data-i18n="options.age-of-dam.3">3 years old</option>
                                <option value="4" data-i18n="options.age-of-dam.4">4 years old</option>
                                <option value="5" data-i18n="options.age-of-dam.5">5 - 10 years old</option>
                                <option value="11" data-i18n="options.age-of-dam.11">Over 10 years old</option>
                            </select>
                            <p data-i18n="hints.age-of-dam">⮤ Select the closest age of the dam.</p>
                        </div>
                        <div class="agc-wizard__actions">
                            {this.mode === 'step' && <button class="agc-wizard__actions-back" data-i18n="actions.back" onClick={this.nextPrev.bind(this, -1)}>🠔 Back</button>}
                            <button class="agc-wizard__actions-next" data-i18n="actions.finish" onClick={this.nextPrev.bind(this, this.mode === 'step' ? 1 : 5)}>Calculate 🠖</button>
                        </div>
                    </section>
                    <section data-wizard-results>                        
                        <slot name="results"></slot>                     
                    </section>
                </form>
            </div>
        );
    }

    showTab(n) {
        // This function will display the specified section of the form... 
        if (this.mode === 'step') {       
            this.cache['sections'][n].style.display = "block";
        }

        if (this.socket) {
            this.agcStepChanged.emit({socket: this.socket, tract: this.tract, step: this.currentStep})
        }
    }

    reset() {
        this.currentStep = 0
        this.submitted = false
        this.showTab(0)
    }

    validateForm () {
        let valid = true;

        if (this.currentStep === 1 || this.mode === 'full') {
            if (!validate(this.form, 'birthWeight')) {
                valid = false
            }
        }
        if (this.currentStep === 2 || this.mode === 'full') {
            if (!validate(this.form, 'currentWeight')) {
                valid = false
            }
        }
        if (this.currentStep === 3 || this.mode === 'full') {
            if (!validate(this.form, 'currentAge')) {
                valid = false
            }
        }

        return valid;
    }

    nextPrev(n, e) {
        e && e.preventDefault()
        if (this.mode === 'full') {
            if (!this.validateForm()) return false
        } else if (n == 1 && !this.validateForm()) return false

        // Hide the current tab:
        if (this.mode === 'step') {
            this.cache['sections'][this.currentStep].style.display = "none"
        }
        // Increase or decrease the current tab by 1:
        this.currentStep = this.currentStep + n
        // if you have reached the end of the form...
        if (this.currentStep >= this.cache['sections'].length) {
            // ... the form gets submitted:
            this.submitted = true
            this.showResults.call(this);
            return false;
        }
        // Otherwise, display the correct tab:
        this.showTab.call(this, this.currentStep);
    }

    showResults() {
        const adjustments = { 
            "2": { "male": 60, "female": 54 }, 
            "3": { "male": 40, "female": 36 }, 
            "4": { "male": 20, "female": 18 },  
            "5": { "male": 0, "female": 0 }, 
            "11": { "male": 20, "female": 18 }
        }

        let gender = (this.form.querySelector('[name="gender') as HTMLSelectElement).value;
        let birthWeight =  parseFloat((this.form.querySelector('[name="birthWeight"') as HTMLInputElement).value);     
        let currentWeight =  parseFloat((this.form.querySelector('[name="currentWeight"') as HTMLInputElement).value);     
        let currentAge =  parseInt((this.form.querySelector('[name="currentAge"') as HTMLInputElement).value);   
        let ageOfDam = (this.form.querySelector('[name="ageOfDam') as HTMLSelectElement).value;
        let adjustment = adjustments[ageOfDam][gender];
        let weightGain = currentWeight - birthWeight;
        let averageDailyGain = round(weightGain / currentAge, 2);
        let adjustedWeaningWeight = round((birthWeight + adjustment) + (averageDailyGain * 205), 0)

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
        }

        if (this.socket) {
            this.agcCalculated.emit({socket: this.socket, tract: this.tract, results: {...results}})
        }

        this.results = {...results}
        
        this.cache['results'].forEach(result => {
            result.style.display = 'block'
        })
    }

    handleAction(e:CustomEvent) {
        if (e.detail['action'] === 'reset') {
            this.reset();
        }
    }

    componentDidLoad() {
        var sections = Array.from(this.form.querySelectorAll('[data-wizard-section]')).map(c => c as any).map(c => c as HTMLElement)
        var results = Array.from(this.form.querySelectorAll('[data-wizard-results]')).map(c => c as any).map(c => c as HTMLElement)
        this.cache = {...this.cache, sections: sections, results: results}

        window.document.addEventListener('agcAction', this.handleAction.bind(this));

        (this.form.querySelector('[name="ageOfDam"]') as HTMLSelectElement).options[3].defaultSelected = true;
        (this.form.querySelector('[name="gender"]') as HTMLSelectElement).options[0].defaultSelected = true;

        this.showTab(0)
    }

    componentDidUnload() {
        window.document.removeEventListener('agcAction', this.handleAction);
    }
}
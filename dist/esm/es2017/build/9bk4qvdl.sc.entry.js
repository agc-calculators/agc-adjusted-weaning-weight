/*! Built with http://stenciljs.com */
import { h } from '../agc-adjusted-weaning-weight.core.js';

class AgcAdjustedWeaningWeightResults {
    constructor() {
        this.socket = "";
        this.ready = false;
    }
    render() {
        return (h("section", { "data-wizard-results": true, ref: c => this.section = c },
            h("div", { style: { display: this.ready ? 'none' : 'block' } },
                h("slot", { name: "empty" })),
            h("div", { style: { display: this.ready ? 'block' : 'none' } }, this.data && (h("ul", { class: "agc-results" },
                h("li", null,
                    h("h2", { "data-i18n": "results.adjusted-weaning-weight" }, "Adjusted 205 Day Weaning Weight"),
                    h("span", { class: "agc-results__value" }, this.data['adjustedWeaningWeight']),
                    h("sub", null, this.data['units']['weight'])),
                h("li", null,
                    h("h2", { "data-i18n": "results.average-daily-gain" }, "Average Daily Gain (ADG)"),
                    h("span", { class: "agc-results__value" }, this.data['averageDailyGain']),
                    h("sub", null, this.data['units']['weight'])))))));
    }
    handleResults(e) {
        if (e.detail['socket'] !== this.socket) {
            return;
        }
        this.data = Object.assign({}, e.detail['results']);
        this.ready = true;
    }
    componentDidLoad() {
        if (!this.socket) {
            return;
        }
        window.document.addEventListener('agcCalculated', this.handleResults.bind(this));
    }
    componentDidUnload() {
        window.document.removeEventListener('agcCalculated', this.handleResults);
    }
    static get is() { return "agc-adjusted-weaning-weight-results"; }
    static get properties() { return {
        "data": {
            "state": true
        },
        "ready": {
            "state": true
        },
        "socket": {
            "type": String,
            "attr": "socket"
        }
    }; }
}

export { AgcAdjustedWeaningWeightResults };

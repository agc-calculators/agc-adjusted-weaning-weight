export class AgcAdjustedWeaningWeightResultsPlaceholder {
    render() {
        const placeholder = () => h("span", null,
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }),
            " ",
            h("i", { class: "mark" }));
        return (h("section", null,
            h("ul", { class: "agc-results-placeholder" },
                h("li", null,
                    h("h2", { "data-i18n": "results.adjusted-weaning-weight" }, "Adjusted 205 Day Weaning Weight"),
                    placeholder()),
                h("li", null,
                    h("h2", { "data-i18n": "results.average-daily-gain" }, "Average Daily Gain (ADG)"),
                    placeholder()))));
    }
    static get is() { return "agc-adjusted-weaning-weight-results-placeholder"; }
}

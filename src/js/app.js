var partials = [];
var templates = {};
var appTemplate = null;

var reqs = partials.map(t => {
	return $.get("templates/" + t + ".html", r => {
		templates[t] = r;
	});
});
reqs.push($.get("templates/app.html", r => {
	appTemplate = r;
}));

$(document).data("document-ready-deffered", $.Deferred()).ready(() => {
    $(document).data("document-ready-deffered").resolve();
});
reqs.push($(document).data("document-ready-deffered"));

$.when.apply(null, reqs).then(() => {

    var ractive = new Ractive({
		magic: false,
		el: 'app',
		template: appTemplate,
		partials: templates,
        data: {
            kanjiMode: false,
            lessonFilter: null,
            vocab: [],
            kanji: [],

            selectedKanji: null
        }
    });

    var parseAndCommitFilter = () => {
        var raw = $("#filter-input").val();
        var parsed = null;
        try {
            parsed = raw.split(',').map(x => parseInt(x)).filter(x => !isNaN(x));
            if (parsed.length == 0) {
                ractive.set("lessonFilter", null);
                return;
            }
        } catch (e) {
            ractive.set("lessonFilter", null);
            return;
        }
        ractive.set("lessonFilter", parsed);
    };

    $("#filter-input").typeWatch({
        callback: parseAndCommitFilter,
        wait: 300,
        highlight: true,
        captureLength: 0
    });

    $.getJSON("res/vocab.json", v => {
        ractive.set("vocab", v);
    });

    $.getJSON("res/kanji.json", k => {
        ractive.set("kanji", k);
    });

    console.log(ractive);

});

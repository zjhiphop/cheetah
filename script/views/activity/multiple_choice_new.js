// Filename: views/activity/multiple_choice_new
//@off
define(['jquery', 'underscore', 'backbone', 'mustache',
         'models/activity/multiple_choice_new', 
         'help/text!tpl/mustache/activity/multiple_choice_new.tpl',
         'views/modules/vertical_question', 'models/modules/vertical_question',
         'views/widget/epaper'
         ],
//@on
function($, _, Backbone, $$, model, tpl, vq_view, vq_model, epaper) {
    var multiple_choice_new = Backbone.View.extend({
        el : $("#ets-act-multichoice"),
        initialize : function() {
        },
        render : function(page) {
            //load multiple_choice_new activity framework
            var _model = new model(), data = _model.toJSON(),
            //get data from url
            jsonData = _model.jsonData;
            compiledTemplate = $$.to_html(tpl, data);

            this.$el.html(compiledTemplate);
            this.q_con = $(data.vq_container);

            //render vertical question
            var _vq_model = new vq_model(jsonData.Activity, {
                Prev : "Prev",
                Next : "Next",
                current : 1,
                total : jsonData.Activity.Questions.length
            }), ques = new vq_view({
                model : _vq_model
            });
            this.q_con.prepend(ques.render(page).el);

            //load epaper widegt
            epaper.render({
                'width' : 600,
                'expandable' : false,
                'epaper_content' : data.epaper_content
            }, function() {
                console.log('epaper callback');
            });
        }
    });
    return new multiple_choice_new;
});

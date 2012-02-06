// Filename: views/projects/list
//off
define(['jquery', 'underscore', 'backbone', 'mustache', 
       'models/activity/multiple_choice_new', 
       'help/text!tpl/mustache/activity/multiple_choice_new.tpl', 
       'views/modules/vertical_question', 
       'models/modules/vertical_question',
       'views/widget/epaper'],
//on
function($, _, Backbone, $$, model, tpl, vq, vq_model, epaper) {
    var multiple_choice_new = Backbone.View.extend({
        el : $("#ets-act-multichoice"),
        initialize : function() {
        },
        render : function(page) {
            var _model = new model();
            var data = _model.toJSON();
            var compiledTemplate = $$.to_html(tpl, data);
            this.el.html(compiledTemplate);
            var ques = new vq({
                model : vq_model
            });
            $("#ets-act-mc-form").prepend(ques.render(page).el);
            
            epaper.render({
                'epaper_content': data.epaper_content,
                'width': 600,
                'hasOverlay': true 
            });
        }
    });
    return new multiple_choice_new;
});

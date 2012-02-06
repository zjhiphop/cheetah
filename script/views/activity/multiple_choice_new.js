// Filename: views/projects/list
//off
define(['jquery', 'underscore', 'backbone', 'mustache', 
       'models/activity/multiple_choice_new', 
       'help/text!tpl/mustache/activity/multiple_choice_new.tpl', 
       'views/modules/vertical_question', 
       'models/modules/vertical_question',
       'views/widget/epaper'],
//on
function($, _, Backbone, $$, model, tpl, vq_view, vq_model, epaper) {
    var multiple_choice_new = Backbone.View.extend({
        el : $("#ets-act-multichoice"),
        initialize : function() {
        },
        render : function(page) {
            var _model = new model();
            var data = _model.toJSON();
            var compiledTemplate = $$.to_html(tpl, data);
            this.el.html(compiledTemplate);
            var ques = new vq_view({
                model : vq_model
            });
            $("#ets-act-mc-form").prepend(ques.render(page).el);
            
            epaper.render({
                'width': 600,
                'hasOverlay': true,
                'expandable': true,
                'epaper_content': data.epaper_content
            }, function() {
                console.log('epaper callback');
            });
        }
    });
    return new multiple_choice_new;
});

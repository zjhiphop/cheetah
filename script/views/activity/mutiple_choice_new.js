// Filename: views/projects/list
//off
define(['jquery', 'underscore', 'backbone', 'mustache', 
       'models/activity/mutiple_choice_new', 
       'help/text!tpl/mustache/activity/mutiple_choice_new.tpl', 
       'views/modules/vertical_question', 
       'models/modules/vertical_question',
       'views/widget/epaper'],
//on
function($, _, Backbone, $$, model, tpl, vq, vq_model, epaper) {
    var mutiple_choice_new = Backbone.View.extend({
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
            
            // call epaper render function
            epaper.render();
        }
    });
    return new mutiple_choice_new;
});

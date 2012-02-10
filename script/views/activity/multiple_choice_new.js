// Filename: views/projects/list
//off
define(['jquery', 'underscore', 'backbone', 'mustache', 'models/activity/multiple_choice_new', 'help/text!tpl/mustache/activity/multiple_choice_new.tpl', 'views/modules/vertical_question', 'models/modules/vertical_question', 'views/widget/epaper', 'views/modules/bottom_button'],
//on
function($, _, Backbone, $$, model, tpl, vq_view, vq_model, epaper, bb_view) {
    var multiple_choice_new = Backbone.View.extend({
        el : $("#ets-act-multichoice"),
        initialize : function() {
        },
        render : function(data,next) {
            //load multiple_choice_new activity framework
            var _model = new model(data), 
            //get data from url
            json = _model.toJSON();
            compiledTemplate = $$.render(tpl, json);

            this.$el.html(compiledTemplate);
            this.q_con = $(json.vq_container);

            //render vertical question
            var _vq_model = new vq_model(json.jsonData.Activity, {
                Prev : "Prev",
                Next : "Next",
                current : 1,
                total : json.jsonData.Activity.Questions.length
            }), _vq_view = (new vq_view({
                model : _vq_model
            })).render();
            //cache small view in verticle question view 
            _vq_view.$next=_vq_view.$el.find('ets-btn-next');
            _vq_view.$prev=_vq_view.$el.find('ets-btn-prev');
            _vq_view.$submit=_vq_view.$el.find('ets-btn-submit');
            this.q_con.prepend(_vq_view.el);
            if(_.isFunction(next)){
              next();
            }
        }
    });
    return new multiple_choice_new;
});

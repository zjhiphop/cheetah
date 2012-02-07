// Filename: views/modules/vertical_question
//@off
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'help/text!tpl/mustache/common/vertical_question.tpl',
  'models/modules/vertical_question'
],
//@on
function($, _, Backbone, $$, vq_tpl, model) {
    var Vertical_Question_View = Backbone.View.extend({
        template : vq_tpl,
        initialize : function() {
            this.model.bind('change', this.render, this);
            this.model.bind('destroy', this.remove, this);
        },
        events : {
            'mousedown .ets-checkbox-b' : "checkClick",
            'click .ets-btn-prev' : "prevClick",
            'click .ets-btn-next' : "nextClick"
        },
        render : function(current) {
            data=this.model.toJSON();
            current =parseInt(current) || data.current;
            if(current > data.total) {
                current = data.total;
            }
            else
            if(current < 1) {
                current = 1;
            }
            data.current=current;
            _.extend(data, data.Questions[current - 1]);
            var compiledTemplate = $$.to_html(this.template, data);
            $(this.el).html(compiledTemplate);
            return this;
        },
        checkClick : function(e) {
            $(e.currentTarget).toggleClass('ets-checkbox-b-checked');
        },
        remove : function() {
            $(this.el).remove();
        },
        prevClick : function(e) {
            var curr = Math.max(this.model.toJSON().current - 1, 1);
            this.model.set({
                "current" : curr
            });
        },
        nextClick : function() {
            var data=this.model.toJSON(),curr = Math.min(data.current + 1, data.total);
            this.model.set({
                "current" : curr
            });
        }
    });
    return Vertical_Question_View;
});

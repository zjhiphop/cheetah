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
        render : function(page) {
            var data = this.model.toJSON();
            page=data.page||page;
            data = _.extend(data, _.filter(data.content,function(item){
               return item.page==page;
            })[0]);
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
            var curr=Math.max(this.model.toJSON().current-1,1);
            this.model.set({"page":curr,"current":curr});
        },
        nextClick : function() {
          var curr=Math.min(this.model.toJSON().current+1,this.model.toJSON().total);
          this.model.set({"page":curr,"current":curr});
        }
    });
    return Vertical_Question_View;
});

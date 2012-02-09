// Filename: views/modules/vertical_question
//@off
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'help/text!tpl/mustache/common/vertical_question.tpl',
  'models/modules/vertical_question',
  'models/modules/option_box',
  'views/modules/option_box',
  'collections/modules/option_box',
  'views/modules/bottom_button'],
//@on
function($, _, Backbone, $$, vq_tpl, model,opx_model,opx_view,opxes,bb_view) {
    var Vertical_Question_View = Backbone.View.extend({
        template : vq_tpl,
        opx_con:"#ets-act-mc-form-options",
        initialize : function() {
            this.model.bind('change', this.render, this);
            this.model.bind('destroy', this.remove, this);
            
            opxes.bind('add',this.addOne,this);
        },
        events : {
            'click .ets-btn-prev' : "prevClick",
            'click .ets-btn-next' : "nextClick"
        },
        addOne:function(opx){
          var view = new opx_view({model:opx});
          this.$el.find(this.opx_con).append(view.render().el);
        },
        render : function(current) {
            //clear current options box view
            this.clearOpts();
            //get data from model
            var data=this.model.toJSON();
            current =parseInt(current) || data.current;
            //fix error data            
            if(current > data.total) {
                current = data.total;
            }
            else
            if(current < 1) {
                current = 1;
            }
            //update attributes
            this.model.attributes.current=data.current=current;
            //get current question data
            _.extend(data, data.Questions[current - 1]);
            //load vertical question and option box container view
            var compiledTemplate = $$.render(this.template, data);
            $(this.el).html(compiledTemplate);
            //load option box
            _.each(data.Questions[current - 1].Options,function(opt){
              opxes.add(new opx_model({content:opt.Txt}));
            });

            //call bottom button module
            bb_view.render($(this.el).find("#ets-act-mc-form-ft"), {
                prevBtn: {
                    show: true
                },
                nextBtn: {
                    show: true
                },
            });
            
            return this;
        },
        clearOpts:function(){
            this.$el.find("li").remove();
        },
        remove : function() {
            this.$el.remove();
        },
        prevClick : function(e) {
            console.log(this);
            var curr = Math.max(this.model.toJSON().current - 1, 1);
            this.model.set({
                "current" : curr
            });
        },
        nextClick : function() {
            console.log(this);
            var data=this.model.toJSON(),curr = Math.min(data.current + 1, data.total);
            if(curr===data.total){
              
            }
            this.model.set({
                "current" : curr
            });            
        }
    });
    return Vertical_Question_View;
});

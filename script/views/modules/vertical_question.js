// Filename: views/modules/vertical_question
//@off
define([
  'jquery',
  'underscore',
  'backbone',
  'engine',
  'help/text!tpl/jtemplate/common/vertical_question.tpl',
  'models/modules/vertical_question',
  'models/modules/option_box',
  'views/modules/option_box',
  'collections/modules/option_box'],
//@on
function($, _, Backbone, $$, vq_tpl, model, opx_model, opx_view, opxes) {
    var Vertical_Question_View = Backbone.View.extend({
        template : vq_tpl,
        opx_con : "#ets-act-mc-form-options",
        initialize : function() {
            _.initView('vq', this);
            this.model.bind('change:current', this.render, this);            
            this.model.bind('destroy', this.destory, this);
            opxes.unbind();
            opxes.bind('add', this.addOne, this);
        },
        events : {
        },
        addOne : function(opx) {
            var view = new opx_view({
                model : opx
            }), data = this.model.toJSON(), _curr = data.current;
            _.cacheView('vq_opx',view);
            this.$el.find(this.opx_con).append(view.render().el);
        },
        render : function(current) {
            //get data from model
            var data = this.model.toJSON();
            current = parseInt(current, 10) || data.current;
            //fix error data
            if(current > data.total) {
                current = data.total;
            }
            else
            if(current < 1) {
                current = 1;
            }
            //update attributes
            this.model.attributes.current = data.current = current;
            //get current question data
            _.extend(data, data.Questions[current - 1]);
            //load vertical question and option box container view
            var compiledTemplate = $$.render(this.template, data);
            $(this.el).html(compiledTemplate);
            //load option box
            var sel = data.selection[current - 1] || [];
            //dispose opx first
            _.dispose('vq_opx');
            //notes:key is type of string,so it's need to convert type
            _.each(data.Questions[current - 1].Options, function(opt, key) {
                opxes.add(new opx_model({
                    content : opt.Txt,
                    type : data.boxType,
                    checked : ~_.indexOf(sel,parseInt(key,10)) ? true : false
                }));
            });
            return this;
        },
        setSelection : function() {
            var sels = [], data = this.model.toJSON(), _curr = data.current, _attr = this.model.attributes;
            this.$el.find("input").each(function(index, item) {
                if($(this)[0].checked) {
                    sels.push(index);
                }
            });
            _attr.selection[_curr - 1] = sels;
            _attr.result[_curr - 1] = !(_.difference(data.rightAns[_curr - 1], sels)).length;
        },
        getScore : function() {
            var data = this.model.toJSON();
            return Math.round(_.compact(data.result).length * 100 / data.total);
        }
    });
    return Vertical_Question_View;
});

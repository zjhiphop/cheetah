// Filename: views/modules/option_box
//@off
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'help/text!tpl/mustache/common/option_box.tpl'
], function($, _, Backbone,$$,template){
//@on
    var optionBoxView = Backbone.View.extend({
        tagName : "li",
        template : template,
        events : {
            "click input" : "toggleShow"
        },
        render : function() {
            var data=this.model.toJSON(),compiledTemplate = $$.render(template,data );
            this._type=data.type;
            this._checkCls= "ets-" + data.type + "-b-checked";
            this.$el.append(compiledTemplate);
            this.$label=this.$el.find('label');
            this.$input=this.$el.find('input');
            this.checkShow();
            return this;
        },
        toggleShow : function(e) {
            //@off
            if(~this._type.indexOf("radio")){
                this.$el.parent().find('label')
                .removeClass(this._checkCls);
                this.$el
                .find(":checked")
                .parents('label')
                .addClass(this._checkCls);
            }else{
                $(e.currentTarget).parents("label").toggleClass(cls);
            }           
            //@on
        },
        checkShow:function(isChecked){
          if(this.model.toJSON().checked){
           this.$label.addClass(this._checkCls);
           this.$input.attr('checked',true);
          }
        }
    });
    return optionBoxView;
})
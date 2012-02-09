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
            var compiledTemplate = $$.render(template, this.model.toJSON());
            this.$el.append(compiledTemplate);
            return this;
        },
        toggleShow : function(e) {
            var type=this.model.toJSON().type,cls = "ets-" + type + "-b-checked";
            //@off
            if(~type.indexOf("radio")){
                this.$el.parent().find('label')
                .removeClass(cls).end()
                .find(":checked")
                .parents('label')
                .addClass(cls);
            }else{
                $(e.currentTarget).parents("label").toggleClass(cls);
            }           
            //@on
        }
    });
    return optionBoxView;
})
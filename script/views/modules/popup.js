define(['jquery',
'underscore',
'backbone',
'mustache',
'models/modules/popup',
'help/text!tpl/mustache/common/popup.tpl'],function($,_,Backbone,$$,model,tpl) {

    var View = Backbone.View.extend({
        el: $('ets-activity'),

        template: tpl,

        events: {
        },

        initialize: function() {
          
        },

        render: function() {
            console.log('render');
            
            $$.render(this.template, {});

            return this;
        },

    });

    return {
        render: function() {
            var view = new View();
            view.render();
        }
    };
});


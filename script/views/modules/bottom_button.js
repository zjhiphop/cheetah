define(['jquery',
'underscore',
'backbone',
'mustache',
'models/modules/bottom_button',
'help/text!tpl/mustache/common/bottom_button.tpl'],function($,_,Backbone,$$,model,tpl) {

    var View = Backbone.View.extend({
        initialize: function() {
        },

        render: function(el) {
            var data = (new model()).toJSON();
            console.log(data);
            var temp = $(this.el).addClass('ets-act-bottom-button').append($$.to_html(tpl, data));
            $(el).append(temp);
        }

    });

    return {
        render: function(el) {
            if (!el) 
                throw ('Please provider a node that needs to hold bottom buton');
            var view = new View();
            view.render(el);
        }
    };
});

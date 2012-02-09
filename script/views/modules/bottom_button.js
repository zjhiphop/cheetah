define(['jquery',
'underscore',
'backbone',
'mustache',
'models/modules/bottom_button',
'help/text!tpl/mustache/common/bottom_button.tpl'],function($,_,Backbone,$$,model,tpl) {

    var View = Backbone.View.extend({
        initialize: function() {
        },

        render: function(el, data) {
            var viewData = (new model(data)).toJSON();
            
            var template = $(this.el).addClass('ets-act-bottom-button ets-cf').append($$.to_html(tpl, viewData));

            if (typeof el === 'string') {
                $(el).append(template);
            } else if(el instanceof jQuery) {
                el.append(template);
            }

            return this;
        }

    });

    return {
        render: function(el, data) {
            if (!el) 
                throw ('Please provider a node that needs to hold bottom buton');
            var view = new View();
            view.render(el, data);
        }
    };
});

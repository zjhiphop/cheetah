define(['jquery',
'underscore',
'backbone',
'mustache',
'help/text!tpl/mustache/common/bottom_button.tpl'],function($,_,Backbone,$$,tpl){

    var View = Backbone.View.extend({
        initialize: function() {
            console.log('bb view initialize');
        },

        render: function(el) {
            var data = {
                'prev': 'Prev',
                'next': 'Next',
                'skipActivity': 'Skip Activity'
            };
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

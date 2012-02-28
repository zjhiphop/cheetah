define(['jquery',
'underscore',
'backbone'],function($,_,Backbone) {
    var model = Backbone.Model.extend({
        defaults: {
            skipBtn: { 
                show: false,
                disable: false,
                text:'Skip Activity'
            },
            noBtn: {
                show: false,
                disable: false,
                text: 'Prev'
            },
            yesBtn: {
                show: false,
                disable: false,
                text: 'Next'
            }
        },

        initialize: function() {
            var arg = arguments[0];
            this.attributes = _.deepExtend(this.defaults,arg);
        }
    });

    return model;
});


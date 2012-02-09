define(['jquery',
'underscore',
'backbone',
'help/extend_underscore'],function($,_,Backbone,extend) {
    var model = Backbone.Model.extend({
        defaults: {
            skipBtn: { 
                show: false,
                disable: false,
                text:'Skip Activity'
            },
            prevBtn: {
                show: false,
                disable: false,
                text: 'Prev'
            },
            nextBtn: {
                show: false,
                disable: false,
                text: 'Next'
            },
            submitBtn: {
                show: false,
                disable: false,
                text: 'Submit'
            },
            questionCounter: {
                show: false,
                text: 'Question',
                currentNum: 1,
                currentTotal: 6
            },
            prevBtnAtRight: function() {
                if (this.prevBtn.show === true && this.submitBtn.show === false && this.nextBtn.show === false && this.questionCounter.show === false) {
                    return true;
                }
                return false;
            }
        },

        initialize: function() {
            var arg = arguments[0], that = this;
            var _defaults = extend.method.deepClone(this.defaults);
            this.attributes = $.extend(true,_defaults, arg);
        }

    });

    return model;
});

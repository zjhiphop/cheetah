define(['jquery',
'underscore',
'backbone'],function($,_,Backbone,extend) {
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
            var arg = arguments[0];
            this.attributes = _.deepExtend(this.defaults,arg);
        }
    });

    return model;
});

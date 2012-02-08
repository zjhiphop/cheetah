define(['underscore',
'backbone'],function(_,Backbone) {
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
            }
        }
    });

    return model;
});

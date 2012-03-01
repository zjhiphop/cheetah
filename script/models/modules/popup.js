define(['jquery',
'underscore',
'backbone'],function($,_,Backbone) {
    "use strict"

    var model = Backbone.Model.extend({
        defaults: {
            root: null,
            skipBtn: { 
                show: true,
                disable: false,
                text:'Skip Activity'
            },
            noBtn: {
                show: false,
                disable: false,
                text: 'No'
            },
            yesBtn: {
                show: true,
                disable: false,
                text: 'Yes'
            },
            clickClose: null,
            clickBtnNo: function() {
                alert('button no clicked');
            },
            clickBtnYes: function() {
                alert('button yes clicked');
            },
            content: "You have not finished the activity. Are you sure you want to skip and go to the next one?",
            closeBtn: true,
            height: null,
            width: 498
        },

        initialize: function() {
            var arg = arguments[0];
            this.attributes = _.deepExtend(this.defaults,arg);
        }
    });

    return model;
});


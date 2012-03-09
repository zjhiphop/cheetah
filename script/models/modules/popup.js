define(['jquery',
'underscore',
'backbone'],function($,_,Backbone) {
    "use strict"

    var PopupModel = Backbone.Model.extend({
        defaults: {
            root: '',
            skipBtn: { 
                show: false,
                disable: false,
                text:'Skip Activity'
            },
            noBtn: {
                show: false,
                disable: false,
                text: 'No'
            },
            yesBtn: {
                show: false,
                disable: false,
                text: 'Yes'
            },
            events: {
                clickClose: null,
                clickBtnNo: function() {
                    alert('button no clicked');
                },
                clickBtnYes: function() {
                    alert('button yes clicked');
                },
                clickBtnSkip: function() {
                    alert('button skip clicked');
                }
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

    return PopupModel;
});


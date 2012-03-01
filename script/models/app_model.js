//@off
define([
  'underscore',
  'backbone'
], function(_, Backbone,undef) {
  //@on
    var appModel = Backbone.Model.extend({
        defaults : {
            template_id : 0,
            comsrc : {
                content : {},
                epaper : {},
                audio : {}
            },
            jsonData : {

            },
            //bottom button model
            bb : {
                'container' : "#ets-act-ft",
                'config' : {

                },
                'events' : {
                    'prevClick' : null,
                    'nextClick' : null,
                    'submitClick' : null,
                    'skipClick' : null
                }
            },
            popup : {
                'container' : "#ets-activity",
                'config' : {},
                'events' : {
                    'clickClose' : null,
                    'clickBtnNo' : null,
                    'clickBtnYes' : null,
                    'clickBtnSkip' : null
                }
            }
        },
        initalize : function(opt) {
            this.attributes = _.deepExtend(this.defaults, opt);
        },
        validate : function() {

        }
    });
    return appModel;
});

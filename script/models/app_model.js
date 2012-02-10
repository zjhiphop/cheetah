//@off
define([
  'underscore',
  'backbone'
], function(_, Backbone) {
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

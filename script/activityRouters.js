//@off
define(['underscore', 
        'backbone',
        'views/activity/multiple_choice_new'
        ],
        //@on
function(_, Backbone, multichoice) {
    var activityRouter = {
        MultipleChoiceNewRouter : {
            routes : {
                // Define some URL routes
                'multichoice' : 'showMultiChoice',
                'multichoice/q:current' : 'showQuestion'
            },
            showMultiChoice : function() {
                multichoice.render(1);
            },
            showQuestion : function(page) {
                multichoice.render(page);
            }
        }
    };
    var _r = {"routes":{},"method":{}};
    _.map(activityRouter, function(items) {
        _.extend(_r.routes,items.routes);
        _.each(items,function(item,key){
          if(_.isFunction(item)){
            _r.method[key]=item;
          }
        });        
    });
    return _.extend({},_r.method,_r);
});

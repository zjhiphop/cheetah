//@off
define([
        'require',
        'underscore', 
        'backbone'
        ],
        //@on
function(require ,_ , Backbone) {
    var activityRouter = {
        //multiple_choice_new
        MCNRouter : {
            routes : {
                // Define some URL routes
                'multichoice' : 'showMultiChoice',
                'multichoice/q:current' : 'showQuestion'
            },
            showMultiChoice : function() {
              _.viewWrapper('act:mcn',1);
            },
            showQuestion : function(page) {
              _.viewWrapper('act:mcn',page);
            }
        }
    };
    var _r = {
        "routes" : {},
        "method" : {}
    };
    _.map(activityRouter, function(items) {
        _.extend(_r.routes, items.routes);
        _.each(items, function(item, key) {
            if(_.isFunction(item)) {
                _r.method[key] = item;
            }
        });
    });
    return _.extend({}, _r.method, _r);
});

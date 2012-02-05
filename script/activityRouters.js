//@off
define(['underscore', 
        'backbone',
        'views/activity/multiple_choice_new'
        ],
        //@on
function(_, Backbone, multichoice) {
    var activityRouter = {
        MutipleChoiceNewRouter : {
            routes : {
                // Define some URL routes
                'multichoice' : 'showMultiChoice',
                'multichoice/q:page' : 'showQuestion'
            },
            showMultiChoice : function() {
                multichoice.render(1);
            },
            showQuestion : function(page) {
                multichoice.render(page);
            }
        }
    };
    var routers = {};
    _.map(activityRouter, function(item) {
        _.extend(routers, item);
    });
    return routers;
});

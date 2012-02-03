//@off
define(['underscore', 
        'backbone',
        'views/activity/mutiple_choice_new'
        ],
        //@on
function(_, Backbone, mutichoice) {
    var activityRouter = {
        MutipleChoiceNewRouter : {
            routes : {
                // Define some URL routes
                'multichoice' : 'showMutiChoice',
                'multichoice/q:page' : 'showQuestion'
            },
            showMutiChoice : function() {
                mutichoice.render(1);
            },
            showQuestion : function(page) {
                mutichoice.render(page);
            }
        }
    };
    var routers = {};
    _.map(activityRouter, function(item) {
        _.extend(routers, item);
    });
    return routers;
});

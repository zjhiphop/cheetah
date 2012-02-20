//@off
define([
        'require',
        'underscore', 
        'backbone',
        'help/order!js/app'
        ],
        //@on
function(require, _, Backbone, app) {
    var activityRouter = {
        //multiple_choice_new
        routes : {
            // Define some URL routes
            '/:mode/:type/:id' : 'loadURL'
        },
        loadURL : function(mode, type, id) {
            app.render(mode, type, id);
        }
    };
    return activityRouter;
});
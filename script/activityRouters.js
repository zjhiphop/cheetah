//@off
define([
        'require',
        'underscore', 
        'backbone',
        'js/app'
        ],
        //@on
function(require, _, Backbone, app,base_view) {
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
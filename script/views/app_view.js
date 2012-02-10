// Filename: views/project/list
//@off
define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'models/app_model'
], function($, _, Backbone,$$,model){
  //@on
    var appView = Backbone.View.extend({
        el : $('#ets-activity'),
        intialize : function() {
        },
        render : function(mode, type, id) {
            var data = this.model.toJSON();
            this.loadActivity(data, function() {
                //load epaper
                _.viewWrapper("wid:epaper", data.comsrc.epaper, function() {
                    if(this.defaultsSetting.container){
                      this.$box.appendTo(this.defaultsSetting.container);
                      this.setTemplate(this.$el);
                    }
                });
            });
            this.loadComsrc(data);
        },
        loadActivity : function(data,next) {
            _.viewWrapper("act:mcn", data.activity,next);
        },
        loadComsrc : function(data) {
            //load header
            //load audio
        }
    });
    // Our module now returns an instantiated view
    // Sometimes you might return an un-instantiated view e.g. return
    // templateView
    return appView;
});

define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'help/jquery_plugins_manager',
  'help/text!tpl/mustache/common/ets_epaper.tpl',
  'models/widget/epaper'], function($, _, Backbone, $$, jq_plugin, epaper_tpl, model) {

    var Epaper_View = Backbone.View.extend({
        el: '#ets-epaper',

        template: epaper_tpl,

        initialize: function() {
        },

        events: {
            'click .ets-epaper-btn-expand': 'expandEpaper',
            'click .ets-epaper-btn-collapse': 'collaspeEaper'
        },
    
        render: function(opt) {
            var $root = $(this.el);
			this.$box = $root.parents('#ets-act-mc-box');

			var view = model.toJSON();

            if(this.$box.hasClass('ets-question-twocols')) {
            } else if(this.$box.hasClass('ets-question-fullwidth')) {
                _.extend(view, {
                    'epaper_btn': true
                });
            }
            
            var compiledTemplate = $$.to_html(this.template, view);
            $root.html(compiledTemplate);

            //call jquery plugin lionbars
			$("#ets-epaper-main").lionbars();
			/*console.log(jq_plugin);*/

            return this;
        },

        expandEpaper: function(e) {
            $(this.el).animate({left: 0}, 400, function() {
                $(e.target).removeClass().addClass('ets-epaper-btn-collapse');
            });
			this.$box.addClass('ets-epaper-open');
            $('#ets-act-overlay').fadeIn(400);
        },

        collaspeEaper: function(e) {
            $(this.el).animate({left: -600}, 400, function() {
                $(e.target).removeClass().addClass('ets-epaper-btn-expand');
            });
			this.$box.removeClass('ets-epaper-open');
            $('#ets-act-overlay').fadeOut(400);
        }
    });

    return {
        render: function(opt) {
            var epaper_view = new Epaper_View();
            epaper_view.render(opt);
        }
    };
});

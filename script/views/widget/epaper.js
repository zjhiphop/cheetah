define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'help/text!tpl/mustache/common/ets_epaper.tpl',
  'models/widget/epaper',
  'help/jquery.lionbars.0.3'], function($, _, Backbone, $$, epaper_tpl, model) {

    var Epaper_View = Backbone.View.extend({
        el: '#ets-epaper',

        template: epaper_tpl,

        initialize: function() {
            this.defaultsSetting = model.toJSON();
        },

        events: {
            'click .ets-epaper-btn-expand': 'expandEpaper',
            'click .ets-epaper-btn-collapse': 'collaspeEaper'
        },
    
        /* 
         * options inputs
         *  @width: number,
         *  @hasOverlay: boolean
         *  @epaper_content: string, (HTML accept)
         */
		render: function(opt) {
            _.extend(this.defaultsSetting, opt);

            var $root = $(this.el);
            $root.wrap('<div id="ets-epaper-outer">');
			this.$box = $root.parents('#ets-epaper-outer');
            
            // generate overlay
            if (this.defaultsSetting.hasOverlay) {
                this.setOverlay();
            }

			this.setTemplate($root);
            return this;
        },

        setOverlay: function() {
            this.$box.after("<div id='ets-act-overlay'>");
        },

		setTemplate: function($root) {
            
            var compiledTemplate = $$.to_html(this.template, this.defaultsSetting);
            $root.html(compiledTemplate);

            $root.css("left", - this.defaultsSetting.width);
            $root.find("#ets-epaper-main").width(this.defaultsSetting.width);

            //call jquery plugin lionbars
			$("#ets-epaper-main").lionbars();
		},

        expandEpaper: function(e) {
            $(this.el).animate({left: 0}, 400, function() {
                $(e.target).removeClass().addClass('ets-epaper-btn-collapse');
            });
            this.$box.addClass('ets-epaper-open');
            $('#ets-act-overlay').fadeIn(400);
        },

        collaspeEaper: function(e) {
            $(this.el).animate({left: -this.defaultsSetting.width}, 400, function() {
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

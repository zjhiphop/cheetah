/*
 * this epaper widget is depand on jquery plugin lionbars.
 */
define(['jquery', 
'underscore', 
'backbone', 
'mustache', 
'help/text!tpl/mustache/common/ets_epaper.tpl',
'models/widget/epaper', 
'help/jquery.lionbars.0.3'], function($, _, Backbone, $$, epaper_tpl, model) {

    var Epaper_View = Backbone.View.extend({
        el : '#ets-epaper',

        template : epaper_tpl,

        initialize : function() {
            this.defaultsSetting = model.toJSON();
        },
        events : {
            'click .ets-epaper-btn-expand' : 'expandEpaper',
            'click .ets-epaper-btn-collapse' : 'collaspeEaper'
        },

        /*
         * options inputs
         *  @width: number,
         *  @hasOverlay: boolean
         *  @expandable: boolean
         *  @epaper_content: string, (HTML accept)
         */
        render : function(opt) {
            _.extend(this.defaultsSetting, opt);

            console.log(this.defaultsSetting);

            var $root = $(this.el);
            $root.wrap('<div id="ets-epaper-outer"><div id="ets-epaper-inner"></div></div>');
            this.$box = $root.parents('#ets-epaper-outer');

            this.setTemplate($root);

            return this;
        },

        setTemplate : function($root) {
            var compiledTemplate = $$.to_html(this.template, this.defaultsSetting);
            $root.html(compiledTemplate);

            if(this.defaultsSetting.expandable) {
                $root.css("left", - this.defaultsSetting.width);
                $root.find("#ets-epaper-main").width(this.defaultsSetting.width);

                // generate overlay
                if(this.defaultsSetting.hasOverlay) {
                    this.setOverlay();
                    this.outerWidth = '100%';
                } else {
                    this.outerWidth = this.defaultsSetting.width + 36;
                }
            } else {
                this.$box.width(this.defaultsSetting.width).css('overflow', 'visible');
            }
            //call jquery plugin lionbars
            // if browser is not lower than IE9,
            // then use lionbars plugin
            if(!($.browser.msie && ($.browser.version || 0) < 9)) {
                $("#ets-epaper-main").lionbars();
            }
		},

        setOverlay : function() {
            this.$box.prepend("<div id='ets-act-overlay'>");
        },

        expandEpaper: function(e) {
            this.$box.width(this.outerWidth);
            $(this.el).animate({left: 0}, 400, function() {
                $(e.target).removeClass().addClass('ets-epaper-btn-collapse');
            });
            $('#ets-act-overlay').animate({opacity:0.5},400);
        },
        collaspeEaper : function(e) {
            $(this.el).animate({
                left : -this.defaultsSetting.width
            }, 400, function() {
                $(e.target).removeClass().addClass('ets-epaper-btn-expand');
                $('#ets-epaper-outer').width('36px');
            });
            $('#ets-act-overlay').animate({opacity:0},400);
        }
    });

    return {
        render : function(opt, callback) {
            var epaper_view = new Epaper_View();
            epaper_view.render(opt);

            if(_.isFunction(callback)) {
                callback();
            }
        }
    };
});

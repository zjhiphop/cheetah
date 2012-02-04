define([
  'jquery',
  'underscore',
  'backbone',
  'mustache',
  'help/text!tpl/mustache/common/ets_epaper.tpl',], function($, _, Backbone, $$, epaper_tpl) {

    var Epaper_View = Backbone.View.extend({
        el: '#ets-epaper',

        template: epaper_tpl,

        initialize: function() {
        },

        events: {
            'click .ets-epaper-btn-expand': 'expandEpaper',
            'click .ets-epaper-btn-collapse': 'collaspeEaper'
        },
    
        view: {
            'epaper_btn': false,
        },

        render: function(opt) {
            var $root = $(this.el),
                $box = $root.parents('#ets-act-mc-box');
            
            if($box.hasClass('ets-question-twocols')) {
            } else if($box.hasClass('ets-question-fullwidth')) {
                _.extend(this.view, {
                    'epaper_btn': true
                });
            }
            
            var compiledTemplate = $$.to_html(this.template, this.view);
            $root.html(compiledTemplate);

            //call jquery plugin lionbars
            $("#ets-epaper-main").lionbars();

            return this;
        },

        expandEpaper: function(e) {
            $(this.el).animate({left: 0}, 400, function() {
                $(e.target).removeClass().addClass('ets-epaper-btn-collapse');
            });
            $('#ets-act-overlay').fadeIn(400);
        },

        collaspeEaper: function(e) {
            $(this.el).animate({left: -600}, 400, function() {
                $(e.target).removeClass().addClass('ets-epaper-btn-expand');
            });
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

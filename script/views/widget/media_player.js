define(['jquery',
'underscore',
'backbone',
'engine',
'models/widget/media_player',
'help/text!tpl/jtemplate/common/media_player.tpl',
'mejs'], function($, _, Backbone, $$, Model, tpl) {
	"use strict"

	var AudioPlayerBar = Backbone.View.extend({
		tagName: "div",

		className: 'act-media_player',

		template: tpl,

		events: {
			'mouseover .mejs-playpause-button button': 'hoverButton',
			'mouseout .mejs-playpause-button button': 'leaveButton'
		},

		initialize: function() {
			
		},

		domReady: false,

		render: function() {
			var that = this;

			$(this.el).append($$.render(this.template, this.model.toJSON()));

			// replace audio tag when this element has been insert into DOM
			var myTime = setInterval(function() {
				if ($(that.el).parent().length > 0) {
					that.replaceByME();
					that.domReady = true;
					clearInterval(myTime);
				}
				clearInterval(myTime);
			}, 7);

			return this;
		},

		// replace audio tag, using media elemenet player
		replaceByME: function() {
			var options = {
				autosizeProgress: false,
				startVolume: 1,
				loop: false,
				enableAutosize: true,
				features: ['playpause', 'progress','duration'],
				pluginPath: window.cacheSvr + '/_imgs/ui/courseware/study/',
				enableKeyboard: false
			};

			if(this.model.get('hasBar')) {
				options = _.deepExtend(options, {
					audioWidth: 587,
					audioHeight: 43
				});
			} else {
				options = _.deepExtend(options, {
					audioWidth: 36,
					audioHeight: 41,
					features: ['playpause']
				});

				$(this.el).addClass('media_player_nobar');
			}
			
			this.$('audio').mediaelementplayer(options);
		},

		/*button events*/
		hoverButton: function(e) {
			$(e.target).addClass('mejs-button-hover');
		},
		leaveButton: function(e) {
			$(e.target).removeClass('mejs-button-hover');
		}
	});

	return {
		render: function(opts) {
			var model = new Model(opts);
			return (new AudioPlayerBar({model: model})).render().el;
		}
	};
});

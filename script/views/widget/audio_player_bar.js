define(['jquery',
'underscore',
'backbone',
'engine',
'models/widget/audio_player_bar',
'help/text!tpl/jtemplate/common/audio_player_bar.tpl',
'mejs'], function($, _, Backbone, $$, Model, tpl) {
	"use strict"

	var AudioPlayerBar = Backbone.View.extend({
		tagName: "div",

		className: 'act-audio_player_bar',

		template: tpl,

		initialize: function() {
		},

		domReady: false,

		render: function() {
			var that = this;

			$(this.el).html($$.render(this.template, this.model.toJSON()));

			// replace audio tag when this element has been insert into DOM
			var myTime = setInterval(function() {
				if ($('body').find(that.el).length > 0) {
					that.callMejs();
					that.domReady = true;
					clearInterval(myTime);
				}
			}, 7);

			return this;
		},

		// replace audio tag, using media elemenet player
		callMejs: function() {
			this.$('audio').mediaelementplayer({
				audioWidth: 587,
				audioHeight: 43,
				autosizeProgress: false,
				startVolume: 1,
				loop: false,
				enableAutosize: true,
				features: ['playpause', 'progress','duration'],
				pluginPath: window.cacheSvr + '/_imgs/ui/courseware/study/'
			});
		}
	});

	return {
		render: function(src) {
			var model = new Model({src: src});
			return (new AudioPlayerBar({model: model})).render().el;
		}
	};
});

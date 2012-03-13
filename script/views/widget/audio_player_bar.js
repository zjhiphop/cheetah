define(['jquery',
'underscore',
'backbone',
'mustache',
// 'engine',
'help/text!tpl/mustache/common/audio_player_bar.tpl',
'mejs'], function($, _, Backbone, $$, tpl) {
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
			var data = {
				src: "http://local.englishtown.com/Juno/school/audios/5.1.3%20lo2.4%20comp.mp3"
			};

			$(this.el).html($$.render(this.template, data));

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
				pluginPath: cacheSvr + '_imgs/ui/courseware/study/'
			});
		}
	});

	return AudioPlayerBar;
});
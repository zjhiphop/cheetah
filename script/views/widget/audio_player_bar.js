define(['jquery',
'underscore',
'backbone',
'engine',
'mejs'], function($, _, Backbone, $$) {
	"use strict"

	var AudioPlayerBar = Backbone.View.extend({
		tagName: "audio",

		initialize: function() {

		},

		render: function() {
			$(this.el).attr({
				src: "http://local.englishtown.com/Juno/school/audios/5.1.3%20lo2.4%20comp.mp3",
				type: "audio/mp3",
				controls: "controls"
			});

			

			return this;
		},

		insertDOM: function() {
			$(this.el).mediaelementplayer({
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
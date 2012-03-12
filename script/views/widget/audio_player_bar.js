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

			console.log($(this.el).mediaelementplayer());

			return this;
		}
	});

	return AudioPlayerBar;
});
define(function(require) {
    return function(opt){
        require(['modernizr', 'underscore'], function(Modernizr, _) {
            // if HTML5 mp3 audio can be used,
            // then use HTML5, or use Flash
            if(Modernizr.audio.mp3 === 'true' || Modernizr.audio.mp3 === 'maybe' || Modernizr.ipad) {
                require(['views/widget/audio_player_html5'],function(audioPlayer) {
                    audioPlayer.render(opt);
                });
            } else {
                require(['views/widget/audio_player_flash'],function(audioPlayer) {
                    audioPlayer.render(opt);
                });
            }
        });
    }
});

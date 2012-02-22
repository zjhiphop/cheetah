define(function(require) {
    return function(opt){
        require(['underscore'], function(_) {
            // if HTML5 mp3 audio can be used,
            // then use HTML5, or use Flash
            if(_.mp3() === 'true' || _.mp3() === 'maybe' || _.ipad()) {
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

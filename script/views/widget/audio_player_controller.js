define(function(require) {
    return function(opt){
        require(['views/widget/audio_player_flash'],function(audioPlayer) {
            audioPlayer.render(opt);
        })
    }
});

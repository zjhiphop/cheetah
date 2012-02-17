<div id="{{id}}" class="act-player">
  <a class="act-player_icon act-player_pl_n">
    <div class="act-player_loading">
      <img src="{{cacheSvr}}/_imgs/ui/courseware/study/audio_loading2-png8.png" alt=""/>
    </div>
  </a>
  <div class="act-player_ps_panel">
    <span class="act-player_ps_total"></span>
    <span class="act-player_ps_current"></span>
    <span class="act-player_ps_icon" draggable="true"></span>
    <span class="act-player_ps_close"></span>
  </div>
  {{#src}}
  <video preload="none" class="act-player_audio"></video>
  {{/src}}
  <span class="ets-none act-hide_audio">{{hidesrc}}</span>
</div>


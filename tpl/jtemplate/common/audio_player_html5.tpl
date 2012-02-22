<div id="{$T.id}" class="act-player">
  <a class="act-player_icon act-player_pl_n">
    <div class="act-player_loading">
      <img src="{$T.cacheSvr}/_imgs/ui/courseware/study/audio_loading2-png8.png" alt=""/>
    </div>
  </a>
  <div class="act-player_ps_panel">
    <span class="act-player_ps_total"></span>
    <span class="act-player_ps_current"></span>
    <span class="act-player_ps_icon"></span>
    <span class="act-player_ps_close"></span>
  </div>
  {#if $T.src}
  <video preload="none" class="act-player_audio"></video>
  {/if}
  <span class="ets-none act-hide_audio">{$T.hidesrc}</span>
</div>



<div id="ets-epaper-main-hd"></div>
<div id="ets-epaper-main-ft"></div>
<div id="ets-epaper-main">
    <div id="ets-epaper-content"> 
        {$T.epaper_content}
    </div>
</div>
{#if $T.expandable}
<div id="ets-epaper-handler">
    <div class="ets-epaper-btn-expand"></div>
</div>
{#else}
<div id="ets-epaper-right-border">
</div>
{#/if}

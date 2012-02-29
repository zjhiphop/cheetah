    <div id="act-popup_shadow"></div>
    <div id="act-popup" class="act-box ets-cf">

        {#if $T.closeBtn}
        <a href="#" id="act-popup_close"></a>
        {/endif}

        <div class="act-popup_inner ets-cf">
            <div class="act-popup_bg_topleft ets-cf">
                <span class="act-popup_content">
                    {$T.content}
                </span>

                <div id="act-popup_btns">
                    {#if $T.noBtn.show}
                    <a href="#" id="act-popup_btnno" class="ets-btn-no {#if $T.noBtn.disable}ets-btn-no-disabled{/endif}">
                        <span>{$T.noBtn.text}</span>
                    </a>
                    {/endif}

                    {#if $T.yesBtn.show}
                    <a id="act-popup_btnyes" href="#" class="ets-btn-yes {#if $T.yesBtn.disable}ets-btn-yes-disabled{/endif}">
                        <span>{$T.yesBtn.text}</span>
                    </a>
                    {/endif}

                    {#if $T.skipBtn.show}
                    <a href="#" id="act-popup_btnskip" class="ets-btn-skip {#if $T.skipBtn.disable}ets-btn-skip-disabled{/endif}">
                        <span>{$T.skipBtn.text}</span>
                    </a>
                    {/endif}
                </div>

            </div>      
            <div class="act-popup_bg_topright">
            </div>
        </div>

        <div class="act-popup_bg_bottomleft"></div>
        <div class="act-popup_bg_bottomright"></div>
    </div>

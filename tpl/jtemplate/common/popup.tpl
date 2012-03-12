    <div class="act-popup_shadow"></div>
    <div class="ct-popup act-box">

        {#if $T.closeBtn}
        <a href="#" class="act-popup_close"></a>
        {/endif}

        <div class="act-popup_inner">
            <div class="act-popup_bg_left">
                <span class="act-popup_content">
                    {$T.content}
                </span>

                <div class="act-popup_btns ets-cf">
                    {#if $T.noBtn.show}
                    <a href="#" class="ets-btn-no {#if $T.noBtn.disable}ets-btn-no-disabled{/endif}">
                        <span>{$T.noBtn.text}</span>
                    </a>
                    {/endif}

                    {#if $T.yesBtn.show}
                    <a href="#" class="ets-btn-yes {#if $T.yesBtn.disable}ets-btn-yes-disabled{/endif}">
                        <span>{$T.yesBtn.text}</span>
                    </a>
                    {/endif}

                    {#if $T.skipBtn.show}
                    <a href="#" class="ets-btn-skip {#if $T.skipBtn.disable}ets-btn-skip-disabled{/endif}">
                        <span>{$T.skipBtn.text}</span>
                    </a>
                    {/endif}
                </div>

            </div>      
        </div>

        <div class="act-popup_footer">
            <div class="act-popup_bg_left"></div>
        </div>
    </div>

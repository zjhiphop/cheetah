    <div id="act-popup_shadow"></div>
    <div id="act-popup" class="act-box ets-cf">

        {{#closeBtn}}
        <a href="#" id="act-popup_close"></a>
        {{/closeBtn}}

        <div class="act-popup_inner ets-cf">
            <div class="act-popup_bg_topleft ets-cf">
                <span class="act-popup_content">
                    {{content}}
                </span>

                <div id="act-popup_btns">
                    {{#noBtn.show}}
                    <a href="#" id="act-popup_btnno" class="ets-btn-no {{#noBtn.disable}}ets-btn-no-disabled{{/noBtn.disable}}">
                        <span>{{noBtn.text}}</span>
                    </a>
                    {{/noBtn.show}}

                    {{#yesBtn.show}}
                    <a id="act-popup_btnyes" href="#" class="ets-btn-yes {{#yesBtn.disable}}ets-btn-yes-disabled{{/yesBtn.disable}}">
                        <span>{{yesBtn.text}}</span>
                    </a>
                    {{/yesBtn.show}}

                    {{#skipBtn.show}}
                    <a href="#" id="act-popup_btnskip" class="ets-btn-skip {{#skipBtn.disable}}ets-btn-skip-disabled{{/skipBtn.disable}}">
                        <span>{{skipBtn.text}}</span>
                    </a>
                    {{/skipBtn.show}}
                </div>

            </div>      
            <div class="act-popup_bg_topright">
            </div>
        </div>

        <div class="act-popup_bg_bottomleft"></div>
        <div class="act-popup_bg_bottomright"></div>
    </div>


<div class="act-mov_rmid_title">
    <span class="act-mov_rtop_ques">{$T.QuesTxt}</span>
    <span class="act-mov_rtop_play_icon"></span>
    <span class="act-mov_rtop_words"></span>
</div>
<ul class="act-mov_rmid_opt">
    {#foreach $T.Options as record}
        <li class="act-mov_btn">
            <div class="act-mv_fk_icon">
                <span class="act-feedback_icon act-feedback_icon_correct"></span>
            </div>
            <div class="act-mov_btn_words_margin">
                <span class="act-mov_btn_words">{$T.record.AnsText}</span>
            </div>
            <div class="act-mov_btn_radio_margin">
                <span class="act-mov_btn_radio"></span>
            </div>
        </li>
    {#/for}
</ul>

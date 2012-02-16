    {#if $T.skipBtn.show}
    <!--Skip button-->
    <div class="ets-btn-skip {#if $T.skipBtn.disable}ets-btn-skip-disabled{#/if}">
        <span>{$T.skipBtn.text}</span>
    </div>
    {#/if}

    {#if $T.nextBtn.show}
    <!--Next button-->
    <div class="ets-btn-next {#if $T.nextBtn.disable}ets-btn-next-disabled{#/if}" >
        <span>{$T.nextBtn.text}</span>
    </div>
    {#/if}

    <!--Submit button-->
    <div class="ets-btn-submit {#if $T.submitBtn.disable}ets-btn-submit-disabled{#else}ets-none{#/if}">
        <span>{$T.submitBtn.text}</span>
    </div>

    <!--Question counter-->
    {#if $T.questionCounter.show}
    <div id="act-question_counter">    
        <span>{$T.questionCounter.text}</span>    
        <span id="act-current_number">{$T.questionCounter.currentNum}</span>    
        <span>/</span>
        <span id="act-current_total">{$T.questionCounter.currentTotal}</span>
    </div>
    {#/if}

    {#if $T.prevBtn.show}
    <!--Back button-->
    <div class="ets-btn-prev{#if $T.prevBtn.disable}ets-btn-prev-disabled{#/if} {#if $T.prevBtnAtRight}ets-reduce-right-margin{#/if}">
        <span>{$T.prevBtn.text}</span>
    </div>
    {#/if}

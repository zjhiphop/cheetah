    {{#skipBtn.show}}
    <!--Skip button-->
    <div class="ets-btn-skip {{#skipBtn.disable}}ets-btn-skip-disabled{{/skipBtn.disable}}">
        <span>{{skipBtn.text}}</span>
    </div>
    {{/skipBtn.show}}

    {{#nextBtn.show}}
    <!--Next button-->
    <div class="ets-btn-next {{#nextBtn.disable}}ets-btn-next-disabled{{/nextBtn.disable}}" >
        <span>{{nextBtn.text}}</span>
    </div>
    {{/nextBtn.show}}

    <!--Question counter-->
    {{#questionCounter.show}}
    <div id="act-question_counter">    
        <span>{{questionCounter.text}}</span>    
        <span id="act-current_number">{{questionCounter.currentNum}}</span>    
        <span>/</span>
        <span id="act-current_total">{{questionCounter.currentTotal}}</span>
    </div>
    {{/questionCounter.show}}

    {{#prevBtn.show}}
    <!--Back button-->
    <div class="ets-btn-back {{#prevBtn.disable}}ets-btn-back-disabled{{/prevBtn.disable}}">
        <span>{{prevBtn.text}}</span>
    </div>
    {{/prevBtn.show}}

    {{#submitBtn.show}}
    <!--Submit button-->
    <div class="ets-btn-submit {{#submitBtn.disable}}ets-btn-submit-disabled{{/submitBtn.disable}}">
        <span>{{submitBtn.text}}</span>
    </div>
    {{/submitBtn.show}}

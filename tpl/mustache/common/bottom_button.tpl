    <!--Skip button-->
    <div class="ets-btn-skip {{#skipBtn.disable}}ets-btn-skip-disabled{{/skipBtn.disable}}">
        <span>{{skipBtn.text}}</span>
    </div>

    <!--Next button-->
    <div class="ets-btn-next {{#nextBtn.disable}}ets-btn-next-disabled{{/nextBtn.disable}}" >
        <span>{{nextBtn.text}}</span>
    </div>
    <!--Question counter-->
    <div id="act-question_counter">    
        <span>Question</span>    
        <span id="act-current_number">2</span>    
        <span>/</span>
        <span id="act-current_total">6</span>
    </div>
    <!--Back button-->
    <div class="ets-btn-back {{#prevBtn.disable}}ets-btn-back-disabled{{/prevBtn.disable}}">
        <span>{{prevBtn.text}}</span>
    </div>

    <!--Submit button-->
    <div class="ets-btn-submit {{#submitBtn.disable}}ets-btn-submit-disabled{{/submitBtn.disable}}">
        <span>{{submitBtn.text}}</span>
    </div>

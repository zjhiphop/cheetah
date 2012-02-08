<div id="ets-act-mc-form-hd">
    <h2>Question <span class="ets-act-mc-fn-curr">{{current}}</span> of <span class="ets-act-mc-fn-total">{{total}}</span></h2>
</div>
<div id="ets-act-mc-form-bd">
  <div id="ets-act-mc-form-question">
      {{Ques}}
  </div>
  <div id="ets-act-mc-form-options">
    {{#Options}}
      <label class="ets-checkbox-b ets-act-mc-checkbox" for="{{id}}"> 
        <span class="ets-checkbox-b-wrapper">
          <span>
            <input name="{{id}}" id="{{id}}" type="checkbox" />
                  {{Txt}}
          </span>
        </span> 
      </label>
    {{/Options}}
  </div>
</div>
<div id="ets-act-mc-form-ft" class="ets-cf">
  <div class="ets-btn-prev">
      <span>{{Prev}}</span>
  </div>
  <div class="ets-btn-next">
      <span>{{Next}}</span>
  </div>
</div>

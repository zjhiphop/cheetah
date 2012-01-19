{{#items}}
  <label class="ets-checkbox-b" for="{{id}}"> 
    <span class="ets-checkbox-b-wrapper">
      <span>
        <input name="{{id}}" id="{{id}}" type="checkbox" >
              {{item}}
      </span>
    </span> 
  </label>
{{/items}}
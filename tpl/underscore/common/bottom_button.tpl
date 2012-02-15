<%if(skipBtn.show){%>
<!--Skip button-->
<div class="ets-btn-skip <%if(skipBtn.disable){%>ets-btn-skip-disabled<%}%>">
    <span><%=skipBtn.text%></span>
</div>
<%}%>

<%if(nextBtn.show){%>
<!--Next button-->
<div class="ets-btn-next <%if(nextBtn.disable){%>ets-btn-next-disabled <%}%>" >
    <span><%=nextBtn.text%></span>
</div>
<%}%>

<!--Submit button-->
<div class="ets-btn-submit <%if(submitBtn.disable){%>ets-btn-submit-disabled<%}%> <%if(!submitBtn.show){%>ets-none<%}%> ">
    <span><%=submitBtn.text%></span>
</div>

<!--Question counter-->
<%if(questionCounter.show){%>
<div id="act-question_counter">
    <span><%=questionCounter.text%></span>
    <span id="act-current_number"><%=questionCounter.currentNum%></span>
    <span>/</span>
    <span id="act-current_total"><%=questionCounter.currentTotal%></span>
</div>
<%}%>


<%if(prevBtn.show){%>
<!--Back button-->
<div class="ets-btn-prev <%if(prevBtn.disable){%>ets-btn-prev-disabled<%}%> <%if(prevBtnAtRight){%>ets-reduce-right-margin<%}%>">
    <span><%=prevBtn.text%></span>
</div>
<%}%> 
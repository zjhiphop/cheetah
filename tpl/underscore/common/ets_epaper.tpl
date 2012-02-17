<div id="ets-epaper-main-hd"></div>
<div id="ets-epaper-main-ft"></div>
<div id="ets-epaper-main">
    <div id="ets-epaper-content"> 
         <%= epaper_content %>
    </div>
</div>

<%if(expandable){%>
<div id="ets-epaper-handler">
    <div class="ets-epaper-btn-expand"></div>
</div>
<%}%>
<%if(!expandable){%>
<div id="ets-epaper-right-border">
</div>
<%}%>

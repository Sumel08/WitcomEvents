//# sourceMappingURL=fnCreatedRow.js.map
oTest.fnStart("fnCreatedRow tests");
$(document).ready(function(){var b=0,a=!1;$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnCreatedRow:function(){b++}});oTest.fnWaitTest("Row created is called once for each row on init",null,function(){return 10===b});oTest.fnWaitTest("Created is called back on other draws",function(){$("#example th:eq(1)").click()},function(){return 20===b});oTest.fnWaitTest("Three arguments for the function",function(){oSession.fnRestore();b=!0;
a=!1;$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnCreatedRow:function(){3!==arguments.length&&(b=!1)},fnInitComplete:function(){a=!0}})},function(){return b&&a});oTest.fnWaitTest("First argument is a TR element",function(){oSession.fnRestore();b=!0;a=!1;$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnCreatedRow:function(a){"TR"!==a.nodeName&&(b=!1)},fnInitComplete:function(){a=
!0}})},function(){return b&&a});oTest.fnWaitTest("Second argument is an array with 5 elements",function(){oSession.fnRestore();b=!0;a=!1;$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnCreatedRow:function(a,c){5!==c.length&&(b=!1)},fnInitComplete:function(){a=!0}})},function(){return b&&a});oTest.fnWaitTest("Third argument is the data source for the row",function(){oSession.fnRestore();b=!0;a=!1;$("#example").dataTable({bServerSide:!0,
sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnCreatedRow:function(a,c,d){c!==this.fnSettings().aoData[d]._aData&&(b=!1)},fnInitComplete:function(){a=!0}})},function(){return b&&a});oTest.fnWaitTest("TR element is tied to the correct data",function(){oSession.fnRestore();a=b=!1;$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnCreatedRow:function(a,c,d){"Firefox 1.0"===c[1]&&"1.7"==$("td:eq(3)",a).html()&&
(b=!0)},fnInitComplete:function(){a=!0}})},function(){return b&&a});oTest.fnComplete()});
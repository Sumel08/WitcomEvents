//# sourceMappingURL=fnDrawCallback.js.map
oTest.fnStart("fnDrawCallback");
$(document).ready(function(){var b=$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php"}),c=b.fnSettings(),a;oTest.fnWaitTest("Default should be null",null,function(){return null==c.fnDrawCallback});oTest.fnWaitTest("One argument passed",function(){oSession.fnRestore();a=-1;$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnDrawCallback:function(){a=arguments.length}})},function(){return 1==
a});oTest.fnWaitTest("That one argument is the settings object",function(){oSession.fnRestore();b=$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnDrawCallback:function(b){a=b}})},function(){return b.fnSettings()==a});oTest.fnWaitTest("fnRowCallback called once on first draw",function(){oSession.fnRestore();a=0;$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnDrawCallback:function(){a++}})},
function(){return 1==a});oTest.fnWaitTest("fnRowCallback called once on each draw there after as well",function(){$("#example_next").click();$("#example_next").click();$("#example_next").click()},function(){return 1<a});oTest.fnComplete()});
//# sourceMappingURL=fnInitComplete.js.map
oTest.fnStart("fnInitComplete");
$(document).ready(function(){oTest.fnWaitTest("Two arguments passed",function(){mPass=-1;$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnInitComplete:function(){mPass=2===arguments.length&&void 0===arguments[1]}})},function(){return mPass});oTest.fnWaitTest("That one argument is the settings object",function(){oSession.fnRestore();oTable=$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnInitComplete:function(a){mPass=
a}})},function(){console.log(oTable.fnSettings(),mPass);return oTable.fnSettings()===mPass});oTest.fnWaitTest("fnInitComplete called once on first draw",function(){oSession.fnRestore();mPass=0;$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnInitComplete:function(){mPass++}})},function(){return 1==mPass});oTest.fnWaitTest("fnInitComplete never called there after",function(){$("#example_next").click();$("#example_next").click();$("#example_next").click()},
function(){return 1==mPass});oTest.fnWaitTest("10 rows in the table on complete",function(){oSession.fnRestore();mPass=0;$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",fnInitComplete:function(){mPass=$("#example tbody tr").length}})},function(){return 10==mPass});oTest.fnComplete()});
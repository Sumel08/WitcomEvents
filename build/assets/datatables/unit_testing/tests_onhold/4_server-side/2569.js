//# sourceMappingURL=2569.js.map
oTest.fnStart("Destroy with hidden columns");
$(document).ready(function(){$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",aoColumnDefs:[{bSearchable:!1,bVisible:!1,aTargets:[2]},{bVisible:!1,aTargets:[3]}],fnInitComplete:function(){this.fnDestroy()}});oTest.fnWaitTest("Check that the number of columns in table is correct",null,function(){return 5==$("#example tbody tr:eq(0) td").length});oTest.fnTest("And with scrolling",function(){$("#example").dataTable({bServerSide:!0,sAjaxSource:"../../../examples/server_side/scripts/server_processing.php",
sScrollY:200,aoColumnDefs:[{bSearchable:!1,bVisible:!1,aTargets:[2]},{bVisible:!1,aTargets:[3]}],fnInitComplete:function(){this.fnDestroy()}})},function(){return 5==$("#example tbody tr:eq(0) td").length});oTest.fnComplete()});
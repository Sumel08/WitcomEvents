//# sourceMappingURL=2914-state-save-sort.js.map
oTest.fnStart("2914 - State saving with an empty array");
$(document).ready(function(){document.cookie="";$("#example").dataTable({bStateSave:!0,aaSorting:[]});oTest.fnTest("No sort",null,function(){return"4"==$("#example tbody td:eq(3)").html()});oTest.fnTest("Next page",function(){$("#example").dataTable().fnPageChange("next")},function(){return"Camino 1.0"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Destroy the table and remake it - checking we are still on the next page",function(){$("#example").dataTable({bStateSave:!0,aaSorting:[],bDestroy:!0})},
function(){return"Camino 1.0"==$("#example tbody td:eq(1)").html()});oTest.fnCookieDestroy($("#example").dataTable());oTest.fnComplete()});
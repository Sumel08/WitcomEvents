//# sourceMappingURL=bInfo.js.map
oTest.fnStart("bInfo");
$(document).ready(function(){$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0});oTest.fnWaitTest("Info div exists by default",null,function(){return null!=document.getElementById("example_info")});oTest.fnWaitTest("Info can be disabled",function(){oSession.fnRestore();$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,bInfo:!1})},function(){return null==document.getElementById("example_info")});oTest.fnWaitTest("Info enabled override",
function(){oSession.fnRestore();$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,bInfo:!0})},function(){return null!=document.getElementById("example_info")});oTest.fnComplete()});
//# sourceMappingURL=aoColumns.sWidth.js.map
oTest.fnStart("aoColumns.sWidth");
$(document).ready(function(){var a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,bAutoWidth:!1,aoColumns:[null,{sWidth:"40%"},null,null,null]});a.fnSettings();oTest.fnWaitTest("With auto width disabled the width for one column is appled",null,function(){return"40%"==$("#example thead th:eq(1)")[0].style.width});oTest.fnWaitTest("With auto width disabled the width for one column is appled",function(){oSession.fnRestore();a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",
bDeferRender:!0,bAutoWidth:!1,aoColumns:[null,null,{sWidth:"20%"},{sWidth:"30%"},null]})},function(){return"20%"==$("#example thead th:eq(2)")[0].style.width&&"30%"==$("#example thead th:eq(3)")[0].style.width});oTest.fnWaitTest("With auto width, it will make the smallest column the largest with percentage width given",function(){oSession.fnRestore();a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,aoColumns:[null,null,null,{sWidth:"40%"},null]})},
function(){var b=$("#example thead th"),a=b[1].offsetWidth,d=b[2].offsetWidth,c=b[3].offsetWidth,e=b[4].offsetWidth;return c>b[0].offsetWidth&&c>a&&c>d&&c>e?!0:!1});oTest.fnComplete()});
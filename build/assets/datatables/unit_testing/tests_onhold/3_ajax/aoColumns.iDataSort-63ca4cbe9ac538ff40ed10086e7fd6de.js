//# sourceMappingURL=aoColumns.iDataSort.js.map
oTest.fnStart("aoColumns.iDataSort");
$(document).ready(function(){var a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",aoColumns:[null,{iDataSort:4},null,null,null]});a.fnSettings();oTest.fnWaitTest("Sorting on first column is uneffected",null,function(){return"Gecko"==$("#example tbody tr:eq(0) td:eq(0)").html()});oTest.fnWaitTest("Sorting on second column is the order of the fifth",function(){$("#example thead th:eq(1)").click()},function(){return"A"==$("#example tbody tr:eq(0) td:eq(4)").html()});oTest.fnWaitTest("Reserve sorting on second column uses fifth column as well",
function(){$("#example thead th:eq(1)").click()},function(){return"X"==$("#example tbody tr:eq(0) td:eq(4)").html()});oTest.fnWaitTest("Sorting on 5th column retains it's own sorting",function(){$("#example thead th:eq(4)").click()},function(){return"A"==$("#example tbody tr:eq(0) td:eq(4)").html()});oTest.fnWaitTest("Use 2nd col for sorting 5th col and via-versa - no effect on first col sorting",function(){mTmp=0;oSession.fnRestore();a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",
aoColumns:[null,{iDataSort:4},null,null,{iDataSort:1}]})},function(){return"Gecko"==$("#example tbody tr:eq(0) td:eq(0)").html()});oTest.fnWaitTest("2nd col sorting uses fifth col",function(){$("#example thead th:eq(1)").click()},function(){return"A"==$("#example tbody tr:eq(0) td:eq(4)").html()});oTest.fnWaitTest("2nd col sorting uses fifth col - reversed",function(){$("#example thead th:eq(1)").click()},function(){return"X"==$("#example tbody tr:eq(0) td:eq(4)").html()});oTest.fnWaitTest("5th col sorting uses 2nd col",
function(){$("#example thead th:eq(4)").click()},function(){return"All others"==$("#example tbody tr:eq(0) td:eq(1)").html()});oTest.fnWaitTest("5th col sorting uses 2nd col - reversed",function(){$("#example thead th:eq(4)").click()},function(){return"Seamonkey 1.1"==$("#example tbody tr:eq(0) td:eq(1)").html()});oTest.fnComplete()});
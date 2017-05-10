//# sourceMappingURL=aoColumns.sClass.js.map
oTest.fnStart("aoColumns.sClass");
$(document).ready(function(){$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0}).fnSettings();oTest.fnWaitTest("By default the test class hasn't been applied to the column (sanity!)",null,function(){return 0==$("#example tbody tr:eq(0) td:eq(2)").hasClass("unittest")});oTest.fnWaitTest("Add a class to a single column - first row",function(){oSession.fnRestore();$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,
aoColumns:[null,null,{sClass:"unittest"},null,null]})},function(){return $("#example tbody tr:eq(1) td:eq(2)").hasClass("unittest")});oTest.fnWaitTest("Add a class to a single column - third row",null,function(){return $("#example tbody tr:eq(3) td:eq(2)").hasClass("unittest")});oTest.fnWaitTest("Add a class to a single column - last row",null,function(){return $("#example tbody tr:eq(9) td:eq(2)").hasClass("unittest")});oTest.fnWaitTest("Add a class to a single column - has not applied to other columns - 1st",
null,function(){return 0==$("#example tbody tr:eq(3) td:eq(0)").hasClass("unittest")});oTest.fnWaitTest("Add a class to a single column - has not applied to other columns - 5th",null,function(){return 0==$("#example tbody tr:eq(3) td:eq(4)").hasClass("unittest")});oTest.fnWaitTest("Add a class to a single column - seventh row - second page",function(){$("#example_next").click()},function(){return $("#example tbody tr:eq(6) td:eq(2)").hasClass("unittest")});oTest.fnWaitTest("Add a class to a single column - has not applied to header",
null,function(){return 0==$("#example thead tr:eq(3) th:eq(4)").hasClass("unittest")});oTest.fnWaitTest("Add a class to a single column - has not applied to footer",null,function(){return 0==$("#example thead tr:eq(3) th:eq(4)").hasClass("unittest")});oTest.fnWaitTest("Class defined for multiple columns - first row",function(){oSession.fnRestore();$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,aoColumns:[{sClass:"unittest2"},null,null,{sClass:"unittest1"},
null]})},function(){return $("#example tbody tr:eq(3) td:eq(0)").hasClass("unittest2")&&$("#example tbody tr:eq(8) td:eq(3)").hasClass("unittest1")});oTest.fnWaitTest("Class defined for multiple columns - has not applied to other columns - 5th 1",null,function(){return 0==$("#example tbody tr:eq(0) td:eq(4)").hasClass("unittest1")});oTest.fnWaitTest("Class defined for multiple columns - has not applied to other columns - 5th 2",null,function(){return 0==$("#example tbody tr:eq(6) td:eq(4)").hasClass("unittest2")});
oTest.fnComplete()});
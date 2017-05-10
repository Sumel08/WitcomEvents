//# sourceMappingURL=iDisplayLength.js.map
oTest.fnStart("iDisplayLength");
$(document).ready(function(){$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0});oTest.fnWaitTest("Default length is ten",null,function(){return 10==$("#example tbody tr").length});oTest.fnWaitTest("Select menu shows 10",null,function(){return 10==$("#example_length select").val()});oTest.fnWaitTest("Set initial length to 25",function(){oSession.fnRestore();$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,
iDisplayLength:25})},function(){return 25==$("#example tbody tr").length});oTest.fnWaitTest("Select menu shows 25",null,function(){return 25==$("#example_length select").val()});oTest.fnWaitTest("Set initial length to 100",function(){oSession.fnRestore();$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,iDisplayLength:100})},function(){return 57==$("#example tbody tr").length});oTest.fnWaitTest("Select menu shows 25",null,function(){return 100==$("#example_length select").val()});
oTest.fnWaitTest("Set initial length to 23 (unknown select menu length)",function(){oSession.fnRestore();$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,iDisplayLength:23})},function(){return 23==$("#example tbody tr").length});oTest.fnWaitTest("Select menu shows 10 (since 23 is unknow)",null,function(){return 10==$("#example_length select").val()});oTest.fnComplete()});
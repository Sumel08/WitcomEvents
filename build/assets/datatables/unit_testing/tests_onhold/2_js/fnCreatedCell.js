//# sourceMappingURL=fnCreatedCell.js.map
oTest.fnStart("fnCreatedCell tests");
$(document).ready(function(){var a=0;$("#example").dataTable({aaData:gaaData,aoColumnDefs:[{fnCreatedCell:function(){a++},aTargets:["_all"]}]});oTest.fnTest("Cell created is called once for each cell on init",null,function(){return 285===a});oTest.fnTest("Created isn't called back on other draws",function(){$("#example th:eq(1)").click()},function(){return 285===a});oTest.fnTest("Four arguments for the function",function(){oSession.fnRestore();a=!0;$("#example").dataTable({aaData:gaaData,aoColumnDefs:[{fnCreatedRow:function(){4!==
arguments.length&&(a=!1)},aTargets:["_all"]}]})},function(){return a});oTest.fnTest("First argument is a TD element",function(){oSession.fnRestore();a=!0;$("#example").dataTable({aaData:gaaData,aoColumnDefs:[{fnCreatedRow:function(b){"TD"!==b.nodeName&&(a=!1)},aTargets:["_all"]}]})},function(){return a});oTest.fnTest("Second argument is the HTML value",function(){oSession.fnRestore();a=!0;$("#example").dataTable({aaData:gaaData,aoColumnDefs:[{fnCreatedRow:function(b,c){c!=$("td").html()&&(a=!1)},
aTargets:["_all"]}]})},function(){return a});oTest.fnTest("Third argument is the data array",function(){oSession.fnRestore();a=!0;$("#example").dataTable({aaData:gaaData,aoColumnDefs:[{fnCreatedRow:function(b,c,d){5!==d.length&&(a=!1)},aTargets:["_all"]}]})},function(){return a});oTest.fnTest("Fourth argument is the data source for the row",function(){oSession.fnRestore();a=!0;$("#example").dataTable({aaData:gaaData,aoColumnDefs:[{fnCreatedRow:function(b,c,d){d!==this.fnSettings().aoData[d]._aData&&
(a=!1)},aTargets:["_all"]}]})},function(){return a});oTest.fnTest("Fifth argument is the the col index",function(){oSession.fnRestore();a=!0;$("#example").dataTable({aaData:gaaData,aoColumnDefs:[{fnCreatedRow:function(b,c,d,f,e){c!=$("td:eq("+e+")",b.parentNode).html()&&(a=!1)},aTargets:["_all"]}]})},function(){return a});oTest.fnComplete()});
//# sourceMappingURL=sAjaxDataProp.js.map
oTest.fnStart("Custom data source property - property given");
$(document).ready(function(){$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/custom_prop.txt",sAjaxDataProp:"demo"});oTest.fnWaitTest("10 rows shown on the first page",null,function(){return 10==$("#example tbody tr").length});oTest.fnTest("Initial sort occured",null,function(){return"Gecko"==$("#example tbody td:eq(0)").html()});oTest.fnTest("Sorting (first click) on second column",function(){$("#example thead th:eq(1)").click()},function(){return"All others"==$("#example tbody td:eq(1)").html()});
oTest.fnTest("Sorting (second click) on second column",function(){$("#example thead th:eq(1)").click()},function(){return"Seamonkey 1.1"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Sorting (third click) on second column",function(){$("#example thead th:eq(1)").click()},function(){return"All others"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Sorting (first click) on numeric column",function(){$("#example thead th:eq(3)").click()},function(){return"-"==$("#example tbody td:eq(3)").html()});
oTest.fnTest("Sorting (second click) on numeric column",function(){$("#example thead th:eq(3)").click()},function(){return"522.1"==$("#example tbody td:eq(3)").html()});oTest.fnTest("Sorting multi-column (first click)",function(){$("#example thead th:eq(0)").click();oDispacher.click($("#example thead th:eq(1)")[0],{shift:!0})},function(){return"Gecko"==$("#example tbody td:eq(0)").html()&&"Camino 1.0"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Sorting multi-column - sorting second column only",
function(){$("#example thead th:eq(1)").click()},function(){return"All others"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Paging to second page",function(){$("#example_next").click()},function(){return"IE Mobile"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Paging to first page",function(){$("#example_previous").click()},function(){return"All others"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Attempting to page back beyond the first page",function(){$("#example_previous").click()},
function(){return"All others"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Changing table length to 25 records",function(){$("select[name=example_length]").val("25").change()},function(){return 25==$("#example tbody tr").length});oTest.fnTest("Changing table length to 50 records",function(){$("select[name=example_length]").val("50").change()},function(){return 50==$("#example tbody tr").length});oTest.fnTest("Changing table length to 100 records",function(){$("select[name=example_length]").val("100").change()},
function(){return 57==$("#example tbody tr").length});oTest.fnTest("Changing table length to 10 records",function(){$("select[name=example_length]").val("10").change()},function(){return 10==$("#example tbody tr").length});oTest.fnTest("Information on zero config",null,function(){return"Showing 1 to 10 of 57 entries"==document.getElementById("example_info").innerHTML});oTest.fnTest("Information on second page",function(){$("#example_next").click()},function(){return"Showing 11 to 20 of 57 entries"==
document.getElementById("example_info").innerHTML});oTest.fnTest("Information on third page",function(){$("#example_next").click()},function(){return"Showing 21 to 30 of 57 entries"==document.getElementById("example_info").innerHTML});oTest.fnComplete()});
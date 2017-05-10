//# sourceMappingURL=fnSetColumnVis.js.map
oTest.fnStart("fnSetColumnVis");
$(document).ready(function(){$("#example").dataTable().fnSettings();oTest.fnTest("All columns are visible by default",null,function(){return 5==$("#example tbody tr:eq(0) td").length});oTest.fnTest("Can hide one column and it removes td column from DOM",function(){oSession.fnRestore();$("#example").dataTable();$("#example").dataTable().fnSetColumnVis(1,!1)},function(){return 4==$("#example tbody tr:eq(0) td").length});oTest.fnTest("Can hide one column and it removes thead th column from DOM",null,
function(){return 4==$("#example thead tr:eq(0) th").length});oTest.fnTest("Can hide one column and it removes tfoot th column from DOM",null,function(){return 4==$("#example tfoot tr:eq(0) th").length});oTest.fnTest("The correct thead column has been hidden",null,function(){var a=$("#example thead tr:eq(0) th");return"Rendering engine"==a[0].innerHTML&&"Platform(s)"==a[1].innerHTML&&"Engine version"==a[2].innerHTML&&"CSS grade"==a[3].innerHTML});oTest.fnTest("The correct tbody column has been hidden",
function(){oDispacher.click($("#example thead th:eq(1)")[0],{shift:!0})},function(){var a=$("#example tbody tr:eq(0) td");return"Gecko"==a[0].innerHTML&&"Gnome"==a[1].innerHTML&&"1.8"==a[2].innerHTML&&"A"==a[3].innerHTML});oTest.fnTest("Can hide multiple columns and it removes td column from DOM",function(){oSession.fnRestore();$("#example").dataTable();$("#example").dataTable().fnSetColumnVis(1,!1);$("#example").dataTable().fnSetColumnVis(2,!1);$("#example").dataTable().fnSetColumnVis(4,!1)},function(){return 2==
$("#example tbody tr:eq(0) td").length});oTest.fnTest("Multiple hide - removes thead th column from DOM",null,function(){return 2==$("#example thead tr:eq(0) th").length});oTest.fnTest("Multiple hide - removes tfoot th column from DOM",null,function(){return 2==$("#example tfoot tr:eq(0) th").length});oTest.fnTest("Multiple hide - the correct thead columns have been hidden",null,function(){var a=$("#example thead tr:eq(0) th");return"Rendering engine"==a[0].innerHTML&&"Engine version"==a[1].innerHTML});
oTest.fnTest("Multiple hide - the correct tbody columns have been hidden",function(){oDispacher.click($("#example thead th:eq(1)")[0],{shift:!0})},function(){var a=$("#example tbody tr:eq(0) td");return"Gecko"==a[0].innerHTML&&"1"==a[1].innerHTML});oTest.fnComplete()});
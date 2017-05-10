//# sourceMappingURL=aaSorting.js.map
oTest.fnStart("aaSorting");
$(document).ready(function(){var a=$("#example").dataTable().fnSettings();oTest.fnTest("Default sorting is single column",null,function(){return 1==a.aaSorting.length&&"object"==typeof a.aaSorting[0]});oTest.fnTest("Default sorting is first column asc",null,function(){return 3==a.aaSorting[0].length&&0==a.aaSorting[0][0]&&"asc"==a.aaSorting[0][1]});oTest.fnTest("Sorting is applied",null,function(){return"Gecko"==$("#example tbody td:eq(0)").html()});oTest.fnTest("Custom sorting on single string column asc",function(){oSession.fnRestore();
$("#example").dataTable({aaSorting:[["1","asc"]]})},function(){return"All others"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Custom sorting on single string column desc",function(){oSession.fnRestore();$("#example").dataTable({aaSorting:[["1","desc"]]})},function(){return"Seamonkey 1.1"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Custom sorting on single int column asc",function(){oSession.fnRestore();$("#example").dataTable({aaSorting:[["1","asc"]]})},function(){return"-"==$("#example tbody td:eq(3)").html()});
oTest.fnTest("Custom sorting on single int column desc",function(){oSession.fnRestore();$("#example").dataTable({aaSorting:[["1","desc"]]})},function(){return"Seamonkey 1.1"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Multi-column sorting (2 column) - string asc / string asc",function(){oSession.fnRestore();$("#example").dataTable({aaSorting:[["0","asc"],["1","asc"]]})},function(){return"Camino 1.0"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Multi-column sorting (2 column) - string asc / string desc",
function(){oSession.fnRestore();$("#example").dataTable({aaSorting:[["0","asc"],["1","desc"]]})},function(){return"Seamonkey 1.1"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Multi-column sorting (2 column) - string desc / string asc",function(){oSession.fnRestore();$("#example").dataTable({aaSorting:[["0","desc"],["1","asc"]]})},function(){return"iPod Touch / iPhone"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Multi-column sorting (2 column) - string desc / string desc",function(){oSession.fnRestore();
$("#example").dataTable({aaSorting:[["0","desc"],["1","desc"]]})},function(){return"Safari 3.0"==$("#example tbody td:eq(1)").html()});oTest.fnTest("Multi-column sorting (2 column) - string asc / int asc",function(){oSession.fnRestore();$("#example").dataTable({aaSorting:[["0","asc"],["3","asc"]]})},function(){return"1"==$("#example tbody td:eq(3)").html()});oTest.fnTest("Multi-column sorting (2 column) - string asc / int desc",function(){oSession.fnRestore();$("#example").dataTable({aaSorting:[["0",
"asc"],["3","desc"]]})},function(){return"1.9"==$("#example tbody td:eq(3)").html()});oTest.fnTest("Multi-column sorting (2 column) - string desc / int asc",function(){oSession.fnRestore();$("#example").dataTable({aaSorting:[["0","desc"],["3","asc"]]})},function(){return"125.5"==$("#example tbody td:eq(3)").html()});oTest.fnTest("Multi-column sorting (2 column) - string desc / int desc",function(){oSession.fnRestore();$("#example").dataTable({aaSorting:[["0","desc"],["3","desc"]]})},function(){return"522.1"==
$("#example tbody td:eq(3)").html()});oTest.fnTest("Multi-column sorting (3 column) - string asc / int asc / string asc",function(){oSession.fnRestore();$("#example").dataTable({aaSorting:[["0","asc"],["3","asc"],["1","asc"]]})},function(){return"Firefox 1.0"==$("#example tbody tr:eq(7) td:eq(1)").html()});oTest.fnComplete()});
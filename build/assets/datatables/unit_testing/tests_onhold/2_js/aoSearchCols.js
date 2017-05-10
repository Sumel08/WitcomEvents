//# sourceMappingURL=aoSearchCols.js.map
oTest.fnStart("aoSearchCols");
$(document).ready(function(){var b=$("#example").dataTable({aaData:gaaData}),a=b.fnSettings();oTest.fnTest("Default should be to have a empty colums array",null,function(){return 0==a.aoPreSearchCols[0].sSearch&&!a.aoPreSearchCols[0].bRegex&&0==a.aoPreSearchCols[1].sSearch&&!a.aoPreSearchCols[1].bRegex&&0==a.aoPreSearchCols[2].sSearch&&!a.aoPreSearchCols[2].bRegex&&0==a.aoPreSearchCols[3].sSearch&&!a.aoPreSearchCols[3].bRegex&&0==a.aoPreSearchCols[4].sSearch&&!a.aoPreSearchCols[4].bRegex});oTest.fnTest("Search on a single column - no regex statement given",
function(){oSession.fnRestore();b=$("#example").dataTable({aaData:gaaData,aoSearchCols:[null,{sSearch:"Mozilla"},null,{sSearch:"1"},null]})},function(){return"Showing 1 to 9 of 9 entries (filtered from 57 total entries)"==$("#example_info").html()});oTest.fnTest("Search on two columns - no regex statement given",function(){oSession.fnRestore();b=$("#example").dataTable({aaData:gaaData,aoSearchCols:[null,{sSearch:"Mozilla"},null,{sSearch:"1.5"},null]})},function(){return"1.5"==$("#example tbody tr:eq(0) td:eq(3)").html()});
oTest.fnTest("Search on single column - escape regex false",function(){oSession.fnRestore();b=$("#example").dataTable({aaData:gaaData,aoSearchCols:[{sSearch:".*ML",bEscapeRegex:!1},null,null,null,null]})},function(){return"Showing 1 to 3 of 3 entries (filtered from 57 total entries)"==$("#example_info").html()});oTest.fnTest("Search on two columns - escape regex false on first, true on second",function(){oSession.fnRestore();b=$("#example").dataTable({aaData:gaaData,aoSearchCols:[{sSearch:".*ML",
bEscapeRegex:!1},{sSearch:"3.3",bEscapeRegex:!0},null,null,null]})},function(){return"Konqureror 3.3"==$("#example tbody tr:eq(0) td:eq(1)").html()});oTest.fnTest("Search on two columns (no records) - escape regex false on first, true on second",function(){oSession.fnRestore();b=$("#example").dataTable({aaData:gaaData,aoSearchCols:[{sSearch:".*ML",bEscapeRegex:!1},{sSearch:"Allan",bEscapeRegex:!0},null,null,null]})},function(){return"No matching records found"==$("#example tbody tr:eq(0) td:eq(0)").html()});
oTest.fnComplete()});
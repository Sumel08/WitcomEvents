//# sourceMappingURL=aoColumns.sTitle.js.map
oTest.fnStart("aoColumns.sTitle");
$(document).ready(function(){$("#example").dataTable({aaData:gaaData}).fnSettings();oTest.fnTest("If not given, then the columns titles are empty",null,function(){var a=$("#example thead tr:eq(0) th");return"Rendering engine"==a[0].innerHTML&&"Browser"==a[1].innerHTML&&"Platform(s)"==a[2].innerHTML&&"Engine version"==a[3].innerHTML&&"CSS grade"==a[4].innerHTML});oTest.fnTest("Can set a single column title - and others are read from DOM",function(){oSession.fnRestore();$("#example").dataTable({aaData:gaaData,
aoColumns:[null,{sTitle:"unit test"},null,null,null]})},function(){var a=$("#example thead tr:eq(0) th");return"Rendering engine"==a[0].innerHTML&&"unit test"==a[1].innerHTML&&"Platform(s)"==a[2].innerHTML&&"Engine version"==a[3].innerHTML&&"CSS grade"==a[4].innerHTML});oTest.fnTest("Can set multiple column titles",function(){oSession.fnRestore();$("#example").dataTable({aaData:gaaData,aoColumns:[null,{sTitle:"unit test 1"},null,null,{sTitle:"unit test 2"}]})},function(){var a=$("#example thead tr:eq(0) th");
return"Rendering engine"==a[0].innerHTML&&"unit test 1"==a[1].innerHTML&&"Platform(s)"==a[2].innerHTML&&"Engine version"==a[3].innerHTML&&"unit test 2"==a[4].innerHTML});oTest.fnComplete()});
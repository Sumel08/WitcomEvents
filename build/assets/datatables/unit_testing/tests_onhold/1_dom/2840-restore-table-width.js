//# sourceMappingURL=2840-restore-table-width.js.map
oTest.fnStart("2840 - Restore table width on fnDestroy");$(document).ready(function(){document.cookie="";$("#example").dataTable({sScrollX:"100%",sScrollXInner:"110%"});$("#example").dataTable().fnDestroy();oTest.fnTest("Width after destroy",null,function(){return"800"==$("#example").width()});oTest.fnComplete()});
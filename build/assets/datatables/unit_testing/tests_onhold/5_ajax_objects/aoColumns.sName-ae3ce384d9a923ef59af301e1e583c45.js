//# sourceMappingURL=aoColumns.sName.js.map
oTest.fnStart("aoColumns.sName");$(document).ready(function(){var a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/objects.txt",aoColumns:[{mData:"engine"},{mData:"browser"},{mData:"platform"},{mData:"version",sName:"unit test"},{mData:"grade"}]}).fnSettings();oTest.fnWaitTest("Names are stored in the columns object",null,function(){return"unit test"==a.aoColumns[3].sName});oTest.fnComplete()});
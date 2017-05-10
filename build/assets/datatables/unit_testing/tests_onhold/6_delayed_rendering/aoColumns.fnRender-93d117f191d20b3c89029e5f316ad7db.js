//# sourceMappingURL=aoColumns.fnRender.js.map
oTest.fnStart("aoColumns.fnRender");
$(document).ready(function(){var b=0,c=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,aoColumns:[null,{fnRender:function(a){b++;return a.aData[a.iDataColumn]}},null,null,null]});c.fnSettings();oTest.fnWaitTest("Single column - fnRender is called once for each row",null,function(){return 57==b});oTest.fnWaitTest("Confirm that fnRender passes two arguments with four parameters",function(){b=!0;oSession.fnRestore();c=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",
bDeferRender:!0,aoColumns:[null,{fnRender:function(a){if(2!=arguments.length||"undefined"==typeof a.iDataRow||"undefined"==typeof a.iDataColumn||"undefined"==typeof a.aData||"undefined"==typeof a.mDataProp)b=!1;return a.aData[a.iDataColumn]}},null,null,null]})},function(){return b});oTest.fnWaitTest("fnRender iDataColumn is row number",function(){var a=0;b=!0;oSession.fnRestore();c=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,aoColumns:[null,{fnRender:function(c){a!=
c.iDataRow&&(b=!1);a++;return c.aData[c.iDataColumn]}},null,null,null]})},function(){return b});oTest.fnWaitTest("fnRender iDataColumn is the column",function(){b=!0;oSession.fnRestore();c=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,aoColumns:[null,{fnRender:function(a){1!=a.iDataColumn&&(b=!1);return a.aData[a.iDataColumn]}},null,null,null]})},function(){return b});oTest.fnWaitTest("fnRender aData is data array of correct size",function(){b=!0;
oSession.fnRestore();c=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,aoColumns:[null,{fnRender:function(a){5!=a.aData.length&&(b=!1);return a.aData[a.iDataColumn]}},null,null,null]})},function(){return b});oTest.fnWaitTest("Passed back data is put into the DOM",function(){oSession.fnRestore();c=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,aoColumns:[null,{fnRender:function(a){return"unittest"}},
null,null,null]})},function(){return"unittest"==$("#example tbody tr:eq(0) td:eq(1)").html()});oTest.fnWaitTest("Passed back data is put into the DOM",function(){oSession.fnRestore();c=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,aoColumns:[null,null,{fnRender:function(a){return"unittest1"}},{fnRender:function(a){return"unittest2"}},null]})},function(){return"unittest1"==$("#example tbody tr:eq(0) td:eq(2)").html()&&"unittest2"==$("#example tbody tr:eq(0) td:eq(3)").html()});
oTest.fnComplete()});
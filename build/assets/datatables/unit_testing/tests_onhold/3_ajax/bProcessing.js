//# sourceMappingURL=bProcessing.js.map
oTest.fnStart("bProcessing");
$(document).ready(function(){var a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt"}),b=a.fnSettings();oTest.fnWaitTest("Processing is off by default",null,function(){return 0==b.oFeatures.bProcessing});oTest.fnWaitTest("Processing div is not in the DOM",function(){a.oApi._fnProcessingDisplay(b,!0)},function(){return null==document.getElementById("example_processing")});oTest.fnWaitTest("Processing div cannot be shown",function(){a.oApi._fnProcessingDisplay(b,!0)},
function(){return null==document.getElementById("example_processing")});oTest.fnWaitTest("Processing div cannot be hidden",function(){a.oApi._fnProcessingDisplay(b,!1)},function(){return null==document.getElementById("example_processing")});oTest.fnWaitTest("Processing can be enabled",function(){oSession.fnRestore();a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bProcessing:!0});b=a.fnSettings()},function(){return 1==b.oFeatures.bProcessing});oTest.fnWaitTest("Processing div is in the DOM",
function(){a.oApi._fnProcessingDisplay(b,!0)},function(){return document.getElementById("example_processing")});oTest.fnWaitTest("Processing div is hidden by default",function(){a.oApi._fnProcessingDisplay(b,!0)},function(){return document.getElementById("example_processing").style.visibility="hidden"});oTest.fnWaitTest("Processing div can be shown",function(){a.oApi._fnProcessingDisplay(b,!0)},function(){return document.getElementById("example_processing").style.visibility="visible"});oTest.fnWaitTest("Processing div can be hidden",
function(){a.oApi._fnProcessingDisplay(b,!1)},function(){return document.getElementById("example_processing").style.visibility="hidden"});oTest.fnWaitTest("Processing disabled override",function(){oSession.fnRestore();a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bProcessing:!1});b=a.fnSettings()},function(){return 0==b.oFeatures.bProcessing});oTest.fnWaitTest("Processing div is not in the DOM",function(){a.oApi._fnProcessingDisplay(b,!0)},function(){return null==
document.getElementById("example_processing")});oTest.fnComplete()});
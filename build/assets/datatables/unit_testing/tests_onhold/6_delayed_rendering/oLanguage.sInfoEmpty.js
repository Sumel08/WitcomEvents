//# sourceMappingURL=oLanguage.sInfoEmpty.js.map
oTest.fnStart("oLanguage.sInfoEmpty");
$(document).ready(function(){var a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0}),b=a.fnSettings();oTest.fnWaitTest("Info empty language is 'Showing 0 to 0 of 0 entries' by default",function(){a.fnFilter("nothinghere")},function(){return"Showing 0 to 0 of 0 entries"==b.oLanguage.sInfoEmpty});oTest.fnTest("Info empty language default is in the DOM",null,function(){return"Showing 0 to 0 of 0 entries"==document.getElementById("example_info").innerHTML.replace(" "+b.oLanguage.sInfoFiltered.replace("_MAX_",
"57"),"")});oTest.fnWaitTest("Info empty language can be defined",function(){oSession.fnRestore();a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,oLanguage:{sInfoEmpty:"unit test"}});b=a.fnSettings();a.fnFilter("nothinghere")},function(){return"unit test"==b.oLanguage.sInfoEmpty});oTest.fnTest("Info empty language default is in the DOM",null,function(){return"unit test"==document.getElementById("example_info").innerHTML.replace(" "+b.oLanguage.sInfoFiltered.replace("_MAX_",
"57"),"")});oTest.fnWaitTest("Macro's replaced",function(){oSession.fnRestore();a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bDeferRender:!0,oLanguage:{sInfoEmpty:"unit _START_ _END_ _TOTAL_ test"}});a.fnFilter("nothinghere")},function(){return"unit 1 0 0 test"==document.getElementById("example_info").innerHTML.replace(" "+b.oLanguage.sInfoFiltered.replace("_MAX_","57"),"")});oTest.fnComplete()});
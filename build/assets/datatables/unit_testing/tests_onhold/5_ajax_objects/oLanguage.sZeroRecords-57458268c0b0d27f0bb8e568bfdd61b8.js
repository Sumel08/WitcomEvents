//# sourceMappingURL=oLanguage.sZeroRecords.js.map
oTest.fnStart("oLanguage.sZeroRecords");
$(document).ready(function(){var a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/objects.txt",aoColumns:[{mData:"engine"},{mData:"browser"},{mData:"platform"},{mData:"version"},{mData:"grade"}]}),b=a.fnSettings();oTest.fnWaitTest("Zero records language is 'No matching records found' by default",null,function(){return"No matching records found"==b.oLanguage.sZeroRecords});oTest.fnWaitTest("Text is shown when empty table (after filtering)",function(){a.fnFilter("nothinghere")},
function(){return"No matching records found"==$("#example tbody tr td")[0].innerHTML});oTest.fnWaitTest("Zero records language can be defined",function(){oSession.fnRestore();a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/objects.txt",aoColumnDefs:[{mData:"engine",aTargets:[0]},{mData:"browser",aTargets:[1]},{mData:"platform",aTargets:[2]},{mData:"version",aTargets:[3]},{mData:"grade",aTargets:[4]}],oLanguage:{sZeroRecords:"unit test"}});b=a.fnSettings()},function(){return"unit test"==
b.oLanguage.sZeroRecords});oTest.fnWaitTest("Text is shown when empty table (after filtering)",function(){a.fnFilter("nothinghere2")},function(){return"unit test"==$("#example tbody tr td")[0].innerHTML});oTest.fnComplete()});
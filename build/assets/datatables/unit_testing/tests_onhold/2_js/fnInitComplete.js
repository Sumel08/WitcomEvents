//# sourceMappingURL=fnInitComplete.js.map
oTest.fnStart("fnInitComplete");
$(document).ready(function(){var b=$("#example").dataTable({aaData:gaaData}),c=b.fnSettings(),a;oTest.fnTest("Default should be null",null,function(){return null==c.fnInitComplete});oTest.fnTest("Two arguments passed",function(){oSession.fnRestore();a=-1;$("#example").dataTable({aaData:gaaData,fnInitComplete:function(){a=2===arguments.length&&void 0===arguments[1]}})},function(){return a});oTest.fnTest("That one argument is the settings object",function(){oSession.fnRestore();b=$("#example").dataTable({aaData:gaaData,
fnInitComplete:function(b){a=b}})},function(){return b.fnSettings()==a});oTest.fnTest("fnInitComplete called once on first draw",function(){oSession.fnRestore();a=0;$("#example").dataTable({aaData:gaaData,fnInitComplete:function(){a++}})},function(){return 1==a});oTest.fnTest("fnInitComplete never called there after",function(){$("#example_next").click();$("#example_next").click();$("#example_next").click()},function(){return 1==a});oTest.fnComplete()});
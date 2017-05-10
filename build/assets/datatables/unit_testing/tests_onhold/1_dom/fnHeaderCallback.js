//# sourceMappingURL=fnHeaderCallback.js.map
oTest.fnStart("fnHeaderCallback");
$(document).ready(function(){var g=$("#example").dataTable(),h=g.fnSettings(),a;oTest.fnTest("Default should be null",null,function(){return null==h.fnHeaderCallback});oTest.fnTest("Five arguments passed",function(){oSession.fnRestore();a=-1;$("#example").dataTable({fnHeaderCallback:function(){a=arguments.length}})},function(){return 5==a});oTest.fnTest("fnRowCallback called once per draw",function(){oSession.fnRestore();a=0;$("#example").dataTable({fnHeaderCallback:function(c,d,b,e,f){a++}})},function(){return 1==
a});oTest.fnTest("fnRowCallback called on paging (i.e. another draw)",function(){$("#example_next").click()},function(){return 2==a});oTest.fnTest("fnRowCallback allows us to alter row information",function(){oSession.fnRestore();$("#example").dataTable({fnHeaderCallback:function(a,d,b,e,f){a.getElementsByTagName("th")[0].innerHTML="Displaying "+(e-b)+" records"}})},function(){return"Displaying 10 records"==$("#example thead th:eq(0)").html()});oTest.fnTest("Data array has length matching original data",
function(){oSession.fnRestore();a=!0;$("#example").dataTable({fnHeaderCallback:function(c,d,b,e,f){57!=d.length&&(a=!1)}})},function(){return a});oTest.fnTest("Data array's column lengths match original data",function(){oSession.fnRestore();a=!0;$("#example").dataTable({fnHeaderCallback:function(c,d,b,e,f){c=0;for(b=d.length;c<b;c++)5!=d[c].length&&(a=!1)}})},function(){return a});oTest.fnTest("iStart correct on first page",function(){oSession.fnRestore();a=!0;$("#example").dataTable({fnHeaderCallback:function(c,
d,b,e,f){0!=b&&(a=!1)}})},function(){return a});oTest.fnTest("iStart correct on second page",function(){oSession.fnRestore();a=!1;$("#example").dataTable({fnHeaderCallback:function(c,d,b,e,f){10==b&&(a=!0)}});$("#example_next").click()},function(){return a});oTest.fnTest("iEnd correct on first page",function(){oSession.fnRestore();a=!0;$("#example").dataTable({fnHeaderCallback:function(c,d,b,e,f){10!=e&&(a=!1)}})},function(){return a});oTest.fnTest("iEnd correct on second page",function(){oSession.fnRestore();
a=!1;$("#example").dataTable({fnHeaderCallback:function(c,d,b,e,f){20==e&&(a=!0)}});$("#example_next").click()},function(){return a});oTest.fnTest("aiDisplay length is full data when not filtered",function(){oSession.fnRestore();a=!1;$("#example").dataTable({fnHeaderCallback:function(c,d,b,e,f){57==f.length&&(a=!0)}})},function(){return a});oTest.fnTest("aiDisplay length is 9 when filtering on 'Mozilla'",function(){oSession.fnRestore();a=!1;g=$("#example").dataTable({fnHeaderCallback:function(c,d,
b,e,f){9==f.length&&(a=!0)}});g.fnFilter("Mozilla")},function(){return a});oTest.fnComplete()});
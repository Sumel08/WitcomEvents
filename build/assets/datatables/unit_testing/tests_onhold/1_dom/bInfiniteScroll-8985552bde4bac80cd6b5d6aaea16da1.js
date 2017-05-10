//# sourceMappingURL=bInfiniteScroll.js.map
oTest.fnStart("bInfiniteScroll");
$(document).ready(function(){var a=$("#example").dataTable({bScrollInfinite:!0,sScrollY:"200px"});oTest.fnTest("10 rows by default",null,function(){return 10==$("#example tbody tr").length});oTest.fnTest("Info",null,function(){return"Showing 1 to 10 of 57 entries"==$("#example_info").html()});oTest.fnTest("Get nodes",null,function(){return 10==$("#example tbody>tr").length});oTest.fnWaitTest("Scroll on 20px adds 10 rows",function(){$("div.dataTables_scrollBody").scrollTop(20)},function(){return 20==
$("#example tbody tr").length});oTest.fnTest("Info after 20px scroll",null,function(){return"Showing 1 to 20 of 57 entries"==$("#example_info").html()});oTest.fnTest("Get nodes after 20px scroll",null,function(){return 20==$("#example tbody>tr").length});oTest.fnTest("Scroll on 10px more results in the same number of rows",function(){$("div.dataTables_scrollBody").scrollTop(30)},function(){return 20==$("#example tbody tr").length});oTest.fnTest("Info after 10 more px scroll",null,function(){return"Showing 1 to 20 of 57 entries"==
$("#example_info").html()});oTest.fnWaitTest("Scroll to 240px adds another 10 rows",function(){$("div.dataTables_scrollBody").scrollTop(240)},function(){return 30==$("#example tbody tr").length});oTest.fnTest("Info after 240px scroll",null,function(){return"Showing 1 to 30 of 57 entries"==$("#example_info").html()});oTest.fnTest("Get nodes after 240px scroll",null,function(){return 30==$("#example tbody>tr").length});oTest.fnTest("Filtering will drop back to 10 rows",function(){$("div.dataTables_scrollBody").scrollTop(0);
a.fnFilter("gec")},function(){return 10==$("#example tbody tr").length});oTest.fnTest("Info after filtering",null,function(){return"Showing 1 to 10 of 20 entries (filtered from 57 total entries)"==$("#example_info").html()});oTest.fnTest("Get nodes after filtering",null,function(){return 10==$("#example tbody>tr").length});oTest.fnWaitTest("Scroll after filtering adds 10",function(){$("div.dataTables_scrollBody").scrollTop(20)},function(){return 20==$("#example tbody tr").length});oTest.fnTest("Get nodes after filtering",
null,function(){return 20==$("#example tbody>tr").length});oTest.fnTest("Sorting will drop back to 10 rows",function(){a.fnSort([[1,"asc"]])},function(){return 10==$("#example tbody tr").length});oTest.fnWaitTest("Scroll after sorting adds 10",function(){$("div.dataTables_scrollBody").scrollTop(20)},function(){return 20==$("#example tbody tr").length});oTest.fnTest("Get nodes after scrolling",null,function(){return 20==$("#example tbody>tr").length});oTest.fnComplete()});
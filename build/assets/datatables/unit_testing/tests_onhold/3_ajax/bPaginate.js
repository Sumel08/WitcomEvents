//# sourceMappingURL=bPaginate.js.map
oTest.fnStart("bPaginate");
$(document).ready(function(){$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt"});oTest.fnWaitTest("Pagiantion div exists by default",null,function(){return null!=document.getElementById("example_paginate")});oTest.fnWaitTest("Information div takes paging into account",null,function(){return"Showing 1 to 10 of 57 entries"==document.getElementById("example_info").innerHTML});oTest.fnWaitTest("Pagiantion can be disabled",function(){oSession.fnRestore();$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",
bPaginate:!1})},function(){return null==document.getElementById("example_paginate")});oTest.fnWaitTest("Information div takes paging disabled into account",null,function(){return"Showing 1 to 57 of 57 entries"==document.getElementById("example_info").innerHTML});oTest.fnWaitTest("Pagiantion enabled override",function(){oSession.fnRestore();$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/arrays.txt",bPaginate:!0})},function(){return null!=document.getElementById("example_paginate")});
oTest.fnComplete()});
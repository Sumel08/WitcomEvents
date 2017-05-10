//# sourceMappingURL=sPaginationType.js.map
oTest.fnStart("sPaginationType");
$(document).ready(function(){var a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/objects.txt",aoColumns:[{mData:"engine"},{mData:"browser"},{mData:"platform"},{mData:"version"},{mData:"grade"}]}),b=a.fnSettings();oTest.fnWaitTest("Check two button paging is the default",null,function(){return"two_button"==b.sPaginationType});oTest.fnWaitTest("Check class is applied",null,function(){return $("#example_paginate").hasClass("paging_two_button")});oTest.fnWaitTest("Two A elements are in the wrapper",
null,function(){return 2==$("#example_paginate a").length});oTest.fnWaitTest("We have the previous button",null,function(){return document.getElementById("example_previous")});oTest.fnWaitTest("We have the next button",null,function(){return document.getElementById("example_next")});oTest.fnWaitTest("Previous button is disabled",null,function(){return $("#example_previous").hasClass("paginate_disabled_previous")});oTest.fnWaitTest("Next button is enabled",null,function(){return $("#example_next").hasClass("paginate_enabled_next")});
var d=!1;oTest.fnWaitTest("Can enabled full numbers paging",function(){oSession.fnRestore();a=$("#example").dataTable({sAjaxSource:"../../../examples/ajax/sources/objects.txt",aoColumnDefs:[{mData:"engine",aTargets:[0]},{mData:"browser",aTargets:[1]},{mData:"platform",aTargets:[2]},{mData:"version",aTargets:[3]},{mData:"grade",aTargets:[4]}],sPaginationType:"full_numbers",fnInitComplete:function(){d=!0}});b=a.fnSettings()},function(){return d?"full_numbers"==b.sPaginationType:!1});oTest.fnWaitTest("Check full numbers class is applied",
null,function(){return $("#example_paginate").hasClass("paging_full_numbers")});var e,c,f,g;oTest.fnWaitTest("Jump to last page",function(){e=$("div.dataTables_paginate a.first");c=$("div.dataTables_paginate a.previous");f=$("div.dataTables_paginate a.next");g=$("div.dataTables_paginate a.last");g.click()},function(){return"Showing 51 to 57 of 57 entries"==document.getElementById("example_info").innerHTML});oTest.fnWaitTest("Go to two pages previous",function(){c.click();c.click()},function(){return"Showing 31 to 40 of 57 entries"==
document.getElementById("example_info").innerHTML});oTest.fnWaitTest("Next (second last) page",function(){f.click()},function(){return"Showing 41 to 50 of 57 entries"==document.getElementById("example_info").innerHTML});oTest.fnWaitTest("Jump to first page",function(){e.click()},function(){return"Showing 1 to 10 of 57 entries"==document.getElementById("example_info").innerHTML});oTest.fnComplete()});
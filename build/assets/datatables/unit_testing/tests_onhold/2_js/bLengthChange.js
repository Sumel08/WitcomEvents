//# sourceMappingURL=bLengthChange.js.map
oTest.fnStart("bLengthChange");
$(document).ready(function(){$("#example").dataTable({aaData:gaaData});oTest.fnTest("Length div exists by default",null,function(){return null!=document.getElementById("example_length")});oTest.fnTest("Four default options",null,function(){return 4==$("select[name=example_length] option").length});oTest.fnTest("Default options",null,function(){var a=$("select[name='example_length'] option");return 10==a[0].getAttribute("value")&&25==a[1].getAttribute("value")&&50==a[2].getAttribute("value")&&100==
a[3].getAttribute("value")});oTest.fnTest("Info takes length into account",null,function(){return"Showing 1 to 10 of 57 entries"==document.getElementById("example_info").innerHTML});oTest.fnTest("Change length can be disabled",function(){oSession.fnRestore();$("#example").dataTable({aaData:gaaData,bLengthChange:!1})},function(){return null==document.getElementById("example_length")});oTest.fnTest("Information takes length disabled into account",null,function(){return"Showing 1 to 10 of 57 entries"==
document.getElementById("example_info").innerHTML});oTest.fnTest("Length change enabled override",function(){oSession.fnRestore();$("#example").dataTable({aaData:gaaData,bLengthChange:!0})},function(){return null!=document.getElementById("example_length")});oTest.fnComplete()});
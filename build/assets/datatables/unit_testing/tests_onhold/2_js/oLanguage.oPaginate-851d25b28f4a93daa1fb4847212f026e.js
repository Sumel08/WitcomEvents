//# sourceMappingURL=oLanguage.oPaginate.js.map
oTest.fnStart("oLanguage.oPaginate");
$(document).ready(function(){var b=$("#example").dataTable({aaData:gaaData,sPaginationType:"full_numbers"}),a=b.fnSettings();oTest.fnTest("oLanguage.oPaginate defaults",null,function(){return"First"==a.oLanguage.oPaginate.sFirst&&"Previous"==a.oLanguage.oPaginate.sPrevious&&"Next"==a.oLanguage.oPaginate.sNext&&"Last"==a.oLanguage.oPaginate.sLast});oTest.fnTest("oLanguage.oPaginate defaults are in the DOM",null,function(){return"First"==$("#example_paginate .first").html()&&"Previous"==$("#example_paginate .previous").html()&&
"Next"==$("#example_paginate .next").html()&&"Last"==$("#example_paginate .last").html()});oTest.fnTest("oLanguage.oPaginate can be defined",function(){oSession.fnRestore();b=$("#example").dataTable({aaData:gaaData,sPaginationType:"full_numbers",oLanguage:{oPaginate:{sFirst:"unit1",sPrevious:"test2",sNext:"unit3",sLast:"test4"}}});a=b.fnSettings()},function(){return"unit1"==a.oLanguage.oPaginate.sFirst&&"test2"==a.oLanguage.oPaginate.sPrevious&&"unit3"==a.oLanguage.oPaginate.sNext&&"test4"==a.oLanguage.oPaginate.sLast});
oTest.fnTest("oLanguage.oPaginate definitions are in the DOM",null,function(){return"unit1"==$("#example_paginate .first").html()&&"test2"==$("#example_paginate .previous").html()&&"unit3"==$("#example_paginate .next").html()&&"test4"==$("#example_paginate .last").html()});oTest.fnComplete()});
//# sourceMappingURL=core.processing.js.map
function _fnFeatureHtmlProcessing(a){var b=document.createElement("div");a.aanFeatures.r||(b.id=a.sTableId+"_processing");b.innerHTML=a.oLanguage.sProcessing;b.className=a.oClasses.sProcessing;a.nTable.parentNode.insertBefore(b,a.nTable);return b}function _fnProcessingDisplay(a,b){if(a.oFeatures.bProcessing)for(var d=a.aanFeatures.r,c=0,e=d.length;c<e;c++)d[c].style.visibility=b?"visible":"hidden";$(a.oInstance).trigger("processing",[a,b])};
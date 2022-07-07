/* 
 * From www.surfmind.com/musings/2003/09/15 
 * Copied 2007-12-12 and modified slightly. 
 */ 
 
function alternateRowColors() 
{ 
  var className = 'alt-row-colors'; 
  var rowcolor = '#f3f3f3'; 
  var rows, arow; 
  var tables = document.getElementsByTagName("table"); 
  var rowCount = 0; 
  for (var i = 0; i < tables.length; i++) { 
    // dump(tables.item(i).className + " " + tables.item(i).nodeName + "\n"); 
    if (hasClass(tables.item(i), className)) { 
      atable = tables.item(i); 
      rows = atable.getElementsByTagName("tr"); 
      for (var j = 0; j < rows.length; j++) { 
        arow = rows.item(j); 
        if (arow.nodeName == "TR") { 
          if (rowCount % 2) { 
            // default case 
          } else { 
            arow.style.backgroundColor = rowcolor; 
          } 
          rowCount++; 
        } 
      } 
      rowCount = 0; 
    } 
  } 
} 

/*
 * From MediaWiki's wikibits.js
 */

function hookEvent(hookName, hookFunct) { 
        if (window.addEventListener) { 
                window.addEventListener(hookName, hookFunct, false); 
        } else if (window.attachEvent) { 
                window.attachEvent("on" + hookName, hookFunct); 
        } 
} 

hookEvent("load", alternateRowColors); 

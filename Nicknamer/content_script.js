  (function(){
  walk(document.body);

  function walk(node) 
  {
    
    var child, next;

    switch ( node.nodeType )  
    {
      case 1:  // Element
      case 9:  // Document
      case 11: // Document fragment
        child = node.firstChild;
        while ( child ) 
        {
          next = child.nextSibling;
          walk(child);
          child = next;
        }
        break;
      case 3: // Text node
        if(node.parentElement.tagName.toLowerCase() != "script") {
            handleText(node);
        }
        break;
    }
  }

  var names = {}
  names['Zihui Yang'] = 'Zicat Yang';
  names['Aaron Friedlander'] = 'Aaron Cookedlander';
  names['Regina Lee'] = 'Dr cat';
  names['Mitchell Lee'] = 'Mitchelle Lee';

  function handleText(textNode) {
    var v = textNode.nodeValue;

    for (var prop in names)
    {
        var rege = new RegExp(prop,"i");
        var regeg = new RegExp(prop,"ig");
        var newname =names[prop];
        // Deal with the easy case
        if(v.match(rege)) {
          v = v.replace(regeg,newname );
        }
        
    }
    console.log(v);
    textNode.nodeValue = v;
  }
})();

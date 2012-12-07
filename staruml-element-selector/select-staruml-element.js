// WScript thisscript.js arg0 arg1 arg2
// .Length

var	staruml = new ActiveXObject("StarUML.StarUMLApplication");
var selector = staruml.SelectionManager ;

var uri=WScript.Arguments.Item(0) ;
var elementPath=uri.replace(/^element:\/\//,"")  ;

var element=staruml.FindByPathname(elementPath) ;
if (element==null) {
  staruml.log(elementPath+"  not found") ;
} else {
  selector.SelectModel(element) ;
  staruml.log(elementPath+"  selected") ;
}


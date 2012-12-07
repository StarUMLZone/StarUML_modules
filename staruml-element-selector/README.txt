staruml element selector
------------------------
contact: jean-marie.favre (-) megaplanet.org

This staruml module is in fact not intended to be executed from a staruml
menu but on the contrary by shell commands or via a click in a browser.

That is when clicking in a browser on a url of the form 
element://::MyProject::MyPackage::MyClassA
the corresponding uml element will selected in staruml. 

Note that the selection of an element change the content of the 
"Properties", "Attachements", "Constraints" windows but do not directly impact the model 
explorer. Use "Ctrl-M to show the selected element in the Model Explorer".

=== Installation ===
(1) Install this module in the "modules" directory of staruml

(2) Install the "element:" protocol
In order to associate the element: protocol to the script, click on 
element-protocol.org in this directory. You may need to change the path
if staruml has not been installed in C:\Program Files\StarUML

=== Testing the installation ===
To check the select-staruml-element.js script works properly, open an uml file with 
appropriate content and try this command (go first to the directory specified before the prompt
as shown below).
C:\Program Files\StarUML\modules\staruml-element-selector>  WScript.exe select-staruml-element.js ::MyProject::MyPackage::MyClass 
To check element protocol, open the test-element-protocol.html with your favorite browser
and click on the corresponding link. 

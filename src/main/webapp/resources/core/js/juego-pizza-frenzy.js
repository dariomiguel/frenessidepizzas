
function getName(elm)  {
var objectName = elm.getAttribute('name');
document.getElementById('debug').innerHTML= "name on hover: " + objectName;
};
//onmouseover="getClass(this)" 

var selectedParts = [];

  
function select(elm){
var partName = elm.getAttribute('name');
  
if (elm.classList.contains("selected")) {
              
    elm.setAttribute("class", "unselected"); 
    var x =selectedParts.indexOf(partName);
    selectedParts.splice(x, 1)
    console.log(selectedParts)
}
else{
  elm.setAttribute("class", "selected");
  selectedParts.push(partName);
};
var objectClass = elm.getAttribute('class');
document.getElementById('debug').innerHTML = "class on click: " + objectClass;
  

document.getElementById('selectedParts').innerHTML = "";
for (var i = 0; i < selectedParts.length; i++) {
document.getElementById('selectedParts').innerHTML += (selectedParts[i] + "<br>");}
}
  
function getName(elm)  {
	let objectName = elm.getAttribute('name');
	document.getElementById('debug').innerHTML= "name on hover: " + objectName;
};

let selectedParts = [];

function select(elm){
	let partName = elm.getAttribute('name');

	selectedParts.push(partName);
	console.log(selectedParts)
	let objectClass = elm.getAttribute('class');
	document.getElementById('debug').innerHTML = "class on click: " + objectClass;


	document.getElementById('selectedParts').innerHTML = "";
	for (let i = 0; i < selectedParts.length; i++) {
	document.getElementById('selectedParts').innerHTML += (selectedParts[i] + "<br>");}
}
//onclick="select(this)"
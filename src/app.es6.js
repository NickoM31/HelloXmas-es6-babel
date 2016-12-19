let tab = [];
let validText = document.getElementById('btnText');
validText.addEventListener("click",(event)=>{
	let inputValue = document.getElementById('inputText').value;
	let ul = document.getElementById('list');
	let li = document.createElement("li");
	ul.appendChild(li);
	li.innerHTML = inputValue;
	if(inputValue === ""){
		li.innerHTML = "Père Noël!";
	}
	tab.push(inputValue);
	console.log(tab);
});





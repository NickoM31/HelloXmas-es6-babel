'use strict';

var tab = [];
var validText = document.getElementById('btnText');
validText.addEventListener("click", function (event) {
	var inputValue = document.getElementById('inputText').value;
	var ul = document.getElementById('list');
	var li = document.createElement("li");
	ul.appendChild(li);
	li.innerHTML = inputValue;
	if (inputValue === "") {
		li.innerHTML = "Père Noël!";
	}
	tab.push(inputValue);
	console.log(tab);
});

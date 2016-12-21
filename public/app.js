'use strict';

var tab = [];
var validText = document.getElementById('btnText');
var searchBtn = document.getElementById('btnSearch');

validText.addEventListener('click', function (event) {
	var inputValue = document.getElementById('inputText').value;
	// console.log(inputValue);
	var ul = document.getElementById('listName');
	var li = document.createElement('li');
	ul.appendChild(li);
	li.innerHTML = inputValue;
	if (inputValue === "") {
		li.innerHTML = "Père Noël";
	}
	tab.push(inputValue);
	console.log(tab);
});
searchBtn.addEventListener('click', function (event) {
	var filteredTab = [];
	var searchValue = document.getElementById('searchText').value;
	var showFilteredName = document.getElementById('affichName');
	for (var i = 0; i < tab.length; i++) {
		var element = tab[i];
		// console.log(element);
		var filterValue = element.indexOf(searchValue);
		// console.log(filterValue);
		if (filterValue === 0) {
			filteredTab.push(element);
			console.log(filteredTab);
			showFilteredName.innerHTML = filteredTab;
		}
	}
});

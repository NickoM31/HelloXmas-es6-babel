const tab = [];
const validText = document.getElementById('btnText');
const searchBtn = document.getElementById('btnSearch');

validText.addEventListener('click',(event)=>{
	let inputValue = document.getElementById('inputText').value;
	// console.log(inputValue);
	let ul = document.getElementById('listName');
	let li = document.createElement('li');
	ul.appendChild(li);
	li.innerHTML = inputValue;
	if(inputValue === ""){
		li.innerHTML = "Père Noël";
	}
	tab.push(inputValue);
	console.log(tab);
});
searchBtn.addEventListener('click', (event)=>{
	let filteredTab = [];
	let searchValue = document.getElementById('searchText').value;
	let showFilteredName = document.getElementById('affichName');
	for(let i = 0; i < tab.length; i++){
		let element = tab[i];
		// console.log(element);
		let filterValue = element.indexOf(searchValue);
		// console.log(filterValue);
		if(filterValue === 0){
			filteredTab.push(element);
			console.log(filteredTab);
			showFilteredName.innerHTML = filteredTab;
		}
	}
});









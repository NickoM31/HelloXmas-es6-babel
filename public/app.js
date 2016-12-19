'use strict';

// let hello = ()=>{
// 	let person = 'Père Noel'{
// console.log('bonjour' + person);
// }
// hello('nico');
// hello();
var validText = document.getElementById('btnText');
console.log(validText);
validText.addEventListener("click", function (event) {
	console.log('sa click');
	var inputValue = document.getElementById('inputText').value;
	console.log(inputValue);
	var html = document.getElementById('prev');
	html.innerHTML = inputValue;
});

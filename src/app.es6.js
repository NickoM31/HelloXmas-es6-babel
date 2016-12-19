// let hello = ()=>{
// 	let person = 'Père Noel'{
// console.log('bonjour' + person);
// }
// hello('nico');
// hello();
let validText = document.getElementById('btnText');
console.log(validText);
validText.addEventListener("click",(event)=>{
	console.log('sa click');
	let inputValue = document.getElementById('inputText').value;
	console.log(inputValue);
	let html = document.getElementById('prev');
	html.innerHTML = inputValue;
});





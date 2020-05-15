var todoList =[];
console.log(localStorage.getItem('things'));

document.getElementById('add-things').addEventListener('click', addItems);

function addItems() {
	var itemName = document.getElementById('thing-name');
	todoList.push(itemName.value);
	localStorage.setItem('thing', todoList);
	itemName.value = "";
}
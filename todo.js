// Simple JS based to-do application
// Application as part of the course developed by Gordon Zhu from Watch and Code

var todos = ['item1', 'item2', 'item3'];

//function to display the list
function displayTodo() {
	console.log('My todo list is: ', todos);
}

//function to add to the list
function addTodo(item) {
	todos.push(item);
	displayTodo();
}

//function to change a todo item
function changeTodo(position) {
	todos[position] = addTodo(item);
	displayTodo();
}

//function to delete a todo item
function deleteTodo(position, numberOfItems) {
	todos.splice(position, numberOfItems);
	displayTodo();
}
// Code goes here

// Simple JS based to-do application
// This simple code explains the previous code but using Objects
// Application as part of the course developed by Gordon Zhu from Watch and Code

var todoList = {
  todos:  ['item1', 'item2', 'item3'],
  //taking the standalone function and then moving it into an object
  displayTodo: function(){
    console.log('My todos:',this.todos);
  },
  addTodo: function(item){
    this.todos.push(item);
  },
  changeTodo: function(position,item){
    this.todos[position] = item;
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
  }
};

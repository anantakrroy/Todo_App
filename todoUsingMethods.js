// Code goes here

// Simple JS based to-do application
// Application as part of the course developed by Gordon Zhu from Watch and Code

var todoList = {
  todos:  [],
  // The way todo list is displayed will be changed.
  // We will use conditions to show content based on true or false
  displayTodo: function(){
    
    //check if the todo list is empty
    if (this.todos.length === 0) {
      console.log('Your todo list is empty!');
    } else {
    console.log('My todos:');
    for(i = 0; i < this.todos.length; i++){
      //check if the todo is completed or not, if completed prepend (x) to it
      if (this.todos[i].completed === true) {
        console.log('( x )',this.todos[i].todoText);      
      } else {
        console.log('(   )',this.todos[i].todoText);    
      }
    }
    }
  },
  //we will now pass an object inside the function within the object(method)
  //Motive of this is - we want todos to show more information
  //and not just a text item
  addTodo: function(item){
    this.todos.push({
      todoText: item,
      completed: false //show the status of the todo item
    });
    this.displayTodo();
  },
  changeTodo: function(position,item){
    this.todos[position].todoText = item;
    this.displayTodo();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodo();
  },
  
};

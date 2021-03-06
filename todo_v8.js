// Code goes here

// Simple JS based to-do application
// Application as part of the course developed by Gordon Zhu from Watch and Code

var todoList = {
  todos:  [],
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
  changeTodo: function(position, item){
    this.todos[position].todoText = item;
    this.displayTodo();
  },
  deleteTodo: function(position){
    this.todos.splice(position,1);
    this.displayTodo();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodo();
  },
  toggleAll: function(){
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    //Get the number of completed Todos
    for(var i = 0;i < this.todos.length;i++) {
      if (this.todos[i].completed === true){
        completedTodos++;
      }
    }
    // if everything is true, then the result be toggled to false
    if (completedTodos === totalTodos){
      for(var i = 0;i < totalTodos;i++){
        this.todos[i].completed = !this.todos[i].completed;
        }
      this.displayTodo();
      } 
      // if any is not true then make it true,i.e, make everything true
      else {
        for(var i = 0;i < totalTodos;i++){
        this.todos[i].completed = true;
      }
      this.displayTodo();
    }
  }
};

var handlers = {
  displayTodo: function() {
    todoList.displayTodo();
  },
  
  toggleAll: function() {
      todoList.toggleAll();
  },
  
  addTodo: function() {
    var addTodoText = document.getElementById("addTodoText");
    todoList.addTodo(addTodoText.value);
    addTodoText.value = '';
  },
  
  changeTodo: function() {
    var changeTodoPos = document.getElementById("changeTodoPos");
    var changeTodoText =  document.getElementById("changeTodoText");
    todoList.changeTodo(changeTodoPos.valueAsNumber,changeTodoText.value);
    changeTodoText.value = '';
    changeTodoPos.value = '';
  },
  
  deleteTodo: function() {
    var deleteTodoPos = document.getElementById("deleteTodoPos");
    todoList.deleteTodo(deleteTodoPos.valueAsNumber);
    deleteTodoPos.value = '';
  },
  
  toggleTodo: function() {
    var toggleTodoPos = document.getElementById("toggleTodo");
    todoList.toggleCompleted(toggleTodoPos.valueAsNumber);
    toggleTodoPos.value = '';
  }
}

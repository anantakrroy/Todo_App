var todoList = {
  todos: [],
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    
    this.todos.forEach(function(todo) {
      if(todo.completed === true) {
        completedTodos++;
      }
    });
    
    this.todos.forEach(function(todo) {
      // Case 1: If everything’s true, make everything false.
      if(completedTodos === totalTodos) {
        todo.completed = false;
      } else {     // Case 2: Otherwise, make everything true.  
        todo.completed = true;
      }
    });
  }
};

var handlers = {
  addTodo: function() {
    var addTodoTextInput = document.getElementById('addTodoTextInput');
    todoList.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    view.displayTodos();
  },
  changeTodo: function() {
    var changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    var changeTodoTextInput = document.getElementById('changeTodoTextInput');
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
    view.displayTodos();
  },
  deleteTodo: function(position) {
    todoList.deleteTodo(position);
    view.displayTodos();
  },
  toggleCompleted: function() {
    var toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
    view.displayTodos();
  },
  toggleAll: function() {
    todoList.toggleAll();
    view.displayTodos();
  }  
};

var view = {
  displayTodos: function() {
    var todosUl = document.querySelector('ul');
    todosUl.innerHTML = '';

    this //refers to the view object
    // For this to refer to view object inside callback function
    // forEach(callback, this)
    todoList.todos.forEach(function(todo, position) {
      var todoLi = document.createElement('li');
      var todoTextWithCompletion = '';
      if (todo.completed === true) {
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }
      
      todoLi.id = position;
      todoLi.textContent = todoTextWithCompletion;
      todosUl.appendChild(todoLi);
      todosUl.appendChild(this.createDeleteButton()); // this here refers to the this in the higher order function and not to the object this
    }, this);
  },
  
  createDeleteButton: function() {
    var createDeleteButton = document.createElement('button');
    createDeleteButton.textContent = 'Delete';
    createDeleteButton.className = 'deleteButton';
    return createDeleteButton;
  },
  
  setUpEventListener: function() {
    var todosUl = document.querySelector('ul');
    todosUl.addEventListener('click', function(event) {
      //Get the element that was clicked on
      var elementClicked = event.target;

      //Check if element clicked is a delete button
      if (elementClicked.className === 'deleteButton') {
        //Run handlers.deleteTodo(position)
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventListener();













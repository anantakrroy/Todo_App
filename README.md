# Todo_App
Simple JS based todo app as part of the Practical JS course developed by Gordon Zhu on his website [Watch and Code](http://watchandcode.com)

## Versions of the app

### Version 1
   #### Requirements
   * App should store todos
   * Should display todos
   * Should allow to add todos
   * Allow to change todos
   * Allow to delete todos
    
 ### Version 2
   #### Requirements
   * Function to display todos
   * Function to add todos
   * Functions to change todos
   * Function to delete todos
     
 ### Version 3
   #### Requirements
   * Store the todo items in an object
   * Should have displayTodo method
   * Have addTodo method
   * Have changeTodo method
   * Have deleteTodo method
    
 ### Version 4
   #### Requirements
   * todoList.addTodo should add a todo object
   * todoList.changeTodo should change the todo text property
   * todoList.toggleCompleted should change the completed property
    
  ### Version 5
   #### Requirements
   * todoList.addTodo should add a todo object
   * todoList.changeTodo should change the todo text property
   * todoList.toggleCompleted should change the completed property
    
  ### Version 6
   #### Requirements
   * Implement the toggle all feature
     * Different scenarios are-
       * Everything true, make everything false
       * In any other case,make everything true
         
  ### Version 7
   #### Requirements
   * There should be display. Todo and toggle all todo buttons
   * Clicking displayTodo should run todos.displayTodo
   * Clicking todos.toggleAll shold run todos.toggleAll
   
  ### Version 8
   #### Requirements
   * There should be display. Todo and toggle all todo buttons
   * Clicking displayTodo should run todos.displayTodo
   * Clicking todos.toggleAll shold run todos.toggleAll
   
  ### Version 9
   #### Requirements
   * Each todo item should be a list item
   * Each todo item must have the todoText property
   * Each todo should show the completed property

  ### Version 10(Event delegation)
   #### Requirements
   * There should be a way to create delete buttons
   * There should be a delete button for each todo
   * Each *li* shoud have an *id* that has the todo position
   * Delete buttons should have access to the todo id
   * Clicking delete should update todoList.todos and the DOM
   
  ### Version 11
   #### Requirements
   * todoList.toggleAll should use forEach
   * view.displayTodo should use forEach
   
  ### use of the 'this' keyword
  * In a regular function or no function at all, 'this' refers to the *window* itself. Window is the object which represents the browser       window.
  * When a function is called as a method, 'this' refers to the object on the left side of the dot.
  * In a function that is being used as a constructor , 'this' points to the object that the constructor is creating.
  * When the value of 'this' is explicitly changed using 'bind', 'apply' or 'call', returns a copy of the function where 'this' is set to     the first srgument passed into .bind()
      * `bind`- Method on functions. Returns a copy of the function where `this` is set to the first argument passed to the `bind`
      * Difference between `apply`,`call` and `bind` is that apply and call change the value within the function and run it immediately           whereas bind creates a copy of the function.
      
  * In case of a callback function, the above rules need to be applied methodically








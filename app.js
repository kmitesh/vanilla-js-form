// selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


//functions
function addTodo(event){

// Prevent form from submitting
  event.preventDefault();

  //Todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  //Create Li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);

  //ADD TODO TO LOCAL localStorage

  //saveLocalTodos(todoInput.value);

  //ChECK MARK BUTTON
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class = "fas fa-check"></li>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //ChECK TRASH BUTTON
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class = "fas fa-trash"></li>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  //APPEND TO LIST
todoList.appendChild(todoDiv);

//CLEAR TODO INPUT value
todoInput.value = " ";
}

function deleteCheck(e){
  //console.log(e.target);
  const item = e.target;

  //DELETE TODO
  if(item.classList[0] === 'trash-btn'){
    const todo = item.parentElement;
    //Animation
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function(){
      todo.remove();
    });
    //todo.remove();

  }
  //CHECK mark
  if(item.classList[0] === 'complete-btn'){
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}

function filterTodo(e){
  const todos = todoList.childNodes;
  todos.forEach(function(todo){
  switch(e.target.value){
    case "all":
    todo.style.display = 'flex';
    break;
    case "completed":
    if (todo.classList.contains("completed")){
      todo.style.display = "flex";
    }else{
      todo.style.display = "none";
    }
    break;
    case "uncompleted":
    if(!todo.classList.contains('completed')){
      todo.style.display = "flex";
    }else{
      todo.style.display = "none";
    }
    break;
  }
  });
}



//course to begin again from 55 minutes

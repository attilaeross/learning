//Getting Elements - selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-add-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

const myButton = document.querySelector('.change-user-button');
const todoListHeader = document.querySelector('h2');
const changeUserLabel = document.querySelector('label');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
myButton.addEventListener('click', setUserName);
filterOption.addEventListener('click', filterTodo);


//Functions

//personalize app by adding name to the Todo List Header
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    todoListHeader.innerHTML = "Todo list for " + myName;
    changeUserLabel.innerText = "* not " +myName+ "/ change user -->"
    }
}

function addTodo(event) {

    event.preventDefault();
    //prepare the structure by preparing the div and li
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;

    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
   

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-button');
    todoDiv.appendChild(completedButton);
    
    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);

    //append to the list
    todoList.appendChild(todoDiv);
    //clear todo input value;
    todoInput.value = "";
}

//Deleting Items from list
function deleteCheck(e) {
    const item =e.target;
    //console.log(e.target);

    //Delete Todo
    if(item.classList[0] === 'delete-button'){
        const todo = item.parentElement;
        todo.remove();
    }

    //Mark Todo DONE / UNDONE
    if(item.classList[0] === 'complete-button'){
        const todo = item.parentElement;
        todo.classList.toggle('complete');
    }
}

//Filtering Todos
function filterTodo(e){
    const todos = todoList.childNodes;
    //console.log(todos);
    todos.forEach(function(todo){
        console.log(todo);
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex';
            break;
            case "completed":
                if(todo.classList.contains("complete")){
                    todo.style.display = "flex";
                }
                else {
                    todo.style.display = "none";
                }
            break;
            case "outstanding":
                if(!todo.classList.contains("complete")){
                    todo.style.display = "flex" ;
                }else {
                    todo.style.display = "none";
                }
            break;
        }
    })

}



//initialization code, as it structures the todo list when it first loads
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    todoListHeader.textContent = "Todo list for " + storedName;
    changeUserLabel.innerText = "* not " +storedName+ "/ change user -->"
  }
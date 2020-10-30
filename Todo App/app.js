//Getting Elements - selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-add-button');
const todoList = document.querySelector('.todo-list');
let myButton = document.querySelector('.change-user-button');
let todoListHeader = document.querySelector('h2');
let changeUserLabel = document.querySelector('label');

//Event Listeners
todoButton.addEventListener('click', addTodo);
myButton.addEventListener('click', setUserName);


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

    //newTodo.innerText ='hey';
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-button');
    completedButton.innerHTML = 'Completed';
    todoDiv.appendChild(completedButton);
    
    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete-button');
    todoDiv.appendChild(deleteButton);

    //append to the list
    todoList.appendChild(todoDiv);

    todoInput.value = "";
    
}

//initialization code, as it structures the todo list when it first loads
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    todoListHeader.textContent = "Todo list for " + storedName;
    changeUserLabel.innerText = "* not " +storedName+ "/ change user -->"
  }
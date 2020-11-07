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
todoList.addEventListener('click', checkEditSaveDelete);
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
    
    // edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = '<i class="fas fa-edit"></i>';
    editButton.classList.add('edit-button');
    todoDiv.appendChild(editButton);

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

//Complete / Edit / Delete
function checkEditSaveDelete(e) {
    const item =e.target;
    const todo = item.parentElement;
    const editButton = todo.childNodes[2];

    //set/mark Todo DONE (cant be edited) / UNDONE (can be edited)
    if(item.classList[0] === 'complete-button'){
        console.log(todo.childNodes[2]);
        if(editButton.childNodes[0].classList.value == 'fas fa-edit'){
            todo.classList.toggle('complete');
            
            if(todo.classList.contains('complete')){
                editButton.disabled = true;
            }else {
                editButton.disabled = false;
            }
        }else {
            alert("you did not save the todo after editing....first press save button...than you can continue marking it done...")
        }
    }

    //Edit todo description
    if(item.classList[0] === 'edit-button' && !todo.classList.contains('complete')){
        if(item.innerHTML == '<i class="fas fa-edit"></i>'){
            todo.contentEditable = true;
            item.innerHTML = '<i class="fas fa-save"></i>';
            item.style.background = 'rgb(0, 102, 255)';
        }else {
            todo.contentEditable = false;
            item.innerHTML = '<i class="fas fa-edit"></i>';
            item.style.background = 'rgb(251, 255, 0)';
        }
    } 

    //Delete Todo
    if(item.classList[0] === 'delete-button'){
        todo.remove();
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
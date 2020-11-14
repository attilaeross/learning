//Getting Elements - selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-add-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

const changeUserButton = document.querySelector('.change-user-button');
const todoListHeader = document.querySelector('h2');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkEditSaveDelete);
changeUserButton.addEventListener('click', setUser);
filterOption.addEventListener('click', filterTodo);

//Functions

function setUser() {
    const userName = prompt('Please enter your name...Single name please...for now');
    if(!userName) {
        setUser();
    } else {
        activeUser = userName.toLowerCase(); 
        loadSavedTodos();
        todoListHeader.innerHTML = "Todo list for " + userName;
    }
}

function addTodo(event) {

    event.preventDefault();
    buildTodoList(todoInput.value);
    saveLocalTodo(todoInput.value);
    //clear todo input value;
    todoInput.value = "";
}

function buildTodoList(todo){
    //prepare the structure by preparing the div and li
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todo;

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
    todoList.appendChild(todoDiv)
}

//Complete / Edit / Delete
function checkEditSaveDelete(event) {
    const item =event.target;
    const todo = item.parentElement;
    const editButton = todo.childNodes[2];
    console.log(item, todo.childNodes)

    //set/mark Todo DONE (cant be edited) / UNDONE (can be edited)
    if(item.classList[0] === 'complete-button'){
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
        removeStoredTodo(todo);
        todo.remove();
    }
}

//Filtering Todos
function filterTodo(e){
    const todos = todoList.childNodes;
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

function saveLocalTodo(todo){
    let todos = getStoredTodos();
    todos.push(todo);
    localStorage.setItem(`${activeUser}Todos`, JSON.stringify(todos));
}

function loadSavedTodos(){
    while(todoList.childElementCount > 0 ){
        todoList.childNodes.forEach(function(node){
            node.remove();
        });
    }
    let todos = getStoredTodos();
    
    todos.forEach(function(todo){
        buildTodoList(todo);
    })
}

function removeStoredTodo(todo){
    let todos = getStoredTodos();

    todoIndex = todo.childNodes[0].innerText;
    console.log(todoIndex);
    todos.splice(todos.indexOf(todoIndex), 1 );
    localStorage.setItem(`${activeUser}Todos`, JSON.stringify(todos));
}

function getStoredTodos(){
    if(localStorage.getItem(`${activeUser}Todos`) === null){
        return todos = [];
    } else {
        return todos = JSON.parse(localStorage.getItem(`${activeUser}Todos`));
    }
}

//initialization code, as it structures the todo list when it first loads
let activeUser;
setUser();
//Getting Elements - selectors

// TODO: remove `todo` prefix from class names and variable names
// the context already tells about the "todo" app and there's no need to repeat the term everywhere in the code
// removing it will make it a lot easier to read! 

// TODO: try to find better (more descriptive) names for these elements of the UI
// but try to still maintain the coherence between the variable names and the CSS class names

// TODO: try using more specific selectors e.g. for the todo input and the buttons
// by using the element type and a class name e.g. "input.todo"
const todoInput = document.querySelector('input.todo');
const todoButton = document.querySelector('button.add-todo');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo')

const changeUserButton = document.querySelector('.change-user-button');
// TODO: better to use a class on the element and use that to select it
// querySelector returns the first element and that can cause problems if another h2 is added to the HTML
const todoListHeader = document.querySelector('h2');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', checkEditSaveDelete);
changeUserButton.addEventListener('click', setUser);
filterOption.addEventListener('click', filterTodo);

//Functions
// TODO: try to refactor the event handlers into arrow functions
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

// TODO: everything is called "todo" :) this makes reading code quite hard
// let's use more specific variable names!

// TODO: revise HTML, make it nice and schemantic then adopt JavaScript to the changes
function buildTodoList(todo){
    //prepare the structure by preparing the div and li
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");

    const newTodo = document.createElement('li');
    newTodo.innerText = todo;

    newTodo.classList.add('todo-item');
    // TODO: why put an `li` into a `div` and then append it to the `ul`?
    // instead: ul -> li -> div, etc
    todoDiv.appendChild(newTodo);

    //check mark button
    const completedButton = document.createElement('button');
    // TODO: create new elements using the DOM API
    // instead of setting a string value with elements in there in the parent innerHTML
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
    // TODO: add the `li` to the `ul` rather than a wrapper div
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
    // TODO: where is activeUser referenced?
    // is there a better way of accessing its value?
    // hint: avoid globals :)
    localStorage.setItem(`${activeUser}Todos`, JSON.stringify(todos));
}

function loadSavedTodos(){
    // TODO: why do we need a `while` loop when we go through all the child nodes
    // of the `ul` with `forEach` and invoke `remove` on all of them?
    while(todoList.childElementCount > 0 ){
        todoList.childNodes.forEach(function(node){
            node.remove();
        });
    }
    // TODO: use const instead of let if possible
    let todos = getStoredTodos();
    
    todos.forEach(function(todo){
        // TODO: what does the buildTodoList() do? does it have a correct name?
        buildTodoList(todo);
    })
}

function removeStoredTodo(todo){
    let todos = getStoredTodos();

    // TODO: what is the value of `todoIndex`? does it have the correct name?
    todoIndex = todo.childNodes[0].innerText;
    // TODO: remove console.log
    console.log(todoIndex);
    todos.splice(todos.indexOf(todoIndex), 1 );
    // TODO: is this a duplicate? how could we make this better?
    localStorage.setItem(`${activeUser}Todos`, JSON.stringify(todos));
}

function getStoredTodos(){
    // TODO: remove duplication of localStorage key
    if(localStorage.getItem(`${activeUser}Todos`) === null){
        return todos = [];
    } else {
        return todos = JSON.parse(localStorage.getItem(`${activeUser}Todos`));
    }
}

//initialization code, as it structures the todo list when it first loads
// TODO: why do we need a `let` declaration here and how come that it is available
// in other parts of the code?
let activeUser;
setUser();
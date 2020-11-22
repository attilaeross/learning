//Getting Elements - selectors

// TODO: remove `todo` variable names
// the context already tells about the "todo" app and there's no need to repeat the term everywhere in the code
// removing it will make it a lot easier to read! 

const textInput = document.querySelector('input.new-todo');

const addButton = document.querySelector('button.add');
const todoList = document.querySelector('ul.list');
const filterOption = document.querySelector('select.filter')
const changeUserButton = document.querySelector('button.change-user');
const listHeader = document.querySelector('h2.list-header');

//Event Listeners
document.addEventListener('DOMContentLoaded', setUser);
addButton.addEventListener('click', (event) => {
    event.preventDefault();
    const todo = textInput.value;
    addToList(todo);
    addToLocalStorage(todo);
    //clear todo input value;
    textInput.value = "";
});
todoList.addEventListener('click', (event) => {
    console.log(event.target.parentElement);
    const item = event.target;
    const todo = item.parentElement;

    //set/mark Todo DONE / UNDONE
    if(item.classList[0] === 'complete-button'){
            todo.classList.toggle('complete');
            
            if(todo.classList.contains('complete')){
                editButton.disabled = true;
            }else {
                editButton.disabled = false;
            }
        }

    //Edit todo description
    if(item.classList[0] === 'edit-button'){
        if(item.innerHTML == "Edit"){
            todo.contentEditable = true;
            item.innerHTML = 'Save';
            //item.style.background = 'rgb(0, 102, 255)';
        }else {
            todo.contentEditable = false;
            item.innerHTML = 'Edit';
            //item.style.background = 'rgb(251, 255, 0)';
        }
    } 

    //Delete Todo
    if(item.classList[0] === 'delete-button'){
        removeStoredTodo(todo);
        todo.remove();
    }
});
changeUserButton.addEventListener('click', setUser);
filterOption.addEventListener('click', (event) => {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        console.log(todo);
        switch(event.target.value){
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
});

//Functions
function setUser() {
    const userName = prompt('Please enter your name...Single name please...for now');
    if(!userName) {
        setUser();
    } else {
        const key = userName.toLowerCase(); 
        loadSavedList(key);
        listHeader.innerHTML = "Todo list for " + userName;
    }
}

// TODO: everything is called "todo" :) this makes reading code quite hard
// let's use more specific variable names!

function addToList(todo){
    //prepare the structure
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');

    //Add Todo text element 
    const textElement = document.createElement('div');
    textElement.classList.add('todo-text');
    textElement.innerHTML = todo;
    newTodo.appendChild(textElement);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = 'MARK';
    completedButton.classList.add('complete-button');
    newTodo.appendChild(completedButton);

    // edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = 'EDIT';
    editButton.classList.add('edit-button');
    newTodo.appendChild(editButton);

    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'DELETE';
    deleteButton.classList.add('delete-button');
    newTodo.appendChild(deleteButton);

    //append to the list
    todoList.appendChild(newTodo);
}

function addToLocalStorage(todo){
    let todos = getStoredTodos();
    todos.push(todo);
    // TODO: where is activeUser referenced?
    // is there a better way of accessing its value?
    // hint: avoid globals :)
    localStorage.setItem(`${activeUser}Todos`, JSON.stringify(todos));
}

function loadSavedList(userName){
    // TODO: why do we need a `while` loop when we go through all the child nodes
    // of the `ul` with `forEach` and invoke `remove` on all of them?
    while(todoList.childElementCount > 0 ){
        todoList.childNodes.forEach(function(node){
            node.remove();
        });
    }
    // TODO: use const instead of let if possible
    let todos = getStoredTodos(userName);
    
    todos.forEach(function(todo){
        addToList(todo);
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

function getStoredTodos(userName){
    // TODO: remove duplication of localStorage key
    if(localStorage.getItem(`${userName}Todos`) === null){
        return todos = [];
    } else {
        return todos = JSON.parse(localStorage.getItem(`${userName}Todos`));
    }
}

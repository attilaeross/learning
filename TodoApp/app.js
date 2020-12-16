//Getting Elements - selectors

const addButton = document.querySelector('button.add');
const todoList = document.querySelector('ul.list');
const filterOption = document.querySelector('select.filter')
const changeUserButton = document.querySelector('button.change-user');
const listHeader = document.querySelector('h2.list-header');

//Functions
let userKey;
const setUser = () => {
    const userName = prompt('Please enter your name...Single name please...for now');
    if(!userName) {
        setUser();
    } else {
        userKey = userName.toLowerCase().trim(); 
        loadSavedList(userKey);
        listHeader.innerHTML = "Todo list for " + userName; 
    }
}

const addToList = (todo) => {
    //prepare the structure
    const newTodo = document.createElement('li');
    newTodo.classList.add('todo-item');

    //Add Todo text element 
    const textElement = document.createElement('p');
    textElement.classList.add('todo-text');
    textElement.innerHTML = todo.text;
    newTodo.appendChild(textElement);

    //check mark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = 'Mark';
    completedButton.classList.add('complete-button');

    if(todo.isComplete == true){
        newTodo.classList.toggle('complete');
    }
    newTodo.appendChild(completedButton);

    // edit button
    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.classList.add('edit-button');
    
    if(todo.isComplete == true){
        editButton.disabled = true;
    }
    newTodo.appendChild(editButton);

    
    // delete button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'Delete';
    deleteButton.classList.add('delete-button');
    newTodo.appendChild(deleteButton);

    //append to the list
    todoList.appendChild(newTodo);
}

const addToLocalStorage = (todo) => {
    let todos = getStoredTodos();
    todos.push(todo);
    // TODO: where is activeUser referenced?
    // is there a better way of accessing its value?
    // hint: avoid globals :)
    localStorage.setItem(`${userKey}Todos`, JSON.stringify(todos));
}

const loadSavedList = (userName) => {
    // TODO: why do we need a `while` loop when we go through all the child nodes
    // of the `ul` with `forEach` and invoke `remove` on all of them?
    while(todoList.childElementCount > 0 ){
        todoList.childNodes.forEach(function(node){
            node.remove();
        });
    }
    
    const todos = getStoredTodos(userName);
    
    todos.forEach(function(todo){
        addToList(todo);
    })
}

const removeStoredTodo = (todo) => {
    let todos = getStoredTodos();

    const todoText = todo.childNodes[0].innerText;
    todos.splice(todos.indexOf(todoText), 1 );
    // TODO: is this a duplicate? how could we make this better?
    localStorage.setItem(`${userKey}Todos`, JSON.stringify(todos));
}

const changeTodoMarkLocalStorage = (todo) => {
    let todos = getStoredTodos();
    todoText = todo.childNodes[0].innerText;
    todos.filter(obj => {
        if(obj.text === todoText){
            if(obj.isComplete == true){
                obj.isComplete = false
            }
            else {
                obj.isComplete = true;
            }
        }
    })
    localStorage.setItem(`${userKey}Todos`, JSON.stringify(todos));
}
const updateTodoTextLocalStorage = (oldText,newText) => {
    let todos = getStoredTodos();
    todos.filter(obj => {
        if(obj.text === oldTodoText){
            obj.text = newText;
        }
    })
    localStorage.setItem(`${userKey}Todos`, JSON.stringify(todos));
}

const getStoredTodos = () => {
    const storageKey = `${userKey}Todos`;
    if(localStorage.getItem(storageKey) === null){
        return todos = [];
    } else {
        return todos = JSON.parse(localStorage.getItem(storageKey));
    }
}

//Event Listeners
document.addEventListener('DOMContentLoaded', setUser);

addButton.addEventListener('click', event => {
    event.preventDefault();

    const textInput = document.querySelector('input.new-todo');
    const todo = {
        text : textInput.value,
        isComplete : false,
    };
    addToList(todo);
    addToLocalStorage(todo);
    //clear todo input value;
    textInput.value = "";
});

let oldTodoText;
todoList.addEventListener('click', event => {
    const item = event.target;
    const todo = item.parentElement;

    //set/mark Todo DONE / UNDONE
    if(item.classList[0] === 'complete-button'){ 
            todo.classList.toggle('complete');
            editButton = todo.childNodes[2];

            if(todo.classList.contains('complete')){
                todo.isComplete = true;
                editButton.disabled = true;
                changeTodoMarkLocalStorage(todo);
            }else {
                todo.isComplete = false;
                editButton.disabled = false;
                changeTodoMarkLocalStorage(todo);
            }
        }

    //Edit todo description
    if(item.classList[0] === 'edit-button'){
        let todoElement = todo.childNodes[0];
        if(item.innerHTML == "Edit"){
            oldTodoText = todoElement.innerText;
            todoElement.contentEditable = true;
            todoElement.focus();
            item.innerHTML = 'Save';

            //disable all buttons (except Save) until user saves the todo text
            const buttons = document.getElementsByTagName('button');
            for (let i = 0; i < buttons.length; i++) {
                if(buttons[i].innerHTML != 'Save'){
                    buttons[i].disabled = true;
                }
            }
        } else {
            todoElement.contentEditable = false;
            const newTodoText = todoElement.innerText;
            item.innerHTML = 'Edit';

            //enable all buttons after user saved the todo text
            const buttons = document.getElementsByTagName('button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].disabled = false;
            }
            updateTodoTextLocalStorage(oldTodoText,newTodoText);
        }
    } 

    //Delete Todo
    if(item.classList[0] === 'delete-button'){
        removeStoredTodo(todo);
        todo.remove();
    }
});

changeUserButton.addEventListener('click', setUser);

filterOption.addEventListener('change', event => {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
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

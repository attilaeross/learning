// Getting Elements - selectors

const addButton = document.querySelector("button.add");
const todoList = document.querySelector("ul.list");
const filterOption = document.querySelector("select.filter");
const changeUserButton = document.querySelector("button.change-user");
const listHeader = document.querySelector("h2.list-header");

// Functions
let userKey;

const getStoredTodos = () => {
  const storageKey = `${userKey}Todos`;
  let todos = [];
  if (localStorage.getItem(storageKey) === null) {
    return todos;
  }
  todos = JSON.parse(localStorage.getItem(storageKey));
  return todos;
};

const addToList = (todo) => {
  // prepare the structure
  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");

  // Add Todo text element
  const textElement = document.createElement("p");
  textElement.classList.add("todo-text");
  textElement.innerHTML = todo.text;
  newTodo.appendChild(textElement);

  // check mark button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "Mark";
  completedButton.classList.add("complete-button");

  if (todo.isComplete === true) {
    newTodo.classList.toggle("complete");
  }
  newTodo.appendChild(completedButton);

  // edit button
  const editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.classList.add("edit-button");

  if (todo.isComplete === true) {
    editButton.disabled = true;
  }
  newTodo.appendChild(editButton);

  // delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.classList.add("delete-button");
  newTodo.appendChild(deleteButton);

  // append to the list
  todoList.appendChild(newTodo);
};

const loadSavedList = (userName) => {
  // TODO: why do we need a `while` loop when we go through all the child nodes
  // of the `ul` with `forEach` and invoke `remove` on all of them?
  while (todoList.childElementCount > 0) {
    todoList.childNodes.forEach((node) => {
      node.remove();
    });
  }

  const todos = getStoredTodos(userName);

  todos.forEach((todo) => {
    addToList(todo);
  });
};

const setUser = () => {
  // eslint-disable-next-line no-alert
  const userName = prompt(
    "Please enter your name...Single name please...for now"
  );
  if (!userName) {
    setUser();
  } else {
    userKey = userName.toLowerCase().trim();
    loadSavedList(userKey);
    listHeader.innerHTML = `Todo list for ${userName}`;
  }
};

const addToLocalStorage = (todo) => {
  const todos = getStoredTodos();
  todos.push(todo);
  // TODO: where is activeUser referenced?
  // is there a better way of accessing its value?
  // hint: avoid globals :)
  localStorage.setItem(`${userKey}Todos`, JSON.stringify(todos));
};

const removeStoredTodo = (todo) => {
  const todos = getStoredTodos();

  const todoText = todo.childNodes[0].innerText;
  todos.splice(todos.indexOf(todoText), 1);
  // TODO: is this a duplicate? how could we make this better?
  localStorage.setItem(`${userKey}Todos`, JSON.stringify(todos));
};

const changeTodoMarkLocalStorage = (todo) => {
  const todos = getStoredTodos();
  const todoText = todo.childNodes[0].innerText;
  todos
    .filter(({ text }) => text === todoText)
    .forEach((t) => {
      // eslint-disable-next-line no-param-reassign
      t.isComplete = !t.isComplete;
    });
  localStorage.setItem(`${userKey}Todos`, JSON.stringify(todos));
};

let oldTodoText;
todoList.addEventListener("click", (event) => {
  const updateTodoTextLocalStorage = (oldText, newText) => {
    const todos = getStoredTodos();
    todos
      .filter((todo) => todo.text === oldTodoText)
      .forEach((todo) => {
        // eslint-disable-next-line no-param-reassign
        todo.text = newText;
      });

    localStorage.setItem(`${userKey}Todos`, JSON.stringify(todos));
  };

  // Event Listeners
  document.addEventListener("DOMContentLoaded", setUser);

  addButton.addEventListener("click", (e) => {
    e.preventDefault();

    const textInput = document.querySelector("input.new-todo");
    const todo = {
      text: textInput.value,
      isComplete: false,
    };
    addToList(todo);
    addToLocalStorage(todo);
    // clear todo input value;
    textInput.value = "";
  });

  const item = event.target;
  const todo = item.parentElement;

  // set/mark Todo DONE / UNDONE
  if (item.classList[0] === "complete-button") {
    todo.classList.toggle("complete");
    const editButton = todo.childNodes[2];

    if (todo.classList.contains("complete")) {
      todo.isComplete = true;
      editButton.disabled = true;
      changeTodoMarkLocalStorage(todo);
    } else {
      todo.isComplete = false;
      editButton.disabled = false;
      changeTodoMarkLocalStorage(todo);
    }
  }

  // Edit todo description
  if (item.classList[0] === "edit-button") {
    const todoElement = todo.childNodes[0];
    if (item.innerHTML === "Edit") {
      oldTodoText = todoElement.innerText;
      todoElement.contentEditable = true;
      todoElement.focus();
      item.innerHTML = "Save";

      // disable all buttons (except Save) until user saves the todo text
      const buttons = document.getElementsByTagName("button");
      buttons.forEach((button) => {
        if (button.innerHTML !== "Save") {
          // eslint-disable-next-line no-param-reassign
          button.disabled = true;
        }
      });
    } else {
      todoElement.contentEditable = false;
      const newTodoText = todoElement.innerText;
      item.innerHTML = "Edit";

      // enable all buttons after user saved the todo text
      const buttons = document.getElementsByTagName("button");

      buttons.forEach((button) => {
        // eslint-disable-next-line no-param-reassign
        button.disabled = false;
      });
      updateTodoTextLocalStorage(oldTodoText, newTodoText);
    }
  }

  // Delete Todo
  if (item.classList[0] === "delete-button") {
    removeStoredTodo(todo);
    todo.remove();
  }
});

changeUserButton.addEventListener("click", setUser);

filterOption.addEventListener("change", (event) => {
  const todos = todoList.childNodes;
  todos.forEach((todo) => {
    const { style } = todo;
    switch (event.target.value) {
      case "completed":
        if (todo.classList.contains("complete")) {
          style.display = "flex";
        } else {
          style.display = "none";
        }
        break;
      case "outstanding":
        if (!todo.classList.contains("complete")) {
          style.display = "flex";
        } else {
          style.display = "none";
        }
        break;
      default:
        style.display = "flex";
        break;
    }
  });
});

const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const TODOS_KEY = "todos";

function init() {
  countTodos();
  renderTodoList();
}
init();

function countTodos() {
  let count = 0;
  let existingTodos = getTodosFromStorage();

  if (existingTodos) {
    count = existingTodos.length;
  }

  document.querySelector(".tasks-count").textContent = `${count} Tasks`;
}

btn.addEventListener("click", () => {
  let inputValue = input.value;

  if (!inputValue) {
    alert("Invalid Input");
    return;
  }
  let existingTodos = getTodosFromStorage();

  let newData;
  let newTodo = {
    id: Date.now(),
    value: inputValue,
    isCompleted: false,
  };
  if (existingTodos) {
    newData = [...existingTodos, newTodo];
  } else {
    newData = [newTodo];
  }

  localStorage.setItem(TODOS_KEY, JSON.stringify(newData));

  init();
});

function toggleTodoCompletion(id) {
  let todos = getTodosFromStorage();
  if (!todos) return;

  let newData = todos.map((td) => {
    if (td.id === id) {
      return {
        ...td,
        isCompleted: !td.isCompleted,
      };
    }
    return td;
  });

  localStorage.setItem(TODOS_KEY, JSON.stringify(newData));

  init();
}

function renderTodoList() {
  let todos = getTodosFromStorage();

  if (!todos) return;

  let htmlString = "";
  todos.forEach((td) => {
    htmlString += `
     <div class="todo">
          <p class="${td.isCompleted ? "completed" : ""}">${td.value}</p>
          <div onClick={toggleTodoCompletion(${td.id})} class="wrapper" >
            <img
              style="display: ${td.isCompleted ? "inline" : "none"}"
              width="15"
              src="./images/tick.svg"
              alt=""
            />
          </div>
        </div>
    `;
  });

  todoList.innerHTML = htmlString;
}

function getTodosFromStorage() {
  let todosString = localStorage.getItem(TODOS_KEY);

  if (!todosString) return null;

  let parsedData;
  try {
    parsedData = JSON.parse(todosString);
  } catch (error) {
    alert("Failed to parse Json string");
    console.error(error);
  }

  return parsedData;
}

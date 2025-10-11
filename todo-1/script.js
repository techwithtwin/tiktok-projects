const input = document.querySelector("input");
const btn = document.querySelector("button");
const todoList = document.querySelector(".todo-list");
const TODOS_KEY = "todos";

(function init() {
  renderTodoList();
})();

const wrapperBtns = document.querySelectorAll(".wrapper");

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

  renderTodoList();
});

wrapperBtns.forEach((btn) => {
  btn.addEventListener("click", markTodoComplete);
});

function markTodoComplete(e) {
  let id = e.target.id;
  let todos = getTodosFromStorage();
  if (!todos) return;
  console.log(id);
  let newData = todos.map((td) => {
    if (td.id === id) {
      return {
        ...td,
        isCompleted: true,
      };
    }
    return td;
  });

  console.log(newData);
  return;
  localStorage.setItem(TODOS_KEY, JSON.stringify(newData));

  renderTodoList();
}

function renderTodoList() {
  let todos = getTodosFromStorage();

  if (!todos) return;

  let htmlString = "";
  todos.forEach((td) => {
    htmlString += `
     <div class="todo">
          <p class="${td.isCompleted ? "completed" : ""}">${td.value}</p>
          <div class="wrapper" id="${td.id}">
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

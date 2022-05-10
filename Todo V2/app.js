class Todo {
  constructor() {
    this.todoInput = document.querySelector("#todo-input");
    this.todoOutput = document.querySelector(".todo-output");
  }
  display() {
    const todoValue = this.todoInput.value;
    this.todoInput.value = "";
    if (todoValue === "") {
      alert("Enter a todo");
    } else {
      // Create Todo Div
      const displayDiv = document.createElement("div");
      displayDiv.classList.add("todo-item", "slideInLeft");
      this.todoOutput.appendChild(displayDiv);
      // Create the actual todo
      const actualTodo = document.createElement("p");
      actualTodo.classList.add("todo-text");
      actualTodo.innerText = todoValue;
      displayDiv.appendChild(actualTodo);
      // Add check icon
      const todoCompleted = document.createElement("button");
      todoCompleted.classList.add("todo-completed");
      todoCompleted.innerHTML = "<i class='fas fa-check fa-2xl'></i>";
      displayDiv.appendChild(todoCompleted);
      // Add trash icon
      const todoDelete = document.createElement("button");
      todoDelete.classList.add("todo-delete");
      todoDelete.innerHTML = "<i class='fas fa-trash fa-2xl'></i>";
      displayDiv.appendChild(todoDelete);
      // Completed todo
      todoCompleted.addEventListener("click", () => {
        actualTodo.classList.toggle("completed");
      });
      // Delete todo
      todoDelete.addEventListener("click", () => {
        displayDiv.classList.add("lightSpeedOut");
        displayDiv.addEventListener("animationend", function () {
          displayDiv.remove();
        });
      });
    }
  }
}

const newTodo = new Todo();
const submit = document.querySelector(".submit");
submit.addEventListener("click", function () {
  newTodo.display();
});

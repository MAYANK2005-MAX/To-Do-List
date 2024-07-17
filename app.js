// app.js

document.addEventListener("DOMContentLoaded", () => {
    const newTaskForm = document.getElementById("new-task-form");
    const newTaskInput = document.getElementById("new-task");
    const tasksList = document.getElementById("tasks");
  
    newTaskForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const taskContent = newTaskInput.value.trim();
      if (taskContent) {
        addTask(taskContent);
        newTaskInput.value = "";
      }
    });
  
    function addTask(content) {
      const taskElement = createTaskElement(content);
      tasksList.appendChild(taskElement);
    }
  
    function createTaskElement(content) {
      const li = document.createElement("li");
  
      const span = document.createElement("span");
      span.textContent = content;
      span.contentEditable = true;
      span.addEventListener("blur", () => {
        if (span.textContent.trim() === "") {
          tasksList.removeChild(li);
        }
      });
  
      const buttonsDiv = document.createElement("div");
  
      const completeButton = document.createElement("button");
      completeButton.textContent = "Complete";
      completeButton.addEventListener("click", () => {
        li.classList.toggle("completed");
      });
  
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", () => {
        tasksList.removeChild(li);
      });
  
      buttonsDiv.appendChild(completeButton);
      buttonsDiv.appendChild(deleteButton);
  
      li.appendChild(span);
      li.appendChild(buttonsDiv);
  
      return li;
    }
  });
  
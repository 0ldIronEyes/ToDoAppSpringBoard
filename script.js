const formElement = document.querySelector("form");
formElement.addEventListener("submit", function(ev) {
    ev.preventDefault();

})


function addTask() {
    
    const taskText = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    
    
    if (taskText.value !== "") {
      let li = document.createElement("li");
      li.innerText = taskText.value.trim();
      li.className = "listelement";
      let deletebutton = document.createElement("button");
      deletebutton.classList.add("listbutton");
      deletebutton.innerText = "delete";
      li.appendChild(deletebutton);
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
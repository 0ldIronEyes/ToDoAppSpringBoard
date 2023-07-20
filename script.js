const formElement = document.querySelector("form");
const taskList = document.querySelector("#taskList");


let savedlist = [];
if (localStorage.getItem("save") != null)
{

  savedlist = JSON.parse(localStorage.getItem("save"));
}

for (let i =0; i <savedlist.length; i++)
{
  let li = document.createElement("li");
  li.classList.add("listelement");
  li.innerText = savedlist[i].text;
  if (savedlist[i].crossed)
  {
    li.classList.add("striketext");
  }
  let deletebutton = document.createElement("button");
  deletebutton.classList.add("listbutton");
  deletebutton.innerText = "delete";
  deletebutton.title = savedlist[i].text;
  li.appendChild(deletebutton);
  taskList.appendChild(li);
}


formElement.addEventListener("submit", function(ev) {
    ev.preventDefault();

})

taskList.addEventListener("click", function(e){
  if (e.target.classList.contains("listbutton"))
  {
    e.target.parentElement.remove();
    for (let i =0; i < savedlist.length; i++)
    {

      if (savedlist[i].text == e.target.title)
      {
        
        savedlist.splice(i,1);
        localStorage.setItem("save",JSON.stringify(savedlist));
      }
    }
  }
  else if (e.target.classList.contains("listelement"))
  {
    e.target.classList.toggle("striketext");
    for (let i =0; i < savedlist.length; i++)
    {
      let textstring = e.target.innerText.slice(0,-6);
      textstring.slice(0,-12);
      if (savedlist[i].text == e.target.innerText)
      {
        savedlist[i].crossed = !savedlist[i].crossed;
        localStorage.setItem("save",JSON.stringify(savedlist));
      }
    }
  }
  
} )




function addTask() {
    
    const taskText = document.getElementById("taskInput");
   // const taskList = document.getElementById("taskList");
    
    
    if (taskText.value !== "") {
      let li = document.createElement("li");
      li.innerText = taskText.value.trim();
      li.className = "listelement";
      let deletebutton = document.createElement("button");
      deletebutton.classList.add("listbutton");
      savedlist.push( {text: taskText.value, crossed: false});
      localStorage.setItem("save",JSON.stringify(savedlist));
      deletebutton.innerText = "delete";
      deletebutton.title = taskText.value;
      li.appendChild(deletebutton);
      taskList.appendChild(li);
      taskInput.value = "";
    }
  }
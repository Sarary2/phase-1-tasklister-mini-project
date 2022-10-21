document.addEventListener("DOMContentLoaded", () => {

  //// your code here

  const input = document.getElementById("new-task-description");
  const formElement = document.querySelector("form");
  formElement.addEventListener('submit', (event) => {
  let task =input.value

    event.preventDefault();
    if (task.length===0){
    alert('Task cannot be empty')
    }else{
      ToDo(task);
    }
    formElement.reset()
  });
});


function css(element, style) {
  for (const property in style)
      element.style[property] = style[property];
}

function ToDo (task) {
  let listItem = document.createElement("li");
  let btn = document.createElement('button')
 
  css(btn, {  
'background' :'red',
'padding' : '10px',
'margin' : '2px',
'font-size' :'15px',
});

  btn.addEventListener('click',ToDelete)
  btn.textContent='X delete'
  listItem.innerText = `${task}`;
  listItem.appendChild(btn)
  document.querySelector("#tasks").appendChild(listItem);
}

function ToDelete(event){
event.target.parentNode.remove()
}
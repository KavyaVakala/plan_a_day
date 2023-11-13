
const toDoItems=document.getElementsByClassName("to-do-items")[0];
const input=document.getElementById("input");
const trashicon=document.getElementById("trash");

document.addEventListener("DOMContentLoaded", function () {
  loadToDoItems();
});//local storage

input.addEventListener("keydown",function(event){
    input(event.key=="submit")
    addItem();
});
function addItem(){
    var divParent=document.createElement("div");
    var divChild=document.createElement("div");
    var checkIcon=document.createElement("i");
    var trashIcon=document.createElement("i");
divParent.className="item";
divParent.innerHTML='<div>'+input.value+'</div>';
checkIcon.className="fa-solid fa-square-check";
checkIcon.style.color="lightgray";
checkIcon.addEventListener("click",function(){
    checkIcon.style.color="limegreen";
})
divChild.appendChild(checkIcon);
trashIcon.className="fa-solid fa-trash-can";
trashIcon.style.color="darkgray";
trashIcon.addEventListener("click",function(){
    divParent.remove();
     saveToDoItems();
})
divChild.appendChild(trashIcon);
divParent.appendChild(divChild);
toDoItems.appendChild(divParent);
input.value='';
saveToDoItems();

}

function saveToDoItems() {
  const items = Array.from(toDoItems.children).map((item) => item.innerText);
  localStorage.setItem("toDoItems", JSON.stringify(items));
}

function loadToDoItems() {
  const storedItems = JSON.parse(localStorage.getItem("toDoItems")) || [];
  storedItems.forEach(function (text) {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div");
    var checkIcon = document.createElement("i");
    var trashIcon = document.createElement("i");
    divParent.className = "item";
    divParent.innerHTML = '<div>' + text + '</div>';
    checkIcon.className = "fa-solid fa-square-check";
    checkIcon.style.color = "lightgray";
    checkIcon.addEventListener("click", function () {
      checkIcon.style.color = "limegreen";
    });
    divChild.appendChild(checkIcon);
    trashIcon.className = "fa-solid fa-trash-can";
    trashIcon.style.color = "darkgray";
    trashIcon.addEventListener("click", function () {
      divParent.remove();
      saveToDoItems(); // Save the updated to-do list
    });
    divChild.appendChild(trashIcon);
    divParent.appendChild(divChild);
    toDoItems.appendChild(divParent);
  });
}

function displayDate(){
    let date=new Date();
      date=date.toString().split(" ")
      document.querySelector("#date").innerHTML=date[1]+" "+date[2]+" "+date[3]
  }

  
  
    




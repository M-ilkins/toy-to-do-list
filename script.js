
const toDoInput = document.getElementById("to-do-item");
const list = document.getElementById('list');
const clearAllButton = document.getElementById('clear-all-button');
const submitButton = document.getElementById('submit-button');
const listContainer = document.getElementsByClassName("list-container")[0];
const form = document.getElementById("form");

function addToList() {
    if (toDoInput.value){
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    list.appendChild(li).innerText = toDoInput.value;
    li.appendChild(deleteButton).setAttribute("class", "delete-button");
    deleteButton.setAttribute("id", "delete-button");
    deleteButton.innerText = 'Delete'
    toDoInput.value = '';
    } else {
        alert("Taking the day off?")
    }
}

function deleteItem(e){
    if(e.target.getAttribute("id") == "delete-button"){
        e.target.parentNode.remove();
    }
}

function clearAll(){
    list.querySelectorAll("li").forEach(node => node.remove());
}

function handleForm(e){
    e.preventDefault();
} 

function hitEnterToInput(e){
    if (e.key == 'Enter'){
        addToList();
    }
}

listContainer.onclick = deleteItem;
submitButton.onclick = addToList;
clearAllButton.onclick = clearAll;
form.onsubmit = handleForm;

toDoInput.onkeyup = hitEnterToInput;








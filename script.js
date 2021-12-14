
//Variables
const toDoInput = document.getElementById("to-do-item");
const list = document.getElementById('list');
const clearAllButton = document.getElementById('clear-all-button');
const submitButton = document.getElementById('submit-button');
const listContainer = document.getElementsByClassName("list-container")[0];
const form = document.getElementById("form");


//Function declarations
function addToList() {
    if (toDoInput.value){
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    list.appendChild(li).innerText = toDoInput.value;
    li.appendChild(deleteButton).setAttribute("class", "delete-button");
    deleteButton.setAttribute("id", "delete-button");
    deleteButton.innerText = 'Delete'
    toDoInput.value = '';
    document.getElementById("happy-jocko").style.display = "inline";
    document.querySelector("#happy-jocko + p").style.display = "inline";
    } else {
        document.getElementById("not-happy-jocko").style.display = "inline";
        document.querySelector("#not-happy-jocko + p").style.display = "inline";
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
    document.querySelectorAll('img').forEach(item => item.style.display = "none");
    document.querySelectorAll('p').forEach(item => item.style.display = "none");
}

function handleForm(e){
    e.preventDefault();
} 

function hitEnterToInput(e){
    if (e.key == 'Enter'){
        addToList();
    }
}


//Event listeners 
listContainer.onclick = deleteItem;
submitButton.onclick = addToList;
clearAllButton.onclick = clearAll;
form.onsubmit = handleForm;
toDoInput.onkeyup = hitEnterToInput;









//Variables
const toDoInput = document.getElementById("to-do-item");
const list = document.getElementById('list');
const clearAllButton = document.getElementById('clear-all-button');
const submitButton = document.getElementById('submit-button');
const listContainer = document.getElementsByClassName("list-container")[0];
const form = document.getElementById("form");
// Storing (not-happy-jocko) image and quote text 
notHappyJockoImage = document.getElementById("not-happy-jocko");
notHappyJockoQuote = document.querySelector("#not-happy-jocko + p");
//storing (happy-jocko) image and quote text
const happyJockoImage = document.getElementById("happy-jocko");
const happyJockoQuote = document.querySelector("#happy-jocko + p");


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
    setTimeout(function(){happyJockoImage.style.display = "none"; happyJockoQuote.style.display = "none";}, 1500);
    } else {
        document.getElementById("not-happy-jocko").style.display = "inline";
        document.querySelector("#not-happy-jocko + p").style.display = "inline";
        setTimeout(function(){notHappyJockoImage.style.display = "none"; notHappyJockoQuote.style.display = "none";}, 1500);
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








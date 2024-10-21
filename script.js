const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

//Function using the document method to create a new task list item
const addTask = () => {
    if (inputBox.value === '') {
        alert("You must write something!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

//Function using an event listener to tell if the note needs to be deleted or checked
listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false)

//Using local storage to save the list data for persistence.
const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
}

//Function to show the list data
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")
function addtask(){
    if(inputBox.value === ''){
        alert("Write Something")
    }else{
        let li = document.createElement("li");    //it create list of task nd store in "li" element
        li.innerHTML = inputBox.value;         // for adding text in inputBox nd store in "li"
        listContainer.appendChild(li);       // "li" value text should display in "listContainer"
        let span = document.createElement("span")  // it create span tag
        span.innerHTML = "\u00d7"  // it add cross sign
        li.appendChild(span)       // append use for merge both element it merge "span" into "li" 
    }
    inputBox.value = "";  // it empty the input text field
    saveData();          // whenever we add task it save updated data in browser
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){         // 
        e.target.classList.toggle("checked")     // if list is checked it will unchecked 
        saveData()                               // it save data here 
    } else if(e.target.tagName === "SPAN"){      
        e.target.parentElement.remove();        // it remove the list in "span"
        saveData()                          // when we delete task it save new data deleted
    }
}, false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);    // it store data in browser
}
function showTask(){
    listContainer.innerHTML() = localStorage.getItem("data");
}
showTask();
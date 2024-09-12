const btn = document.querySelector('#btn');
const input = document.querySelector('#title');
let tasklist = document.querySelector(".list-item");
let message = document.querySelector("#message");

btn.addEventListener("click", () =>{
    
    if(input.value === ""){
        alert("Please add your task title  first...!");
    }
    else if(message.value === ""){
        alert("Please add your task first...!");

    }
    else{
        let listEle = document.createElement("li");
        listEle.textContent = input.value;
        console.log(listEle.innerText);
        tasklist.appendChild(listEle);
        let para = document.createElement('p');
        para.textContent = message.value;
        listEle.appendChild(para);

        let spanEle = document.createElement('span');
        spanEle.textContent = "\u00d7";
      listEle.appendChild(spanEle)
        
    }
    input.value = ""; 
    saveEle();

})


tasklist.addEventListener('click', (e)=>{
    if(e.target.tagName == "LI"){
       e.target.classList.toggle("check")
        saveEle();
    }
    else if(e.target.tagName =="SPAN"){
        e.target.parentElement.remove();
        saveEle();

    }

})

function saveEle() {
    localStorage.setItem("task", tasklist.innerHTML);
  }
function getEle(){
    tasklist.innerHTML = localStorage.getItem("task");
}
getEle();
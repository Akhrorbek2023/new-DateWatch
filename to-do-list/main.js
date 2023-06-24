const form = document.querySelector("#form");

let formInput = document.querySelector("input");

let todoPrint = document.querySelector("#todo_print");


let id = 0;
function addToDo(){
    form.addEventListener('submit', e=>{
        e.preventDefault();
        if(formInput.value === "" ){
            alert("You must to write....")
        }else{
            id+=1;
            
            let now = new Date()

            let hour = now.getHours()< 10 ? '0' + now.getHours() : now.getHours()

            let minut = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()

            let minHour = `${hour}:${minut}`
           
            let res = document.createElement("div");

            res.innerHTML = `<input type = "checkbox" id = 'check:${id}'><label for = 'check:${id}'>${formInput.value}</label><span class="watch">${minHour}</span><i class="fa-solid fa-trash-can"></i>`;

            todoPrint.append(res)
 
        }
        formInput.value = "";
        saveData()
        
        
    })

    form.addEventListener('click' , e =>{
        

        if(e.target.tagName === "LABEL"){
            e.target.classList.toggle("delete")
            saveData()
        // }else if(e.target.tagName === "INPUT"){
        //     e.target.classList.toggle("delete")

        //     console.log(e.target)
 
        }else if(e.target.tagName === "I"){
            e.target.parentElement.remove();
            saveData()
            
        }
    })
   
}
addToDo()

function saveData(){
   let x =  localStorage.setItem("data", todoPrint.innerHTML)

   
}

function showTask(){
    todoPrint.innerHTML = localStorage.getItem("data")
}

showTask()



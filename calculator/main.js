const btns = document.querySelectorAll("button")

const arrButtons = Array.from(btns);


const freeSpace = document.querySelector("span");

const del = document.querySelector(".del");

let divide = document.querySelector(".divide");
// divide.textContent = "/"

let multiplication = document.querySelector(".multiplication");


let plus = document.querySelector(".plus");
// multiplication.textContent = "*";

let minus = document.querySelector(".minus");
// minus.textContent = "-";

let equel = document.querySelector(".equel")
// equel.textContent = "="

const square = document.querySelector(".square")



const delAll = document.querySelector(".low")






arrButtons.map((button) => {
     button.addEventListener('click' , e => {
           let val = e.target.textContent
           let actionId = e.target.id;

           
           switch(button){
            case delAll:
                if(freeSpace.innerHTML){
                    freeSpace.innerHTML = ""
                }
                break;
            case del:
                if(freeSpace.innerHTML){
                    freeSpace.innerHTML = freeSpace.innerHTML.slice(0, -1)
                }
                break;         
            case equel:
                try {
                    freeSpace.textContent = eval(freeSpace.textContent);
                } catch (error) {
                    freeSpace.innerHTML = error.message; 
                }
                break;
            
            case square:
                    if(!freeSpace.textContent){
                        return ""
                    }else{
                         freeSpace.textContent =  Math.sqrt(freeSpace.textContent)

                     } 
            default:
                freeSpace.textContent += val;
                break; 
            } 

            switch(actionId) {
                case 'plus':
                    freeSpace.textContent = freeSpace.textContent + '+';
                    break;
                case 'minus':
                    freeSpace.textContent = freeSpace.textContent + '-';
                    break;
                case 'divide':
                    freeSpace.textContent = freeSpace.textContent + '/';
                    break;
                 case 'multiply':
                    freeSpace.textContent = freeSpace.textContent + '*';
                    break    
            }
            
            
            console.log('#actionId',actionId);
            console.log(e.target.value)

            console.log(freeSpace.innerHTML)
          
   })

})   

       






//                 
//                 
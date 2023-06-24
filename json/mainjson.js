
// let list = document.querySelector("div")


//                1- ususl


// const jsonTodos = ((callback)=>{
//     const request = new XMLHttpRequest();
   
// request.addEventListener('readystatechange', () => {
//     if(request.readyState === 4 && request.status == 200){
//         let data = JSON.parse(request.responseText);
//         callback(undefined, data)
        
//     }else if(request.readyState === 4 && request.status == 404){
//         callback("Parse error", undefined)
//     }    
// })


// request.open('GET', "https://jsonplaceholder.typicode.com/todos" )

// request.send()
// });


// jsonTodos((err, data) =>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log(data)
//     data.map(e  =>{
//          let  heading = document.createElement("p");
//          let  span = document.createElement("span");
//          heading.textContent = `Title:${e.title}`
//          span.textContent =`Id:${e.id}`
//          list.append(heading)
//          list.append(span)
//          console.log(list)
         
//     })
//   }
// })




//                  2 usul
 
// fetch("https://jsonplaceholder.typicode.com/todos")
// .then((res) => res.json())
// .then((item)=>      item.map(e  =>{
//               let  heading = document.createElement("p");
//               let  span = document.createElement("span");
//               heading.textContent = `Title:${e.title}`
//               span.textContent =`Id:${e.id}`
//               list.append(heading)
//               list.append(span)
//               console.log(list)

             
// }))

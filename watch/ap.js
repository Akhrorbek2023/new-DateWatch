const spanDate = document.querySelector("#date")
const spanHour = document.querySelector("#hour")


function getDate(){
    let now = new Date;

    let date = now.getDate() < 10 ? '0' +   now.getDate(): now.getDate() 

    let year = now.getFullYear() < 10 ? '0' +   now.getFullYear(): now.getFullYear() 


    let month = now.getMonth() + 1

    let hour = now.getHours();

    let minut = now.getMinutes();

    let secund = now.getSeconds();


    let h =  hour < 10 ? "0" + hour: hour

    let m =  minut < 10 ? "0" + minut: minut

    let s =  secund < 10 ? "0" + secund: secund

    spanDate.textContent = `${year}.${month}.${date}`
    
    spanHour.textContent = `${h}:${m}:${s}`
    


 

}

getDate()


setInterval(getDate, 1000)
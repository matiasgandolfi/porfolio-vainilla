
/*----------------------Dark Mode-------------------*/


let modo =document.getElementById("switch");
let body = document.body;



modo.addEventListener("click", function(){
    let val = body.classList.toggle("dark");
    //Session
    localStorage.setItem("modo",val)
})

let valor = localStorage.getItem("modo")


if (valor=="true") {
    body.classList.add("dark")
}
else{
    body.classList.remove("dark")
}




/*----------------------------------------------------*/
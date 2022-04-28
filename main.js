// get elemant into variable
let inputEle = document.getElementById("input");
let btnEle = document.getElementById("btn");
let msgEle = document.getElementById("msg");

// events
btnEle.onclick = function(){
    // get value from input
    
    let inpValue = inputEle.value;

    if (inputEle = !("")){
    msgEle.innerHTML=inpValue;

    // empty inpValue
    inpValue=("")
    }

}
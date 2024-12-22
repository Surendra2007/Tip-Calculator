let billAmount=document.getElementById("amount");
let tipPercentage=document.getElementById("tip");
let total=document.getElementById("total");
let button=document.querySelector("button");

button.addEventListener("click",()=>{
    const data=billAmount.value *(1+tipPercentage.value/100);
    total.innerText=data;
})
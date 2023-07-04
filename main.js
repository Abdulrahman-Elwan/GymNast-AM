// function Calculate your BMI
function result(){
    let weight=document.getElementById("weightKg").value;
    let height=document.getElementById("heightCm").value;
    let age=document.getElementById("age").value;
    let gender=document.getElementById("gender").value;
    let result=document.getElementById("result");
    let play =(10*weight)+(6.25*height)-(5*age);
    if(gender === "Mal"){
        play = play +5;
    }
    if(gender === "mal"){
        play = play +5;
    }
    if(gender === "Femal"){
        play = play - 161;
    }
    if(gender === "femal"){
        play = play - 161;
    }
    result.innerHTML= play;
}
const display=document.getElementById("display");

function appendToDisplay(input){
    display.value+=input;
}

function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }  
}
function clearButton(){
    display.value = display.value.toString().slice(0,-1)
}
function calculatePercentage(value,percentage){
    return(value*percentage)/100;
}
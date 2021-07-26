console.log('Here are all the available people:', people);

$(document).ready(onReady);

function onReady(){
    console.log(' ready');
    console.log('test');
}



function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
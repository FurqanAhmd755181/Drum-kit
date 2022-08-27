
var btns = document.querySelectorAll(".drum").length;


for(var i=0; i<btns; i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        var buttonInnerHtml= this.innerHTML;

        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml);
        
    });
}



document.addEventListener("keypress", function (){

    makeSound(event.key);
    buttonAnimation(event.key);
});


function makeSound(key) {

    switch (key) {
        case "q":

            var tom1 = new Audio("sounds/tom-1.mp3");  
            tom1.play();
            break;

        case "w":

            var tom2 = new Audio("sounds/tom-2.mp3");  
             tom2.play();
             break;


        case "e" :
            var tom3 = new Audio("sounds/tom-3.mp3");  
             tom3.play();
             break;

        case "r" :
            var tom4 = new Audio("sounds/tom-4.mp3");  
            tom4.play();
            break;

        case "p" :
            var snare = new Audio("sounds/snare.mp3");  
            snare.play();
            break;
            
        case "i" :
            var crash = new Audio("sounds/crash.mp3");  
            crash.play();
            break;

        case "o" :
            var bass = new Audio("sounds/kick-bass.mp3");  
            bass.play();
            break;
    
        default: console.log(buttonInnerHtml);
            
    }
    
}

function buttonAnimation(currentkey) {


    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");
 
    setTimeout(function (){activeButton.classList.remove("pressed"); }, 200);

}




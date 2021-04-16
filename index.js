// counting number of drum button

var noofdrumsbutton = document.querySelectorAll(".drum").length;

// detecting button click

for (var i = 0; i < noofdrumsbutton; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", buttonclick);      //document.querySelectorAll("button")[i].addEventListener("click", function(){var btninnerhtml=......})
                                                                                      //this is anonymous function declaration. either of techniques can be used both are same.
  function buttonclick() {
    var btninnerhtml = this.innerHTML;
    makesound(btninnerhtml);
    buttonanimation(btninnerhtml);
  }
}

// Detecting keyboard press

document.addEventListener("keydown", function(event) {
  makesound(event.key);
  buttonanimation(event.key);
});


// select case according to the key or button clicked

function makesound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
  }
}


function buttonanimation(currentkey) {
var activebutton = document.querySelector("." + currentkey);
activebutton.classList.add("pressed");
setTimeout(function(){activebutton.classList.remove("pressed");},100);
}

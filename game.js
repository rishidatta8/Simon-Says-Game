var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];

var gamePattern = [];

var level = 0;


var c = 0;

$(document).on("keydown",function(){
  if(c==0){
    $("h1").text("Level "+level);
  nextSequence();}
  c++;
});



function nextSequence()
{
  userClickedPattern = [];
  $("h1").text("Level "+level);
  level++;
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}



$(".btn").on("click",function (){
  // var userChosenColour = this.id;
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  //$("#"+userChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
});


function playSound(name)
{
  var audio = new Audio("sounds/"+name+'.mp3');
  audio.play();
}


function animatePress(currentColour)
{
  $("#"+currentColour).addClass("pressed");
  setTimeout(function(){ $("#"+currentColour).removeClass("pressed"); }, 100);
}


function checkAnswer(currentLevel)
{
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

      console.log("success");
      if (userClickedPattern.length === gamePattern.length){


      setTimeout(function () {
          nextSequence();
        }, 1000);

  }

}  else {

      console.log("wrong");
      playSound("wrong");
      $("body").addClass("game-over");
      $("h1").text("Game Over, Press Any Key to Restart");
      setTimeout(function () {
        $("body").removeClass("game-over");
        }, 200);
        startOver();

    }

}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

// var randomNumber = Math.floor(Math.random()*4);
// console.log(randomNumber);

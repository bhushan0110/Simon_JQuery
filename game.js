var gamePattern = [];
var userClickedPattern = [];
var buttonColor = ["red", "blue", "green", "yellow"];
var level=0;
var started=false;

$(document).keypress(function(event){
  if(!started)
  {
    $("h1").text("Level"+level);
    nextSequence();
    started=true;
  }

});

$(".btn").click(function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});


function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");

    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function nextSequence() {
    userClickedPattern=[];
    level+=1;
    $("h1").text("Level "+level);
    var randomNo = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColor[randomNo];
    gamePattern.push(randomChosenColour);
    $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}


function playSound(sound){
  var audio=new Audio("sounds/"+sound+".mp3");
  audio.play();
}


function checkAnswer(currentLevel)
{
  if(userClickedPattern[currentLevel]===gamePattern[currentLevel])
  {
    if(userClickedPattern.length===gamePattern.length){
      setTimeout(function(){
        nextSequence();
      },1000);
    }
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    $("h1").text("Game Over! Press any key to Restart");

    startOver();
  }
}


function startOver(){
  level=0;
  gamePattern=[];
  userClickedPattern=[];
  started=false;
}

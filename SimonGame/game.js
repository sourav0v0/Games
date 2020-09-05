var color=["red","blue","green","yellow"];
var clickUserPatten=[];
var gamePatten=[];
var level=0;
var count=0;
function nextSequence(){
  count=0;
  clickUserPatten=[];
  level++;
  $("h1").text("Level "+level);
  var randomVal=Math.floor(Math.random()*4);
  var chooseRC=color[randomVal];
  var sound=new Audio("\\sounds\\"+chooseRC+".mp3");
  gamePatten.push(chooseRC);
  $("." + chooseRC).fadeIn(100).fadeOut(100).fadeIn(100);
  sound.play();
}
function valid()
{
  if(clickUserPatten.length>gamePatten.length)
    return false;

  for(var i=0;i<clickUserPatten.length;i++)
    if(clickUserPatten[i]!=gamePatten[i])
      return false;
  return true;
}
function playSound(name)
{
  var sound=new Audio("\\sounds\\"+name+".mp3");
  sound.play();
}
function pressAni(button)
{
  $("#"+button).addClass("pressed");
  setTimeout(function(){$("#"+button).removeClass("pressed");  }, 100);

}

$(".btn").on("click",function(){
   var userChosenColour = $(this).attr("id");
   clickUserPatten.push(userChosenColour);
   playSound(userChosenColour);
   pressAni(userChosenColour);
   count++;
   if(count==gamePatten.length)
   {
   var chk=valid();
   if(chk)
     {console.log(chk);
       setTimeout(function(){
         nextSequence()},1000);
     }
   else
         gameOver();

  }
 });
var b=false;
$(document).keypress(function(){
  if(!b)
  {
    $("#level-title").text("Level " + level);

    nextSequence();
    b=true;
  }
});
function gameOver(){
  $("h1").text("Game Over Press A to restart");
  $("body").addClass("game-over");
  setTimeout(function(){
      $("body").removeClass("game-over");
  },100);
  clickUserPatten=[];
  gamePatten=[];
  level=0;
  b=false;
}

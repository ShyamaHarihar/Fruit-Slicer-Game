/*var playing=false;
var trailsLeft=3;
var score;
var step;
var action;

var i;
var fruits=['apple','banana','cherries','grapes','mango','Orange','Peach','pear','Pineapple','watermelon'];
$(function()
{
 $("#startreset").click(function()
 {
   if(playing==true)
   {
       location.reload();
   }
   else{
       //we are not playing
       playing=true;
       score=0;
       $("#scorevalue").html(score);
       $("#trialsremaining").show();
       trailsLeft=3;
       addHearts();
       $("#startreset").html("Reset Game");
       //start generating fruits 
       startAction();
       


   }     
 });   
 
//click on start reset button  
//are we playing 
//yes 
//reload the page 
//no 
//show trials left 
//change button text to "reset game"
//1.create a random fruit 
//define a random step
//2.move fruit down one step every 30 sec
//is fruit too low?
//no->repeat 2 
//trails left? If yes ->reduce 1 from trial left
//no -> display game over and change button to start game 

//slice the fruit 
//play sound in the background
//explode fruit 
//functions 
function addHearts()
{
    $("trialsremaining").empty();
    for(i=0;i<trialsLeft;i++)
       {
           $("#trialsremaining").append('<img src="images/heart.jpg" class="life">');
       }
}

/*function startAction()
{
  $("#fruit1").show();
  chooseFruit();
  $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50});//defining the relative coordinates
//random next step random number 
step=1+Math.round(5*Math.random());// step between 1 and 6
//moving the fruit by speed
action=setInterval(function(){
    $("#fruit1").css('top',$("#fruit1").position().top + step);

    if($("#fruit1").position().top > $("#fruitscontainer").height()){
        //check if we have lives for the game 
        if(trialsleft>1)
        {
            $("#fruit1").show();
            chooseFruit();
            $("#fruit1").css({'left':Math.round(550*Math.random()),'top':-50});//defining the relative coordinates
          //random next step random number 
          step=1+Math.round(5*Math.random());
          //reduce the number of trials reduce by 1 
          trialsleft--;
          addHearts();// to update the life box we are calling the function  

        }
        else{
            //game end
            playing=false;
            $("#startreset").html("Start Game");
            $("gameOver").show();
            $("gameOver").html('<p>Game Over!</p><p> Your Score  is'+score+ '</p>');
            $("trailsremaing").hide();
            stopAction();

        }
    }
},10);// milliseconds time 
}*/


/*function startAction(){
    
    //generate a fruit
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); //random position
    
    //generate a random step
    step = 1+ Math.round(5*Math.random()); // change step
    
    // Move fruit down by one step every 10ms
    action = setInterval(function(){
        
        //move fruit by one step
        $("#fruit1").css('top', $("#fruit1").position().top + step);                              
    
        //check if the fruit is too low
        if($("#fruit1").position().top > $("#fruitsContainer").height()){
            //check if we have trials left
            if(trialsLeft > 1 ){
                //generate a fruit
                $("#fruit1").show();
                chooseFruit(); //choose a random fruit
                $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); //random position

                //generate a random step
                step = 1+ Math.round(5*Math.random()); // change step
                
                //reduce trials by one
                trialsLeft --;
                
                //populate trialsLeft box
                addHearts();
                
            }
            else{ 
                // game over
                playing = false; //we are not playing anymore
                $("#startreset").html("Start Game"); // change button to Start Game
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                $("#trialsLeft").hide();
                stopAction();
            }
        }
    }, 10);
}
//generate a fruit for the game
function chooseFruit()
{
    $("#fruit1").attr('src','images/' + fruits[Math.round(8*Math.random())]+'.png');
}
function stopAction()
{
    clearInterval(action);
    $("#fruit1").hide();
}
});
*/
var playing = false;
var score;
var trialsLeft;
var step;
var action; //used for setInterval
var fruits = ['apple', 'banana', 'cherries', 'grapes', 'mango', 'orange', 'peach', 'pear', 'watermelon'];
$(function(){
    
//click on start reset button
    
$("#startreset").click(function(){

    //we are playing
    if(playing == true){

        //reload page
        location.reload();
    }else{

        //we are not playing
        playing = true; //game initiated

        //set score to 0
        score = 0; //set score to 0
        $("#scorevalue").html(score);

        //show trials left 
        $("#trialsLeft").show();
        trialsLeft = 3;
        addHearts();

        //hide game over box
        $("#gameOver").hide();

        //change button text to reset game
        $("#startreset").html("Reset Game");

        //start sending fruits
        startAction();
    }
});

    
//slice a fruit
    
$("#fruit1").mouseover(function(){
    score++;
    $("#scorevalue").html(score); //update score
//    document.getElementById("slicesound").play();
    $("#slicesound")[0].play();//play sound
    
    //stop fruit
    clearInterval(action);
    
    //hide fruit
    $("#fruit1").hide("explode", 500); //slice fruit
    
    //send new fruit
    setTimeout(startAction, 800);
});
 
//functions

//fill trialLeft box with hearts
    
function addHearts(){
    $("#trialsLeft").empty();
    for(i = 0; i < trialsLeft; i++){
        $("#trialsLeft").append('<img src="images/heart.png" class="life">');
    }
}

//start sending fruits

function startAction(){
    
    //generate a fruit
    $("#fruit1").show();
    chooseFruit(); //choose a random fruit
    $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); //random position
    
    //generate a random step
    step = 1+ Math.round(5*Math.random()); // change step
    
    // Move fruit down by one step every 10ms
    action = setInterval(function(){
        
        //move fruit by one step
        $("#fruit1").css('top', $("#fruit1").position().top + step);                              
    
        //check if the fruit is too low
        if($("#fruit1").position().top > $("#fruitsContainer").height()){
            //check if we have trials left
            if(trialsLeft > 1 ){
                //generate a fruit
                $("#fruit1").show();
                chooseFruit(); //choose a random fruit
                $("#fruit1").css({'left' : Math.round(550*Math.random()), 'top' : -50}); //random position

                //generate a random step
                step = 1+ Math.round(5*Math.random()); // change step
                
                //reduce trials by one
                trialsLeft --;
                
                //populate trialsLeft box
                addHearts();
                
            }else{ // game over
                playing = false; //we are not playing anymore
                $("#startreset").html("Start Game"); // change button to Start Game
                $("#gameOver").show();
                $("#gameOver").html('<p>Game Over!</p><p>Your score is '+ score +'</p>');
                $("#trialsLeft").hide();
                stopAction();
            }
        }
    }, 10);
}

// generate a random fruit

function chooseFruit(){
    $("#fruit1").attr('src' , 'images/' + fruits[Math.round(8*Math.random())] +'.png');   
}

//Stop dropping fruits

function stopAction(){
    clearInterval(action);
    $("#fruit1").hide();
}
});


//Program Name: Recipe Display Application 
//Author: Jonndre King
//Date: 11-16-15
//Filename: script.js


function display(event){

  $(event.currentTarget).next().fadeIn("slow");
  
}//end of display()

/*
  $("h3").click(display); 
  */

function display2(event) {

   $(event.currentTarget).next().animate( { height: 'toggle'}, "slow");

}

  $("h3").click(display2); 
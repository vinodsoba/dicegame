// Player 1
function rollDicePlayer1(){
  var face1=new Image()
  face1.src="images/1.png"
  var face2=new Image()
  face2.src="images/2.png"
  var face3=new Image()
  face3.src="images/3.png"
  var face4=new Image()
  face4.src="images/4.png"
  var face5=new Image()
  face5.src="images/5.png"
  var face6=new Image()
  face6.src="images/6.png"

      var dice1 = document.getElementById("die1");
      var dice2 = document.getElementById("die2");
      var score= document.getElementById('score');
      var status = document.getElementById("status");

      var d1 = Math.floor(Math.random() * 5) +1;
      var d2 = Math.floor(Math.random() * 5) +1;
      document.images["mydice1"].src=eval("face"+d1+".src");
      document.images["mydice2"].src=eval("face"+d2+".src");
      var Total = d1 + d2;


      dice1.innerHTML = d1;
      dice2.innerHTML = d2;

      diceTotal = new Array();
      diceTotal.push(Total);


      let sum = diceTotal.reduce((diceTotal, val) => {
        return diceTotal + val;
      },0)

      status.innerHTML = "You rolled "+diceTotal+".";
      score.innerHTML += ""+sum+",";



      if(d1 =='1' && d2 == '1'){
        status.innerHTML = "You have lost points";
        score.innerHTML = '0';
      }

      if(d1 == '1' ){
        status.innerHTML = "You have lost points";
        score.innerHTML = Total;
      }

      if(d2 =='1' ){
        status.innerHTML = "You have lost points";
        score.innerHTML = Total;
      }

      if (d1 == d2){
        status.innerHTML = " You rolled a DOUBLE! snake eyes ";
      }

      //Player button1
      document.addEventListener("click", function(){
          document.getElementById("button1").setAttribute("disabled", "disabled");
          document.getElementById("button2").removeAttribute("disabled");
      });

       var t = setTimeout(function(){
        if(d1 == '1' && d2 == '1'){
          alert("Player 1. Great you got a '"+Total+"' But you lost points. Player 2 your turn to roll the dice!");
        }
        else {
        alert("Player 1. Great you got a '"+Total+"' Player 2 your turn to roll the dice!");
        }
      },1000);

      console.log(sum);
}



//Players 2
function rollDicePlayer2(){
  var face1=new Image()
  face1.src="images/1.png"
  var face2=new Image()
  face2.src="images/2.png"
  var face3=new Image()
  face3.src="images/3.png"
  var face4=new Image()
  face4.src="images/4.png"
  var face5=new Image()
  face5.src="images/5.png"
  var face6=new Image()
  face6.src="images/6.png"
      var score =0;
      var dice3 = document.getElementById("die3");
      var dice4 = document.getElementById("die4");
      var score2 = document.getElementById("score2");
      var status = document.getElementById("status2");

      var d3 = Math.floor(Math.random() * 5) +1;
      var d4 = Math.floor(Math.random() * 5) +1;
      document.images["mydice3"].src=eval("face"+d3+".src");
      document.images["mydice4"].src=eval("face"+d4+".src");

      var Total = d3 + d4;

      dice3.innerHTML = d3;
      dice4.innerHTML = d4;

      //push random numbers generated to an Array
      diceTotal = new Array();
      diceTotal.push(Total);

      //extracts data in score field sum total
      let sum = diceTotal.reduce((diceTotal, val) => {
        return diceTotal + +val;
      },0);

      status.innerHTML = "You rolled "+diceTotal+".";
      score2.innerHTML += ""+sum+",";

      if(d3 =='1' && d4 == '1'){
        status.innerHTML = "You have lost points";
        score2.innerHTML = '0';
      }

      if(d3 == '1' ){
        status.innerHTML = "You have lost points in this round";
        deductPointsStr = document.getElementById('score2');
        var a = deductPointsStr.innerText;
        var b = a.trimRight(-2);
        console.log(a);

      }

      if (d3 == d4){
        status.innerHTML = " You rolled a DOUBLE! snake eyes ";
      }

      document.addEventListener("click", function(){
        document.getElementById("button2").setAttribute("disabled", "disabled");
        document.getElementById("button1").removeAttribute("disabled");
      });

      var timer = setTimeout(function(){
        if(d3 == '1' && d4 == '1'){
          alert("Player 2. Great you got a '"+Total+"' But you lost points. Player 1 your turn to roll the dice!");
        }
        else {
        alert("Player 2. Great you got a '"+Total+"' Player 1 your turn to roll the dice!");
        }
      },1000);
}

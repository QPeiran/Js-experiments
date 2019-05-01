//two pharse random -- 2/3

var A = ["R","R"], B = ["R","B"], C = ["B","B"];

var count = 0, result_ball1_red = 0, result_ball1and2_red = 0, result_ball1red_ball2blue = 0, result_ball1_blue = 0, result_ball1and2_blue = 0, result_ball1blue_ball1red = 0;
var randomBoxNumber, randomBallNumber, FirstBall, SecondBall;

for (count = 1; count <= 1000000; count++)
{
   randomBoxNumber = Math.floor(Math.random() * 3 ) + 1;
   randomBallNumber = Math.floor(Math.random() * 2);
   switch (randomBoxNumber)
      {
          case 1:
          FirstBall = A[randomBallNumber].toString();
          SecondBall = A[Math.abs(randomBallNumber - 1)].toString();
          break;
          case 2:
          FirstBall = B[randomBallNumber].toString();
          SecondBall = B[Math.abs(randomBallNumber - 1)].toString();
          break;
          case 3:
          FirstBall = C[randomBallNumber].toString();
          SecondBall = C[Math.abs(randomBallNumber - 1)].toString();
          break;
          default:
          alert ("!");
      }
  //console.log(FirstBall +" "+ SecondBall);      
  if (FirstBall == "R") {result_ball1_red += 1;}
  if (FirstBall == "R" && SecondBall == "R") {result_ball1and2_red += 1;}
  if (FirstBall == "R" && SecondBall == "B") {result_ball1red_ball2blue += 1;}
  if (FirstBall == "B"){result_ball1_blue += 1;}
  if (FirstBall == "B" && SecondBall == "R") {result_ball1blue_ball1red += 1;}
  if (FirstBall == "B" && SecondBall == "B") {result_ball1and2_blue += 1;}
}
console.log("First Ball Red: " + result_ball1_red);
console.log("First and Second Ball both Red: " + result_ball1and2_red);
console.log("First Ball Red and Second Ball Blue: " + result_ball1red_ball2blue);

console.log("First Ball Blue: " + result_ball1_blue);
console.log("First Ball Blue and Second Ball Blue: " + result_ball1and2_blue);
console.log("First Ball Blue and Second Ball Red: " + result_ball1blue_ball1red);

//one pharse random -- 1/2

var A = ["R","R"], B = ["R","B"];

var count = 0, result_ball1_red = 0, result_ball1and2_red = 0, result_ball1red_ball2blue = 0, result_ball1_blue = 0, result_ball1and2_blue = 0, result_ball1blue_ball1red = 0;
var randomBoxNumber, randomBallNumber, FirstBall, SecondBall;

for (count = 1; count <= 100000; count++)
{
   //randomBoxNumber = Math.floor(Math.random() * 2 ) + 1;
   FirstBall = "R";
   randomBallNumber = Math.floor(Math.random() * 2);
   switch (randomBallNumber)
      {
          case 0:
          SecondBall = A[Math.abs(randomBallNumber)].toString();
          break;
          case 1:
          SecondBall = B[Math.abs(randomBallNumber)].toString();
          break;
      }
  //console.log(FirstBall +" "+ SecondBall);      
  if (FirstBall == "R") {result_ball1_red += 1;}
  if (FirstBall == "R" && SecondBall == "R") {result_ball1and2_red += 1;}
  if (FirstBall == "R" && SecondBall == "B") {result_ball1red_ball2blue += 1;}
  if (FirstBall == "B"){result_ball1_blue += 1;}
  if (FirstBall == "B" && SecondBall == "R") {result_ball1blue_ball1red += 1;}

}
 
console.log("First Ball Red: " + result_ball1_red);
console.log("First and Second Ball both Red: " + result_ball1and2_red);
console.log("First Ball Red and Second Ball Blue: " + result_ball1red_ball2blue);

console.log("First Ball Blue: " + result_ball1_blue);
console.log("First Ball Blue and Second Ball Blue: " + result_ball1and2_blue);
console.log("First Ball Blue and Second Ball Red: " + result_ball1blue_ball1red);

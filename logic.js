const imgArray = [
  //open, 0             closed, 1
  ["./PacMan1.png", "./PacMan2.png"], //right   - 0
  ["./PacMan3.png", "./PacMan4.png"], //left    - 1
  ["./PacMan5.png", "./PacMan6.png"], //up      - 2
  ["./PacMan7.png", "./PacMan8.png"], //down    - 3
];

var imgwidth = 200;
var direction = { x: 1, y: 0 }; // both values should only every be -1, 0, or 1
var position = { x: 0, y: 0 };
var mouthPosition = 0;
var speed = 20;
var pageSize = { x: window.innerWidth, y: window.innerHeight };
// at start hide the instuctions
let instuctions = document.getElementById("startInstructions");


function Run() {
  //make sure we have the player
  let img = document.getElementById("PacMan");

  // at start hide the instuctions
  let instuctions = document.getElementById("startInstructions");
  instuctions.style.opacity = 0;

  //moves the player using arrow keys from CB function
  position.x = position.x + direction.x * speed;
  img.style.left = position.x + "px";
  position.y = position.y + direction.y * speed;
  img.style.top = position.y + "px";

  //flips mouth between 0 and 1
  mouthPosition = (mouthPosition + 1) % 2;
  img.src = imgArray[getActiveDirection()][mouthPosition];

  //in case the player tries to get off screen
  edgeChanges();

  // Use setTimeout to call Run every 200 millesecs
  var startGame = setTimeout(Run, 150);
}

function getActiveDirection() {
  //checks the direction to ensure that pacman is facing the right direction, retunrs a number associated with the direction of travel (see imgArray above)
  if (direction.x > 0) {
    return 0;
  } else if (direction.x < 0) {
    return 1;
  } else if (direction.y < 0) {
    return 2;
  } else if (direction.y > 0) {
    return 3;
  }
}

function edgeChanges(){
  let screen = { x:window.innerWidth, y:window.innerHeight };
  let img = document.getElementById("PacMan");
  
  

  if (position.x + 200 > screen.x){
    direction.x = -1;
    img.src = imgArray[getActiveDirection()][0];
  }else if (position.x < 0){
    direction.x = 1;
    img.src = imgArray[getActiveDirection()][0];
  }else if (position.y + 200 > screen.y){
    direction.y = -1;
    img.src = imgArray[getActiveDirection()][0];
  }else if (position.y < 0){
    direction.y = 1;
    img.src = imgArray[getActiveDirection()][0];
  }else{
    // do nothing
  }
}

window.addEventListener(
  "keydown",
  function (event) {
    let img = this.document.getElementById("PacMan");
    switch (event.key) {
      case "ArrowDown":
        // code for "down arrow" key press.
        //** change direction of travel to down
        direction.x = 0;
        direction.y = 1;
        //** change imgArray first argument to 3
        img.src = imgArray[3][0];
        break;
      case "ArrowUp":
        // code for "up arrow" key press.
        //** change direction of travel to down
        direction.x = 0;
        direction.y = -1;
        //** change imgArray first argument to 2
        img.src = imgArray[2][0];
        break;
      case "ArrowLeft":
        // code for "left arrow" key press.
        //  ** change direction of travel to down
        direction.x = -1;
        direction.y = 0;
        //  ** change imgArray first argument to 1
        img.src = imgArray[1][0];
        break;
      case "ArrowRight":
        // code for "right arrow" key press.
        //  ** change direction of travel to down
        direction.x = 1;
        direction.y = 0;
        //  ** change imgArray first argument to 0
        img.src = imgArray[0][0];
        break;
      default:
      //  ** console error message
    }
  },
  true
);

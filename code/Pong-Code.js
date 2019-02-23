const player = [document.getElementById("player"), document.getElementById("player2")];
const fpsCounter = document.getElementById("fps");
const ball = document.getElementById("ball");

const setFps = (1 / 60) * 1000;
var lastTime = Date.now();
var player1Top = 250;
const playerSpeed = 10;
var ballMove = false;

const ballObject = {
	left: 443,
	top: 300,
	ballSpeed: 10,
	move: function(ballSpeed){
		this.left += this.ballSpeed;
		ball.style.left = this.left + 'px';

	}
}

//Pos of ball: 443px;

/////////////////////////FUNCTIONS///////////////////

//Function to move player(s)
function MOVE(e){

	/////////Player 1///////////////

	if(e.keyCode == 38){
		player1Top -= playerSpeed;
		player[0].style.top = player1Top + 'px';
	}else if(e.keyCode == 40){
		player1Top += playerSpeed;
		player[0].style.top = player1Top + 'px';
	}

	if(player1Top <= 0){
		player1Top = playerSpeed;
	}else if (player1Top >= 510) {
		player1Top = 500;	
	}

}

function moveBall(){
	ballMove = true;
}

//Function to calculate fps
function getFps(){
	fps++;
	if(Date.now() - lastTime >= 1000){
		fpsCounter.innerHTML = fps;
		fps = 0;
		lastTime = Date.now(); 
	}
}

//////////////////////////////////////////////////////////

/////////////////////
var interval = setInterval(function(){
	getFps();
	MOVE(document);

	if(ballMove){
		ballObject.move(ballObject.ballSpeed);
	}
}, setFps);

document.onkeydown = MOVE;

function stopLoop(){
	clearInterval(interval);
	console.log("Loop stopped");
}


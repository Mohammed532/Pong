//Variables
const player = [document.getElementById("player"), document.getElementById("player2")];
const fpsCounter = document.getElementById("fps");
// const ball = document.getElementById("ball");
const setFps = (1 / 60) * 1000;
var lastTime = Date.now();

//Ball object
const ball = {
	html: document.getElementById("ball"),
	left: 443,
	top: 300,
	speed: 10,
	move: function(ballSpeed){
		this.left += this.ballSpeed;
		ball.style.left = this.left + 'px';

	}
}

// Player class
class Player{
	constructor(playerNum) {
		this.player = player[playerNum - 1];
		this.playerStyle = window.getComputedStyle(this.player);
		this.speed = 10;
	}

	move(e){
		if (e.keyCode == 38) { //UP
			this.top -= this.speed;
			this.player.style.top = this.top + 'px';
		} else if(e.keyCode == 40){ //DOWN
			this.top += this.speed;
			this.player.style.top = this.top + 'px';
		}

		if(this.top <= 0){
			this.top = this.speed;
		}else if(this.top >= 510){
			this.top = 500;
		}

	}

	get top(){
		var playerTop = parseInt(this.playerStyle.top);
		return playerTop;
	}

	set top(playerTop){
		this.player.style.top = playerTop + "px";
		console.log(this.playerStyle.top);
	}

	get right(){
		var playerRight = parseInt(this.playerStyle.left) + parseInt(this.playerStyle.width);
		return playerRight;
	}

	get left(){
		return parseInt(this.playerStyle.left);
	}

	test(){
		this.player.style.backgroundColor = 'red';
	}
}

//Player objects
const player1 = new Player(1);

//Function to move player(s)
function MOVE(e){

	/////////Player 1///////////////
	player1.move(e);

}

function moveBall(ballSpeed){
	// ballMove = true;
	ball.left -= ballSpeed;
	ball.html.style.left = ball.left + 'px';
	// console.log((ball.left));

	if(ball.left <= player1.right + 5){
		ball.left = player1.right + ballSpeed + 5; //The + 5 is from the player margin
		ball.html.style.backgroundColor = "red";

	}
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

/////////////////////GAME LOOP////////////////////////
var interval = setInterval(function(){
	getFps();
	MOVE(document);
	moveBall(ball.speed)
}, setFps);
////////////////////////////////////////////////////
document.onkeydown = MOVE;

function stopLoop(){
	clearInterval(interval);
	console.log("Loop stopped");
}


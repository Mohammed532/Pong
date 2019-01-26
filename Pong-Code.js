var player = [document.getElementById("player"), document.getElementById("player2")];

var player1Top = 250;
var speed = 10;


function MOVE(e){
	// console.log(player1Top);

/////////Player 1///////////////

	if(e.keyCode == 38){
		player1Top -= speed;
		player[0].style.top = player1Top + 'px';
	}else if(e.keyCode == 40){
		player1Top += speed;
		player[0].style.top = player1Top + 'px';
	}

	if(player1Top <= 0){
		player1Top = speed;
	}else if (player1Top >= 510) {
		player1Top = 500;	
	}

}

document.onkeydown = MOVE;
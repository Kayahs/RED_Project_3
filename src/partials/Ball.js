export default class Ball {
	constructor(board, radius, paddleLeft, paddleRight) {
		//initialize variables
		this.radius=radius;
		this.boardheight = board.height;
		this.boardwidth = board.width;
		this.paddleLeft = paddleLeft;
		this.paddleRight = paddleRight;
		this.direction = 1;
		this.reset(); //set initial x,y position and velocities

		//load audios
		this.pong1 = new Audio('../../public/sounds/pong-01.wav');
		this.pong2= new Audio('../../public/sounds/pong-02.wav');
		this.pong3 = new Audio('../../public/sounds/pong-03.wav');
	}

	draw() {
		//check top and bottom of the board for collision
		if (this.ypos <= 0 || this.ypos >= this.boardheight) {
			this.vy = -this.vy;
			this.pong1.play();
		}

		//check paddle collision
		if (this.isColliding(this.paddleLeft) || this.isColliding(this.paddleRight)) {
			this.vx = -this.vx;
			this.pong2.play();
		}

		//movement step
		this.xpos += this.vx;
		this.ypos += this.vy;

		//draw circle
		document.getElementById('svgContainer').innerHTML += `<circle cx="${this.xpos}" cy="${this.ypos}" r="${this.radius}px" fill="white" id="ball" />`;
	}

	//check if ball is within specified paddle
	isColliding(paddle) {
		let coords = paddle.coordinates();
		let ballLeft = (paddle.isLeft) ? (this.xpos - this.radius) : (this.xpos + this.radius);
		let inX = (ballLeft >= coords[0] && ballLeft <= coords[1]);	
		let inY = ((this.ypos - this.radius) >= coords[2] && (this.ypos + this.radius) <= coords[3]);
		if (inX && inY) {
			return true;
		}
		return false;
	}
	
	//reset ball back to initial values
	reset() {
		this.xpos = this.boardwidth / 2 - this.radius;
		this.ypos = this.boardheight / 2 - this.radius;
		do {
			(this.vy = Math.floor(Math.random() * 10 - 5))
		} while (this.vy === 0);
		this.vx = this.direction * (8 - Math.abs(this.vy));
		this.paddleLeft.reset();
		this.paddleRight.reset();
	}
}
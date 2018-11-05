export default class Ball {
	constructor(board, radius, paddleLeft, paddleRight) {
		this.radius=radius;
		this.boardheight = board.height;
		this.boardwidth = board.width;
		this.paddleLeft = paddleLeft;
		this.paddleRight = paddleRight;
		this.direction = 1;
		this.reset();
	}

	draw() {
		if (this.ypos <= 0 || this.ypos >= this.boardheight) {
			this.vy = -this.vy;
		}

		if (this.isColliding(this.paddleLeft) || this.isColliding(this.paddleRight)) {
			this.vx = -this.vx;
		}

		this.xpos += this.vx;
		this.ypos += this.vy;
		document.getElementById('svgContainer').innerHTML += `<circle cx="${this.xpos}" cy="${this.ypos}" r="${this.radius}px" fill="white" id="ball" />`;
	}

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
	
	reset() {
		this.xpos = this.boardwidth / 2 - this.radius;
		this.ypos = this.boardheight / 2 - this.radius;
		this.vy = Math.floor(Math.random() * 10 - 5);
		this.vx = this.direction * (5.5 - Math.abs(this.vy));
	}
}
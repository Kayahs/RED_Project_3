export default class Scoreboard {
	constructor(ball, board) {
		this.scoreLeft = 0;
		this.scoreRight = 0;
		this.boardHeight = board.height;
		this.boardWidth = board.width;
		this.ball = ball;
	}

	draw() {
		if(this.ball.xpos - this.ball.radius < 0) {
			this.scoreLeft++;
			this.ball.direction = -this.ball.direction;
			this.ball.reset();
		}
		if (this.ball.xpos + this.ball.radius > this.boardWidth) {
			this.scoreRight++;
			this.ball.direction = -this.ball.direction;
			this.ball.reset();
		}
		console.log(`Left Teams Score is ${this.scoreLeft}.`);
		console.log(`Right Teams Score is ${this.scoreRight}.`);
	}
}
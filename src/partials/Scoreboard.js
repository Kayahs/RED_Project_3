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
			this.scoreRight++;
			this.ball.direction = -this.ball.direction;
			this.ball.reset();
		}
		if (this.ball.xpos + this.ball.radius > this.boardWidth) {
			this.scoreLeft++;
			this.ball.direction = -this.ball.direction;
			this.ball.reset();
		}
		document.getElementById('svgContainer').innerHTML += `<text x="${this.boardWidth/4 - 30}" y="${this.boardHeight/2 + 30}" font-size="100px" fill="white">${this.scoreLeft}</text>`
		document.getElementById('svgContainer').innerHTML += `<text x="${(this.boardWidth/4)*3 - 30}" y="${this.boardHeight/2 + 30}" font-size="100px" fill="white">${this.scoreRight}</text>`
	}
}
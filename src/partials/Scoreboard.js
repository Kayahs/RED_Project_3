export default class Scoreboard {
	constructor(ball, board) {
		//initialize variables
		this.scoreLeft = 0;
		this.scoreRight = 0;
		this.boardHeight = board.height;
		this.boardWidth = board.width;
		this.ball = ball;
	}

	draw() {
		//check if ball hits the horizontal edges of the board
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
		//draw scores
		document.getElementById('svgContainer').innerHTML += `<text x="${this.boardWidth/4}" y="${this.boardHeight/2}" alignment-baseline="central" text-anchor="middle" font-size="100px" fill="white">${this.scoreLeft}</text>`
		document.getElementById('svgContainer').innerHTML += `<text x="${(this.boardWidth/4)*3}" y="${this.boardHeight/2}" alignment-baseline="central" text-anchor="middle" font-size="100px" fill="white">${this.scoreRight}</text>`
	}

	drawWinner(winner) {
		//draw winning text
		document.getElementById('svgContainer').innerHTML += `<rect x="0" y="${this.boardHeight/2 - 50}" width="${this.boardWidth}px" height="100px" fill="black" opacity="0.5" />`;
		document.getElementById('svgContainer').innerHTML += `<text x="${this.boardWidth/2}" y="${this.boardHeight/2}" alignment-baseline="central" text-anchor="middle" font-size="80px" fill="white">${winner} Wins!</text>`;
	}
}
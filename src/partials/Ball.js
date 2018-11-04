export default class Ball {
	constructor(board, radius) {
		this.radius=radius;
		this.boardheight = board.height;
		this.boardwidth = board.width;
		this.xpos=this.boardwidth / 2 - radius;
		this.ypos=this.boardheight / 2 - radius;
		this.vy = Math.floor(Math.random() * 10 - 5);
		this.direction = 1;
		this.vx = this.direction * (6 - Math.abs(this.vy));
	}

	draw() {
		if (this.ypos <= 0 || this.ypos >= this.boardheight) {
			this.vy = -this.vy;
		}
		this.xpos += this.vx;
		this.ypos += this.vy;
		document.getElementById('svgContainer').innerHTML = `<circle cx="${this.xpos}" cy="${this.ypos}" r="${this.radius}px" fill="white" id="ball" />`;
	}
	
	reset() {
		this.xpos = this.boardwidth / 2 - this.radius;
		this.ypos = this.boardheight / 2 - this.radius;
		this.vy = Math.floor(Math.random() * 10 - 5);
		this.vx = this.direction * (6 - Math.abs(this.vy));
	}
	/*move();
	goal();
*/
}
export default class Paddle {
	constructor(board, width, height, offset, isLeft, up, down, paused) {
		this.width = width;
		this.height = height;
		this.isLeft = isLeft;
		this.speed = 10;
		this.boardWidth = board.width;
		this.boardHeight = board.height;
		this.paused = paused;
		if(isLeft) {
			this.xpos = offset;
		} else {
			this.xpos = this.boardWidth - this.width - offset;
		}

		this.reset();

		document.addEventListener('keydown', event => {
			switch(event.key) {
				case up:
					if (!this.paused) {
						this.ypos -= this.speed;
						this.ypos = Math.max(0, this.ypos);
					}
					break;
				case down:
					if (!this.paused) {
						this.ypos += this.speed;
						this.ypos = Math.min((this.boardHeight - this.height), this.ypos);
					}
					break;
				case ' ':
					this.paused = !this.paused;
			}
		});
	}

	coordinates() {
		let leftX = this.xpos;
		let rightX = this.xpos + this.width;
		let topY = this.ypos;
		let bottomY = this.ypos + this.height;
		return [leftX, rightX, topY, bottomY];
	}

	reset() {
		this.ypos = this.boardHeight / 2 - this.height / 2;
	}

	draw() {
		document.getElementById('svgContainer').innerHTML += `<rect x="${this.xpos}" y="${this.ypos}" width="${this.width}px" height="${this.height}px" fill="white" id="paddle${(this.isLeft) ? 'Left' : 'Right'}" />`;
	}
}
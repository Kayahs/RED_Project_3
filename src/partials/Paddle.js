export default class Paddle {
	constructor(board, width, height, offset, isLeft, up, down) {
		this.width = width;
		this.height = height;
		this.isLeft = isLeft;
		this.speed = 10;
		this.boardWidth = board.width;
		this.boardHeight = board.height;
		if(isLeft) {
			this.xpos = offset;
		} else {
			this.xpos = this.boardWidth - this.width - offset;
		}

		this.ypos = this.boardHeight / 2 - this.height / 2;	

		document.addEventListener('keydown', event => {
			switch(event.key) {
				case up:
					if (this.ypos > 0) {
						this.ypos -= this.speed;
						this.ypos = Math.max(0, this.ypos);
					}
					break;
				case down:
					if (this.ypos < (this.boardHeight - this.height)) {
						this.ypos += this.speed;
						this.ypos = Math.min((this.boardHeight - this.height), this.ypos);
					}
					break;
			}
		});
	}

	moveUp() {
		this.ypos += this.speed;
	}

	moveDown() {
		this.ypos -= this.speed;
	}

	draw() {
		document.getElementById('svgContainer').innerHTML += `<rect x="${this.xpos}" y="${this.ypos}" width="${this.width}px" height="${this.height}px" fill="white" id="paddle${(this.isLeft) ? 'Left' : 'Right'}" />`;
	}
}
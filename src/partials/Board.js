export default class Board {
	constructor(width, height) {
		this.height = height;
		this.width = width;
	}

	draw() {
		document.getElementById('game').innerHTML = `<svg width="${this.width}" height="${this.height}" id="svgContainer"></svg>`;
	}
}
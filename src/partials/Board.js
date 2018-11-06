export default class Board {
	constructor(width, height) {
		this.height = height;
		this.width = width;
	}

	draw() {
		//draw board and divider line
		document.getElementById('game').innerHTML = `<svg width="${this.width}" height="${this.height}" id="svgContainer"></svg>`;
		document.getElementById('svgContainer').innerHTML += `<line x1="${this.width/2}" y1="0" x2="${this.width/2}" y2="${this.height}" stroke="white" stroke-dasharray="4" />`
	}
}
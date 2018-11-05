import Ball from './Ball.js'
import Paddle from './Paddle.js'
import Board from './Board.js'
import Scoreboard from './Scoreboard.js'
import {KEYS} from './../settings.js'

export default class Game {

	constructor(element, width, height) {
		this.element = element;
		this.width = width;
		this.height = height;
		this.isPaused = false;
		this.board = new Board(width, height);
		this.paddleLeft = new Paddle(this.board, 20, 100, 10, true, KEYS.a, KEYS.z, this.isPaused);
		this.paddleRight = new Paddle(this.board, 20, 100, 10, false, KEYS.up, KEYS.down, this.isPaused);
		this.ball = new Ball(this.board, 8, this.paddleLeft, this.paddleRight);
		this.scoreboard = new Scoreboard(this.ball, this.board);
		document.addEventListener('keydown', event => {
			if (event.key === KEYS.spaceBar) {
				if (this.isPaused){
					this.isPaused = false;
				} else {
					this.isPaused = true;
				}
			}
		});
	}

	render() {
		if (!this.isPaused) {
			document.getElementById('game').innerHTML = '';
			this.board.draw();
			this.ball.draw();
			this.paddleLeft.draw();
			this.paddleRight.draw();
			this.scoreboard.draw();
		}
	}

}
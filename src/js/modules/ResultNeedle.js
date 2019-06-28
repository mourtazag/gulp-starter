import { getViewportSize, throttle, easings } from './utils.js';

export default class ResultNeedle {
	constructor() {
		this.needle = document.querySelector('.needle');
		if (!this.needle) return;
		this.to = +this.needle.dataset.rate;
		if (this.to > 5) throw new Error('Rate must be between 0 and 5 !');

		this.from = 0;
		this.duration = 3000;

		this.begining = 210;
		this.decal = 0;
		this.animated = false;

		this.initEvents();

		const needleBounding = this.needle.getBoundingClientRect();
		if (needleBounding.top <= getViewportSize().height * 0.75 && !this.animated) {
			this.play();
			this.animated = true;
		}
	}

	initEvents() {
		window.addEventListener(
			'scroll',
			throttle(e => {
				const needleBounding = this.needle.getBoundingClientRect();

				if (needleBounding.top <= getViewportSize().height * 0.75 && !this.animated) {
					this.play();
					this.animated = true;
				}
			}, 50)
		);
	}

	play() {
		this.startTime = performance.now();
		this.animate();
	}

	animate() {
		const now = performance.now();
		const progress = (now - this.startTime) / this.duration;
		//this.to = +this.to;
		const value = easings.easeInOutQuint(progress) * (this.to - this.from) + this.from;
		const rotate = this.begining + this.decal + value * 60;
		this.needle.style.setProperty('--rotate', rotate + 'deg');

		const raf = requestAnimationFrame(this.animate.bind(this));
		if (now - this.startTime > this.duration) {
			cancelAnimationFrame(raf);
			return;
		}
	}
}

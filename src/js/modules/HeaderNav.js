export default class HeaderNav {
	constructor() {
		this.header = document.querySelector('.header');
		this.trigger = this.header.querySelector('.user-trigger');
		this.popin = this.header.querySelector('.user-content');

		this.initEvents();
	}

	initEvents() {
		document.addEventListener('click', this.popinHandler.bind(this));
	}

	popinHandler(event) {
		if (event.target.closest('.user-trigger')) {
			if (this.popin.classList.contains('is-open')) {
				this.closePopin();
			} else {
				this.openPopin();
			}
		} else {
			this.closePopin();
		}
	}

	openPopin(event) {
		this.popin.classList.add('is-open');
	}

	closePopin(event) {
		this.popin.classList.remove('is-open');
	}
}

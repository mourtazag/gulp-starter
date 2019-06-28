export default class FlashMessenger {
	constructor() {
		this.wrapper = document.querySelector('flash-messenger');
		if (!this.wrapper) return;

		this.wrapper.addEventListener('click', e => {
			if (e.target.closest('.flash-messenger-close')) this.closeFlashMessenger();
		});
	}

	closeFlashMessenger() {
		this.wrapper.classList.add('is-hidden');
	}
}

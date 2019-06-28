import FlashMessenger from './modules/FlashMessenger.js';
import ResultNeedle from './modules/ResultNeedle.js';
import HeaderNav from './modules/HeaderNav.js';

window.addEventListener('load', main);

function main() {
	new ResultNeedle();
	new HeaderNav();
	new FlashMessenger();
}

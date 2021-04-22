import colors from "./colors.js";
import job from "./job.js";
import menu from "./menu.js";
import quotes from './quotes.js';

document.addEventListener('DOMContentLoaded', () => {
	colors();
	job(true);
	menu();
	quotes();
});
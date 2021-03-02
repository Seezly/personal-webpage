const header = document.getElementsByClassName('header')[0],
	nav = document.getElementsByClassName('header__nav')[0],
	span = document.querySelectorAll('span.yellow'),
	links = document.querySelectorAll('main a'),
	buttons = document.querySelectorAll('button.projects__project__btn'),
	footer = document.getElementsByTagName('footer')[0],
	footerLinks = document.getElementsByTagName('footer')[0].children;

let blue,
	sun,
	green,
	red;

let n = Math.floor(Math.random() * 4);

switch (n) {
	case 0:
		blue = 'rgba(64, 68, 253, 1)';
		red = 'rgba(195, 60, 84, 1)';
		green = 'rgba(83, 221, 108, 1)';
		sun = 'rgba(249, 203, 64, 1)';
		break;

	case 1:
		green = 'rgba(64, 68, 253, 1)';
		sun = 'rgba(195, 60, 84, 1)';
		blue = 'rgba(83, 221, 108, 1)';
		red = 'rgba(249, 203, 64, 1)';
		break;

	case 2:
		sun = 'rgba(64, 68, 253, 1)';
		green = 'rgba(195, 60, 84, 1)';
		red = 'rgba(83, 221, 108, 1)';
		blue = 'rgba(249, 203, 64, 1)';
		break;

	case 3:
		red = 'rgba(64, 68, 253, 1)';
		blue = 'rgba(195, 60, 84, 1)';
		sun = 'rgba(83, 221, 108, 1)';
		green = 'rgba(249, 203, 64, 1)';
		break;

	default:
		blue = 'rgba(64, 68, 253, 1)';
		red = 'rgba(195, 60, 84, 1)';
		green = 'rgba(83, 221, 108, 1)';
		sun = 'rgba(249, 203, 64, 1)';
		break;
}

header.style.backgroundColor = blue;
nav.style.backgroundColor = blue;
links.forEach(el => el.style.color = blue);
buttons.forEach(el => el.style.backgroundColor = blue);
footer.style.backgroundColor = blue;

span.forEach(el => el.style.color = sun);
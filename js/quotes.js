const quotes = () => {
	const pre = document.querySelector('span.header__nav__quote pre');

    const quote = [
		'<span>Press F5 to change colors!</span>',
		'console.log("Press F5 to change colors!");',
		'print("Press F5 to change colors!")',
		'echo("Press F5 to change colors!");'
	];

    let n = Math.floor(Math.random() * 4);

	pre.innerText = quote[n];
};

export default quotes;
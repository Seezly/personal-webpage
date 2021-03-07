const colors = () => {
    const header = document.getElementsByClassName('header')[0],
	nav = document.getElementsByClassName('header__nav')[0],
	span = document.querySelectorAll('span.yellow'),
	links = document.querySelectorAll('main a'),
	buttons = document.querySelectorAll('button.projects__project__btn'),
	kofi = document.querySelector('.kofi-button'),
	footer = document.getElementsByTagName('footer')[0],
	footerLinks = document.querySelectorAll('.footer__social a'),
	copyLink = document.querySelector('.footer__copy h6 a'),
	sub = document.querySelectorAll('h3.yellow');

    let blue,
        sun,
        green,
        red;

    let n = Math.floor(Math.random() * 4);

    switch (n) {
        case 0:
            blue = '#4044fd';
            red = '#c33c54';
            green = '#53dd6c';
            sun = '#f9cb40';
            break;

        case 1:
            green = '#4044fd';
            sun = '#c33c54';
            blue = '#53dd6c';
            red = '#f9cb40';
            break;

        case 2:
            sun = '#4044fd';
            green = '#c33c54';
            red = '#53dd6c';
            blue = '#f9cb40';
            break;

        case 3:
            red = '#4044fd';
            blue = '#c33c54';
            sun = '#53dd6c';
            green = '#f9cb40';
            break;
    }

    header.style.backgroundColor = blue;
    nav.style.backgroundColor = blue + 'BF';

    links.forEach(el => {
        el.style.color = blue;
        el.style.textDecoration = `solid underline ${blue} 0.25em`;

        el.addEventListener('mouseover', () => {
            el.style.color = red;
            el.style.textDecoration = `solid underline ${red} 0.25em`;
        });
        el.addEventListener('mouseout', () => {
            el.style.color = blue;
            el.style.textDecoration = `solid underline ${blue} 0.25em`;
        });
    });

    buttons.forEach(el => {
        el.style.backgroundColor = blue;

        el.addEventListener('mouseover', () => {
            el.style.backgroundColor = red;
        });
        el.addEventListener('mouseout', () => {
            el.style.backgroundColor = blue;
        });
    });

    kofi.style.backgroundColor = blue;

    footer.style.backgroundColor = blue;

    span.forEach(el => el.style.color = sun);
    sub.forEach(el => el.style.color = sun);

    footerLinks.forEach(el => {
        el.addEventListener('mouseover', () => {
            el.style.color = green;
        });
        el.addEventListener('mouseout', () => {
            el.style.color = "#ffffff";
        });
    })

    copyLink.style.color = sun;
    copyLink.addEventListener('mouseover', () => {
        copyLink.style.color = green;
    });

    copyLink.addEventListener('mouseout', () => {
        copyLink.style.color = sun;
    });
};

export default colors;
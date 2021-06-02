const colors = () => {
    const header = document.getElementsByClassName('header')[0],
    navMobile = document.querySelector('.header__nav--sm'),
    liMobile = document.querySelectorAll('.header__nav--sm li'),
	nav = document.getElementsByClassName('header__nav')[0],
	span = document.querySelectorAll('span.yellow'),
	links = document.querySelectorAll('main a'),
	buttons = document.querySelectorAll('a.projects__project__btn'),
	buttonsPost = document.querySelectorAll('a.posts__post__info__btn'),
	kofi = document.querySelector('.kofi-button') || undefined,
	footer = document.getElementsByTagName('footer')[0],
	footerLinks = document.querySelectorAll('.footer__social a'),
	copyLink = document.querySelector('.footer__copy h6 a'),
	sub = document.querySelectorAll('h3.yellow'),
    post = document.querySelectorAll('.posts__post') || undefined,
    project = document.querySelectorAll('.projects__project') || undefined;

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
    navMobile.style.backgroundColor = red + 'E6';

    liMobile.forEach(el => {

        el.addEventListener('mouseover', () => {
            el.style.backgroundColor = blue;
        });
        el.addEventListener('mouseout', () => {
            el.style.backgroundColor = 'transparent';
        });
    });

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
        el.style.color = 'white';
        el.style.textDecoration = 'none';

        el.addEventListener('mouseover', () => {
            el.style.backgroundColor = red;
            el.style.color = 'white';
            el.style.textDecoration = 'none';
        });
        el.addEventListener('mouseout', () => {
            el.style.backgroundColor = blue;
            el.style.color = 'white';
            el.style.textDecoration = 'none';
        });
    });

    buttonsPost.forEach(el => {
        el.style.backgroundColor = red;
        el.style.color = 'white';
        el.style.textDecoration = 'none';

        el.addEventListener('mouseover', () => {
            el.style.backgroundColor = green;
            el.style.color = 'white';
            el.style.textDecoration = 'none';
        });
        el.addEventListener('mouseout', () => {
            el.style.backgroundColor = red;
            el.style.color = 'white';
            el.style.textDecoration = 'none';
        });
    });

    if (post) {
        post.forEach(el => {
            el.style.boxShadow = `0.125em 0.125em 0.25em ${blue}80`;
            el.style.backgroundColor = blue;
        });
    }

    if (project) {
        project.forEach(el => {
            el.style.boxShadow = `0.125em 0.125em 0.25em ${blue}80`;
        });
    }
    
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
    
    if (kofi) {
        kofi.style.backgroundColor = blue;
        kofi.style.textDecoration = 'none';
        kofi.setAttribute('rel', 'noopener noreferrer');
        kofi.addEventListener('mouseover', () => {
            kofi.style.textDecoration = 'none';
        });
        kofi.addEventListener('mouseout', () => {
            kofi.style.textDecoration = 'none';
        });
    }
};


export default colors;
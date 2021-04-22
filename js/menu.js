const menu = () => {
    const button =  document.querySelector('.menu'),
        header = document.querySelector('.header__nav--sm'),
        nav = document.querySelector('.header__nav--sm__nav-bar'),
        status = document.querySelector('.header__nav--sm__status');

    button.addEventListener('click', (e) => {
        if (e.target.dataset.active === 'true') {
            e.target.dataset.active = 'false';
            e.target.classList.add('fa-bars');
            e.target.classList.remove('fa-times');
            header.classList.remove('active');
            nav.classList.remove('active');
            status.classList.remove('active');
            console.log('sm')
        } else {
            e.target.dataset.active = 'true';
            e.target.classList.remove('fa-bars');
            e.target.classList.add('fa-times');
            header.classList.add('active');
            nav.classList.add('active');
            status.classList.add('active');
        }
    });
};

export default menu;
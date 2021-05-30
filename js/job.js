const isAvailable = bool => {
    const status = document.querySelector('span.header__nav__status');
    const statusMobile = document.querySelector('span.header__nav--sm__status');
    let job;

    if(bool === true){
        job = `<a href="https://www.sergiogutierrez.ml/assets/SergioG_CV.pdf" target="_blank" rel="noopener noreferrer">I'm available to work!</a>`;

        status.addEventListener('mouseover', () => {
            job = `<a href="https://www.sergiogutierrez.ml/assets/SergioG_CV.pdf" target="_blank" rel="noopener noreferrer">Download my CV!</a>`;
        });

        status.addEventListener('mouseout', () => {
            job = `<a href="https://www.sergiogutierrez.ml/assets/SergioG_CV.pdf" target="_blank" rel="noopener noreferrer">I'm available to work!</a>`;
        });
    } else {
        job = "I'm currently working!";
    }

    status.innerHTML = job;
    statusMobile.innerHTML = job;
};

export default isAvailable;
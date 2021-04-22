const isAvailable = bool => {
    const status = document.querySelector('span.header__nav__status');
    const statusMobile = document.querySelector('span.header__nav--sm__status');
    let job;

    if(bool === true){
        job = "I'm available to work!";
    } else {
        job = "I'm currently working!";
    }

    status.innerHTML = job;
    statusMobile.innerHTML = job;
};

export default isAvailable;
const isAvailable = bool => {
    const status = document.querySelector('span.header__nav__status');
    let job;

    if(bool === true){
        job = "I'm available to work!";
    } else {
        job = "I'm currently working!";
    }

    status.innerHTML = job;
};

export default isAvailable;
var isOpen = false;

function initializeEvents() {
    var menuIcon = document.querySelector('.menu-icon');
    console.log('menuIcon: ', menuIcon);
    menuIcon.addEventListener('click', handleClickEvent);
}

function handleClickEvent(e){
    console.log('I have been clicked!');
    var navContainerMobile = document.querySelector('.nav-container-mobile');
    console.log('navContainerMobile: ', navContainerMobile);
    if(isOpen === true) {
        navContainerMobile.style.display = "none";
        isOpen = false;
    } else {
        navContainerMobile.style.display = "block";
        isOpen = true;
    }
}

initializeEvents();
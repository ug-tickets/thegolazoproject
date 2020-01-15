let detailsoverlay = document.querySelector('.projctdetails');
let sidemenuoverlay = document.querySelector('.sidemenu');
document.querySelector('.gotop').addEventListener('click', () => {
    window.scrollTo({
        top: 0
    });
});
document.querySelector('#contactinfo').addEventListener('click', () => {
    detailsoverlay.classList.add('is-visible');

});
document.querySelector('.closebtn').addEventListener('click', () => {
    detailsoverlay.classList.remove('is-visible');

});
document.querySelector('.burgermenu').addEventListener('click', () => {
    sidemenuoverlay.classList.add('is-visible');
});
Array.from(document.querySelectorAll('.sidemenu li')).forEach((li) => {
    li.addEventListener('click', () => {
        sidemenuoverlay.classList.remove('is-visible');
    });
});
// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

// toggle button for showing more books div
// const collapser = document.querySelector('#collapser');
// const showHide = document.querySelector('#showHide');

// showHide.addEventListener('click', () => {
//     collapser.classList.toggle('d-none');
//     if (collapser.classList.contains('d-none')) {
//         showHide.textContent = 'More Books';
//     } else {
//         showHide.textContent = 'Less books';
//     }
// });
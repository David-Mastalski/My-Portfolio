const menuButton = document.querySelector('.menu-button')
const mobileNav = document.querySelector('.nav')

menuButton.addEventListener('click', () => {
    mobileNav.classList.toggle('mobile-menu-show')
})
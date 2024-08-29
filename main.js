const sideBar = document.querySelector('.sidebar')
const overlay = document.getElementById('overlay')
const menuLinks = document.querySelectorAll('.sidebar .menu-mobi')

function showMenu() {
    sideBar.style.right = '0'
    overlay.style.display = 'block'
}

function hideMenu() {
    sideBar.style.right = '-100%'
    overlay.style.display = 'none'
}

menuLinks.forEach(link => {
    link.addEventListener('click', hideMenu)
})
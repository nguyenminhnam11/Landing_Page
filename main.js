// Sidebar
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

// Switch slide feedback
const slide1 = document.querySelector('.slide-item-1')
const slide2 = document.querySelector('.slide-item-2')
const btnSwitch = document.querySelectorAll('.switch-slide')
btnSwitch.forEach(btn => {
    btn.addEventListener('click', () => {
        if (slide1.style.transform == `translateX(500px)`) {
            slide1.style.transform = `translateX(0)`
            slide2.style.transform = `translateX(0)`
        } else {
            slide1.style.transform = `translateX(500px)`
            slide2.style.transform = `translateX(-500px)`
        }
    
    })
})
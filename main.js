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

let swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 2,
        },
    },
});

let swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
        },

        768: {
            slidesPerView: 1.5,
        },
    },
});


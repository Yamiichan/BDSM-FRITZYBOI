const hambuger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");


hambuger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hambuger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hambuger.classList.remove("active");
    navMenu.classList.remove("active");
}
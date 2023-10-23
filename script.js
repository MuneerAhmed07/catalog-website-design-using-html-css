let Navbar = document.querySelector(".navbar");
let Menu = document.querySelector("#nav_menu");

Menu.addEventListener("click", () => {
    Navbar.classList.toggle("active");
});
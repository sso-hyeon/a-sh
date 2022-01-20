const menuIcon = document.querySelector("#nav-icon4");
const menu = document.querySelector(".mb_nav");

menuIcon.addEventListener("click", function () {
    this.classList.toggle("open");
    menu.classList.toggle("active");
});

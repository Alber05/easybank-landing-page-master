const mobileMenu = document.querySelector(".mobile-menu__wrapper");
const hamburguer = document.querySelector(".hamburger");

hamburguer.addEventListener("click", () => {
  mobileMenu.classList.toggle("display-menu");

  mobileMenu.classList.contains("display-menu")
    ? (hamburguer.src = "./images/icon-close.svg")
    : (hamburguer.src = "./images/icon-hamburger.svg");

  console.log("hola");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    mobileMenu.classList.remove("display-menu");
    hamburguer.src = "./images/icon-hamburger.svg";
  }
});

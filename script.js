window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 100) {
    document.querySelector("body nav").classList.add("active");
    document.querySelector("body nav button").style.padding = "13.5px 46px";
  } else {
    document.querySelector("body nav").classList.remove("active");
    document.querySelector("body nav button").style.padding = "30px 46px";
  }
});

const hamburgerMenu = document.querySelector(".hamburger-menu");
const ul = document.querySelector("nav ul");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hamburger-rotate");
  ul.classList.toggle("slide-out");
});
const headerH1 = document.querySelector(".header-text-and-button h1");
const headerP = document.querySelector(".header-text-and-button p");
const headerButton = document.querySelector(".header-button");
const headerImage = document.querySelector(".graphic-image");
const featuresText = document.querySelector(".features-text");
const featuresImage = document.querySelector(".features-image");
const featuresControlPanel = document.querySelector(".control-panel-text");
const contentsText = document.querySelector(".contents-text");
const contentFirstCard = document.getElementsByClassName("card")[0];
const contentSecondCard = document.getElementsByClassName("card")[1];
const galleryText = document.querySelector(".gallery-text");
const galleryFirstRow = document.querySelector(".first-row");
const gallerySecondRow = document.querySelector(".second-row");

const partnersText = document.querySelector(".partners-text");
const footer = document.querySelector("footer");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const ul = document.querySelector("nav ul");

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 100) {
    document.querySelector("body nav").classList.add("active");
  } else {
    document.querySelector("body nav").classList.remove("active");
  }
});

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hamburger-rotate");
  ul.classList.toggle("slide-out");
});

const handleIntersection = (entries) => {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
};

const observer = new IntersectionObserver(handleIntersection);
observer.observe(headerH1);
observer.observe(headerP);
observer.observe(headerButton);
observer.observe(headerImage);
observer.observe(featuresText);
observer.observe(featuresImage);
observer.observe(featuresControlPanel);
observer.observe(contentsText);
observer.observe(contentFirstCard);
observer.observe(contentSecondCard);
observer.observe(galleryText);
observer.observe(galleryFirstRow);
observer.observe(gallerySecondRow);

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
const galleryThirdRow = document.querySelector(".third-row");
const partnersText = document.querySelector(".partners-text");
const partnersLogos = document.querySelector(".partners-logos");
const testimonialsText = document.querySelector(".testimonials h2");
const testimonialsFirstColumn = document.querySelector(".first-column");
const testimonialsSecondColumn = document.querySelector(".second-column");
const testimonialsThirdColumn = document.querySelector(".third-column");
const opentypeText = document.querySelector(".opentype-text-and-button");
const opentypeImage = document.querySelector(".opentype-image");
const footerLinks = document.querySelector(".about-site");
const siteConnection = document.querySelector(".site-connection");

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
observer.observe(galleryThirdRow);

observer.observe(galleryThirdRow);
observer.observe(partnersText);
observer.observe(partnersLogos);
observer.observe(testimonialsText);
observer.observe(testimonialsFirstColumn);
observer.observe(testimonialsSecondColumn);
observer.observe(testimonialsThirdColumn);
observer.observe(opentypeText);
observer.observe(opentypeImage);
observer.observe(footerLinks);
observer.observe(siteConnection);

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 100) {
    document.querySelector("body nav").classList.add("active");
  } else {
    document.querySelector("body nav").classList.remove("active");
  }
}

const btnHamburger = document.querySelector("#hamburger");
const fadeElement = document.querySelectorAll(".has-fade");
const body = document.querySelector("body");

btnHamburger.addEventListener("click", function () {
  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
    body.classList.remove("no-scroll");
    fadeElement.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    btnHamburger.classList.add("open");
    body.classList.add("no-scroll");
    fadeElement.forEach((element) => {
      element.classList.add("fade-in");
      element.classList.remove("fade-out");
    });
  }
});

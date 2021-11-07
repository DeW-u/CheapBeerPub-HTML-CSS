const hamburger = document.querySelector(
  ".header .nav-bar .nav-list .hamburger"
);
const mobile_menu = document.querySelector(".header .nav-bar .nav-list ul");
const header = document.querySelector(".header.container");
const menu_item = document.querySelectorAll(
  ".header .nav-bar .nav-list ul li a"
);

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
   if (scroll_position > 230) {
    // header.style.background =
    //   "linear-gradient(90deg,rgba(145, 110, 38, 1) 0%,var(--beerBackgroundS) 100%)";
    header.style.backgroundColor = "rgba(145, 110, 38, 1)";
  } else {
    header.style.backgroundColor = "transparent";
  }
});


menu_item.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobile_menu.classList.toggle("active");
  });
});

let bnt7 = document.getElementsByClassName("button-wep")[0];
window.onscroll = function () {
  let navbar = document.getElementById("navbar");
  if (window.scrollY >= 300) {
    navbar.style.cssText = "background-color: #282833;";
  } else if (window.scrollY <= 100) {
    navbar.style.cssText = "background-color: transparent;";
  }
  if (window.scrollY >= 600) {
    bnt7.style.cssText = "display: block;";
  } else if (window.scrollY <= 200) {
    bnt7.style.cssText = "display: none;";
  }
};
let hamburger = document.getElementsByClassName("hamburger")[0];
let ul = document.getElementsByClassName("links")[0];
let links = document.querySelectorAll(".links li a");

hamburger.onclick = function () {
  ul.classList.toggle("open");
  if (ul.classList.contains("open")) {
    document.body.style.overflow = "hidden";
  } else if (!ul.classList.contains("open")) {
    document.body.style.overflow = "auto";
  }
};
links.forEach(function (link) {
  link.onclick = function () {
    ul.classList.toggle("open");
    document.body.style.overflow = "auto";
  };
});

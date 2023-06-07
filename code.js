window.onscroll = function () {
  let btn = document.getElementsByClassName("child")[0];
  if (window.scrollY >= 340) {
    btn.style.cssText = "animation: amcvg 2s 1;  opacity: 1;";
  }

  let btnh2 = document.getElementsByClassName("img-amcvg-2")[0];
  if (window.scrollY >= 340) {
    btnh2.style.cssText = "animation: amcvg-2 2s 1;  opacity: 1;";
  }

  let bnt3 = document.getElementsByClassName("menu-Item-right")[0];
  if (window.scrollY >= 1300) {
    bnt3.style.cssText = "animation: amcvg-3 2s 1;  opacity: 1;";
  }

  let bnt4 = document.getElementsByClassName("menu-Item-left")[0];
  if (window.scrollY >= 1300) {
    bnt4.style.cssText = "animation: amcvg-4 2s 1;  opacity: 1;";
  }
  let navbar = document.getElementById("navbar");
  if (window.scrollY >= 300) {
    navbar.style.cssText = "background-color: #282833;";
  } else if (window.scrollY <= 100) {
    navbar.style.cssText = "background-color: transparent;";
  }
  let bnt5 = document.getElementsByClassName("contact-info")[0];
  if (window.scrollY >= 3000) {
    bnt5.style.cssText = "animation: amcvg-5 2s 1;  opacity: 1;";
  }
  let bnt6 = document.getElementsByClassName(".form")[0];
  if (window.scrollY >= 3000) {
    bnt6.style.cssText = "animation: amcvg-6 2s 1;  opacity: 1;";
  }
  let bnt7 = document.getElementsByClassName("button-wep")[0];
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
};

links.forEach(function (link) {
  link.onclick = function () {
    ul.classList.toggle("open");
  };
});

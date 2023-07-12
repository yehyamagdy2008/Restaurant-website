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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const options = {
  root: null,
};

let ChildSlide = document.querySelector(".child");

const observer = new IntersectionObserver(function (entires) {
  entires.forEach((el) => {
    if (el.isIntersecting) el.target.classList.add("slide");
  });
}, options);
observer.observe(ChildSlide);

//////////////////////////////////////////////////////////////////////////

let imgSlide = document.querySelector("#About .about-content img");

const observer2 = new IntersectionObserver(function (entires) {
  entires.forEach((el) => {
    if (el.isIntersecting) el.target.classList.add("slide2");
  });
}, options);
observer2.observe(imgSlide);
//////////////////////////////////////////////////////////////////////////

let muneleft = document.querySelector(".menu-Item-left");

const observer3 = new IntersectionObserver(function (entires) {
  entires.forEach((el) => {
    if (el.isIntersecting) el.target.classList.add("slide");
  });
}, options);
observer3.observe(muneleft);

//////////////////////////////////////////////////////////////////////////

let muneright = document.querySelector(".menu-Item-right");

const observer4 = new IntersectionObserver(function (entires) {
  entires.forEach((el) => {
    if (el.isIntersecting) el.target.classList.add("slide2");
  });
}, options);
observer4.observe(muneright);

//////////////////////////////////////////////////////////////////////////

let contact = document.querySelector(".contact-info");

const observer5 = new IntersectionObserver(function (entires) {
  entires.forEach((el) => {
    if (el.isIntersecting) el.target.classList.add("slide");
  });
}, options);
observer5.observe(contact);

//////////////////////////////////////////////////////////////////////////

let contact2 = document.querySelector("form");

const observer6 = new IntersectionObserver(function (entires) {
  entires.forEach((el) => {
    if (el.isIntersecting) el.target.classList.add("slide2");
  });
}, options);
observer6.observe(contact2);
let but2 = document.querySelector(".sun");
let but = document.querySelector(".sun i");
let htm = document.querySelector(".hml");
but.onclick = function () {
  htm.classList.toggle("show");
  if (htm.classList.contains("show")) {
    but.classList.add("fa-sun");
    but.classList.remove("fa-moon");
    but2.style.backgroundColor = "white";
  } else {
    but.classList.remove("fa-sun");
    but.classList.add("fa-moon");
    but2.style.backgroundColor = "black";
  }
};
window.addEventListener("load", function () {
  if (htm.classList.contains("show")) {
    but2.style.backgroundColor = "white";
  } else {
    but2.style.backgroundColor = "black";
  }
});

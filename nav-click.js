// function for "Project" nanbar button
function onclickfunction() {
  document.getElementById("mydropdown").classList.toggle("menu-open");
  mydropdown2.classList.remove("menu-open");
}

// function for "Service" nav bar button
function onclickfunction2() {
  document.getElementById("mydropdown2").classList.toggle("menu-open");
  mydropdown.classList.remove("menu-open");
}

// code for closing the nested navbar when user clicks other button
window.onclick = function (event) {
  if (!event.target.matches(".nested-nav")) {
    var mydropdown = document.getElementById("mydropdown");
    var mydropdown2 = document.getElementById("mydropdown2");
    if (mydropdown2.classList.contains("menu-open")) {
      mydropdown2.classList.remove("menu-open");
    } else if (mydropdown.classList.contains("menu-open")) {
      mydropdown.classList.remove("menu-open");
    }
  }
};

// code for menu button in navigation bar
const mobile_nav = document.querySelector(".navbar-btn");
const nav_header = document.querySelector(".header");
const toggleNavbar = () => {
  nav_header.classList.toggle("active");
};

mobile_nav.addEventListener("click", () => toggleNavbar());

// const rotate = document.querySelectorAll(".nested-nav");

// rotate.forEach(nested-nav => {
//   const rotatetringle = nested - nav.querySelector("..bxs-down-arrow-rotate");
// });

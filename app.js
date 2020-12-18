"use strict";

function menuToggle() {
  const nav = document.querySelector("#nav");
  const menu = document.querySelector(".menuicon");
  menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

menuToggle();

"use strict";

// Element
const menuBtn = document.getElementById("menu__btn");
const navMenu = document.getElementById("nav__menu");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;
const allSections = document.querySelectorAll(".section");

// JavaScript to toggle the menu
menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("flex");
});

// sticky navbar
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// reveal sections
const revealSection = function (entries, observer) {
  const [entry] = entries;
  //   console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// cards
const cards = document.querySelectorAll(".card");
// console.log(cards);
cards.forEach((card) => {
  card.addEventListener("click", console.log("hi"));
});
// cards.addEventListener("mouseover", console.log("hi"));

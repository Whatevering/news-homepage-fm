const menu = document.querySelector(".menu");
const menuLayout = document.querySelector(".menu-layout");
const menuButton = document.querySelector(".menu-button");
const menuCloseButton = document.querySelector(".menu-close-button");

menuButton?.addEventListener("click", () => {
  menu?.classList.add("active");
  menuLayout?.classList.add("active");
});

menuCloseButton?.addEventListener("click", () => {
  menu?.classList.remove("active");
  menuLayout?.classList.remove("active");
});

menuLayout?.addEventListener("click", () => {
  menu?.classList.remove("active");
  menuLayout?.classList.remove("active");
});

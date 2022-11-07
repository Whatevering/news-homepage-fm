"use strict";
const menu = document.querySelector(".menu");
const menuLayout = document.querySelector(".menu-layout");
const menuButton = document.querySelector(".menu-button");
const menuCloseButton = document.querySelector(".menu-close-button");
menuButton === null || menuButton === void 0 ? void 0 : menuButton.addEventListener("click", () => {
    menu === null || menu === void 0 ? void 0 : menu.classList.add("active");
    menuLayout === null || menuLayout === void 0 ? void 0 : menuLayout.classList.add("active");
});
menuCloseButton === null || menuCloseButton === void 0 ? void 0 : menuCloseButton.addEventListener("click", () => {
    menu === null || menu === void 0 ? void 0 : menu.classList.remove("active");
    menuLayout === null || menuLayout === void 0 ? void 0 : menuLayout.classList.remove("active");
});
menuLayout === null || menuLayout === void 0 ? void 0 : menuLayout.addEventListener("click", () => {
    menu === null || menu === void 0 ? void 0 : menu.classList.remove("active");
    menuLayout === null || menuLayout === void 0 ? void 0 : menuLayout.classList.remove("active");
});

let dropHeaderInput = document.getElementById("header-nav-mobile--drop");
let getBodyTag = document.querySelector("body");
let navMobileLinks = document.querySelectorAll(".header-nav-mobile--link");

dropHeaderInput.addEventListener("click", () => {
  if (dropHeaderInput.checked) {
    getBodyTag.style = "overflow: hidden";
  } else {
    getBodyTag.style = "overflow: auto";
  }
});

navMobileLinks.forEach((links) => {
  links.addEventListener("click", () => {
    dropHeaderInput.checked = false;
    getBodyTag.style = "overflow: auto";
  });
});

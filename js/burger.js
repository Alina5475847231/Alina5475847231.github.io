const hamb = document.querySelector(".header__burger");
const body = document.body;

const menu = document.querySelector(".header__nav");

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  hamb.classList.toggle("active");
  body.classList.toggle("no-scroll");
  menu.classList.toggle('show');
}

const links = Array.from(menu.children);

links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}
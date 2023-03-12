// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// click diluar sidebar untuk menghilangkan menu
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// toggle mode active
if (localStorage.getItem("theme") == "dark") {
  myFunction(true);
}

function myFunction() {
  localStorage.setItem("theme", "dark");
  var element = document.body;
  element.classList.toggle("white-mode");
}
myFunction();

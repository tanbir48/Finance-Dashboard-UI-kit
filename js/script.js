const hamburger = document.getElementById("mobile-button");
var navmenu = document.getElementById("my-task");

hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("show");
});

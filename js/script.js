function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    console.log("button was clicked");
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      console.log(openDropdown);
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function myFindmoreFunction() {
  document.getElementById("FmyDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".Fdropbtn")) {
    console.log("button was clicked");
    var dropdowns = document.getElementsByClassName("Fdropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      console.log(openDropdown);
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

function myFindmoretwoFunction() {
  document.getElementById("FtwomyDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".Ftwodropbtn")) {
    console.log("button was clicked");
    var dropdowns = document.getElementsByClassName("Ftwodropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      console.log(openDropdown);
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const hamburger = document.getElementById("mobile-button");
var navmenu = document.getElementById("my-task");

hamburger.addEventListener("click", () => {
  navmenu.classList.toggle("show");
});

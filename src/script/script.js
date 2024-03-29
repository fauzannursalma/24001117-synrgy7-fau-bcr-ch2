// feather icons
feather.replace();

// Navbar toggler
let navToggler = document.getElementsByClassName("toggler");

for (let i = 0; i < navToggler.length; i++) {
  navToggler[i].addEventListener("click", function () {
    document.getElementById("offcanvas").classList.toggle("hidden");
    document.getElementById("overlay").classList.toggle("hidden");
  });
}

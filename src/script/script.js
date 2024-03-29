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

// Owl Carousel (Testimonials)
$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 5,
  center: true,
  items: 2,
  autoWidth: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 3,
      nav: false,
    },
  },
});

// Owl Carousel (Chevron)
var owl = $(".owl-carousel");
owl.owlCarousel();
// next chevron
$("#nextBtn").on("click", function () {
  owl.trigger("next.owl.carousel");
});
// previous chevron
$("#prevBtn").on("click", function () {
  owl.trigger("prev.owl.carousel", [300]);
});

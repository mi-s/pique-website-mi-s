/* Mobile Menu Script */
window.addEventListener("click", function(event) {
  if (event.target.matches("#openDropdown")) {
    document.getElementById("dropdownContent").classList.add("show");
    document.getElementById("closeDropdown").classList.add("show");
    document.getElementById("openDropdown").classList.add("hide");
  } else {
    document.getElementById("dropdownContent").classList.remove("show");
    document.getElementById("closeDropdown").classList.remove("show");
    document.getElementById("openDropdown").classList.remove("hide");
  }
});

/* Slideshow Script */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
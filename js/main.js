/* Load Script
  Upon loading website, separately animates each element */
load();
async function load() {
  var loadable = document.getElementsByClassName("loadable");
  var loadablePhone = document.getElementsByClassName("loadablePhone");
  for (i = 0; i < loadable.length; i++) {
    loadable[i].classList.add("loadIn");
    await sleep(200);  // wait 200ms before loading next element
  }
  loadablePhone[0].classList.add("loadInPhone");
}

// Sleep Script (for load)
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Slideshow Script
var slideIndex = 0;
var slideClicked = 0;

showSlides(slideIndex);
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

// Automatic image rotation until slides clicked
autoSlides();
function autoSlides() {
  if (slideClicked == 1) { return; }
  else {
    showSlides(slideIndex += 1);
    setTimeout(autoSlides, 4000);
  }
}

// Next/previous controls
function plusSlides(n) {
  slideClicked = 1;
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  slideClicked = 1;
  showSlides(slideIndex = n);
}

/* Mobile Menu Script (No navigation bar currently)
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
*/
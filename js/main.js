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
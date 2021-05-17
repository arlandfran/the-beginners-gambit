var links = document.getElementById("sidebar-links");
var link = links.getElementsByClassName("sidebar-link");

for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }

function toggleSideBar() {
    var el = document.querySelector(".sidebar");
    el.classList.toggle("sidebar-open")
}
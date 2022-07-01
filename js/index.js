const date = new Date();
const year = date.getFullYear();
const copyright =
    year +
    '<strong><a href="#"> UNXPORTED </a></strong>';
document.getElementById("copyright").innerHTML = copyright;



function nav() {
  var element = document.getElementById("links");
  element.classList.toggle("open");
} 
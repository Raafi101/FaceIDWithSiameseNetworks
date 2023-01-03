function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function showImage(id) {
  var x = document.getElementById(id)
  x.style.display = "grid"
}
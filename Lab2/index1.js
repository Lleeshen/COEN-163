window.onresize = function(){ location.reload(); }

function toggleNav() {
  if(document.getElementById("nav-link").style.display == "none") {
    document.getElementById("nav-link").style.display = "block";
    document.getElementById("nav-bar").style.height = "auto";
    document.getElementById("button").src = "Button-02.png";
  } else {
    document.getElementById("nav-link").style.display = "none";
    document.getElementById("nav-bar").style.height = "3px";
    document.getElementById("button").src = "Button-01.png";
  }
}

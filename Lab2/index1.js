window.onresize = function(){ location.reload(); }

function toggleNav() {
  if(document.getElementById("nav-link").style.display == "none") {
    document.getElementById("nav-link").style.display = "block";
    document.getElementById("nav-bar").style.height = "auto";
    buttonImg = document.getElementById("button");
    buttonImg.src = "Button-02.png";
    buttonImg.style.top = "15px";
    buttonImg.style.height = "20px";
  } else {
    document.getElementById("nav-link").style.display = "none";
    document.getElementById("nav-bar").style.height = "3px";
    buttonImg = document.getElementById("button");
    buttonImg.src = "Button-01.png";
    buttonImg.style.top = "10px";
    buttonImg.style.height = "30px";
  }
}

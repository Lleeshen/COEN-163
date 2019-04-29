window.onresize = function(){ location.reload(); }

function toggleNav() {
  buttonImg = document.getElementById("button");
  //Styling when button is open
  if(document.getElementById("nav-link").style.display == "none") {
    //Show the navigation links
    document.getElementById("nav-link").style.display = "block";
    document.getElementById("nav-bar").style.height = "auto";
    //Use smaller close nav button
    buttonImg.src = "Button-02.png";
    buttonImg.style.top = "15px";
    buttonImg.style.height = "20px";
  } else {
  //Styling when button is closed
    //Hide navigation links, keep black line
    document.getElementById("nav-link").style.display = "none";
    document.getElementById("nav-bar").style.height = "3px";
    //Use larger open nav button
    buttonImg.src = "Button-01.png";
    buttonImg.style.top = "10px";
    buttonImg.style.height = "30px";
  }
}

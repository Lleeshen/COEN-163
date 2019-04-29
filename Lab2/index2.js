window.onresize = function(){ location.reload(); }

function toggleNav() {
  buttonImg = document.getElementById("button");
  //Styling when menu is open
  if(buttonImg.style.top == "10px") {
    //Open side nav bar and move page to the left
    document.getElementById("sideNav").style.width = "160px";
    document.getElementById("main").style.right= "150px";
    document.getElementById("footer").style.left= "150px";
    //Switch to close button, make it smaller
    buttonImg.src = "Button-02.png";
    buttonImg.style.top = "15px";
    buttonImg.style.height = "20px";
    buttonImg.style.left = "13px";
  //Styling when menu is closed
  } else {
    //Close side nav bar and reset page width
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.right= "0";
    document.getElementById("footer").style.left= "0";
    //Switch to open button, make it larger
    buttonImg.src = "Button-01.png";
    buttonImg.style.top = "10px";
    buttonImg.style.height = "30px";
    buttonImg.style.left = "initial";
  }
}

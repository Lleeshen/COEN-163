window.onresize = function(){ location.reload(); }

function toggleNav() {
  buttonImg = document.getElementById("button");
  if(buttonImg.style.top == "10px") {
    document.getElementById("sideNav").style.width = "160px";
    document.getElementById("main").style.right= "150px";
    document.getElementById("footer").style.left= "150px";
    buttonImg.src = "Button-02.png";
    buttonImg.style.top = "15px";
    buttonImg.style.height = "20px";
    buttonImg.style.left = "15px";
  } else {
    document.getElementById("sideNav").style.width = "0";
    document.getElementById("main").style.right= "0";
    document.getElementById("footer").style.left= "0";
    buttonImg.src = "Button-01.png";
    buttonImg.style.top = "10px";
    buttonImg.style.height = "30px";
    buttonImg.style.left = "initial";
  }
}

window.onresize = function(){ location.reload(); }

function toggleNav() {
  buttonImg = document.getElementById("button");
  if(buttonImg.style.top == "10px") {
    buttonImg.src = "Button-02.png";
    buttonImg.style.top = "15px";
    buttonImg.style.height = "20px";
  } else {
    buttonImg.src = "Button-01.png";
    buttonImg.style.top = "10px";
    buttonImg.style.height = "30px";
  }
}

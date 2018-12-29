var spaceForTime = document.getElementById("time");
var time = new Date();
var hours = time.getHours();
var minutes = time.getMinutes();

var currentTime = hours + ":" + minutes;
spaceForTime.textContent = currentTime;

window.addEventListener("scroll", scrolly);

function playAudio() {
  var x = document.getElementById("myAudio");
  x.play();
}

function scrolly() {

    if (pageYOffset > 100) {
      document.getElementById("wrapper").style.display = "none";
      document.getElementById("main").style.display = "none";
      document.getElementById("scaryImage").style.display = "inline";
      // document.getElementByTag('body').background-image: "";
      document.body.style.backgroundImage = "url('./images/empty.jpg')";
      document.body.style.backgroundColor = "black";

      }
}

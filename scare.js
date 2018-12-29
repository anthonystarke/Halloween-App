// Add current time to top of page
var spaceForTime = document.getElementById("time")
var time = new Date()
var hours = time.getHours()
var minutes = time.getMinutes()
var currentTime = hours + ":" + minutes
spaceForTime.textContent = currentTime;


window.addEventListener("scroll", scrolly)

var x = 0;
function scrolly() {
    if (pageYOffset > 200) {
      // document.getElementById("demo").innerHTML = x += 1;
      document.getElementById("wrapper").style.display = "none";
      document.getElementById("main").style.display = "none";
      document.getElementById("scaryImage").style.display = "inline";
      // document.getElementByTag('body').background-image: "";
      document.body.style.backgroundImage = "url('./images/empty.jpg')";
    }
}

var spaceForTime = document.getElementById("time")
var time = new Date()
var hours = time.getHours()
var minutes = time.getMinutes()

var currentTime = hours + ":" + minutes

spaceForTime.textContent = currentTime;


var x = 0;
function myFunction() {
  document.getElementById("demo").innerHTML = x += 1;
}

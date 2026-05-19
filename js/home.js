function zoomInOut(myZoom) {
   document.body.style.zoom = myZoom;
   document.getElementById("yourchoice").innerHTML = "zoom"+"<br>"+myZoom;
}
function pickColor(myColor) {
   document.body.style.color = myColor;
   document.getElementById("yourchoice").innerHTML = "color"+"<br>"+myColor;
}
function fillAlert(varAlert){
   let textAlert;
   if (varAlert == 'git') {
     textAlert = alert(' ➠ You are there !');
   } else {
     textAlert = alert(' ➠ Think, Build, Share, Collaborate.\n ➠ Questions ?\n ➠ Contact me !');
   }
   document.getElementById("text").innerHTML = textAlert;
}
(function () {
var yEl = document.getElementById('year');
if (yEl) yEl.textContent = new Date().getFullYear();
})();
const d1 = new Date();
const d = new Date();
document.getElementById("timeZone").innerHTML = d1;
document.getElementById("timeLocale").innerHTML = "Locale time : "+d.toLocaleString();	
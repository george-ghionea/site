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
   if (varAlert == 'abo') {
     textAlert = alert(' ➠ Think, Build, Share, Collaborate.\n ➠ Questions ?\n ➠ Contact me !');
   } else {
     textAlert = alert(' not set !');
   }
   document.getElementById("text").innerHTML = textAlert;
}
function test(myTest) {
   let textAlert; 
   document.body.style.color = myTest;
   if (myTest == 'git') {  
   document.getElementById("alertchoice").innerHTML = "➠ Think, Build, Share,Collaborate."+"<br>"+"➠ You are there !";}
   if (myTest == 'gem') {  
   document.getElementById("alertchoice").innerHTML = "➠ Think, Build, Share,Collaborate."+"<br>"+"➠ Question ? Ask Me or Gemini ?!";}  
   if (myTest == 'ais') {  
   document.getElementById("alertchoice").innerHTML = "➠ Think, Build, Share,Collaborate."+"<br>"+"➠ Let's get in touch !";}     
}
(function () {
var yEl = document.getElementById('year');
if (yEl) yEl.textContent = new Date().getFullYear();
})();
const d1 = new Date();
const d2 = new Date();
const options1 = {timeZone: 'Europe/Bucharest', 
                 weekday: 'long',
                 year: 'numeric',
                 month: 'long',
                 day: 'numeric',
                 hour: '2-digit',
                 minute: '2-digit',
};
const options2 = {timeZone: 'America/New_York', 
                 weekday: 'long',
                 year: 'numeric',
                 month: 'long',
                 day: 'numeric',
                 hour: '2-digit',
                 minute: '2-digit',
};
document.getElementById("timeLocale").innerHTML = "Europe/Bucharest : "+d1.toLocaleDateString('ro-EU', options1);	
document.getElementById('timeNY').innerHTML = "America/New_York : "+d2.toLocaleDateString('en-US', options2);	

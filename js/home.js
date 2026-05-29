$(document).ready(function() {
	$("#showDialog").click(function() {
       $("#dialogBoxMe").dialog({
        modal: true,
		resizable: false,   
        buttons: {
            //Contact: function() { window.location.href = '';},
            //Services: function() {window.location.href = '';},
			Close: function() {
                $(this).dialog("close");
            }
       }
    });
  });	
});
function defaultSt(varSt) {
   if (varSt === 'resetst') {
	    document.getElementById("yourchoice").innerHTML = "";	
		document.getElementById("yourzoom").innerHTML = "";
		document.getElementById("alertchoice").innerHTML = "";
		document.body.style.color = "#000000";
		document.body.style.zoom = "100%";
   } else {
     textAlert = alert(' not set !');
   }  
}
function zoomInOut(myZoom) {
   document.body.style.zoom = myZoom;
   document.getElementById("yourzoom").innerHTML = "zoom"+"<br>"+myZoom;
}
function pickColor(myColor) {
   document.body.style.color = myColor;
   document.getElementById("yourchoice").innerHTML = "color"+"<br>"+myColor;
}
function fillAlert(varAlert){
   let textAlert;
   if (varAlert === 'abo') {
     textAlert = alert(' ➤ Think, Build, Share, Collaborate.\n ➠ Questions ?\n ➠ Contact me !');
   } else {
     textAlert = alert(' not set !');
   }
   document.getElementById("text").innerHTML = textAlert;
}
function test(myTest) {
   let textAlert; 
   document.body.style.color = myTest;
     if (myTest === 'git') {  
   document.getElementById("alertchoice").innerHTML = "♾️ Git Hub"+"<br>"+"&nbsp;➠ Don’t hesitate to drop me a line !";}
   if (myTest === 'gem') {  
   document.getElementById("alertchoice").innerHTML = "♾️ Gemini"+"<br>"+"&nbsp;➠ Questions ? Ask Me or Gemini !";}  
   if (myTest === 'ais') {  
   document.getElementById("alertchoice").innerHTML = "♾️ AI Studio"+"<br>"+"&nbsp;➠ Feel free to reach out for assistance !";}      
}
function goToWhere(myURL) {
   if (myURL==='con'){window.location.href = "https://gghionea.my.canva.site/contact";}
   if (myURL==='ser'){window.location.href = "https://gghionea.my.canva.site/services";}   
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
document.getElementById("timeLocale").innerHTML = "🌐Europe / Bucharest : "+d1.toLocaleDateString('ro-EU', options1);	
document.getElementById('timeNY').innerHTML = "🌐America / New York : "+d2.toLocaleDateString('en-US', options2);	

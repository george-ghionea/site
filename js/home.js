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
   } else if (varAlert === 'askai') {
       textAlert = alert(' ➤ George s AI Concierge says :\n ➠ Oops! George just turned me off \n ➠ Please ask him to turne me on !');
   } else {
       textAlert = alert(' not set !');
   }
   document.getElementById("text").innerHTML = textAlert;
}
function infoZone(myZone) {
   var hrefContact ="https"
	               +"://"
		           +"gghionea"
		           +".my.canva.site"
			       +"/contact";
   if (myZone === 'git') {  
   document.getElementById("alertchoice").innerHTML = "♾️Git Hub"+"<br>"+"➠ Don’t hesitate to drop me a line"+"<br>"+"➠&nbsp;<a href="+hrefContact+">Contact Me</a>";}
   if (myZone === 'gem') {  
   document.getElementById("alertchoice").innerHTML = "♾️Gemini"+"<br>"+"➠ Questions ? Ask Me or Gemini"+"<br>"+"➠&nbsp;<a href="+hrefContact+">Contact Me</a>";} 
   if (myZone === 'ais') { 
   document.getElementById("alertchoice").innerHTML = "♾️AI Studio"+"<br>"+"➠ Feel free to reach out for assistance"+"<br>"+"➠&nbsp;<a href="+hrefContact+">Contact Me</a>";}
   if (myZone === 'ai_') {  
   document.getElementById("alertchoice").innerHTML = "<buttonAI style="+"'background-color: #0066cc'"+" onclick = goToAI('"+"askai"+"')>Concierge</button>"+"<br>";}'"+" onclick = goToAI('"+"askai"+"')>Concierge</button>";}
}
function goToWhere(myURL) {
   var href1 ="https"
	         +"://"
		     +"gghionea"
		     +".my.canva.site"
			 +"/contact";
   var href2 ="https"
	         +"://"
		     +"gghionea"
		     +".my.canva.site"
			 +"/services";
   if (myURL==='con'){window.location.href = href1;}
   if (myURL==='ser'){window.location.href = href2;} 
}
function goToAI(myURL) {
   var href1 ="https"
	         +"://"
		     +"www"
		     +".hitech"
		     +".usa";
   var href2 ="https"
	         +"://"
		     +"ai-presentation-7"
		     +".europe-west2"
		     +".run"
		     +".app";		 
   if (myURL==='askai'){
	   const concierge_active=false;
	   if (concierge_active){window.location.href = href1;}
	   else{textAlert = alert('➤ George s AI Concierge says :\n ➠ Oops! George just turned me off \n ➠ Please ask him to turne me on !');}
   }
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

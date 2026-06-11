/**
06/07/2026 - start
*/
$(document).ready(function() {
	$("#showDialog").click(function() {
       $("#dialogBoxMe").dialog({
        modal: true,
		resizable: false,  
		buttons: {
			Close: {
				class: "btnAiMsg",
				text: "Close",
                click: function() {
                    $(this).dialog("close");
                }
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
     textAlert = alert('Not Set !');
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
       textAlert = alert('Think, Build, Share, Collaborate.\n ➠ Questions ?\n ➠ Contact me !');
   } else if (varAlert === 'askai') {
	   openAIDialog();
   } else {
       textAlert = alert('Not Set !');
   }
   document.getElementById("text").innerHTML = textAlert;
}
function infoZone(myZone) {
   /**
   var hrefContact ="https"
	               +"://"
		           +"gghionea"
		           +".my.canva.site"
			       +"/contact";
   */
   var hrefContact ="mailto:"
	               +"george.ghionea"
		           +"@consultant"
			       +".com";
   switch (myZone) {
     case 'git':
       document.getElementById("alertchoice").innerHTML = "♾️GitHub"+"<br>"+"➠ Don’t hesitate to drop me a line"+"<br>"+"➠ <a href="+hrefContact+">e-mail</a> me (en-usa,fr,ro)";
       break;
     case 'gem':
       document.getElementById("alertchoice").innerHTML = "♾️Gemini"+"<br>"+"➠ Questions ? Ask Me or Gemini"+"<br>"+"➠ <a href="+hrefContact+">e-mail</a> me (en-usa,fr,ro)";
       break;
     case 'ais':
       document.getElementById("alertchoice").innerHTML = "♾️AI Studio"+"<br>"+"➠ Feel free to reach out for assistance"+"<br>"+"➠ <a href="+hrefContact+">e-mail</a> me (en-usa,fr,ro)";
       break;
       case 'ai_':
       document.getElementById("alertchoice").innerHTML = "♾️"+"<buttonAI style="+"'background-color: #0066cc'"+" onclick = myConcierge()>Concierge</button>"+"<br>";
       break;	   
	 /**  
     case 'ai_':
       document.getElementById("alertchoice").innerHTML = "♾️"+"<buttonAI style="+"'background-color: #0066cc'"+" onclick = goToAI('"+"askai"+"')>Concierge</button>"+"<br>";
       break;
	 */  
     default:
	   textAlert = alert('Not Set !');
       break;//exit
   }			   
} 
function goToWhere(myURL) {
   const cva=true;
   var cont_="Contact";
   var serv_="Services";
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
   switch(myURL) {
         case 'con':
	       if (cva) {
	           document.getElementById("alertchoice").innerHTML = "♾️"+cont_;
	           window.location.href = href1;}
	       else{textAlert = alert('Not Set !');}
           break;
         case 'ser':
	       if (cva) {
	          document.getElementById("alertchoice").innerHTML = "♾️"+serv_;
              window.location.href = href2;}
		   else{textAlert = alert('Not Set !');}
           break;
         default:
	       textAlert = alert('Not Set !');
           break;//exit
   }		 
}
function goToAI(myURL) {
   const concierge_active=false;
   var conc_="Concierge";
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
	   /**
       The AI dialog will be initialized
       and displayed on the appropriate
       window
       */
	   if (concierge_active){
	       document.getElementById("alertchoice").innerHTML = "♾️"+conc_;
		   window.location.href = href1;}else{
		   openAIDialog();
	   }
   }else{textAlert = alert('Not Set !');}
}
function openAIDialog(){
  var style_msg = "<p style="+"'color: #0000ff;'"+">";
  var hrefContact ="mailto:"
	              +"george.ghionea"
		          +"@consultant"
			      +".com";
  var txtMsg =style_msg
	         +"Oops ! "
			 +"I've just been turned off. "
		     +"Please ask / " 
			 +"<a href="+hrefContact+">e-mail</a>\n"
			 +"George to turne me on !"
	         +"</p>";
  $("#dialogAI").html(txtMsg).dialog({modal: true,resizable: false}); 
  $("#dialogAI").dialog({
        modal: true,
		resizable: false,   
        buttons: {
			Close: {
				class: "btnAiMsg",
				text: "Close",
                click: function() {
                    $(this).dialog("close");
                }
            }
        }		   
  });	  
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
document.getElementById("timeLocale").innerHTML = " ▪ Europe / Bucharest : "+d1.toLocaleDateString('ro-EU', options1);	
document.getElementById('timeNY').innerHTML = " ▪ America / New York : "+d2.toLocaleDateString('en-US', options2);	
function myConcierge(){
  $(document).ready(function() {
	var serv_="Services";
	var txtMsg ="<p style="+"'color: red;'"+">"+" ➤Enterprise Software Architecture</p>"+"<p style="+"'color: blue;'"+">"+"<p style="+"'color: blue;margin: 25px;'"+">"+"➠Project Management (IT)<br>➠Cybersecurity, Java/J2EE<br>➠Cloud Infrastructure<br>➠AI, LLMs, AWS/GCP<br>➠Microservices, Oracle/SQL</p></p>";  
    $('#openwindow').each(function() {
    $('<div/>', {'class':'btnAiMsg', 'id':'link-'+($(this).index()+1)})
        .html($('<iframe/>', {
            'src' : $(this).attr('href'),
            'style' :'width:100%; height:100%;border:none;'
        })).appendTo('body')//.html(txtMsg)
        .dialog({
			modal: true,
		    resizable: false,
			'title' : 'George\'s AI Concierge',
            'width' : 430,
            'height' :300,
			//'background' : 'red',
			//'background-color': 'green',
            buttons: {
			  Services:{
				class: "btnAiMsg",
				text: "Services Offering",
				click: function() {
				document.getElementById("alertchoice").innerHTML = "♾️"+serv_;	
                window.location.href = 'https://gghionea.my.canva.site/services'; }},	
			  Close: {
				class: "btnAiMsg",
				text: "Close",
                click: function() {
                    $(this).dialog("close");
                }
              }
            }		   
        });
    });
  });
}
function formContact(){
 var hrefContact ="https://docs.google.com/"
	             +"forms/d/e/"
		         +"1FAIpQLSetomZDiDSvDm09SzruXYxl85H8hjQtzbmHAHWmtrdkmpIMgA/"
			     +"viewform";
window.location.href = hrefContact;	
return hrefContact;
}
/**
06/07/2026 - end
*/

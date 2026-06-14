/** 06/07/2026 - start */
$(document).ready(function() {
	$("#showDialog").click(function() {
       $("#dialogBoxMe").dialog({
		position:{my: mypo_,at: atpo_},
        modal: true,
		resizable: false,  
	    'width'  : 450,
        'height' : 390,	 
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
	document.getElementById("alertchoice").innerHTML = "♾️"
	+"About<br>"+"➠ "+cont_	+"<br>➠ "+serv_;
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
     default:
	   textAlert = alert('Not Set !');
       break;//exit
   }			   
} 
function goToWhere(myURL) {
   const cva=true;
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
var cont_= "Contact";
var serv_= "Services Offering";
var conc_= "Concierge";
var mypo_= "left+275 top+5";
var atpo_= "left+275 top+5";
const d_EUR = new Date();
const d_USA = new Date();
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
document.getElementById("timeLocale").innerHTML = " ▪ Europe / Bucharest : "+d_EUR.toLocaleDateString('ro-EU', options1);	
document.getElementById('timeNY').innerHTML = " ▪ America / New York : "+d_USA.toLocaleDateString('en-US', options2);	
function myConcierge(){
  $(document).ready(function() {
	var hrefC ="https://"
	          +"gghionea.my.canva.site"
			  +"/services";
	var txtMsg ="<p style="+"'color: red;'"+">"+" ➤Enterprise Software Architecture</p>"+"<p style="+"'color: blue;'"+">"+"<p style="+"'color: blue;margin: 25px;'"+">"+"➠Project Management (IT)<br>➠Cybersecurity, Java/J2EE<br>➠Cloud Infrastructure<br>➠AI, LLMs, AWS/GCP<br>➠Microservices, Oracle/SQL</p></p>";  
    $('#openwindow').each(function() {
    $('<div/>', {'class':'btnAiMsg', 'id':'link-'+($(this).index()+1)})
        .html($('<iframe/>', {
            'src' : $(this).attr('href'),
            'style' :'width:100%; height:100%;border:none;'
        })).appendTo('body').css('overflow', 'hidden')//.html(txtMsg)
        .dialog({
			position:{my: mypo_,at: atpo_},
			modal: true,
		    resizable: false,
			'title' : 'George\'s AI Concierge',
            'width' : 430,
            'height': 360,
            buttons: {
			  Services:{
				class: "btnAiMsg",
				text: "Services Offering",
				click: function() {
				document.getElementById("alertchoice").innerHTML = "♾️"+serv_;	
                window.location.href = hrefC;}},	
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
		         +"1FAIpQLSeXj8aZC6nrFMCpgMlp9069989BVZK2UMxD_jwc7psGPbI4qQ/"
			     +"viewform";
window.location.href = hrefContact;	
return hrefContact;
}
/** 06/07/2026 - end */

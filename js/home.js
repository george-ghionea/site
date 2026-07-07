/** 06/07/2026 - start */
$(document).ready(function() {
	$("#showDialog").click(function() {
    $("#dialogBoxMe").dialog({
		position:{my: mypo_,at: atpo_},
        modal: true,
		resizable: false,  
	    'width'  : 450,
        'height' : 387,	 
		'show'   : show_,
		'hide'   : hide_,
		buttons: {
			Close: {
				class: btnAiMsg,
				text : btnClose,
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
		myZoom=100;
   } else {
     textAlert = alert('Not Set !');
   }  
}
function zoomInOut(myzoompick) { 
   if (myzoompick === 'zoominn') {
       if (myZoom !== maxZoom){ myZoom = myZoom + stepZoom; }
   } else if (myzoompick === 'zoomout') {
	   if (myZoom !== minZoom){ myZoom = myZoom - stepZoom; }
   } else { textAlert = alert('Not Set !'); }
   document.body.style.zoom = myZoom+"%";
   switch (myZoom) {
     case optimalZoom : textZoom = "(optimal)"; break;
     case minZoom : textZoom = "(min)"; break;
     case maxZoom : textZoom = "(max)"; break;
     default : textZoom = ""; break; //exit
   }	
   document.getElementById("yourzoom").innerHTML = "zoom"+"<br>"+myZoom+"%"+"<br>"+textZoom;
}
function pickColor(mycolorpick) {
   switch(mycolorpick){
     case'color1':myColor=color1;break;
     case'color2':myColor=color2;break;
     default:textAlert=alert('Not Set !');break;//exit
   }			   		
   document.body.style.color= myColor;
   document.getElementById("yourchoice").innerHTML="color"+"<br>"+myColor;
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
   switch (myZone) {
     case 'git':
       document.getElementById("alertchoice").innerHTML = "♾️GitHub"+"<br>"+"➠ Don’t hesitate to drop me a line"+"<br>"+"➠ <a href="+hrefEmailC_+">e-mail</a> me (en-usa,fr,ro)";
       break;
     case 'gem':
       document.getElementById("alertchoice").innerHTML = "♾️Gemini"+"<br>"+"➠ Questions ? Ask Me or Gemini"+"<br>"+"➠ <a href="+hrefEmailC_+">e-mail</a> me (en-usa,fr,ro)";
       break;
     case 'ais':
       document.getElementById("alertchoice").innerHTML = "♾️AI Studio"+"<br>"+"➠ Feel free to reach out for assistance"+"<br>"+"➠ <a href="+hrefEmailC_+">e-mail</a> me (en-usa,fr,ro)";
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
   switch(myURL) {
         case 'con':
	       if (cva) {
	           document.getElementById("alertchoice").innerHTML = "♾️"+cont_;
	           window.location.href = hrefcocva_;}
	       else{textAlert = alert('Not Set !');}
           break;
         case 'ser':
	       if (cva) {
	          document.getElementById("alertchoice").innerHTML = "♾️"+serv_;
              window.location.href = hrefsecva_;}
		   else{textAlert = alert('Not Set !');}
           break;
		 case 'goonav':
           window.location.href = hrefgoonav_;
           break;   
         default:
	       textAlert = alert('Not Set !');
           break;//exit
   }		 
}
function goToAI(myURL) {
   const concierge_active=false;
   if (myURL==='askai'){	  
	   if (concierge_active){
	       document.getElementById("alertchoice").innerHTML = "♾️"+conc_;
		   window.location.href = href1tec_;}else{
		   openAIDialog();
	   }
   }else{textAlert = alert('Not Set !');}
}
function openAIDialog(){
  $("#dialogAI").html(txtMsg).dialog({modal: true,resizable: false}); 
  $("#dialogAI").dialog({
        modal: true,
		resizable: false,   
        buttons: {
			Close: {
				class: btnAiMsg,
				text : btnClose,
                click: function() {
                    $(this).dialog("close");
                }
            }
        }		   
  });	  
}
(function () {
var 
/**year*/
year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
})();//
/**zoom*/
var myZoom=100,textZoom="",stepZoom=10,minZoom=80,maxZoom=130,optimalZoom=100;//
/**color*/
color1="#0000cc",color2="#cc0000";//
var 
/**attr*/
company1_="linkedin",company2_="google",company3_="whatsapp",company4_="x",company5_="github",domain_=".com",gooid_="875066238765.",
cont_= "Contact",serv_= "Services Offering",conc_= "Concierge",
mypo_= "left+275 top+5",atpo_= "left+275 top+5",
show_= "slide",hide_= "slide",box_title_= "George\'s AI Concierge",
btnClose = "Close", btnAiMsg = "btnAiMsg",
/**hrefs*/
hrefgoonav_="https://"+
"ai-presentation-"+
gooid_+
"europe-west2."+
"run.app",
linkedin_ ="https://"+company1_+domain_+"/in/george-ghionea",
google_= "https://"+company2_+domain_,
whatsapp_= "https://"+company3_+domain_,
twitter_= "https://"+company4_+domain_,
github_= "https://"+company5_+domain_,
hrefmycvas_="gghionea.my.canva.site",
hrefEmailC_="mailto:"+"george.ghionea@consultant.com",
hrefmycvas_="gghionea.my.canva.site",
hrefEmailC_="mailto:"+"george.ghionea@consultant.com",
hrefcocva_="https://"+hrefmycvas_+"/contact",
hrefsecva_="https://"+hrefmycvas_+"/services",		
href1tec_="https://"+"gghionea.high.tech.usa",
href2ais_="https://"+"gghionea.netlify.run.app";//
let 
/**options*/
d_USA = new Date(),d_EUR = new Date(),d_ASP = new Date(),
options1 = {timeZone: 'America/New_York', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'},
options2 = {timeZone: 'Europe/Bucharest', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'},
options3 = {timeZone: 'Asia/Tokyo', weekday: 'long', year: 'numeric', month: 'long',        day: 'numeric', hour: '2-digit', minute: '2-digit'};//
document.getElementById('timeNY').innerHTML = " ▪ America / New York<br>"+d_USA.toLocaleDateString('en-US', options1);//
document.getElementById("timeEurope").innerHTML = " ▪ Europe / Bucharest<br>"+d_EUR.toLocaleDateString('ro-EU', options2);//	
document.getElementById('timeTokyo').innerHTML = " ▪ Asia - Pacific / Tokyo<br>"+d_ASP.toLocaleDateString('jst-JP', options3);//jst-JP/en-UK/ja-JP	
/** length test: "Wednesday, September 20, 2026 at 05:49 AM" */
function myConcierge(){
  $(document).ready(function() {
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
			'title' : box_title_,
            'width' : 430,
            'height': 360,
		    'show'  : show_,
		    'hide'  : hide_,
            buttons: {
			  Services:{
				class: btnAiMsg,
				text : serv_,
				click: function() {
				document.getElementById("alertchoice").innerHTML = "♾️"+serv_;	
                window.location.href = hrefsecva_;}},	
			  Close: {
				class: btnAiMsg,
				text:  btnClose,
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
	var
	/**form return*/
	hrefgoogle_="docs.google.com",
    hrefformgo_="1FAIpQLSeXj8aZC6nrFMCpgMlp9069989BVZK2UMxD_jwc7psGPbI4qQ",
    hrefform_="https://"+hrefgoogle_+"/forms/d/e/"+hrefformgo_+"/viewform";	
	window.location.href = hrefform_;
	return;
}
function myDropdown() {
  document.getElementById("alertchoice").innerHTML = "♾️"+"Social Media"+"<br>"+"➠ Need help ?"+"<br>"+"➠ Get in touch by <a href="+hrefEmailC_+">e-mail</a> or SM channels";
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
  document.getElementById("linkedin").setAttribute("href",linkedin_);
  document.getElementById("github").setAttribute("href",github_);
  document.getElementById("google").setAttribute("href",google_);
  document.getElementById("whatsapp").setAttribute("href",whatsapp_);
  document.getElementById("twitter").setAttribute("href",twitter_);
  document.getElementById("email").setAttribute("href",hrefEmailC_);
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
function openNav() {
  document.getElementById("myDropdown").classList.remove('show');
  document.getElementById("alertchoice").innerHTML = "♾️"+"Navigation Opened";
  document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
  document.getElementById("alertchoice").innerHTML = "♾️"+"Navigation Closed";
  document.getElementById("myNav").style.width = "0%";
}
/** 06/07/2026 - end */

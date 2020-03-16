


document.addEventListener("deviceready", onDeviceReady, false);


function onDeviceReady(){

 // cordova.plugins.diagnostic.isGpsLocationEnable(function(enabled){
 //    console.log("GPS location is " + (enabled ? "enabled" : "disabled"));
	// }, function(error){
	//     console.error("The following error occurred: "+error);
	// }); 


  navigator.geolocation.getCurrentPosition(onSuccess, onError,
  											{
  												maximumAge: 30000, 
  												timeout: 5000, 
  												enableHighAccuracy: true
											});

}



function onSuccess (position) {

	document.getElementById("latitude").value = position.coords.latitude;


	document.getElementById("longitude").value = position.coords.longitude;

	document.getElementById("accuracy").value = position.coords.accuracy;

}


function onError(){

	alert("failed");
}



	$(document).ready(function() {
	    
	    $("#save_signin").on("click", function(e){

		e.preventDefault();

	   // var message_alert =  document.getElementById("message_alert"); 

   	   var email = $("#signin_email").val();
	   var password = $("#signin_password").val();

   	   var datastring = "email = "+email + "password = "+password;

   	      	$.ajax({

		  	       method: 'POST',
		  	        url: 'http://192.168.1.6/phonegap/signin-validation.php',

		  	        data: { 
							email: email, 
							password: password 
					 }, 
					 crossDomain: true,
		  	        dataType:'json',

		  	       success: function(){
		  	       	alert("great");
                    // window.location.href = 'profile.html';		           },
					},
		           error: function(jqXHR){
		           	  // $("#message_alert").html(result);
		           	   	alert("bad can't = "+ jqXHR.message);

		           }
		    });

	});

	});

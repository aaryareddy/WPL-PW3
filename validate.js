$(document).ready(function() {
	$("#username").after("<span id= 's1' class='info'> . </span>");
	$("#password").after("<span id='s2' class='info'> .  </span>");
	$("#email").after("<span id='s3'  class='info'> .</span>");

		$("span").hide();

	$("#username").focus(function(){

		$("#s1").removeClass("ok");
		$("#s1").removeClass("error");
		$("#s1").addClass("info");
	    $("#s1").text("infoMessage");
		$("#s1").show();
     });

 	$("#password").focus(function(){
		
		$("#s2").removeClass("ok");
		$("#s2").removeClass("error");
		$("#s2").addClass("info");
	    $("#s2").text("infoMessage");
		$("#s2").show();
	 });


 	$("#email").focus(function(){
	
		$("#s3").removeClass("ok");
		$("#s3").removeClass("error");
		$("#s3").addClass("info");
	    $("#s3").text("infoMessage");
		$("#s3").show();
	});

	 
      $("#username").blur(function() {
		 
		var username = $('#username').val();
		 var username_regex = /[a-zA-Z0-9]+$/;
		 
		 if(username.length==0)
		 {
			
			 $("#s1").hide();
		 }

	 	else if(username.match(username_regex))
         {
			$("#s1").removeClass("info");
			$("#s1").removeClass("error");
			 $("#s1").addClass("ok");
			 $("#s1").text("OK");
			 $("#s1").show();
		 }
		 
	 	else{
			$("#s1").removeClass("ok");
			$("#s1").removeClass("info");
			$("#s1").addClass("error");
			$("#s1").text("Error");
			$("#s1").show();
	 	}
	 
       });


      $("#password").blur(function(){

	 	if($("#password").val().length>5)
		{
	 		
			$("#s2").removeClass("info");
			$("#s2").removeClass("error");
			 $("#s2").addClass("ok");
			 $("#s2").text("OK");
			$("#s2").show();
	 	}
	
		 else if($("#password").val().length==0)
		 {
			$("#s2").hide();
		 }

	 	else{
			$("#s2").removeClass("ok");
			$("#s2").removeClass("info");
			$("#s2").addClass("error");
			$("#s2").text("Error");
			$("#s2").show();
	 	}
	 
	  });


	   $("#email").blur(function(){

	 	var email = $('#email').val();

	 	if (email.indexOf("@")>0){
			$("#s3").removeClass("info");
			$("#s3").removeClass("error");
			 $("#s3").addClass("ok");
			 $("#s3").text("Ok");
			$("#s3").show();
		}

		else if(email.length==0)
		{
			$("#s3").hide();
		}

		    else{
				$("#s3").removeClass("ok");
				$("#s3").removeClass("info");
				$("#s3").addClass("error");
				$("#s3").text("Error");
				$("#s3").show();
		}
		
	 	});


});

	var i = 0;
	
	setInterval(function($){ 
	    var a =["img/bg_main.jpg", "img/bg_main1.jpg" ,"img/bg_main2.jpg","img/bg_main3.jpg","img/bg_main4.jpg"];
	    i = (i > (a.length - 1))?0:i;
	    //with jquery
	   
	    $(".section__main_1").css("background-image", "url('" + a[i++] + "')");
	  
	   //with pure javascript
	   // document.body.style.backgroundImage = "url('" + a[i++] + "')";
	}, 5000,$);
$(document).ready(function(){
          $("ul.list-unstyled").mouseleave(function(){
          // $(this).closest("ul.list-unstyled").children('li:not(.init)').toggle();
         })
         $("ul.list-unstyled").on("click", ".init", function() {
             $(this).closest("ul.list-unstyled").children('li:not(.init)').toggle();
             $(".main__forbid_category span").removeClass('rotateup');
             $(".main__forbid_category span").toggleClass('rotate');
                
         });
         
         
         var allOptions = $("ul").children('li:not(.init)');
         $("ul.list-unstyled").on("click", "li:not(.init)", function() {
             allOptions.removeClass('selected');
             allOptions.removeAttr('style');
             $(this).addClass('selected');
             $("ul.list-unstyled").children('.init').html($(this).html());
             ///allOptions.toggle();
              allOptions.attr('style','display:none!important');
               $(".main__forbid_category span").removeClass('rotate');
               $(".main__forbid_category span").addClass('rotateup');
         });
		 
		 
});
         
         //-------------------------------------
         
         var d = new Date();
         function day_of_the_month(d)
         { 
           return (d.getDate() < 10 ? '0' : '') + d.getDate();
         }
         const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
           "Июля", "Авгуса", "Сентября", "Октября", "Ноября", "Декабря"
         ];
         
         var strDate = day_of_the_month(d) + " " + monthNames[d.getMonth()] + " " + d.getFullYear();
         
  
         $(document).ready(function(){
             // show reviews status bar
         
            $("#section__reviews-show-categories-personal").progressbar({
              max: 10,
              value:9.1
            });
            
            $("#section__reviews-show-categories-comfort").progressbar({
              max: 10,
              value:9.2
            });
         
             $("#section__reviews-show-categories-freewifi").progressbar({
              max: 10,
              value:8.3
            });
         
             $("#section__reviews-show-categories-amenities").progressbar({
              max: 10,
              value:9.0
            });
         
             $("#section__reviews-show-categories-pricequality").progressbar({
              max: 10,
              value:8.9
            });
         
              $("#section__reviews-show-categories-clean").progressbar({
              max: 10,
              value:9.4
            });
         
             $("#section__reviews-show-categories-favor").progressbar({
              max: 10,
              value:9.7
            });
         
            $("#forbid_arrive").val(strDate);
            $("#forbid_departure").val(strDate);
			   $("#forbid_arrive-popup").val(strDate);
            $("#forbid_departure-popup").val(strDate);
			$("#forbid_arrive-hall").val(strDate);
            $(".main__forbid_arrive span").click(function(){
            $(".main__forbid_arrive span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
               $("#forbid_arrive").trigger("focus");   
         });
         $("#forbid_arrive").focus(function(){
           $(".main__forbid_arrive span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
         });
         
         $("#forbid_arrive").focusout(function(){
           $(".main__forbid_arrive span").css({'-webkit-transform' : 'rotate(0deg)',
                             '-moz-transform' : 'rotate(0deg)',
                             '-ms-transform' : 'rotate(0deg)',
                             'transform' : 'rotate(0deg)'});
         });
         
            $(".main__forbid_departure span").click(function(){
               $(".main__forbid_departure span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
               $("#forbid_departure").trigger("focus");   
         });
         $("#forbid_departure").focus(function(){
          $(".main__forbid_departure span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
         });
         
         $("#forbid_departure").focusout(function(){
           $(".main__forbid_departure span").css({'-webkit-transform' : 'rotate(0deg)',
                             '-moz-transform' : 'rotate(0deg)',
                             '-ms-transform' : 'rotate(0deg)',
                             'transform' : 'rotate(0deg)'});
         });
         
              $(".main__forbid_category span").click(function(){
               $(".main__forbid_category span").toggleClass('rotate');
               $(".main__forbid_category span").removeClass('rotateup');
               var allOptions = $("ul.list-unstyled").children('li:not(.init)');
               allOptions.toggle();
              
           });
         
         $("#forbid_category").focus(function(){
          $(".main__forbid_category span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
         });
         
         $("#forbid_category").focusout(function(){
           $(".main__forbid_category span").css({'-webkit-transform' : 'rotate(0deg)',
                             '-moz-transform' : 'rotate(0deg)',
                             '-ms-transform' : 'rotate(0deg)',
                             'transform' : 'rotate(0deg)'});
         });
         
         
         })
   
     
         //style all the popup dialogue 
         $( function() {
           $(".dialog_help").dialog({
         autoOpen: false,
         width:"100%",
         position: {
         my: "left top",
         at: "left top",
         of: window,
         collision: "none"
         },
         modal: true
           });
         });
         
         //opens the appropriate dialog
         $( function() {
           $(".ui-dialog-titlebar-close").click(function(){
           $(document.body).css("overflow","unset");
           });
           $(".opener").click(function () {
             //takes the ID of appropriate dialogue
             var id = $(this).data('id');
              //open dialogue
             $(id).dialog("open");
             $(document.body).css("overflow","hidden");
           });
         });
     
         $(document).ready(function(){
         $('.icon-menu').on('click',function(e){
            if($(".header__menu.menu").css("display") == "block"){
          $('.header__menu.menu').show().css('display','none').animate({bottom:'100%'},300);
           $('.menu').css('padding','none');
           e.preventDefault();
           return;
         };
         
         if($(".header__menu.menu").css("display") == "none"){
         
           $('.header__menu.menu').show().css('display','block').animate({bottom:0},300);
           $('.menu').css('padding','block');
           e.preventDefault(); 
           }
         
         });
         
          var main = new Splide('#main-slider', {
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : true,
         } );
		 
	
         
         var thumbnails = new Splide('#thumbnail-slider', {
          fixedWidth  : 100,
          fixedHeight : 60,
          gap         : 10,
          rewind      : true,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          arrows    : false,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
         } );
         
         
         
         var main1 = new Splide('#main-slider1', {
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : true,
         } );
         
         var thumbnails1 = new Splide('#thumbnail-slider1', {
          fixedWidth  : 100,
          fixedHeight : 60,
          gap         : 10,
          rewind      : true,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          arrows    : false,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
         } );
         
         var main2 = new Splide('#main-slider2', {
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : true,
         } );
         
         var thumbnails2 = new Splide('#thumbnail-slider2', {
          fixedWidth  : 100,
          fixedHeight : 60,
          gap         : 10,
          rewind      : true,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          arrows    : false,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
         } );
         
         var main3 = new Splide('#main-slider3', {
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : true,
         } );
         
         var thumbnails3 = new Splide('#thumbnail-slider3', {
          fixedWidth  : 100,
          fixedHeight : 60,
          gap         : 10,
          rewind      : true,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          arrows    : false,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
         } );
         
          var main4 = new Splide('#main-slider4', {
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : true,
         } );
         
         var thumbnails4 = new Splide('#thumbnail-slider4', {
          fixedWidth  : 100,
          fixedHeight : 60,
          gap         : 10,
          rewind      : true,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          arrows    : false,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
         } );
         
         var main5 = new Splide('#main-slider5', {
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : true,
         } );
         
         var thumbnails5 = new Splide('#thumbnail-slider5', {
          fixedWidth  : 100,
          fixedHeight : 60,
          gap         : 10,
          rewind      : true,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          arrows    : false,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
         } );
         
          var main6 = new Splide('#main-slider6', {
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : true,
         } );
         
         var thumbnails6 = new Splide('#thumbnail-slider6', {
          fixedWidth  : 100,
          fixedHeight : 60,
          gap         : 10,
          rewind      : true,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          arrows    : false,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
         } );
         
          var main7 = new Splide('#main-slider7', {
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : true,
         } );
         
         var thumbnails7 = new Splide('#thumbnail-slider7', {
          fixedWidth  : 100,
          fixedHeight : 60,
          gap         : 10,
          rewind      : true,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          arrows    : false,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
         } );
         
          var main8 = new Splide('#main-slider8', {
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : true,
         } );
         
         var thumbnails8 = new Splide('#thumbnail-slider8', {
          fixedWidth  : 100,
          fixedHeight : 60,
          gap         : 10,
          rewind      : true,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          arrows    : false,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
         } );
         
           var main9 = new Splide('#main-slider9', {
          type      : 'fade',
          rewind    : true,
          pagination: false,
          arrows    : true,
         } );
         
         var thumbnails9 = new Splide('#thumbnail-slider9', {
          fixedWidth  : 100,
          fixedHeight : 60,
          gap         : 10,
          rewind      : true,
          pagination  : false,
          cover       : true,
          isNavigation: true,
          arrows    : false,
          breakpoints : {
            600: {
              fixedWidth : 60,
              fixedHeight: 44,
            },
          },
         } );
         
         
         main.sync( thumbnails );
         main.mount();
         thumbnails.mount();
         
         main1.sync( thumbnails1 );
         main1.mount();
         thumbnails1.mount();
         
         main2.sync( thumbnails2 );
         main2.mount();
         thumbnails2.mount();
         
         main3.sync( thumbnails3 );
         main3.mount();
         thumbnails3.mount();
         
         main4.sync( thumbnails4 );
         main4.mount();
         thumbnails4.mount();
         
         main5.sync( thumbnails5 );
         main5.mount();
         thumbnails5.mount();
         
         main6.sync( thumbnails6 );
         main6.mount();
         thumbnails6.mount();
         
         main7.sync( thumbnails7 );
         main7.mount();
         thumbnails7.mount();
         
         
         main8.sync( thumbnails8 );
         main8.mount();
         thumbnails8.mount();
         
         main9.sync( thumbnails9);
         main9.mount();
         thumbnails9.mount();
         
         });

$(document).ready(function(){
	
	    $("#forbid_arrive-hall").datepicker({
          beforeShow: function(input, inst) {
             inst.dpDiv
             .addClass('forbid_arrive-hall')
           },

               changeMonth: true,
               dateFormat: 'dd MM yy',
               monthNames: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
               "Июля", "Авгуса", "Сентября", "Октября", "Ноября", "Декабря"
         ]
           });
	
	
  $(".section__rooms-btn-forbid").click(function(){
	    $(".forbid_arrive-popup").addClass('forbid__');
	    $("#forbid_arrive-popup").blur();
	    
  });
  
  
  
   $(".section__hall-forbid").click(function(){
	    $(".forbid_arrive-hall").addClass('forbid__');
	    $("#forbid_arrive-hall").blur();
	    
  });
  
  
  
  $("#forbid_arrive-popup").click(function(){
	   $(".forbid_arrive-popup").removeClass('forbid__');
  });
  
    $("#forbid_arrive-hall").click(function(){
	   $(".forbid_arrive-hall").removeClass('forbid__');
  });

   $("#forbid_departure-popup").click(function(){
	   $(".forbid_departure-popup").removeClass('forbid__');
  });
  
  
  $("#forbid_arrive-popup").datepicker({
             beforeShow: function(input, inst) {
             inst.dpDiv
             .addClass('forbid_arrive-popup')
           },

               changeMonth: true,
               dateFormat: 'dd MM yy',
               monthNames: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
               "Июля", "Авгуса", "Сентября", "Октября", "Ноября", "Декабря"
         ]
           }); 
  
    $("#forbid_departure-popup").datepicker({
        beforeShow: function(input, inst) {
             inst.dpDiv
             .addClass('forbid_departure-popup');
           },

               changeMonth: true,
               dateFormat: 'dd MM yy',
               monthNames: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
               "Июля", "Авгуса", "Сентября", "Октября", "Ноября", "Декабря"
         ]
           }); 
  
  
		   
$('.section__news-more a').on('click', function(e){
    
 
    if( ($(this).parent().prev().height()) > 150 ){
         $(this).parent().prev().css('height','150px');
         $(this).parent().prev().css('overflow','hidden');
         $(this).text('Подробнее');
         e.preventDefault();
     } else 
     if(($(this).parent().prev().height()) == 150 ){
         $(this).parent().prev().css('height','100%');
         $(this).parent().prev().css('overflow','hidden');
         $(this).text('Свернуть');
         e.preventDefault();
     }
});

        
});


  
           $( function() {
           $("#forbid_arrive").datepicker({
           beforeShow: function(input, inst) {
           inst.dpDiv
           .removeClass('custom1 custom2')
           .addClass($(input).data('dp-class'));
      },

               changeMonth: true,
               dateFormat: 'dd MM yy',
               monthNames: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
               "Июля", "Авгуса", "Сентября", "Октября", "Ноября", "Декабря"
         ]
           });
         });
		 

         
           $( function() {
             $("#forbid_departure").datepicker({
               beforeShow:function(input, inst) {
               inst.dpDiv
               .removeClass('custom1 custom2')
               .addClass($(input).data('dp-class'));
           },
               changeMonth: true,
               dateFormat: 'dd MM yy',
               monthNames: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
               "Июля", "Авгуса", "Сентября", "Октября", "Ноября", "Декабря"
         ]
           });
         });
		 
		 
		  $( function() {
             $("#forbid_departure1").datepicker({
               beforeShow:function(input, inst) {
               inst.dpDiv
               .removeClass('custom1 custom2')
               .addClass($(input).data('dp-class'));
           },
               changeMonth: true,
               dateFormat: 'dd MM yy',
               monthNames: ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
               "Июля", "Авгуса", "Сентября", "Октября", "Ноября", "Декабря"
         ]
           });
         });

            $("#forbid_arrive").val(strDate);
            $("#forbid_departure").val(strDate);
			$("#forbid_arrive1").val(strDate);
            $("#forbid_departure1").val(strDate);
            $(".main__forbid_arrive span").click(function(){
               $(".main__forbid_arrive span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
               $("#forbid_arrive").trigger("focus");   
         });
		 
		 
		 $(document).ready(function(){
		 $("span.forbid_arrive-arrow").click(function(){
			
               $("span.forbid_arrive-arrow").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
              $("#forbid_arrive-popup").trigger("click"); 
$("#forbid_arrive-popup").trigger("focus");  			  
         });
		 
		 
		 $("span.forbid_arrive-hall-arrow").click(function(){
			
               $("span.forbid_arrive-hall-arrow").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
              $("#forbid_arrive-hall").trigger("click"); 
$("#forbid_arrive-hall").trigger("focus");  			  
         });
		 
		 
		  $("span.forbid_departure-arrow").click(function(){
			  $("span.forbid_departure-arrow").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
               $("#forbid_departure-popup").trigger("click"); 
			   $("#forbid_departure-popup").trigger("focus"); 
			   $(".forbid_departure-popup").removeClass('forbid__'); 
         });
		 
		 $("#forbid_arrive").focus(function(){
           $(".main__forbid_arrive span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
         });
		  $("#forbid_arrive-hall").focus(function(){
           $(".forbid_arrive-hall-arrow").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
         });
		 
		 $("#forbid_arrive-hall").focusout(function(){
           $(".forbid_arrive-hall-arrow").css({'-webkit-transform' : 'rotate(0deg)',
                             '-moz-transform' : 'rotate(0deg)',
                             '-ms-transform' : 'rotate(0deg)',
                             'transform' : 'rotate(0deg)'});
         });
         
         $("#forbid_arrive").focusout(function(){
           $(".main__forbid_arrive span").css({'-webkit-transform' : 'rotate(0deg)',
                             '-moz-transform' : 'rotate(0deg)',
                             '-ms-transform' : 'rotate(0deg)',
                             'transform' : 'rotate(0deg)'});
         });
		  $("#forbid_arrive-popup").focus(function(){
           $(".main__forbid_arrive-popup span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
							  
         });
         
         $("#forbid_arrive-popup").focusout(function(){
           $(".main__forbid_arrive-popup span").css({'-webkit-transform' : 'rotate(0deg)',
                             '-moz-transform' : 'rotate(0deg)',
                             '-ms-transform' : 'rotate(0deg)',
                             'transform' : 'rotate(0deg)'});
         });
         
            $(".main__forbid_departure span").click(function(){
               $(".main__forbid_departure-popup span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
               $("#forbid_departure").trigger("focus");   
         });
         $("#forbid_departure").focus(function(){
          $(".main__forbid_departure span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
							  $("#forbid_departure-popup").trigger("click"); 
			   $("#forbid_departure-popup").trigger("focus");   
         });
         
         $("#forbid_departure").focusout(function(){
           $(".main__forbid_departure span").css({'-webkit-transform' : 'rotate(0deg)',
                             '-moz-transform' : 'rotate(0deg)',
                             '-ms-transform' : 'rotate(0deg)',
                             'transform' : 'rotate(0deg)'});
         });
		 $("#forbid_departure-popup").focus(function(){
          $(".main__forbid_departure-popup span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
         });
         
         $("#forbid_departure-popup").focusout(function(){
           $(".main__forbid_departure-popup span").css({'-webkit-transform' : 'rotate(0deg)',
                             '-moz-transform' : 'rotate(0deg)',
                             '-ms-transform' : 'rotate(0deg)',
                             'transform' : 'rotate(0deg)'});
         });
         
              $(".main__forbid_category span").click(function(){
               $(".main__forbid_category span").toggleClass('rotate');
               $(".main__forbid_category span").removeClass('rotateup');
               var allOptions = $("ul.list-unstyled").children('li:not(.init)');
               allOptions.toggle();
              
           });
         
         $("#forbid_category").focus(function(){
          $(".main__forbid_category span").css({'-webkit-transform' : 'rotate(180deg)',
                             '-moz-transform' : 'rotate(180deg)',
                             '-ms-transform' : 'rotate(180deg)',
                             'transform' : 'rotate(180deg)'});
         });
         
         $("#forbid_category").focusout(function(){
           $(".main__forbid_category span").css({'-webkit-transform' : 'rotate(0deg)',
                             '-moz-transform' : 'rotate(0deg)',
                             '-ms-transform' : 'rotate(0deg)',
                             'transform' : 'rotate(0deg)'});
         });
		 
		 
		 });
		 
         
		 
		 $(document).ready(function(){
			 ;
  $('#forbid_arrive').click(function(){
	   $(".ui-datepicker-next.ui-corner-all").removeAttr('title');
   $(".ui-datepicker-prev.ui-corner-all").removeAttr('title');
  $(".ui-datepicker-next.ui-corner-all").removeAttr('title');
  $('.section__forbid-form-left ul.list-unstyled li:not(.init)').attr('style','display:none');
  });
  
  $('#forbid_arrive-popup').click(function(){
	   $(".ui-datepicker-next.ui-corner-all").removeAttr('title');
   $(".ui-datepicker-prev.ui-corner-all").removeAttr('title');
  $(".ui-datepicker-next.ui-corner-all").removeAttr('title');
  $('.section__forbid-form-left ul.list-unstyled li:not(.init)').attr('style','display:none');
  });
  
  
  $('#forbid_departure-popup').click(function(){
	   $(".ui-datepicker-next.ui-corner-all").removeAttr('title');
   $(".ui-datepicker-prev.ui-corner-all").removeAttr('title');
  $(".ui-datepicker-next.ui-corner-all").removeAttr('title');
  $('.section__forbid-form-left ul.list-unstyled li:not(.init)').attr('style','display:none');
  });

  $('.main__forbid_arrive>span').click(function(){
  $('.section__forbid-form-left ul.list-unstyled li:not(.init)').attr('style','display:none');
  });
  
  
  $('.main__forbid_arrive-popup>span').click(function(){
  $('.section__forbid-form-left ul.list-unstyled li:not(.init)').attr('style','display:none');
  });
  
  $('.main__forbid_departure-popup>span').click(function(){
  $('.section__forbid-form-left ul.list-unstyled li:not(.init)').attr('style','display:none');
  });

  $('#forbid_departure').click(function(){
   $(".ui-datepicker-next.ui-corner-all").removeAttr('title');
   $(".ui-datepicker-prev.ui-corner-all").removeAttr('title');
  $('.section__forbid-form-left ul.list-unstyled li:not(.init)').attr('style','display:none');
  });

  $('.main__forbid_departure>span').click(function(){
  $('.section__forbid-form-left ul.list-unstyled li:not(.init)').attr('style','display:none');
  });


});
		 

$(function(){
        $("#section__forbid-phone").mask("+9(999) 999-99-99");
		   $("#section__forbid-phone-hall").mask("+9(999) 999-99-99");
   
	  });

    


    
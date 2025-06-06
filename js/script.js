(function($) {
	
   //"use strict";	
	
	var mainwindow = $(window);
	
    // rev-slider
    if (jQuery("#slider1").length) {
        jQuery("#slider1").revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            delay:5000,
            navigation: {
                  keyboardNavigation:"on", 
                  keyboard_direction:"horizontal",
                  mouseScrollNavigation:"off",   
                  onHoverStop:"on",
                  arrows: {
						style: 'zeus',
						tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                     enable:true,
                     rtl:false,
                     hide_onmobile:false,
                     hide_onleave:false,
                     hide_delay:200,
                     hide_delay_mobile:1200,
                     hide_under:0,
                     hide_over:9999,
                     tmp: ''
                  }
                },
			 parallax: {
						type: "scroll",
						origo: "slidercenter",
						speed: 1000,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
						type: "scroll",
					},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1170,1024,778,480],
			gridheight:[670,768,960,720]		

        });
    };
	
	    // rev-slider
    if (jQuery("#slider2").length) {
        jQuery("#slider2").revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            delay:5000,
            navigation: {
                  keyboardNavigation:"on", 
                  keyboard_direction:"horizontal",
                  mouseScrollNavigation:"off",   
                  onHoverStop:"on",
                  arrows: {
						style: 'zeus',
						tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                     enable:true,
                     rtl:false,
                     hide_onmobile:false,
                     hide_onleave:false,
                     hide_delay:200,
                     hide_delay_mobile:1200,
                     hide_under:0,
                     hide_over:9999,
                     tmp: ''
                  }
                },
			 parallax: {
						type: "scroll",
						origo: "slidercenter",
						speed: 1000,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
						type: "scroll",
					},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1170,1024,778,480],
			gridheight:[670,768,960,720]
        });
    };

	// rev-slider
    if (jQuery("#slider3").length) {
        jQuery("#slider3").revolution({
            sliderType:"standard",
            sliderLayout:"fullwidth",
            delay:5000,
            navigation: {
                  keyboardNavigation:"on", 
                  keyboard_direction:"horizontal",
                  mouseScrollNavigation:"off",   
                  onHoverStop:"on",
                  arrows: {
						style: 'zeus',
						tmp: '<div class="tp-title-wrap"><div class="tp-arr-imgholder"></div></div>',
                     enable:true,
                     rtl:false,
                     hide_onmobile:false,
                     hide_onleave:false,
                     hide_delay:200,
                     hide_delay_mobile:1200,
                     hide_under:0,
                     hide_over:9999,
                     tmp: ''
                  }
                },
			 parallax: {
						type: "scroll",
						origo: "slidercenter",
						speed: 1000,
						levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 100, 55],
						type: "scroll",
					},
			responsiveLevels:[1240,1024,778,480],
			visibilityLevels:[1240,1024,778,480],
			gridwidth:[1170,1024,778,480],
			gridheight:[800,768,960,720]
        });
    };

	//logo scroll

	function showLogoOnScroll() {
		if ($(window).scrollTop() > 0) {
			$('.logo-on-scroll').fadeIn(300);
		} else {
			$('.logo-on-scroll').fadeOut(100);
		}
	}

	$(document).ready(function(){
    var headerHeight = $('.primary-nav').outerHeight(); // Adjust with your header class
    $('a[href^="#"]').on('click', function(e){
        e.preventDefault();
        var target = $(this.getAttribute('href'));
        if(target.length){
            $('html, body').animate({
                scrollTop: target.offset().top - headerHeight
            }, 600);
        }
    });
});
	$(window).on('scroll', showLogoOnScroll);
	
	//Hide Loading Box (Preloader)
	function stylePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}		
    }	
			
	
	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {
			
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');
			
			if($(this).hasClass('active')!==true){
			$('.accordion .acc-btn').removeClass('active');
			
			}
			
			if ($(this).next('.acc-content').is(':visible')){
				return false;
			}else{
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).children('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);	
			}
		});	
	}
	

	  if ( $('#accordion > .panel').length) {
		$('#accordion > .panel').on('show.bs.collapse', function (e) {
			  var heading = $(this).find('.panel-heading');
			  heading.addClass("active-panel");
			  
	});
	$('#accordion > .panel').on('hidden.bs.collapse', function (e) {
        var heading = $(this).find('.panel-heading');
          heading.removeClass("active-panel");
    });
	}
	
	
  
	
	
	//service-list----
	if ($('#testimonial-slider1').length) {
		$('#testimonial-slider1').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}

    //letest-project----
	if ($('.carousel-project').length) {
		$('.carousel-project').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}	

   //partener--
	if ($('.list-item').length) {
		$('.list-item').owlCarousel({
			loop:true,
			margin:0,
			nav:false,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				800:{
					items:4
				},
				1024:{
					items:5
				},
				1200:{
					items:5
				}
			}
		});    		
	}		
//feature products----	
	if ($('.feature-product-carousel .products').length) {
		$('.feature-product-carousel .products').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:2
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}
	
//testimonial2----
	if ($('.test-list-carousel').length) {
		$('.test-list-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});    		
	}	
	
	//testimonial2----
	if ($('#testimonial-slider2').length) {
		$('#testimonial-slider2').owlCarousel({
			loop:true,
			margin:30,
			nav:false,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:true,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:2
				},
				1200:{
					items:2
				}
			}
		});    		
	}	

//releted project----
	if ($('.related-project').length) {
		$('.related-project').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 4000,
			items:1,
			dots:false,
			navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				800:{
					items:3
				},
				1024:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});    		
	}	
	
		// FAQs
	if($('.fp-faq').length){			
			$( '.fp-faq' ).on( 'click', 'h2', function() {
				var $faq = $( this ).closest( '.fp-faq' );

				$faq.find( '.toggle-content' ).slideToggle( 500, function() {
					$faq.toggleClass( 'active' );
				} );
			} );
	}
	if($('.fp-accordion').length){		
		
		$( '.fp-accordion' ).on( 'click', 'h2, .icons', function() {
			var $faq = $( this ).closest( '.fp-accordion' );

			$faq.find( '.toggle-content' ).slideToggle( 500, function() {
				$faq.toggleClass( 'active' );
			} );
		} );
		}

	
   	
	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}

	//Update header style + Scroll to Top
	function scrolltotop() {
		if($('.scroll-to-top').length){
			var windowpos = mainwindow.scrollTop();
			if (windowpos >= 0) {
				$('.scroll-to-top').fadeIn(100);
			} else {
				$('.scroll-to-top').fadeOut(300);
			}
		}
	}
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);
	
		});
	}
	
	// slider-range
	if($('#slider-range').length){
	  $( function() {
		$( "#slider-range" ).slider({
		  range: true,
		  min: 0,
		  max: 500,
		  values: [ 75, 300 ],
		  slide: function( event, ui ) {
			$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
		  }
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
		  " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	  });	
	 }

 
    //Input Quantity Up & Down
    function quantity_changer() {
		$('#quantity-holder').on('click', '.quantity-plus', function () {
			var $holder = $(this).parents('.quantity-holder');
			var $target = $holder.find('input.quantity-input');
			var $quantity = parseInt($target.val(),10);
			if ($.isNumeric($quantity) && $quantity > 0) {
				$quantity = $quantity + 1;
				$target.val($quantity);
			} else {
				$target.val($quantity);
			}
		}).on('click', '.quantity-minus', function () {
			var $holder = $(this).parents('.quantity-holder');
			var $target = $holder.find('input.quantity-input');
			var $quantity = parseInt($target.val(),10);
			if ($.isNumeric($quantity) && $quantity >= 2) {
				$quantity = $quantity - 1;
				$target.val($quantity);
			} else {
				$target.val(1);
			}
		});

	}


	
	//counter number changer
	function counter_number() {
		var timer = $('.timer');
		if(timer.length) {
			timer.appear(function () {
				timer.countTo();
			})
		}
	}
	
			
	
	  
/* ==========================================================================
   When document is ready, do
   ========================================================================== */
   
  $(document).on('ready', function() {
    counter_number();
    quantity_changer();
  });

  
  
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
  
  mainwindow.on('scroll', function() {
	scrolltotop();
    
  });
  
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
  
  mainwindow.on('load', function() {
    stylePreloader();
  });
  

/* ==========================================================================
   When Window is resizing, do
   ========================================================================== */
  
  mainwindow.on('resize', function() {
  });	  
	  
	  
	  	

})(window.jQuery);
$(document).ready(function() {
    //start here
	$(".search-menu img").click(function() {
	   $(".search-box").toggle();
	   $(".search-box input[type='text']").focus();
	 });
	
	
	//Auto Main Banner Image Height
	function main_banner_height(selector){
		var background = $(selector).css('background-image');
		//var
		// If the background image is anything other than "none"
			// Find and replace "url()" to get the pure image URL
			background = background.replace('url("', '').replace('")', '');

			// Create new Image instance and set path to our background
			var bg = new Image();
			bg.src = background;
			// We now have serveral vars availible to pass through to the plugin
			// self = the element
			// background = the url
			// bg.width = image width
			// bg.height = image height


			var orginal_img_width  = bg.width;
			var orginal_img_height = bg.height;
			var req_height_percentage = (orginal_img_height / orginal_img_width ) * 100;

			var wind_widht = $( window ).width();
			var calculate_height = (wind_widht / 100) * req_height_percentage+1;
			//console.log('background:' + background);
			
			//console.log("orginal_img_width :"+bg.width+" ,orginal_img_height:"+bg.height, "req_height_percentage:"+req_height_percentage,"wind_widht:"+wind_widht,"calculate_height:"+calculate_height);

			$(selector).height(calculate_height);

	return calculate_height;
	}
	

	//Banner Height On Load

	$( window ).on( "load", function() {
			console.log( "window loaded" );
		
			if($('header').length){
			   main_banner_height('header');
			}
			if($('.hybrid-model').length){
			   main_banner_height('.hybrid-model');
			}
		
	
	});
			
	//Banner Height On Ressise window
        $( window ).resize(function() {
		   //Banner Height On Load
			
			if($('header').length){
			   main_banner_height('header');
			}
			if($('.hybrid-model').length){
			   main_banner_height('.hybrid-model');
			}
		});


});

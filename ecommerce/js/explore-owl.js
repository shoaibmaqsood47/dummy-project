
	jQuery(document).ready(function() {
		var owl = jQuery("#owl-demo");
		owl.owlCarousel({
			autoPlay: 3000,
			items: 4,
			itemsDesktop: false,
			itemsDesktopSmall: false,
			itemsMobile: false,
			afterMove: function() {
				if (window.outerWidth >= 784) {
					if (this.currentItem === 0 || this.currentItem === this.maximumItem) {
						return;
					} else {
						this.prevItem < this.currentItem ? owl.trigger('owl.next') : owl.trigger('owl.prev');
					}
				}
			}
		});

		jQuery(".right").click(function(e) {
			e.preventDefault();
			owl.trigger('owl.next');
		});
		jQuery(".left").click(function(e) {
			e.preventDefault();
			owl.trigger('owl.prev');
		});
		jQuery(document).keydown(function(e) {
			if (e.keyCode == 37) {
				owl.trigger('owl.prev');
				return false;
			}
		});
		jQuery(document).keydown(function(e) {
			if (e.keyCode == 39) {
				owl.trigger('owl.next');
				return false;
			}
		});
	});
	 
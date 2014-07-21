$( document ).ready(function() {

	/* Sidebar height set */
	$('.sidebar').css('min-height',$(document).height());

	/* Secondary contact links */
	var scontacts = $('#contact-list-secondary');
	var contact_list = $('#contact-list');
  var singflying = $('.singflying')
	
	scontacts.hide();
	
	contact_list.mouseenter(function(){ scontacts.fadeIn('slow'); singflying.delay(200).fadeOut('slow');});
	
	contact_list.mouseleave(function(){ scontacts.fadeOut('slow'); singflying.delay(200).fadeIn('slow');});

});

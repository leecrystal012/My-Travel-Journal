$(document).ready(function() {

	$('#square-container1').hover(function() { 
    $('#square-overlay1').css("opacity", .7);
    $('#text1').css("opacity", .7);
}, function() { 
    $('#square-overlay1').css("opacity", 0);
    $('#text1').css("opacity", 0);
});

	$('#square-container2').hover(function() { 
    $('#square-overlay2').fadeTo('fast', .7);
    $('#text2').fadeTo('fast', .7)
}, function() { 
    $('#square-overlay2').fadeTo("fast", 0);
    $('#text2').fadeTo("fast", 0);
});

	$('#square-container3').hover(function() { 
    $('#square-overlay3').fadeTo('fast', .7);
    $('#text3').fadeTo('fast', .7)
}, function() { 
    $('#square-overlay3').fadeTo("fast", 0);
    $('#text3').fadeTo("fast", 0);
});

});
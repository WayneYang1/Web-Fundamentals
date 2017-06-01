$(document).ready(function(){
	$("button").click(function(){
		var first = $("#first").val();
		var last = $("#last").val();
		var description = $("textarea").val();
		$("#contact_container").append("<div id='card'><p>"+first+" "+last+"</p><p id='reverse'>" + description + "</p></div>");
		return false;
	});
		$(document).on('click','#card', function(){
			$(this).children().toggle();
		});
});
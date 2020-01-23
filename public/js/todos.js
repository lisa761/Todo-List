// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
	// this would cause the li click event to fire as well
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
	// this will stop the click to fire other events
});

$("input[type='text']").keypress(function(event) {
	if(event.which === 13) {
		// grabbing new Todo text from input
		var todoText = $(this).val();
		$(this).val("");
		// here val() acts as a setter instead of a getter as we are passing it with an argument
		// create e=new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
	}
});

$("#toggle").click(function() {
	$("input[type='text']").fadeToggle();
});


$("#search").keyup(function() {
	var currentSearch = $("#search").val();

	$(".gallery .thumbnail").hide();
	
	$(".gallery .thumbnail").each(function() {
		var currentKeyword = $(this).attr("data-title");

		if (currentKeyword.indexOf(currentSearch) >= 0) {
			$(this).show();
		}
	});
});


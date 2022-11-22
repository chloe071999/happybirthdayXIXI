document.addEventListener("readystatechange", function(event) {
	if(event.target.readyState == "interactive") {
		// Adding a "JavaScript is Enabled" Body Class
		document.querySelector("body").classList.add("js");

    $(function(){
      if (!$('.envelope').hasClass('open')){
        $('.envelope').click(function(){
          $(this).removeClass('new').addClass('open');
        });
      }
    });

	}
});
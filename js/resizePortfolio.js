$(function() { 
    $(".webAnimation").on('click', function(){
      $(".animate").animate({height: '500px',},"slow");
      $(this).addClass("expanded");
	});
});

$(function() { 
    $(".designAnimation").on('click', function(){
      $(".animate").animate({height: '725px',},"slow");
      $(this).addClass("expanded");
	});
});
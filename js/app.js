/*$(document).ready(function() { 
  $('input#target').keypress(function(e) {
  if(e.keyCode == 13) {
  	alert("enter was hit");
    //$("ul").append("<span>new list item</span>");
}
	});
  });*/

//$(document).ready(function(){
    //$("span").on("click", function(){
        //alert("The paragraph was clicked.");
    //});
//});


/*$(document).ready(function() { 
  $('input#target').keypress(function(e) {
  if(e.keyCode == 13) {
  	//alert("enter was hit");
  	$('ul').append('<li>.val<li>');
  		}
  	});
});  THIS WORKS BUT ONLY PRINTS .VAL WHEN HITTING ENTER.*/

 

$(document).ready(function() { 
  //$('input#target').keypress(function(e) {
  //if(e.keyCode == 13) {

  	$('#add-item').submit(function() { 
  	var target = $('input#target').val();

  	var html =  '<li class="item">' + 
		'<input type="checkbox">' + 
		'<span>' + target + '</span>' + 
		'<div class="float-right">' +  
		'<input type="button" value="edit">' + 
		'<input type="button" value="remove">' + 
		'</div>' +
		'</li>';

  	 $('ul').append(html);
  	 event.preventDefault();

  	  // $('span').click(function() {
  	  	  // $(this).toggleClass('strike');
			// });
            
            // EVENT DELEGATION (doesn't seem to work correctly)
  		  $('li').on('click','span', function() {
  		 	 $(this).toggleClass('strike');

  		  
  		  // $('li').on('click','.remove', function() {
  		 	 // $(this).toggleClass('strike');

  		  		// });
  		  	  });

  		  });
  		});

 

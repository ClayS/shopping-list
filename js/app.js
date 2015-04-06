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

  	var html = '<li class="item">' + 
		'<input type="checkbox">' + 
		'<span>' + target + '</span>' + 
		'<div class="float-right">' +  
		'<input type="button" value="edit">' + 
		'<input type="button" value="remove">' + 
		'</div>' +
		'</li>';

  	 $('ul').append(html);
  	 event.preventDefault();

  	  $('span').click(function() {
  	  	 // $('span').wrap('p');
          $(this).toggleClass('strike');


     });
  		
  	});
});

// $(document).ready(function() {    
    // Let's bind a strikethrough event to 
    // ul#unbound li
    //$("ul.item").click(function() {
       // $(this).toggleClass('strike');
    // });

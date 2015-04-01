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
  $('input#target').keypress(function(e) {
  if(e.keyCode == 13) {
  	 
  	var target = $('input#target').val();
  	 $('span').append ('<li>target</li>');
  		} 
  	});
});

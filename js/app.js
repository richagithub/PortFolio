$(document).ready(function(){
$(".animsition").animsition({
	inClass:'fade-in',
	outClass:'fade-out',
	inDuration: 1500,
    outDuration: 800,
    linkElement: '.animsition-link'
});

$(".cover").click(function(){
	$(".cover").fadeOut("slow");
	
});



});
jQuery(document).ready(function($){
	var origi="";
		$(document).on('scroll', onScroll);
	$('a[href^="#"]').on('click.smoothscroll',function(e)/* . YOU CAN USE on() OR bind() METHOD 
                                                            . IT CAN WORK WITH JUST 'click' ,WITHOUT 
																														ANY smoothscroll	*/
	{    
             /* Making active /inactives on navigationa */
         $('a').each(function(){ $(this).removeClass('active'); });
         $(this).addClass('active');
	/*	 //var text='<i class="'+document.getElementsByClassName("active")[0].childNodes[1].innerHTML+' "></i>';
		 var text='<i class="fa fa-envelope"></i>'; 
         //alert(document.getElementsByClassName("active")[0].childNodes[0].childNodes[0].nodeValue);	 
		 alert(document.getElementsByClassName("active")[0].childNodes[1].nodeValue);	 
		 
	     //origi=document.getElementsByClassName("active")[0].innerHTML;		 
	     document.getElementsByClassName("active")[0].innerHTML=text;
		 alert(document.getElementsByClassName("active")[0].innerHTML);	 
	*/
	  
	    
	    e.preventDefault();
		var target=this.hash,
		$target=$(target);/*selector is #... of url*/
		$('html,body').stop().animate
		     ({'scrollTop':$target.offset().top},900,'swing',
			           function(){window.location.hash=target; });  
     	 /* SYNTAX= $(selector).animate({...params...},speed,callback);
	     SYNTAX= $(selector).animate({property:'value' , property:'value' , ...},speed,callback); */		 
		      
			  /* callback has a function that changes the hash part of url of windows as we select a particular href . */
	}
    ); //on('click') closed
	
	
});

function onScroll(event){
	var nav=$('nav');
				var cur_pos = $(this).scrollTop();
				$('div').each(function () {
					var top = $(this).offset().top;
					var bottom = top+$(this).outerHeight();
					
					if (cur_pos >= top && cur_pos <= bottom) {
						 nav.find('a').removeClass('active');

						 
						
						nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
					    
					}
				});
				//alert($(this).attr('id'));
				//window.location.hash=$(this).attr('id');
			}
			

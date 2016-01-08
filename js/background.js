function loading(){

var imgarr=["images/img1.jpg","images/img2.jpg","images/img3.jpg","images/img4.jpg"
            ,"images/img5.jpg","images/img6.jpg","images/img7.jpg","images/img8.jpg"
			,"images/img9.jpg","images/img10.jpg","images/img11.jpg","images/img12.jpg"
			,"images/img13.jpg","images/img14.jpg","images/img15.jpg"];
var spot=Math.floor(Math.random()*imgarr.length);
document.body.style.backgroundImage="url("+imgarr[spot]+")";
/*  
document.body.style.background="url("+imgarr[spot]+")";
IF USING this ,  it will not use the property of backgroundrepeat?? 
*/
}
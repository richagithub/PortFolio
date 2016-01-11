function loading(){

var imgarr=["images/img1.jpg","images/img2.jpg","images/img3.JPG","images/img4.JPG"
            ,"images/img5.JPG","images/img6.JPG","images/img7.JPG","images/img8.JPG"
			,"images/img9.JPG","images/img10.JPG","images/img11.JPG","images/img12.JPG"];
var spot=Math.floor(Math.random()*imgarr.length);
document.body.style.backgroundImage="url("+imgarr[spot]+")";
/*  
document.body.style.background="url("+imgarr[spot]+")";
IF USING this ,  it will not use the property of backgroundrepeat?? 
*/
}


                    
//slide code
  var images = [];
  var i = 0;
 var time = 4000;
                    
 images[0] = '/images/Untitled-1.png'
 images[1] = '/images/isaac.png'
 images[2] = '/images/Untitled-3.png'

 function changeImg() {
document.getElementsByName('slide')[0].src = images[i];
i = (i < images.length - 1) ? i + 1 : 0;
 
setTimeout(changeImg, time);
}
window.onload = changeImg;
var x = document.getElementById("back");
function backbnt() 
{
document.getElementsByName('slide')[0].src = images[i];
i = (i > 0) ? i - 1 : images.length - 1;
}


function nextbnt() 
{
document.getElementsByName('slide')[0].src = images[i];
i = (i < images.length - 1) ? i + 1 : 0;
}
                  
function openSlideMenu(){
document.getElementById('menu').style.width = '250px'
document.getElementById('Header').style.marginLeft = '250px'
}        
function closeSlideMenu(){
document.getElementById('menu').style.width = '0'
document.getElementById('Header').style.marginLeft = '0'
}
            

                    

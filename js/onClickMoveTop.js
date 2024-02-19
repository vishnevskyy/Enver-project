let mybutton=document.getElementById('scrollToTop');

window.onscroll = function() {scrollFunction()};
 function scrollFunction(){
     if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500){
         mybutton.className='shown';
         console.log(document.body.scrollTop)
     }else {
         mybutton.className='hidden';
         console.log('hidden')
     }
 }
function topFunc() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
 }

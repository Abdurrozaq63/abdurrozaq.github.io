/*let body = document.style.transform;
console.log(body);
window.addEventListener('wheel', function(e){
   var vol = 0;
   var a = e.deltaY;
   var current = vol+a;
   console.log(current);
})*/
let nav = document.querySelector('.navbar');
let a = document.querySelectorAll('.container');
let body = document.querySelector("body");
let h = window.innerHeight;
let scene = document.querySelector('.scene');
let cs = document.querySelectorAll('.btn-rotate')
let cube = document.querySelector('.main-serv')
let scn = document.querySelectorAll('.scn');

//sticky navabar
body.addEventListener('wheel', function(e){
   var scrl = e.deltaY;
   if(scrl == 100){
      nav.style.transform = "translateY(-65px)";
   }
   else{
      nav.style.transform = "translateY(0px)";
   }
})
//rotate about containt responsive
cs[0].addEventListener('click', function(){
   cs[0].style.background = "#cc005f";
   cs[1].style.background = "none";
   scene.style.transform = "rotateY(0deg)";
})
cs[1].addEventListener('click', function(){
   cs[1].style.background = "#cc005f";
   cs[0].style.background = "none";
   scene.style.transform = "rotateY(-180deg)";
})



scn[0].addEventListener('click', function(){
   cube.style.transform = "translateX(0px)"
})
scn[1].addEventListener('click', function(){
   cube.style.transform = "translateX(0px)"
})

/*
a.forEach(function(e){
   e.addEventListener('wheel', function(u){
      var d = u.deltaY;
      
      if(d==100){
         window.scrollTo(0, h);
         console.log("success")
      }
      else{
         window.scrollTo(0, -h);
         console.log("failed");
      }
   })
})


a[0].addEventListener('wheel', function(u){
   var d = u.deltaY;
   if(d == 100){
      a[1].scrollIntoView();
   }
   else{
      
   }
})
a[1].addEventListener('wheel', function(u){
   var d = u.deltaY;
   if(d == 100){
      a[2].scrollIntoView();
   }
   else{
      a[0].scrollIntoView();
   }
})
a[2].addEventListener('wheel', function(u){
   var d = u.deltaY;
   if(d == 100){
      a[3].scrollIntoView();
   }
   else{
      a[1].scrollIntoView();
   }
})
a[3].addEventListener('wheel', function(u){
   var d = u.deltaY;
   if(d == 100){
   
   }
   else{
      a[2].scrollIntoView();
   }
})
*/
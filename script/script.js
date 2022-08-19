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

//navbar button
let wm = document.querySelector('.wrap-menu');
let bv = document.querySelector('.btn-menu');
let ul = document.querySelector('ul');

bv.addEventListener('click', function(){
   wm.classList.toggle('visible');
})



//rotate about containt responsive
cs[0].addEventListener('click', function(){
   cs[0].style.background = "#cc005f";
   cs[1].style.background = "none";
   scene.classList.remove('abrot');
})
cs[1].addEventListener('click', function(){
   cs[1].style.background = "#cc005f";
   cs[0].style.background = "none";
   scene.classList.add('abrot');
})



scn[0].addEventListener('click', function(){
   cube.classList.remove('clk-cb2', 'clk-cb3');
   cube.classList.add('clk-cb1');
   scn.forEach(function(u){
      u.style.background = "none";
   })
   this.style.background = "#cc005f";
})
scn[1].addEventListener('click', function(){
   cube.classList.remove('clk-cb1', 'clk-cb3');
   cube.classList.add('clk-cb2');
   scn.forEach(function(u){
      u.style.background = "none";
   })
   this.style.background = "#cc005f";
})
scn[2].addEventListener('click', function(){
   cube.classList.remove('clk-cb2', 'clk-cb1');
   cube.classList.add('clk-cb3');
   scn.forEach(function(u){
      u.style.background = "none";
   })
   this.style.background = "#cc005f";
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

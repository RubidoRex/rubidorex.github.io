/* JQuery animations such as fade in and outs*/
$(document).ready(function(){
        $(".prep").fadeIn("slow");
        
        setTimeout(function() {
        $(".prep").fadeOut("slow");
        $(".head01").fadeIn(1000);
        $(".logoimg").fadeIn("slow");
        
        setTimeout(function() {
        $(".shape0").fadeIn("slow");
        $(".plist").fadeIn("slow");
        $(".img").fadeIn("slow");
        }, 500);
        $(".adminfee").fadeIn(500);
        
        /*button 1*/
        $(".btm1").click(function(){
        $(".shape0").fadeOut(500);
        $(".srt1").fadeIn(500);
        setTimeout(function() {
        $(".shape1").fadeIn("slow");
        }, 600);
        });
        /*button 1 Hover*/
        $(".btm1").mouseover(function(){
         $(".img1").fadeIn(300);
        });
        $(".btm1").mouseleave(function(){
        $(".img1").fadeOut(300);
        });
       
        /*button 2*/
        $(".btm2").click(function(){
        $(".shape0").fadeOut(500);
        $(".srt2").fadeIn(500);
        setTimeout(function() {
        $(".shape1").fadeIn("slow");
        }, 600);
        });
        /*button 2 Hover*/
        $(".btm2").mouseover(function(){
        $(".img2").fadeIn(300);
        });
        $(".btm2").mouseleave(function(){
        $(".img2").fadeOut(300);
        });
            
        $(".btm3").click(function(){
        $(".shape0").fadeOut(500);
        $(".srt3").fadeIn(500);
        setTimeout(function() {
        $(".shape1").fadeIn("slow");
        }, 600);
        });
        
        $(".btm3").mouseover(function(){
         $(".img3").fadeIn(300);
        });
        $(".btm3").mouseleave(function(){
        $(".img3").fadeOut(300);
        });
        
        /*No Selection*/
        $(".nonbtm1").click(function(){
        $(".shape0").fadeOut(500);
        setTimeout(function() {
        $(".shape1").fadeIn("slow");
        }, 600);
        });
        
        $(".btm4").click(function(){
        $(".shape1").fadeOut(500);
        $(".pt1").fadeIn(500);
        setTimeout(function() {
        $(".shape2").fadeIn("slow");
        }, 600);
        });
        
        $(".btm4").mouseover(function(){
        $(".img4").fadeIn(300);
        });
        $(".btm4").mouseleave(function(){
        $(".img4").fadeOut(300);
        });
        
        $(".btm5").click(function(){
        $(".shape1").fadeOut(500);
        $(".pt2").fadeIn(500);
        setTimeout(function() {
        $(".shape2").fadeIn("slow");
        }, 600);
        });
        
        $(".btm5").mouseover(function(){
         $(".img5").fadeIn(300);
        });
        $(".btm5").mouseleave(function(){
        $(".img5").fadeOut(300);
        });
        
        $(".btm6").click(function(){
        $(".shape1").fadeOut(500);
        $(".pt3").fadeIn(500);
        setTimeout(function() {
        $(".shape2").fadeIn("slow");
        }, 600);
        });
        
        $(".btm6").mouseover(function(){
         $(".img6").fadeIn(300);
        });
        $(".btm6").mouseleave(function(){
        $(".img6").fadeOut(300);
        });
       
        
        /*No Selection*/
        $(".nonbtm2").click(function(){
        $(".shape1").fadeOut(500);
        setTimeout(function() {
        $(".shape2").fadeIn("slow");
        }, 600);
        });
        
        $(".btm7").click(function(){
        $(".shape2").fadeOut(500);
        $(".ship1").fadeIn(500);
        setTimeout(function() {
        $(".shape3").fadeIn("slow");
        }, 600);
        });
        
        $(".btm7").mouseover(function(){
         $(".img7").fadeIn(300);
        });
        $(".btm7").mouseleave(function(){
        $(".img7").fadeOut(300);
        });
        
        
        $(".btm8").click(function(){
        $(".shape2").fadeOut(500);
        $(".ship2").fadeIn(500);
        setTimeout(function() {
        $(".shape3").fadeIn("slow");
        }, 600);
        });
        
        $(".btm8").mouseover(function(){
         $(".img8").fadeIn(300);
        });
        $(".btm8").mouseleave(function(){
        $(".img8").fadeOut(300);
        });
        
        
        $(".btm9").click(function(){
        $(".shape2").fadeOut(500);
        $(".ship3").fadeIn(500);
        setTimeout(function() {
        $(".shape3").fadeIn("slow");
        }, 600);
        });
        
        $(".btm9").mouseover(function(){
         $(".img9").fadeIn(300);
        });
        $(".btm9").mouseleave(function(){
        $(".img9").fadeOut(300);
        });
        
        /*No Selection*/
        $(".nonbtm3").click(function(){
        $(".shape2").fadeOut(500);
        setTimeout(function() {
        $(".shape3").fadeIn("slow");
        }, 600);
        });
        
        }, 2000);
        });

/* Sets the price for the item selected.*/
function shirtcalc1(){
        document.getElementById("srt").innerHTML = 19;
}

function shirtcalc2(){
        document.getElementById("srt").innerHTML = 39;
}

function shirtcalc3(){
        document.getElementById("srt").innerHTML = 89;
}

function pantscalc1(){
        document.getElementById("pt").innerHTML = 39;
}

function pantscalc2(){
        document.getElementById("pt").innerHTML = 59;
}

function pantscalc3(){
        document.getElementById("pt").innerHTML = 79;
}

/* The final calculation that adds up everything.*/
function shipcalc1(){
        document.getElementById("ship").innerHTML = 0;
        var num1 = document.getElementById("srt").innerHTML;
        num1 = parseInt(num1);
        var num2 = document.getElementById("pt").innerHTML;
        num2 = parseInt(num2);
        var num3 = document.getElementById("ship").innerHTML;
        num3 = parseInt(num3);
        var total = num1 + num2 + num3 + 40;
        document.getElementById("price").innerHTML = "A$" + total;
}

function shipcalc2(){
        document.getElementById("ship").innerHTML = 5;
        var num1 = document.getElementById("srt").innerHTML;
        num1 = parseInt(num1);
        var num2 = document.getElementById("pt").innerHTML;
        num2 = parseInt(num2);
        var num3 = document.getElementById("ship").innerHTML;
        num3 = parseInt(num3);
        var total = num1 + num2 + num3 + 40;
        document.getElementById("price").innerHTML = "A$" + total;
}

function shipcalc3(){
        document.getElementById("ship").innerHTML = 20;
        var num1 = document.getElementById("srt").innerHTML;
        num1 = parseInt(num1);
        var num2 = document.getElementById("pt").innerHTML;
        num2 = parseInt(num2);
        var num3 = document.getElementById("ship").innerHTML;
        num3 = parseInt(num3);
        var total = num1 + num2 + num3 + 40;
        document.getElementById("price").innerHTML = "A$" + total;
}
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
        
        $(".btm1").click(function(){
        $(".shape0").fadeOut(500);
        $(".srt1").fadeIn(500);
        
        setTimeout(function() {
        $(".shape1").fadeIn("slow");
        }, 600);
        });
        $(".btm1").mouseover(function(){
         $(".img1").fadeIn(300);
        });
        $(".btm1").mouseleave(function(){
        $(".img1").fadeOut(300);
        });
       
        $(".btm2").click(function(){
        $(".shape0").fadeOut(500);
        $(".srt2").fadeIn(500);
        setTimeout(function() {
        $(".shape1").fadeIn("slow");
        }, 600);
        });
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
        
        $(".btm4").click(function(){
        $(".shape1").fadeOut(500);
        $(".pt1").fadeIn(500);
        setTimeout(function() {
        $(".shape2").fadeIn("slow");
        }, 600);
        });
        $(".btm5").click(function(){
        $(".shape1").fadeOut(500);
        $(".pt2").fadeIn(500);
        setTimeout(function() {
        $(".shape2").fadeIn("slow");
        }, 600);
        });
        $(".btm6").click(function(){
        $(".shape1").fadeOut(500);
        $(".pt3").fadeIn(500);
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
        
        }, 2000);
        });

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

function shipcalc1(){
        document.getElementById("ship").innerHTML = 0;
        var num1 = document.getElementById("srt").innerHTML;
        num1 = parseInt(num1);
        var num2 = document.getElementById("pt").innerHTML;
        num2 = parseInt(num2);
        var num3 = document.getElementById("ship").innerHTML;
        num3 = parseInt(num3);
        var total = num1 + num2 + num3;
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
        var total = num1 + num2 + num3;
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
        var total = num1 + num2 + num3;
        document.getElementById("price").innerHTML = "A$" + total;
}
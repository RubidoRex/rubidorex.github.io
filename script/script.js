$(document).ready(function(){

    $(".iPadPro11").fadeIn("fast");
    $(".iPadPro12").fadeIn("fast");

    $(".iPadPro11").click(function(){
        document.getElementById("size").innerHTML = "11-inch";
        $(".iPadPro11").fadeOut("slow");
        $(".iPadPro12").fadeOut("slow");
        
        setTimeout(function() {
            $(".SpaceGrey").fadeIn("slow");
            $(".Silver").fadeIn("slow");
        }, 600);
    });

    $(".iPadPro12").click(function(){
        document.getElementById("size").innerHTML = "12.9-inch";
        document.getElementById("price1").innerHTML = 300;
        $(".iPadPro11").fadeOut("slow");
        $(".iPadPro12").fadeOut("slow");

        setTimeout(function() {
            $(".SpaceGrey").fadeIn("slow");
            $(".Silver").fadeIn("slow");
        }, 600);
    });

    $(".SpaceGrey").click(function(){
        document.getElementById("color").innerHTML = "Space Grey";
        $(".SpaceGrey").fadeOut("slow");
        $(".Silver").fadeOut("slow");
        
        setTimeout(function() {
            $(".storageoptions").fadeIn("slow");
        }, 600);
    });

    $(".Silver").click(function(){
        document.getElementById("color").innerHTML = "Silver";
        $(".SpaceGrey").fadeOut("slow");
        $(".Silver").fadeOut("slow");
        
        setTimeout(function() {
            $(".storageoptions").fadeIn("slow");
        }, 600);
    });

    $(".64GB").click(function(){
        document.getElementById("storage").innerHTML = "64GB";
        $(".storageoptions").fadeOut("slow");
        
        setTimeout(function() {
            $(".Wifi").fadeIn("slow");
            $(".Celluar").fadeIn("slow");
        }, 600);
    });

    $(".256GB").click(function(){
        document.getElementById("storage").innerHTML = "256GB";
        document.getElementById("price2").innerHTML = 220;
        $(".storageoptions").fadeOut("slow");
        
        setTimeout(function() {
            $(".Wifi").fadeIn("slow");
            $(".Celluar").fadeIn("slow");
        }, 600);
    });

    $(".512GB").click(function(){
        document.getElementById("storage").innerHTML = "512GB";
        document.getElementById("price2").innerHTML = 520;
        $(".storageoptions").fadeOut("slow");
        
        setTimeout(function() {
            $(".Wifi").fadeIn("slow");
            $(".Celluar").fadeIn("slow");
        }, 600);
    });

    $(".1TB").click(function(){
        document.getElementById("storage").innerHTML = "1TB";
        document.getElementById("price2").innerHTML = 820;
        $(".storageoptions").fadeOut("slow");
        
        setTimeout(function() {
            $(".Wifi").fadeIn("slow");
            $(".Celluar").fadeIn("slow");
        }, 600);
    });

    $(".Wifi").click(function(){
        document.getElementById("connectivity").innerHTML = "Wifi";
        $(".Wifi").fadeOut("slow");
        $(".Celluar").fadeOut("slow");
        
        setTimeout(function() {
            var num1 = document.getElementById("price1").innerHTML;
            var num2 = document.getElementById("price2").innerHTML;
            var num3 = document.getElementById("price3").innerHTML;
            var num4 = 1229;
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            num3 = parseInt(num3);
            num4 = parseInt(num4);
            var total = num1 + num2 + num3 + num4;
            document.getElementById("pricetotal").innerHTML = "A$" + total;
            $(".final").fadeIn("slow");
        }, 600);
    });

    $(".Celluar").click(function(){
        document.getElementById("connectivity").innerHTML = "Wifi + Celluar";
        document.getElementById("price3").innerHTML = 220;
        $(".Wifi").fadeOut("slow");
        $(".Celluar").fadeOut("slow");
        
        setTimeout(function() {
            var num1 = document.getElementById("price1").innerHTML;
            var num2 = document.getElementById("price2").innerHTML;
            var num3 = document.getElementById("price3").innerHTML;
            var num4 = 1229;
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            num3 = parseInt(num3);
            num4 = parseInt(num4);
            var total = num1 + num2 + num3 + num4;
            document.getElementById("pricetotal").innerHTML = "A$" + total;
            $(".final").fadeIn("slow");
        }, 600);
    });

});


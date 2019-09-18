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
        $(".storageoptions").fadeOut("slow");
        
        setTimeout(function() {
            $(".Wifi").fadeIn("slow");
            $(".Celluar").fadeIn("slow");
        }, 600);
    });

    $(".512GB").click(function(){
        document.getElementById("storage").innerHTML = "512GB";
        $(".storageoptions").fadeOut("slow");
        
        setTimeout(function() {
            $(".Wifi").fadeIn("slow");
            $(".Celluar").fadeIn("slow");
        }, 600);
    });

    $(".1TB").click(function(){
        document.getElementById("storage").innerHTML = "1TB";
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
            $(".final").fadeIn("slow");
        }, 600);
    });

    $(".Celluar").click(function(){
        document.getElementById("connectivity").innerHTML = "Wifi + Celluar";
        $(".Wifi").fadeOut("slow");
        $(".Celluar").fadeOut("slow");
        
        setTimeout(function() {
            $(".final").fadeIn("slow");
        }, 600);
    });

});


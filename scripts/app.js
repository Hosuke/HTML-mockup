/*
     By Hosuke
     Geyang@mensa.org.au
 */

var pos = 0;
$(document).ready(function(){
    $(".feature").on("mouseenter", function(){
        $(this).find("img").addClass("darken");
        $(this).find("p").removeClass("hide");
        $(this).find("p").addClass("show");
        $(this).find("a").addClass("animated pulse");
    }).on("mouseleave", function(){
        $(this).find("img").removeClass("darken");
        $(this).find("p").removeClass("show");
        $(this).find("p").addClass("hide");
        $(this).find("a").removeClass("animated pulse");
    });

    $(".logo").find("#star").addClass("hide");

    $(".logo").on("mouseenter", function(){
        $(this).find("#star").removeClass("hide");
    }).on("mouseleave", function(){
        $(this).find("#star").addClass("hide");
    });
    /*
        Moving Background
     */
    setInterval(function moveBG() {
        $('body').css({'background-position':((pos += 1) + 'px 0')});
    },40);

});

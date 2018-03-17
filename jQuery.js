$(document).ready(function(){

    if ($(window).width() > 480) {
    $(".hide-big").hover(function(){
        $(".dropdown-content").show(100);
    });
    } else {
        $(".hide-big").on("touchstart", function(){
            $(".dropdown-content").show(100);
        });
    }

    $(this).on("click", function(){
        $(".dropdown-content").hide();
    });
});
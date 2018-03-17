$(document).ready(function(){

    if ($(window).width() > 480) {
    $(".icon").hover(function(){
        $(".dropdown-content").show(100);
    });
    } else {
        $(".icon").on("touchstart", function(){
            $(".dropdown-content").toggle(500);
        });
    }

    $(this).on("click", function(){
        $(".dropdown-content").hide();
    });
});
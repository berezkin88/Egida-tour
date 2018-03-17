$(document).ready(function () {

    
    $(".hide-big, .icon").hover(function(){
        $(".icon").attr("src","menu-light.png");
        $(".dropdown-content").show(100);
    });


    $(this).on("click", function () {
        $(".icon").attr("src","menu-dark.png");
        $(".dropdown-content").hide();
    });
});
$(document).ready(function () {

    $(".hide-big, .icon").hover(function(){
        $(".dropdown-content").show("slow");
    });


    $(this).on("click", function () {
        $(".dropdown-content").hide();
    });
});
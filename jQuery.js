$(document).ready(function () {

    $("#hover").hover(function(){
        $(".dropdown-content").show();
    });


    $(this).on("click", function () {
        $(".dropdown-content").hide();
    });
});
$(document).ready(function () {

    $("#hover").hover(function(){
        $(".dropdown-content").show(300);
    });


    $(this).on("click", function () {
        $(".dropdown-content").hide();
    });
});
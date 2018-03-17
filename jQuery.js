$(document).ready(function(){

    $(".icon").hover(function(){
        $(".dropdown-content").show(100);
    });

    $(this).on("click", function(){
        $(".dropdown-content").hide();
    });
});
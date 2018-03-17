$(document).ready(function(){

    $(".icon").hover(function(){
        $(".dropdown-content").toggle().show();
    });

    $(this).on("click", function(){
        $(".dropdown-content").toggle().hide();
    });
});
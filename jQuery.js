$(document).ready(function(){

    $(".icon").hover(function(){
        $(".dropdown-content").toggle().show(5);
    });

    $(this).on("click", function(){
        $(".dropdown-content").toggle().hide();
    });
});
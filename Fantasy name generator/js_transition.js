$(document).ready(function(){
    $("#wp_controls").on('click','span',function(){
        $("#wp").removeClass("opaque");

        var newImage = $(this).index();

        $("wp").eq(newImage).addClass("opaque");

        $("#wp_controls span").removeClass("selected");
        $(this).addClass("selected");
    });
});
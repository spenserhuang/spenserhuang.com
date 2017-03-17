// ******************************************
// JQUERY ACTIONS
// ******************************************

$(document).ready(function(){
    $("#menu").hide();
    $("#menu-exit-icon").hide();
    $("#menu-tag").hide();
    $(".pg4-img-text").hide();

    $("#menu-icon").hover(
        function() {
            $( "#menu-tag" ).fadeIn(500);
        },
        function() {
            $( "#menu-tag" ).fadeOut(500);
        }
    );

    $("#menu-icon").click(function(){
        $("#menu-icon").hide();
        $("#menu-tag").hide();
        $("#menu-exit-icon").fadeIn( "slow", function() {
        });
        $( "#menu" ).fadeIn( "slow", function() {
        });
    });

    $("#menu-exit-icon").click(function(){
        $("#menu-exit-icon").hide();
        $("#menu-icon").fadeIn( "slow", function() {
        });
        $( "#menu" ).fadeOut( "slow", function() {
        });
    });


    $("#pg4-row-1").mouseover(function(){
        $(".pg4-img-text-1").fadeIn( "slow", function() {
        });
    });
    $("#pg4-row-1").mouseleave(function(){
        $(".pg4-img-text-1").fadeOut( "slow", function() {
        });
    });
    $("#pg4-row-1").mouseover(function(){
        $("#pg4-img-1").fadeTo(1000, 0.4);
    });
    $("#pg4-row-1").mouseleave(function(){
        $("#pg4-img-1").fadeTo(1000, 1);
    });

});

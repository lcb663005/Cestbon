/**
 * Created by wang374466 on 17/3/28.
 */

$(function () {
    $(".nav_menu").mouseover(function(){

        $(this).children("dl").show();

    });

    $(".nav_menu").mouseout(function(){
        $(this).children("dl").hide();
    })
})



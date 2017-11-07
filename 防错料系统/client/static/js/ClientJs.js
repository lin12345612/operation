$(function(){
    //鼠标放置时增加样式

    $("#searchBtn").hover(function(){
            $(this).addClass("ui-state-hover")
        },function(){
            $(this).removeClass("ui-state-hover");
        })
        .on("click",function(){
        console.log(123654);
    });
});

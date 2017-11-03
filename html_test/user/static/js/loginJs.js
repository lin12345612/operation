$(function(){
    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    $(".login-box").css({
        "width":screenWidth,
        "height":screenHeight
    });
//        登录按钮事件
    $("#login").hover(function(){$(this).addClass("ui-state-hover")},
        function(){$(this).removeClass("ui-state-hover")
            .on("click",function(){
                $.ajax({
                    url :"user/login",
                    type : "post",
                    dataType : "json",
                    data : {
                        id : $("#name").val(),
                        password : $("#password").val()
                    },
                    success : function(data){
                       if(data.result == "succeed"){
                           $("#login-form").submit();
                           window.location.href = "http://wx.jimi-iot.com/eps_server/user/goManage";
                       }
                    },
                    error : function(){
                        console.log("数据传输失败");
                    }
                });
                //
            });
        });

//        确定按钮事件
    $("#errorShowBox-btn").on("click",function(){

        $("#showError").css("display","none");
        $("#password").val("")
            .focus();
    });
});

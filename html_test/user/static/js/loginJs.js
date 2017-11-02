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
                //$.ajax({
                //    url :"",
                //    type : "post",
                //    dataType : "json",
                //    data : {
                //        user : $("#name").val(),
                //        password : $("#password").val()
                //    },
                //    success : function(data){
                //        window.location.href = "";
                //    },
                //    error : function(){
                //        console.log("数据传输失败");
                //    }
                //});
                $("#login-form").submit();
                window.location.href = "http://www.baidu.com";
            });
        });

//        确定按钮事件
    $("#errorShowBox-btn").on("click",function(){

        $("#showError").css("display","none");
        $("#password").val("")
            .focus();
    });
});

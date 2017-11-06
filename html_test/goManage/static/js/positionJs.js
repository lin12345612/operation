$(function(){
    //鼠标放置样式
    $("#pcBtn,#fileBtn").hover(function(){
        $(this).addClass("ui-state-hover")
    },function(){
        $(this).removeClass("ui-state-hover");
    });

//    查询按钮事件
    $("#pcBtn").on("click",function(){
        console.log(965);
    });

//    上传文件部分
    $("#fileUpload").on("change",function(){
        var $path = $(this).val();
        var $name = $path.substr($path.lastIndexOf(".")+1); //获取后缀名
        if($name != "xls"){
            $(".show-warm").css("display","block");
            $("#fileBtn").attr("disabled",true)
                .removeClass("ui-state-default");
        }
        if($name == "xls"){
            $(".show-warm").css("display","none");
            $("#fileBtn").attr("disabled",false)
                .addClass("ui-state-default");
        }
    });
    //上传按钮事件
    $("#fileBtn").on("click",function(){
        console.log(7452);
    });

    var array = [];
//    生成表格部分
    $.ajax({
        url :"program/list",
        type: "post",
        dataType: "json",
        data :{},
        success :function(data){
            autoCreateTable(data);
            var totalHeight = 0;
            for(var a = 0;a<10;a++){
              totalHeight += $("#positionTable td").eq(3+4*a).height()+26 ;
                $("#"+a).css("top",totalHeight);
                $("#0"+a).css("top",totalHeight);
            }
        },
        error : function(){
            console.log("数据传输失败");
        }
    });

//    动态生成表格
    function autoCreateTable(data){
        var stateChange = "";    //用于显示
        var stateChange1 = 0 ;   //用于传递到后台
        $("#positionTable").empty();
        $("#stateModify").empty();
        var dataLength = data.length;     //获取数据长度
        var html = "";
        for(var i = 0;i<dataLength;i++){
            html += "<tr>";
            html += "<td>" + data[i].fileName + "</td>"
            html += "<td>" + data[i].workOrder + "</td>"
            html += "<td>" + data[i].state + "</td>"
            html += "<td>" + data[i].line + "</td>"
            html += "</tr>";
            $("#positionTable").html(html);
            //增加按钮
        var btn = $("<button id='"+ i +"' class='ui-button ui-corner-all ui-state-default stateModifyCommon stateModifyBtn'>修改状态</button>");
       //鼠标放置事件
       btn.hover(function(){
           $(this).addClass("ui-state-hover")
       },function(){
           $(this).removeClass("ui-state-hover");
       });
            //按键点击事件
            btn.on("click",function(){
                var id = $(this).attr("id");
                if ($(this).text() == "修改状态") {
                    $(this).text("保存");
                    $("#0"+id).css("display","block");
                }else if($(this).text() == "保存"){
                    $(this).text("修改状态");
                    $("#0"+id).css("display","none");
                    $("#positionTable td").eq(2+4*id).text(stateChange);
                    if(stateChange == "作废"){
                        $(this).attr("disabled","disabled")
                                .removeClass("ui-state-default ui-state-hover");
                    }
                }
            });
        //    放置下拉选项框
            var $sel = $("<select id='0"+ i +"' class='stateModifyCommon stateModifySel' style='display: none'></select>");
            $sel.append("<option value=>不限</option>");
            $sel.append("<option value=0>未开始</option>");
            $sel.append("<option value=1>进行中</option>");
            $sel.append("<option value=2>已完成</option>");
            $sel.append("<option value=3>作废</option>");
            //下拉事件
            $sel.on("change",function(){
                var sd = $(this).attr("id");
                stateChange1 = $(this).val();
                stateChange =  $("#"+sd+"  option:selected").text();
            });
            $("#stateModify").append(btn)
                             .append($sel);

    }}
});
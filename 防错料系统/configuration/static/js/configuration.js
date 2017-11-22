$(function(){

//    鼠标查询按钮
    $("#searchBtn").hover(function(){
        $(this).addClass("ui-state-hover");
    },function(){
        $(this).removeClass("ui-state-hover");
    })
        .on("click",function(){
            console.log(111);
    });

    //保存按钮
    $("#saveBtn").hover(function(){
        $(this).addClass("ui-state-hover");
    },function(){
        $(this).removeClass("ui-state-hover");
    });
    var t = 3;
    var k = 4;
    if(t > 1){
        createMulTable(t);
        for(var i = 1;i<3;i++){
            createOneTable();
        }
    }
    if(k > 1){
        createMulTable(k);
        for(var j   = 1; j < k ; j++){
            createOneTable();
        }
    }

    //针对一个线号对应多个数据
    function createMulTable(w){
        var html = "" ;
        html += "<tr>"
        html +=     "<td rowspan='"+ w +"'>"+ 1 +"</td>"
        html +=     "<td>" + 2 +"</td>"
        html +=     "<td>" + 3 + "</td>"
        html +=     "<td>" + 4 + "</td>"
        html +=     "<td>" + 5 + "</td>"
        html += "</tr>";
        $("#main").append(html);
    }
//    生成一行table
    function createOneTable(){
        var html = "" ;
        html += "<tr>"
        html +=     "<td>" + 2 +"</td>"
        html +=     "<td>" + 3 + "</td>"
        html +=     "<td>" + 4 + "</td>"
        html +=     "<td>" + 5 + "</td>"
        html += "</tr>";
        $("#main").append(html);
    }
});
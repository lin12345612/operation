/**
 * Created by 啊烁 on 2017/9/26.
 */
window.onload  =function(){
    var wrap  = document.getElementById("wrap");   //获取大盒子
    var arrow = document.getElementById("arrow");  //获取箭头
    var ar = arrow.children;
    var slide = document.getElementById("slide");
    var lis   = slide.children[0].children;
    wrap.onmouseover = function(){              //鼠标经过时，显示两个箭头
        animate(arrow,{'opacity':100});
    }
    wrap.onmouseout = function () {            //鼠标离开时隐藏箭头
        animate(arrow,{'opacity':0});
    }

    //  存储了每个图片的信息
    var json = [
        {   //  1
            width:400,
            top:20,
            left:50,
            opacity:20,
            z:2
        },
        {  // 2
            width:600,
            top:70,
            left:0,
            opacity:80,
            z:3
        },
        {   // 3
            width:800,
            top:100,
            left:200,
            opacity:100,
            z:4
        },
        {  // 4
            width:600,
            top:70,
            left:600,
            opacity:80,
            z:3
        },
        {   //5
            width:400,
            top:20,
            left:750,
            opacity:20,
            z:2
        }
    ];
    var fg = true;
    change();    //首先执行一次，生成初始模式
    for(var k  in ar){
        ar[k].onclick = function(){
            if(this.className == "prev"){
                if(fg==true){
                    change(true);
                    fg=false;
                }
            }
            else{
                if(fg==true){
                    change(false);
                    fg=false;
                }
            }
        }
    }

    function change(flag){
        if(flag){   // 把 最后一个json 删除   并且把最后一个添加到json 第一个位置
            json.unshift(json.pop());
        }
        else{
            json.push(json.shift());   //把 弟一个json 删除   并且把第一个添加到json 第一个位置
        }

        for(var i=0;i<json.length;i++){
            animate(lis[i],{
                width:json[i].width,
                top:  json[i].top,
                left: json[i].left,
                opacity:json[i].opacity,
                zIndex :json[i].z
            },function(){
                fg=true;
            });
        }
    }

//    点击图片出现在第一页面
    for(var d=0;d<lis.length;d++){
        lis[d].index  =d;
        lis[d].onclick = function(){

        }
    }
}
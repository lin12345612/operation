/**
 * Created by 啊烁 on 2017/9/25.
 */
window.onload = function(){
    var slider         = document.getElementById("js_slider"); //获取大盒子
    var slider_main    = document.getElementById("slider_main"); //获取轮播盒子
    var imgs           = slider_main.children;    //获取图片列表
    var slider_control = slider.children[1];     //获取控制块
    var spans = slider_control.children;
    var scrollLength = slider.offsetWidth;    //获取盒子的宽度
    for(var i = 0;i<imgs.length;i++){
        var spanLength = slider_control.children.length;    //每次都获取控制块列表数
        var newspan = document.createElement("span");
        newspan.setAttribute("class","slider-control-con");
        newspan.innerHTML = i+1;     //为了方便后面将样式和图片对应起来
        slider_control.insertBefore(newspan,spans[spanLength-1]);
    }
    spans[1].setAttribute("class","slider-control-con current");
    //将除第一个以外的图片全部放在右边
    for(var k=1;k<imgs.length;k++){
        imgs[k].style.left = scrollLength+"px";
    }

//    遍历span按钮
    var key = 0;   //用于控制第key张图片
    for(var g in spans){
        spans[g].onclick = function(){
            if(this.className=="slider-control-prev")    //点击左侧按钮
            {
                animate(imgs[key],{left:scrollLength});
                --key<0?key=5:key;
                imgs[key].style.left = -scrollLength+"px";
                animate(imgs[key],{left:0});
                spanStyle();
            }
            else if(this.className=="slider-control-next")     // 点击右侧按钮
            {
               autoPlay();
            }
            else                                             //点击下面的按钮
            {
                var guard = this.innerHTML-1;
                if(guard>key){              //点击的按钮位于当前页面的右侧
                    for(var d=key+1;d<=guard;d++){
                        imgs[d].style.left = scrollLength+"px";
                    }
                    for(var s = key;s<guard;s++){
                        animate(imgs[s],{left:-scrollLength});
                    }
                }
                else if(guard<key){
                    for(var w = guard;w<key;w++){
                        imgs[w].style.left = -scrollLength+"px";
                    }
                    for(var s=guard+1;s<=key;s++){
                        animate(imgs[s],{left:scrollLength});
                    }
                }
                key=guard;
                animate(imgs[key],{left:0});
                spanStyle();
            }
        }
    }

    //下面的列表样式改变
    function spanStyle(){
        for(var q=1;q<spans.length-1;q++){
            spans[q].className = "slider-control-con";
        }
        spans[key+1].className  ="slider-control-con current";
    }

    //设置其自动播放
    var timer = null;
    timer=setInterval(autoPlay,2000);
//右击时的函数以及自动播放时的函数
    function autoPlay(){
        animate(imgs[key],{left:-scrollLength});    //当前图片缓慢走到左边
        ++key>imgs.length-1 ? key=0:key;           //若已经是最后一张，则key置零
        imgs[key].style.left = scrollLength+"px";  //第六张后再次右击，第一张图片迅速移到右侧，
        animate(imgs[key],{left:0});                //并缓慢向左移动,以此类推
        spanStyle();
    }
//    鼠标放置在盒子上时，取消自动播放
    slider.onmouseover = function(){
        clearInterval(timer);
    }
    slider.onmouseout = function(){
        timer=setInterval(autoPlay,2000);
    }
}
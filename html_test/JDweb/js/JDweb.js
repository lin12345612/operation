window.onload = function(){
    search();
    secKill();
    imgAutoPlay();
};
//头部搜索框
function search(){
//    获取对象
//    获取搜索框
    var box = document.getElementsByClassName("top_banner")[0];
//    获取轮播图
    var images = document.getElementsByClassName("JD-banner")[0];
//    获取轮播图的高度
    var banner_height = images.offsetHeight;
    window.onscroll = function(){
        var top = window.pageYOffset ||  document.body.scrollTop || document.body.scrollTop || 0;
        if(top > banner_height){
            box.style.background = "rgba(201,21,35,0.85)" ;
        }else{
            var op = top/banner_height*0.85;
            box.style.background = "rgba(201,21,35,"+ op +")" ;
        }
    }
 }
//秒杀部分
function secKill(){
//    获取6个显示时间的组框
    var spans = document.getElementsByClassName("num");
    var totalTime = 10800 ; //总共3个小时
    var timer = setInterval(function(){
        totalTime-- ;
        var hour = parseInt(totalTime / 3600 ) ;
        var min1 = parseInt(parseInt(totalTime/60) % 60 /10 ) ;   //分钟
        var min2 = parseInt(parseInt(totalTime/60) % 60 %10 ) ;
        var sec1 = parseInt(totalTime % 60 /10 );
        var sec2 = totalTime % 60 %10 ;
        spans[1].innerHTML = hour ;
        spans[2].innerHTML = min1 ;
        spans[3].innerHTML = min2;
        spans[4].innerHTML = sec1;
        spans[5].innerHTML = sec2;
    },1000);
}
//轮播图部分
//自动播放
function imgAutoPlay(){
    //图片盒子
    var JDbanner = document.getElementsByClassName("JD-banner")[0];
    var imgBox = JDbanner.getElementsByTagName("ul")[0];
    var imgWidth = JDbanner.offsetWidth;
//    小圆点盒子
    var circleBox = JDbanner.getElementsByTagName("ul")[1];
    var circleList = circleBox.children;
    var index = 1 ;  //用于标记图片
    var index1 = 0;  //用于标记小圆点
    var timer = null ;
//    过渡函数
    function addTransition(){
        imgBox.style.transition = "all 0.3s linear 0s";
        imgBox.style.webkitTransition = "all 0.3s linear 0s";
    }
//    取消过渡函数
    function removeTransition(){
        imgBox.style.transition = "none";
        imgBox.style.webkitTransition = "none";
    }

//    改变位子
    function setPosition(t){
        imgBox.style.transform = "translate(" + t + "px)";
        imgBox.style.webkitTransform = "translate(" + t + "px)";
    }
    timer = setInterval(function(){
        index++ ;
        index1++;
        if(index1 == 8){
            index1 = 0 ;
        }
        clearStyle();
        circleList[index1].setAttribute("class","active");
        addTransition();
        setPosition(-index*imgWidth);
    },3000);
//    每次过渡完判断index的值
    imgBox.addEventListener("transitionEnd" ,function(){
        if(index >= 9){
            index = 1;
            index1 = 0;
        }else if(index <= 0 ){
            index = 8 ;
            index1 = 7 ;
        }
        removeTransition();
        setPosition(-index*imgWidth);
    });
    imgBox.addEventListener("webkitTransitionEnd" ,function(){
        if(index >= 9){
            index = 1;
        }else if(index <= 0 ){
            index = 8 ;
        }
        removeTransition();
        setPosition(-index*imgWidth);
    });
//    小圆点清除样式
    function clearStyle(){
        for( var i = 0 ; i < circleList.length ; i++){
            circleList[i].removeAttribute("class");
        }
    }

    ///*
    // 手指滑动的时候让轮播图滑动   touch事件  记录坐标轴的改变 改变轮播图的定位（位移css3）
    // 当滑动的距离不超过一定的距离的时候  需要吸附回去  过渡的形式去做
    // 当滑动超过了一定的距离  需要 跳到 下一张或者上一张  （滑动的方向） 一定的距离（屏幕的三分之一）
    // */
//    touch事件
    var startX = 0 ; //记录开始  刚刚触摸的点的位置   X坐标
    var moveX = 0   ; //滑动的时候X 的位置
    var  distanceX = 0 ; //滑动的距离
    var isMove = false; //是否滑动过
    imgBox.addEventListener("touchstart",function(e){
        clearInterval(timer) ;   // 手指触碰屏幕时关闭定时器
        startX = e.touches[0].clientX ; //记录起始X的值
    },false);
    imgBox.addEventListener("touchmove",function(e){
        moveX = e.touches[0].clientX ; //滑动时候的X
        distanceX = moveX - startX ; // 计算移动的距离
        removeTransition();   //清除过度
        setPosition(-index*imgWidth + distanceX);   //实时定位
        isMove = true ;   //证明滑动过
    },false);
    window.addEventListener("touchmove",function(e){
        moveX = e.touches[0].clientX ; //滑动时候的X
        distanceX = moveX - startX ; // 计算移动的距离
        removeTransition();   //清除过度
        setPosition(-index*imgWidth + distanceX);   //实时定位
        isMove = true ;   //证明滑动过
    },false);
    //在模拟器上模拟的滑动会有问题 丢失的情况  最后在模拟器的时候用window
    window.addEventListener("touchend" ,function(e){
    //   滑动超过三分之一即为滑动有效，否则为无效
        if(isMove && Math.abs(distanceX) > imgWidth/3){
            if(distanceX > 0){    //向右滑  上一张
                index--;
                index1--;
                if(index1 <= 0 ){
                    index1 = 7;
                }
            }else{     //向左滑，下一张
                index++;
                index1++;
                if( index1 >= 8){
                    index1 = 0 ;
                }
            }
        }
        clearStyle();
        circleList[index1].setAttribute("class","active");
        addTransition();  //加过渡动画
        setPosition(index*-imgWidth);
    //    重置参数
        startX = 0;
        moveX = 0;
        distanceX = 0;
        isMove = false;
        clearInterval(timer);
        timer = setInterval(function(){
            index++ ;
            index1++;
            if(index1 == 8){
                index1 = 0 ;
            }
            clearStyle();
            circleList[index1].setAttribute("class","active");
            addTransition();
            setPosition(-index*imgWidth);
        },3000);
    });
}

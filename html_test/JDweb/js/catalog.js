window.onload = function(){
    slideDown();
};
    //滑动
    function slideDown(){
        var startY = 0  ; // 记录一开始的位置
        var moveY = 0 ; // 记录移动的位置
        var distanceY = 0 ; //记录移动的位置
        var curryY = 0 ;//记录当前位置

        //记录点击事件的时间变量
        var startTime = 0, endTime = 0;
        var banner = document.getElementsByClassName("JDTop-banner")[0];
        //获取左侧盒子
        var catalogLeft = document.getElementsByClassName("JDCatalog-left-box")[0];
        var leftBox = catalogLeft.getElementsByTagName("ul")[0];
        var listBox = leftBox.children;
        var screenHeight = document.body.offsetHeight;   //屏幕高度
        var bannerHeight = banner.offsetHeight ;
        var leftBoxHeight = leftBox.offsetHeight;
        var flagHeight = leftBoxHeight - screenHeight ;  //盒子的高度最下面部分刚好和屏幕重合时候的临界值
    //    添加过渡动画
        function addTransition(){
            leftBox.style.transition = "all 0.3s linear 0s";
            leftBox.style.webkitTransition = "all 0.3s linear 0s";
        }
    //    去除过渡动画
        function removeTransition(){
            leftBox.style.transition = "none";
            leftBox.style.webkitTransition = "none";
        }
    //    设置位置
        function setPosition(t){
            leftBox.style.transform = "translateY("+ t+ "px)";
            leftBox.style.webkitTransform = "translateY("+ t+ "px)";
        }

        leftBox.addEventListener("touchstart",function(e){
            startTime = new Date().getTime();
            startY = e.touches[0].clientY;
        });
        leftBox.addEventListener("touchmove",function(e){
           // e.preventDefault();
            moveY = e.touches[0].clientY ;
            distanceY = moveY - startY ;
            removeTransition();
            setPosition(curryY + distanceY);
        });
        leftBox.addEventListener("touchend",function(e){
            endTime = new Date().getTime();
            curryY  = curryY + distanceY;
            //如果curryY大于零，说明顶部出现空白，此时实现吸顶功能
            if(curryY >= 0){
                curryY = 0;
            //    如果curryY的绝对值大于计算出的卷去的高度时，说明底部出现留白，此时实现吸底功能
            }else if(Math.abs(curryY) > flagHeight){
                curryY = -(flagHeight+bannerHeight);
            }
            addTransition();
            setPosition(curryY);

        //    当触摸的时间间隔小于150ms并且移动的距离为0时视为点击
        if(endTime - startTime < 150 && distanceY == 0){
            var li = e.target.parentNode;
            for( var i = 0 ; i < listBox.length ; i++){
                listBox[i].index = i+1 ;
                listBox[i].removeAttribute("class");
            }
            li.setAttribute("class","active");
            //将点击的当前li上升至顶部，并且如果当前li是处于刚好占满界面的多个li中的一个时，该li不上升至顶部
            curryY = -li.index * li.offsetHeight+bannerHeight;
            if(Math.abs(curryY) > flagHeight ){
                curryY = -(flagHeight+bannerHeight);
            }
            addTransition();
            setPosition(curryY);
        }
            //重置参数
            startY = 0 ;
            moveY = 0;
            distanceY = 0;
    });


}


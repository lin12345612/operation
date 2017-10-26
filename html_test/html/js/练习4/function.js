/**
 * Created by 啊烁 on 2017/9/19.
 */

//封装scroll的top和left值
function scroll() {
    if(window.pageYOffset != null)  //  ie9+ 和其他浏览器
    {
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    else if(document.compatMode == "CSS1Compat")  // 声明的了 DTD
    // 检测是不是怪异模式的浏览器 -- 就是没有 声明<!DOCTYPE html>
    {
        return {
            left: document.documentElement.scrollLeft,
            top: document.documentElement.scrollTop
        }
    }
    return { //  剩下的肯定是怪异模式的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
    }
}

// 封装获取标签类名class的函数
function getClass(classname){
    //如果浏览器支持，则直接返回
    if(document.getElementsByClassName)
    {
        return document.getElementsByClassName(classname);
    }
    // 不支持的 浏览器
    var arr = []; // 用于存放满足的数组
    var dom = document.getElementsByTagName("*");
    //alert(dom.length);
    for(var i=0;i<dom.length;i++)
    {
        var list = dom[i].className.split(" ");
        for(var j=0;j<list.length;j++){
            if(list[j].className == classname)
            {
                arr.push(dom[i]);
            }
        }
    }
    return arr;
}
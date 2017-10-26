/**
 * Created by 啊烁 on 2017/9/7.
 */
window.onload = function(){
    var bx = document.getElementById("bx");
    var ul = document.getElementById("ul");
    //    创建新一排点的div
    var newdiv = document.createElement("div");
    newdiv.setAttribute("class","xia")
    bx.appendChild(newdiv);
    //创建span
    var len = ul.children;
    for( var i=0;i<len.length;i++){
        var newspan = document.createElement("span");
        newdiv.appendChild(newspan);
        newspan.innerHTML=i+1;
    }
    var child=newdiv.children;
    child[0].setAttribute("class","current");
}
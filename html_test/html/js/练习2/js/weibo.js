
window.onload = function(){
    var te=document.getElementById("te");      //获取输入框
    var btn1=document.getElementById("btn1");  //获取“发布按钮”
    var box = te.parentNode.parentNode;
    //alert(box.className);
    btn1.onclick = function(){
        if(te.value!=""){
            var newdiv   = document.createElement("div");  //创建新的div
            var newinput = document.createElement("input"); //创建新的input来显示输入的内容
            //设置input的相关属性
            newinput.setAttribute("type","text");
            newinput.setAttribute("readonly","readonly");
            newinput.value = te.value;
            //创建btn节点以及实现当点击该按钮时进行删除
            var newbtn   = document.createElement("button");     //设置点击删除按钮
            newbtn.innerHTML="删除";
            newbtn.onclick = function(){
                var a  = newbtn.parentNode.parentNode;
                a.removeChild(this.parentNode);
            }
            newdiv.appendChild(newinput);
            newdiv.appendChild(newbtn);
            newdiv.setAttribute("class","bottom clear");
            box.appendChild(newdiv);
        }
}
}
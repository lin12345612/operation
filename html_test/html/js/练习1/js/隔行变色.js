/**
 * Created by 啊烁 on 2017/8/31.
 */
window.onload = function(){

    var li = document.getElementsByTagName("li");
    var ig = document.getElementById("ig").getElementsByTagName("div");
    for(var i = 0,len = li.length;i<len;i++) {
        li[i].index = i;
        if (i % 2 != 0) {
            li[i].style.color = "red";
            li[i].style.backgroundColor = "yellow";
        }
        li[i].onmouseover = function(){
            this.className = "test";
            for(var j = 0;j<ig.length;j++){
                ig[j].style.display = "none";
            }
            ig[this.index].style.display = "block";

}
        li[i].onmouseout = function(){
            this.className = "";
        }
    }

}

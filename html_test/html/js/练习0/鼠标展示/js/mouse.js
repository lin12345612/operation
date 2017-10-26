/**
 * Created by 啊烁 on 2017/9/20.
 */
window.onload = function(){
    var box = document.getElementById("bx");
    var divs = box.children[0].children;
    var lis = box.children[1].children[0].children;
    //console.log(lis.length);
    for(var i = 0;i<lis.length;i++){
        lis[i].index = i;
        lis[i].onmouseover = function(){
            for(var j=0;j<divs.length;j++){
                divs[j].style.display = "none";
            }
            divs[this.index].style.display = "block";
        }
    }

 }
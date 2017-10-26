/**
 * Created by 啊烁 on 2017/9/2.
 */
window.onload = function(){

    function t( id1,id2,tab1,tab2){
    var pa = document.getElementById(id1).getElementsByTagName(tab1);
    var ig = document.getElementById(id2).getElementsByTagName(tab2);

    for( var g = 0;g<pa.length;g++){
        pa[g].index = g;
        pa[g].onmouseover = function(){
            for(var i = 0;i<pa.length;i++) {
                pa[i].style.backgroundColor = "";
                pa[i].style.color = "white";
            }
            this.style.backgroundColor = "yellow";
            this.style.color = "black";
            for(var j = 0;j<ig.length;j++){
                ig[j].style.display = "none";
            }
            ig[this.index].style.display  = "block";
        }
    }
    }
    t("kl","im","span","div");
    t("kp","in","span","div");
    t("ko","ib","span","div");
}
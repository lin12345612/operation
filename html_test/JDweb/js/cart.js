window.onload = function(){
    selectCheckBox();
    deleteSpan();
    warmBox();
};
//选中box
function selectCheckBox(){
    var checkBox = document.getElementsByClassName("productCheck");
    for( var i = 0 ; i < checkBox.length ; i++){
        var flag = 0;
        checkBox[i].addEventListener("click",function(){
            if(flag == 0){
                this.style.backgroundPosition = "32px -1px";
                flag = 1;
            }else{
                this.style.backgroundPosition = "2px -1px";
                flag = 0 ;
            }
        });
    }
}

//删除按钮
function deleteSpan(){
    var  deleteSpan = document.getElementsByClassName("delete");   //获取删除按钮
    var warmBox = document.getElementsByClassName("warm-box")[0];   //获取弹出页面
    for( var i = 0 ; i < deleteSpan.length ; i++){
        deleteSpan[i].addEventListener("click",function(){
            warmBox.style.display = "block" ;
        });
    }
}

//弹出页面
function warmBox(){
    var confirmBox = document.getElementsByClassName("confirm")[0];
    var deleteA = confirmBox.children[0];   //取消按钮
    var deleteB = confirmBox.children[1];   //确认按钮
    deleteA.addEventListener("click",function(){
        confirmBox.parentNode.parentNode.style.display = "none";
    });
    deleteB.addEventListener("click",function(){
        console.log(55);
    });
}

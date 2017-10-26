window.onload = function(){
    var txt = document.getElementById("txt");
    var la  = document.getElementById("la");
    txt.oninput = function(){
        if(txt.value!="")
            la.style.display = "none";
        else
            la.style.display = "block";
    }
    txt.onpropertychange = function(){
        if(txt.value!="")
            la.style.display = "none";
        else
            la.style.display = "block";
    }
}
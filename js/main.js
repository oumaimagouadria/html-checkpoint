function bold(){
    console.log("test")
    var textarea=document.getElementById("textarea");
    if ( textarea.style.fontWeight = 'normal') {
        textarea.style.fontWeight = 'bold';
    }
    else {
        textarea.style.fontWeight = 'normal';
    }


}

    function italic(){
        console.log("test")
        var textarea=document.getElementById("textarea");
        if (textarea.style.fontStyle == 'normal') {
            textarea.style.fontStyle = 'italic';
        }
        else {
            textarea.style.fontStyle = 'normal';
        }
        
        
    }
    
    function underline(){
        console.log("test")
        var textdecoration=document.getElementById("textdecoration");
        if (textdecoration.style.fontStyle == 'normal') {
            textdecoration.style.fontStyle = 'underline';
        }
        else {
            textarea.style.fontStyle = 'normal';
        }
        
        
    }
{
    var fontSize = document.getElementById('fontSize');
    fontSize.onchange = function () {
        var txtBox = document.getElementById("txtBox")
        txtBox.style.fontSize = this.value +"px";
    }
}
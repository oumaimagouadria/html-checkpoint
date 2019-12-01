function boldx() {
    var textarea = document.getElementById("textarea");
    console.log(textarea.style.fontWeight);
    if (textarea.style.fontWeight == 'bold') {
        textarea.style.fontWeight = '';
    }
    else {
        textarea.style.fontWeight = 'bold';
    }
}

function italic() {
    var textarea = document.getElementById("textarea");
    console.log(textarea.style.fontstyle)
    if (textarea.style.fontStyle == 'normal') {
        textarea.style.fontStyle = 'italic';
    }
    else {
        textarea.style.fontStyle = 'normal';
    }
}

function underline() {
    var textarea = document.getElementById("textarea");
    console.log(textarea.style.textDecoration)

    if (textarea.style.textDecoration == '') {
        textarea.style.textDecoration = 'underline';
    }
    else {
        textarea.style.textDecoration = '';
    }
}

function fontsize() {
    var textarea = document.getElementById("textarea");
    var size = document.getElementById("fonts");
    textarea.style.fontSize = size.options[size.selectedIndex].text;


}



function fontfamily() {
    var textarea = document.getElementById("textarea");
    var family = document.getElementById("fontss");
    textarea.style.fontFamily = family.options[family.selectedIndex].text;


}







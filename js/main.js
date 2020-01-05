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




$(".course1").hover(function(){
    $(".boutton1").toggleClass('boutton1Hover')
})

$(".course2").hover(function(){
    $(".boutton2").toggleClass('boutton1Hover')
})

$(".course3").hover(function(){
    $(".boutton3").toggleClass('boutton1Hover')
})

$(".course4").hover(function(){
    $(".boutton4").toggleClass('boutton1Hover')
})

$(".course5").hover(function(){
    $(".boutton5").toggleClass('boutton1Hover')
})

$(".course6").hover(function(){
    $(".boutton6").toggleClass('boutton1Hover')
})

$(".course7").hover(function(){
    $(".boutton7").toggleClass('boutton1Hover')
})

$(".course8").hover(function(){
    $(".boutton8").toggleClass('boutton1Hover')
})

$(".course9").hover(function(){
    $(".boutton9").toggleClass('bouttonHover')
})

$(".course1").click(function(){
    $("#ex1").modal("open");
});
$(".course2").click(function(){
    $("#ex1").modal("open");
});
$(".course3").click(function(){
    $("#ex1").modal("open");
});
$(".course4").click(function(){
    $("#ex1").modal("open");
});
$(".course5").click(function(){
    $("#ex1").modal("open");
});
$(".course6").click(function(){
    $("#ex1").modal("open");
});
$(".course7").click(function(){
    $("#ex1").modal("open");
});
$(".course8").click(function(){
    $("#ex1").modal("open");
});
$(".course9").click(function(){
    $("#ex1").modal("open");
});




var firebaseConfig = {
    apiKey: "AIzaSyCdO8dJcQKs9Mh6WDa-JPG6qJtJ-Sxjr1s",
    authDomain: "gmcfirst-87f27.firebaseapp.com",
    databaseURL: "https://oumaimagouadria-ff1f5.firebaseio.com/",
    projectId: "gmcfirst-87f27",
    storageBucket: "gmcfirst-87f27.appspot.com",
    messagingSenderId: "465629966566",
    appId: "1:465629966566:web:9690e9f0d1489c96944b27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var messagesRef = firebase.database().ref('Contact');


  var messagesRef = firebase.database().ref('Contact');

  document.getElementById('contactform').addEventListener('submit', submitForm);
  
  
  function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var track = getInputVal('track');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    console.log(name);
    console.log(track);
    console.log(email);
    console.log(phone);
    saveMessage(name,track,email,phone);
  
  }
  
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  function saveMessage(name,track,email,phone){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name:name,
      track:track,
      email:email,
      phone:phone
    });
  }
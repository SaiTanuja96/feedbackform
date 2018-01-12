var config = {
    apiKey: "AIzaSyArAt_7WVLsjf69OTcU-bW15xHKkMORoKI",
    authDomain: "feedbackform-db2ce.firebaseapp.com",
    databaseURL: "https://feedbackform-db2ce.firebaseio.com",
    projectId: "feedbackform-db2ce",
    storageBucket: "feedbackform-db2ce.appspot.com",
    messagingSenderId: "698671220999"
  };
  firebase.initializeApp(config);


    var name = document.getElementById("name");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var msgbox = document.getElementById("msgbox");

function submitClick() { 
//    window.alert('Clicked')
var datab = firebase.database().ref();
 
//    var user = name.nodeValue;
    datab.child("text").set("name");
//    var mail = email.nodeValue;
//    firebaseRef.child("mail").set(mail);
//     var num = phone.value;
//     firebaseRef.child("telephone").set(num);
//     var feedback = msgbox.nodeValue;
//    firebaseRef.child("msg").set(feedback);
   
}

function exe(){
    var firebasedatabase = firebase.database().ref();
    firebasedatabase.child("ONE").set("TWO");
}
        
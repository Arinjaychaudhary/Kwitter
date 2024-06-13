var firebaseConfig = {
      apiKey: "AIzaSyC9mzKsAvKJiXK4xSy_qtoba2hMPEeJnUA",
      authDomain: "kwitter-ebdd7.firebaseapp.com",
      databaseURL: "https://kwitter-ebdd7-default-rtdb.firebaseio.com",
      projectId: "kwitter-ebdd7",
      storageBucket: "kwitter-ebdd7.appspot.com",
      messagingSenderId: "737160291920",
      appId: "1:737160291920:web:3765c584d4e9b939eb5355"
    };
    firebase.initializeApp(firebaseConfig);



var user_name= localStorage.getItem("named");
var room_name=localStorage.getItem("room_name")


function send(){
      msg=document.getElementById("msg").value
      firebase.database().ref(room_name).push({
        
            message:msg,
            name:user_name
          });
  
}






function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;

          console.log(firebase_message_id);
          console.log(message_data);
          usrname=message_data["name"];
          
          message=message_data["message"];
          
          nam="<h4>"+usrname+"<img class='user-tick' id='tick' src='tick.png'></h4>";
          messag="<h4 class='message_h4'>"+message+"</h4><hr>";
          row=nam+messag;
          document.getElementById("output").innerHTML+=row;

//End code
      } });  }); }
getData();
function logout(){
      window.location="index.html";
}
var firebaseConfig = {
    apiKey: "AIzaSyAxd8_G7IRn3D8aKexC3POdlbfFwVCHOWo",
    authDomain: "sandwich-9855f.firebaseapp.com",
    databaseURL: "https://sandwich-9855f-default-rtdb.firebaseio.com",
    projectId: "sandwich-9855f",
    storageBucket: "sandwich-9855f.appspot.com",
    messagingSenderId: "1068055897076",
    appId: "1:1068055897076:web:c0f68c1078d21154c5cfa1"
  };
firebase.initializeApp(firebaseConfig);

var room_name=localStorage.getItem("room_name");
var user_name=localStorage.getItem("usr");
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        message:msg,
        usrname:user_name,
        like:0
    });
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
        namee=message_data["usrname"];
        message=message_data["message"];
        like=message_data["like"];
        nametag="<h4>"+namee+"<img class='user_tick' src='tick.png'></h4>";
        msgtag="<h4 class='message h4'>"+message+"</h4>";
        liketag="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='likeupdate(this.id)'>";
        likespan="<span class='glyphicon glyphicon-thumbs-up'>Like:"+like+"</span></button><hr>";
        row=nametag+msgtag+liketag+likespan;
        document.getElementById("output").innerHTML+=row;
      } });  }); }
getData();

function likeupdate(message_id){
    button_id=message_id;
    likes=document.getElementById(button_id).value;
    updatedlikes=Number(likes)+1;
    firebase.database().ref(room_name).child(message_id).update({
        like:updatedlikes

    });
}

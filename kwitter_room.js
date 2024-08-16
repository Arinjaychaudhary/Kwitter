
//ADD YOUR FIREBASE LINKS HERE
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







function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function Addroom(){
      room_name=document.getElementById("addroom").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirect(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}
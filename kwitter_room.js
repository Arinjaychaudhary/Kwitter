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

  document.getElementById("hello").innerHTML= `Welcome ${user_name} `;











function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room name _ "+Room_names);
       row="<div class=room_name id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;
       
      
      });});}
getData();
function addRoom(){
      roomname=document.getElementById("room_name").value;
      firebase.database().ref(roomname).update({
            purpose:"chat"
          });
      localStorage.setItem("room_name",roomname);
        window.location="kwitter_page.html";
}
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
        window.location="kwitter_page.html";
}
function logout(){
  window.location="index.html";
}
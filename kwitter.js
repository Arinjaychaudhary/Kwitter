function nextpg(){
    user_name=document.getElementById("usr").value;
    localStorage.setItem("usr",user_name);
    window.location="kwitter_room.html";

}
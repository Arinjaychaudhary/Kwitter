function login(){
    username=document.getElementById("named").value; 
    localStorage.setItem("named",username);
    window.location="kwitter_room.html"
}
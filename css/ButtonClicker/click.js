function toggle(btn){
    if(btn.innerText === "Login"){
        btn.innerText = "Logout"
    }else{
        btn.innerText = "Login";
    }
}

function remove(btn){
    btn.remove()
}


function likes(){
    alert("Ninja was liked!");
}
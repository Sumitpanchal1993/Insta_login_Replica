
let userID = document.getElementById("userID")
let userKey = document.getElementById("userKey") 

function handleLogin (){   
    localStorage.setItem("userid", userID.value ) 
    localStorage.setItem("userKey", userKey.value )
}
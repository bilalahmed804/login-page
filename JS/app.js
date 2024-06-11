function changeIcon(){
    var passwordInput =document.getElementById("password");
    var iconSpan = document.getElementById("hiddenIcon");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconSpan.textContent = "👁️"; 
    } else {
        passwordInput.type = "password";
        iconSpan.textContent = "🔒";
        
    }

}

let input = document.getElementById("input");

let password = document.getElementById("password");


let logIn = document.getElementById('btn01');
var getValue = localStorage.getItem("check")

console.log(getValue);

logIn.addEventListener('click',()=>{
    
    if(input.value == password.value){
        alert("enter your input feild")
    }
    else{
        window.location.href ="../HTML/dashboard.html";
            
    }
    
 })
        
        



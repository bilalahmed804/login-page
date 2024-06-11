function changeIcon(){
    var passwordInput =document.querySelector(".main01")
    var iconSpan = document.getElementById("hiddenIcon");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        iconSpan.textContent = "👁️"; 
    } else {
        passwordInput.type = "password";
        iconSpan.textContent = "🔒";
        
    }

}          
let input = document.getElementById("input01");
let email = document.getElementById('email01');

let password = document.getElementById("password01");


localStorage.setItem("check",true)



let button = document.getElementById('btn22');


button.addEventListener('click', function(){
    
    if(email.value == password.value){
        alert("Enter your input feild")
        }else{
            
            
                window.location.href ="HTML/index.html";
                
            
                let arrOne = [];
                
                let userObj = {
                    name:input.value,
                email:email.value,
                password:password.value
                }
                
                arrOne.push(userObj)
                console.log(arrOne);
                let mainValue =  JSON.stringify(arrOne)
                
                localStorage.setItem("key",mainValue)
                    }
                    })
                    
let Email = document.getElementById("userEmail");
let userPass = document.getElementById("userPassword");
let loginButton = document.getElementById("loginBtn");
let statusMessage = document.getElementById("statusMessage");

function login() {
    let emailValue = Email.value;
    let passwordValue = userPass.value;

    statusMessage.style.fontSize = "12px";
    statusMessage.style.marginTop = "5px 0";

    if (emailValue === "" || passwordValue === "") {
        statusMessage.innerText = "Please fill in all fields.";
        statusMessage.style.color = "brown";
    }   
    else if(passwordValue.length < 6) {
        statusMessage.innerText = "Password must be at least 6 characters long.";
        statusMessage.style.color = "brown";
    }
    else {
         statusMessage.innerText = "Login Successful!";
        statusMessage.style.color = "green";
        console.log("Logged In Email:", emailValue);
    }
    
}

loginButton.addEventListener("click", login);


/*
id="userEmail"
id="userPassword"
id="loginBtn"
*/
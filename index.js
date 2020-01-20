
// ============= REGISTER

function registration() 
{
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let registerEmail = document.getElementById("registerEmail").value;
    let registerPassword = document.getElementById("registerPassword").value;

    let findLetters = /^[a-zA-Z\']+$/;
    let findEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (firstName === '' && lastName === '')
    {
        alert("Please enter your first and last name");
    }  
    else if (!findLetters.test(firstName) || !findLetters.test(lastName))
    {
        alert("Name field required only alphabet characters");
    }
    else if (registerEmail === '') {
        alert("Please enter your email");
    }
    else if (!findEmail.test(registerEmail))
    {
        alert("Invalid email")
    }
    else if (registerPassword === '') 
    {
        alert("Please enter your password");
    }
    else if (registerPassword.length < 8)
    {
        alert("Password must be at least 8 characters");
    }
    else {
        window.location.href="login.html";
    }

};


// ================== LOCAL STORAGE

let registrationData = [];
let userData = (event) => {
    event.preventDefault();
    let data = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        registerEmail: document.getElementById("registerEmail").value,
        registerPassword: document.getElementById("registerPassword").value

    }
    registrationData.push(data);

    localStorage.setItem("userRegistrationData", JSON.stringify(registrationData));

};

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('registrationButton').addEventListener('click', userData);

});


// =================== LOGIN

function login() 
{
    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let findEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (loginEmail === '') 
    {
        alert("Please enter your email");
    }
    else if (!findEmail.test(loginEmail))
    {
        alert("Invalid email")
    }
    else if (loginPassword === '') 
    {
        alert("Please enter your password");
    }
    else if (loginPassword.length < 8)
    {
        alert("Password must be at least 8 characters");
    }
    else {
        window.location.href="index.html";
    }

    localStorage.setItem("loginEmail", JSON.stringify(data));
    localStorage.setItem("loginPassword");

}


let loginData = [];
let loginUserData = (event) => {
    event.preventDefault();
    let userLoginData = {
        loginEmail: document.getElementById("loginEmail").value,
        loginPassword: document.getElementById("loginPassword").value

    }
    loginData.push(userLoginData);

    localStorage.setItem("usersLoginData", JSON.stringify(loginData));

};

document.addEventListener('DOMContentLoaded', () => {
document.getElementById('loginButton').addEventListener('click', loginUserData);
});


// =================== HOME


let firstName = JSON.parse(localStorage.getItem('userRegistrationData'));

document.getElementById("greetings").innerHTML = 'Hello, ' + firstName[0].firstName + '!';



// ============= LOGOUT

function logoutButton () {
    localStorage.clear();

    window.location.href = "login.html"
}



/*
const loginForm = document.getElementById("login-form");
    (when using queryselector for an id, it would be
    "#login-form" to specify that it is an id~)

const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
*/

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

 /*
function onLoginBtnClick() {
    console.log(loginInput.value);
    //console.dir shows us the 내용 of loginInput
    console.log("click");
||||||||||||||||||||||||||||||||||||||||||||||||||||||||
   const username = loginInput.value;
   if(username === "") {
       alert("Please input your name");
    } else if(username.length > 22) {
        alert("Please limit name to 22 characters.");
    }
}
*/

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    console.log(username);
    //greeting.innerText = "Hello " + username; 
    //for the below format, use a backtick not single quotation (below '~')
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `안녕하세요, ${username}님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null) {
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    //show the greetings
    paintGreetings(savedUsername);
}

const h1 = document.querySelector("div.hello:first-child h1");
/* you can document.header, .title, .body, but
this doesnt work for anything else. other elements
must be searched for via queryselector */


/* do not "play" [function()] function when listening 
js will play it 자동으로) */

console.log(h1);

function handleTitleClick() {
    h1.style.color = "purple";
}
function handleMouseEnter() {
    h1.innerText = "mouse is here!";
}
function handleMouseLeave() {
    h1.innerText = "mouse is gone!";
}
//
function handleWindowResize() {
    document.body.style.backgroundColor = "Thistle";
}
function handleWindowCopy(){
    alert("copycat!");
}
function handleWindowOffline(){
    alert("SOS your wifi is down!");
}
function handleWindowOnline(){
    alert("Great, you're reconnected!!");
}
/* addevenlistener can also be written as
title.on [insert command such as click] = handleTitleClick;
and it will have the same function */

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);
//
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

/*
||||||||||||||||||||||||||||||||||||
CONDITIONALS
IF ELSE
||||||||||||||||||||||||||||||||||||
*/

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "purple") {
        newColor = "RebeccaPurple";
    } else {
    newColor = "purple"
    }
    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick)

/*
||||||||||||||||||||||||||||||||||||
CLEANER CODE
||||||||||||||||||||||||||||||||||||
*/


const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    const activeClass = "active";
    if (h1.classList.contains(activeClass)) {
        h1.classList.remove(activeClass);
    } else {
        h1.classList.add(activeClass);
    }
}

/* even better practice would be to use toggle:

function handleTitleClick(){
    h1.classList.toggle("active");
}

then it is only 1 line of code!
like a light switch or off/on button */

h1.addEventListener("click", handleTitleClick)
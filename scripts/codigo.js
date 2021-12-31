let myImage = document.getElementById("logo1");
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if(mySrc === "https://icones.pro/wp-content/uploads/2021/04/icone-netflix-symbole-logo-original.png") {
    myImage.setAttribute ("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1280px-Netflix_logo.svg.png");
  } else{
    myImage.setAttribute ("src", "https://icones.pro/wp-content/uploads/2021/04/icone-netflix-symbole-logo-original.png");
  }
}

function setUserName() {
  let myName = prompt('Introduzca su nombre'); 
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName); 
    myHeading.innerHTML = 'Netflix, un mundo de fantasía para ti, ' + myName;
  }
}

if(! localStorage.getItem('name')) {
  setUserName(); 
  } else {
    let storedName = localStorage.getItem('name'); 
    myHeading.innerHTML = 'Netflix, un mundo de fantasía para ti,  ' + storedName;
  }

myButton.onclick = function() {
  setUserName();
}

onload = function startAnimation() { 
    var frameHeight = 102; 
    var frames = 15; 
    var frame = 0; 
    var div = document.getElementById("animation"); 
    setInterval(function () { 
        var frameOffset = (++frame % frames) * -frameHeight; 
        div.style.backgroundPosition = "0px " + frameOffset + "px"; 
    }, 100); 
};

let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if(mySrc === "https://icones.pro/wp-content/uploads/2021/04/icone-netflix-symbole-logo-original.png") {
    myImage.setAttribute ("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/1280px-Netflix_logo.svg.png");
  } else{
    myImage.setAttribute ("src", "https://icones.pro/wp-content/uploads/2021/04/icone-netflix-symbole-logo-original.png");
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Introduzca su nombre'); 
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName); 
    myHeading.innerHTML = 'Netflix, películas para viajar a Matrix, ' + myName;
  }
}

if(! localStorage.getItem('name')) {
  setUserName(); 
  } else {
    let storedName = localStorage.getItem('name'); 
    myHeading.innerHTML = 'Netflix, películas para viajar a Matrix,  ' + storedName;
  }

myButton.onclick = function() {
  setUserName();
}

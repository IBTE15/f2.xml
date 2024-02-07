// DOM .......DOCUMENT OBJECT MODEL

//let word = document.getElementById('para');
//word.innerHTML = "Kese Ho";
//word.style.backgroundColor = "yellow";

//console.log(word);

let elem = document.getElementById('second');
//elem.innerHTML = "Kese Ho";
elem.textContent = "AN APPLE A DAY!";
elem.style.backgroundColor = "Yellow";
elem.style.textAlign = "center";
elem.style.padding = "20px";
elem.classList.add ('two');
elem.classList.add ('three');
elem.id = "hello";
elem.classList.remove ('two');

let myDiv = document.getElementsByClassName('container');
myDiv[0].innerHTML = "XYZ";
myDiv[0].style.backgroundColor = "green";
myDiv[0].style.fontSize = "40px";
myDiv[0].style.color = "white";
myDiv[0].style.textAlign = "center";
myDiv[0].classList.add("World");
myDiv[0].id = "pencil";

let newElem = document.createElement('p');

myDiv[0].appendChild(newElem);
newElem.innerHTML= "WOW";

let pencil = document.createElement('img');
newElem.appendChild(pencil);

pencil.src = "VivoX80-b.jpg";
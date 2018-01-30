var myImage = document.querySelector('img');

myImage.onclick = function(){
	var mySrc = myImage.getAttribute('src');
	if(mySrc==='images/pervayastranica.jpg') {
		myImage.setAttribute ('src','images/pervayastranicano4.jpg');
	} else {
		myImage.setAttribute('src','images/pervayastranica.jpg');
	}
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Введи имя, гусь.');
	localStorage.setItem('Имя',myName);
	myHeading.innerHTML = 'Ебать ты гусяка,' + myName;
}
if(!localStorage.getItem('Имя')){
	setUserName();
}
else {
	var storedName = localStorage.getItem('Имя');
	myHeading.innerHTML = 'Ебать ты гусяка,' + StoredName;
}
myButton.onclick = function() {
	setUserName();
}
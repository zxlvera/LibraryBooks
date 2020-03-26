// let myLibrary = ["The Little Red Riding Hood", "Three Little Pigs", "The Little Prince"];
var myLibrary = [
	["Alice in Wonderland", "Lewis Carroll", 100],
	["The Great Gatsby", "F. Scott Fitzgerald", 40],
	["Animal Farm", "George Orwell", 70]
];


function loadBooks() {
	var booklist = document.getElementById("booklist");
	if(myLibrary.length > 0){
		localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
		lastbook = myLibrary[myLibrary.length-1];
		var row = booklist.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = lastbook[0];
		cell2.innerHTML = lastbook[1];
		cell3.innerHTML = lastbook[2] + "%";
	}
}

function Book(title, author, progress) {
	this.title = title;
	this.author = author;
	this.progress = progress;
	this.addBook = function() {
		myLibrary.push([title,author, progress]);
	}
}

function addToLibrary() {
	title = document.getElementById("title").value;
	author = document.getElementById("author").value;
	progress = Math.floor((Math.random()* 100) + 1);
	newbook = new Book(title,author, progress);
	newbook.addBook();
	loadBooks();
}

window.onload = function () {
	var storageLib = JSON.parse(localStorage.getItem("myLibrary"));
	for(i=0; i<storageLib.length; i++){
		var row = booklist.insertRow(1);
		var cell1 = row.insertCell(0);
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		cell1.innerHTML = storageLib[i][0];
		cell2.innerHTML = storageLib[i][1];
		cell3.innerHTML = storageLib[i][2] + "%";
	}
	myLibrary = storageLib;
}
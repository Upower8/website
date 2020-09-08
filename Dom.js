var button = document.getElementById("enter");
var button2= document.getElementById("remove");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function removeListElement() {//new
	if(ul.lastChild!==null)
	ul.lastChild.remove();
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
function removeListAfterClick() {/*new*/
		removeListElement();
}


button.addEventListener("click", addListAfterClick);

button2.addEventListener("click", removeListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
"use strict";

function word(n) {
	document.getElementById("out").innerHTML = document.getElementById("out").innerHTML + n;
}
function del() {
	var o = document.getElementById("out").innerHTML;
	var x = document.getElementById("out").innerHTML.length;
	document.getElementById("out").innerHTML = o.substr(0, x - 1);
}
function empty() {
	document.getElementById("out").innerHTML = '';
}
function bar(n) {
	document.getElementById("out").innerHTML = document.getElementById("out").innerHTML + ' ';
}

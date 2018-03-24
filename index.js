var $ = require("jquery");
var _ = require("lodash");

var list = [ "john", "paul", "george", "ringo" ];

function addList(){
	var newItem = $("#newItem").val();
	list.push(newItem);
	printList();
	$("#newItem").val("");
}

function printList(){
	var ourList = $("#nameList");
	ourList.html("");
	_(list).forEach(function(el){
		ourList.append("<li>" + el + "</li>");
	});
}

$(document).ready(printList);

window.addList = addList;
window.printList = printList;
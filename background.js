var now = new Date();
var hours = now.getHours();

document.bgColor = "#ffffff;";

if (hours > 6 && hours < 7){
	document.write ('<body style="background-color: #ffbf4d;">');
}

else if (hours > 7 && hours < 12){
	document.write ('<body style="background-color: #c1e3f7;">');
}

else if (hours > 12 && hours < 14){
	document.write ('<body style="background-color: #98ceea;">');
}

else if (hours > 14 && hours < 18){
	document.write ('<body style="background-color: #c1e3f7;">');
}

else if (hours > 18 && hours < 19){
	document.write ('<body style="background-color: #f4b44d;">');
}

else if (hours > 19 || hours < 6){
	document.write ('<body style="background-color: #000000;">');
}

else {
	document.write ('<body style="background-color: #ffffff;">');
}


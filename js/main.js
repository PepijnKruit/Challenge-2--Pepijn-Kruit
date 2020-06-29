function realtimeClock() {

	var rtClock = new Date();

	var hours = rtClock.getHours();
	var minutes = rtClock.getMinutes();
	var seconds = rtClock.getSeconds();

	var amPm = ( hours < 12 ) ? "AM" : "PM";

	hours = (hours > 12) ? hours - 12 : hours;

	hours = ("0" + hours).slice(-2);
	minutes = ("0" + minutes).slice(-2);
	seconds = ("0" + seconds).slice(-2);

	document.getElementById('clock').innerHTML = hours + "  :  " + minutes + "  :  "+ seconds + " " + amPm;
	var t = setTimeout(realtimeClock, 500);

}

window.onload=realtimeClock;




var today = new Date();

var maanden = new Array('Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.');

document.getElementById('clock-2').innerHTML = today.getDate() + ' ' + maanden[today.getMonth()] + ' ' +today.getFullYear();
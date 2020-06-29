/*-----CLOCK-----*/

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




/*-----BACKGROUND-----*/

var t = new Date().getHours();


if (t < 6) {
    document.body.style.backgroundColor="#000000";
    document.getElementById("time").style.backgroundColor = "#333333";
    document.getElementById("clock").style.color = "#ffffff";
    document.getElementById("clock-2").style.color = "#cccccc";
} else if (t < 7) {
    document.body.style.backgroundColor="#ffbf4d";
    document.getElementById("time").style.backgroundColor = "#ffd080";
    document.getElementById("clock").style.color = "#ffffff";
    document.getElementById("clock-2").style.color = "#fff6e6";
} else if (t < 12) {
    document.body.style.backgroundColor="#c1e3f7";
    document.getElementById("time").style.backgroundColor = "#daecf7";
    document.getElementById("clock").style.color = "#ffffff";
    document.getElementById("clock-2").style.color = "#e6f1f7";
} else if (t < 14) {
    document.body.style.backgroundColor="#98ceea";
    document.getElementById("time").style.backgroundColor = "#bcdbeb";
    document.getElementById("clock").style.color = "#ffffff";
    document.getElementById("clock-2").style.color = "#d3e3eb";
} else if (t < 18) {
    document.body.style.backgroundColor="#63caff";
    document.getElementById("time").style.backgroundColor = "#96dcff";
    document.getElementById("clock").style.color = "#ffffff";
    document.getElementById("clock-2").style.color = "#e3f6ff";
} else if (t < 19) {
    document.body.style.backgroundColor="#f4b44d";
    document.getElementById("time").style.backgroundColor = "#f5c87f";
    document.getElementById("clock").style.color = "#ffffff";
    document.getElementById("clock-2").style.color = "#f5ebdc";
} else if (t < 22) {
    document.body.style.backgroundColor="#cf7e40";
    document.getElementById("time").style.backgroundColor = "#cf9569";
    document.getElementById("clock").style.color = "#ffffff";
    document.getElementById("clock-2").style.color = "#e8ceba";
} else {
    document.body.style.backgroundColor="#000000";
    document.getElementById("time").style.backgroundColor = "#333333";
    document.getElementById("clock").style.color = "#ffffff";
    document.getElementById("clock-2").style.color = "#cccccc";
}
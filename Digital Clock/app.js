window.addEventListener("DOMContentLoaded", showTime());

function showTime() {
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	let session = "AM";

	if (hours == 0) {
		hours = 12;
	}
	if (hours >= 12) {
		session = "PM";
	}
	if (hours > 12) {
		hours = hours - 12;
	}

	hours = hours < 10 ? (hours = "0" + hours) : hours;
	minutes = minutes < 10 ? (minutes = "0" + minutes) : minutes;
	seconds = seconds < 10 ? (seconds = "0" + seconds) : seconds;

	const time = `${hours}:${minutes}<span>${seconds}|${session}</span>`;

	document.getElementById("display-clock").innerHTML = time;
	setTimeout(showTime, 1000);

	// Body Background
	let bg;
	const userName = "Ameer";
	const user = document.getElementById("user");

	if (hours < 8 && session === "AM") {
		bg = `url(https://images.unsplash.com/photo-1415750465391-51ed29b1e610?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`;
		user.innerHTML = `Good morning ${userName}`;
	} else if (hours < 11 && session === "AM") {
		bg = `url(https://images.unsplash.com/photo-1511320392863-449562bdc706?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`;
		user.innerHTML = `Good day ${userName}`;
	} else if (hours < 4 && session === "PM") {
		bg = `url(https://images.unsplash.com/photo-1577257108037-e85032e84049?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80)`;
		user.innerHTML = `Good afternoon ${userName}`;
	} else if (hours < 7 && session === "PM") {
		bg = `url(https://images.unsplash.com/photo-1607414750060-1c34b91359ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80)`;
		user.innerHTML = `Good evening ${userName}`;
	} else {
		bg = `url(https://images.unsplash.com/photo-1523590564318-491748f70ea7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`;
		user.innerHTML = `Good night ${userName}`;
	}

	// Insert bg image
	const body = document.querySelector("body");
	body.style.background = `${bg} center/cover`;
}

// Today's focus
document.querySelector(".focus-container input").addEventListener("keypress", function (event) {
	if (event.key === "Enter") {
		const focus = document.querySelector(".focus-container input");
		document.querySelector(".focus-container").innerHTML = `<h6>Today's focus:</h6><h2>${focus.value}</h2>`;
	}
});

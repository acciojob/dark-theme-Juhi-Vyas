let app = document.getElementById("app")
let para = document.getElementById("ptag")
let btn = document.getElementById("swap")


function swapTheme() {
	app.className.remove = "day"
	app.className = "night"
	btn.className.remove = "button_day"
	btn.className = "button_night"
}

btn.addEventListener("click", swapTheme)






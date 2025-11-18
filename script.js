let app = document.getElementById("app")
let para = document.getElementById("ptag")
let btn = document.getElementById("swap")


function swapTheme() {
	app.classList.toggle("night");
    btn.classList.toggle("button_night")
}

btn.addEventListener("click", swapTheme)






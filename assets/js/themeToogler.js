const toogler = document.getElementById("toogle");
const logo = document.getElementById("logo");
const socialLinks = document.querySelectorAll(".social-link");
let darkTheme = false;
body.style.transition = "All .5s ease-in-out";

const toogleDark = () => {
	body.classList.add("dark-mode");
	toogler.classList.add("toogler-dark");
};

const toogleLight = () => {
	body.classList.remove("dark-mode");
	toogler.classList.remove("toogler-dark");
};

toogler.addEventListener("click", () => {
	darkTheme = !darkTheme;
	localStorage.setItem("theme", `${darkTheme ? "dark" : "light"}`);
	localStorage.getItem("theme") == "dark" ? toogleDark() : toogleLight();
});

localStorage.getItem("theme") == "dark" ? toogleDark() : toogleLight();

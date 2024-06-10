let page = document.querySelector(".body");
let themeButton = document.querySelector(".themeButton");

themeButton.onclick = function(){
    themeButton.value = (themeButton.value === "Dark theme") ? "Light theme" : "Dark theme";
    page.classList.toggle("lightTheme");
    page.classList.toggle("darkTheme");
}
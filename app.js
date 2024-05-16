// This allows the dark mod to work
const cssStyleSheet = document.getElementById("theme-css") //gets the reference to css to toggle page
const toggleBtn = document.getElementById("toggle-theme") //gets the reference to toggle page

if (toggleBtn) toggleBtn.addEventListener('click', changeTheme);//to make sure there is no errors

function changeTheme() {
    //get current theme
    const oldTheme = getTheme();

    //invert the theme
    let newTheme;

    if (oldTheme === "dark") {
        newTheme = "light";
    } else newTheme = "dark";

    localStorage.setItem('theme', newTheme);
    cssStyleSheet.href = `./css/${newTheme}.css`;

    //save the new theme and show it
}

function getTheme() {
    let theme = localStorage.getItem("theme") //returns the value if not exists it returns null

    if (theme === null) {
        theme = "dark";
        localStorage.setItem("theme", theme);
    }

    return theme; //returns either dark or light
}

(() => {
    let theme = getTheme();
    cssStyleSheet.href = `./css/${theme}.css`;
})()

// email 


//
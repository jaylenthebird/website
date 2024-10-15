function toggleTheme() {
    if (localStorage.theme == "dark") {
        localStorage.theme = "light";
        document.body.classList.remove("dark-mode");
    } else {
        localStorage.theme = "dark";
        document.body.classList.add("dark-mode");
    }
    console.log("Successfully set theme to " + localStorage.theme);
}

function checkTheme() {
    if (localStorage.theme == "dark") {
        document.body.classList.add("dark-mode");
    }
}

function systemTheme() {
    if (!localStorage.theme) {
        if (window.matchMedia) {
            if(window.matchMedia('(prefers-color-scheme: dark)').matches){
                document.body.classList.add("dark-mode");
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    systemTheme();
    checkTheme();
}, false);
function toggleTheme() {
    if (localStorage.theme == "dark") {
        localStorage.theme = "light";
        document.querySelector("html").setAttribute("data-bs-theme", "light");
    } else {
        localStorage.theme = "dark";
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
    }
}

function checkTheme() {
    if (localStorage.theme == "dark") {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
    }
}

function systemTheme() {
    if (!localStorage.theme) {
        if (window.matchMedia) {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches){
                localStorage.theme = "dark";
                document.querySelector("html").setAttribute("data-bs-theme", "dark");
            } else {
                localStorage.theme = "light";
            }
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    systemTheme();
    checkTheme();
}, false);

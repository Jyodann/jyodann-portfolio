const dark = "dark"
const light = "light"
function update_icon(current_theme) {
    if (current_theme === dark) {
    dark_icon.classList.add("hidden")
    light_icon.classList.remove("hidden")
    } else {
    dark_icon.classList.remove("hidden")
    light_icon.classList.add("hidden")
    }
}

function change_theme() {
    if (localStorage.theme === dark) {
    document.documentElement.classList.remove(dark)
    localStorage.theme = light
    } else {
    localStorage.theme = dark
    document.documentElement.classList.add(dark)
    }
    update_icon(localStorage.theme)
}

let dark_icon = null
let light_icon = null
let switcher = null
window.addEventListener('DOMContentLoaded', (ev) => {
    switcher = document.getElementById("theme_switcher")
    dark_icon = document.getElementById("theme_dark")
    light_icon = document.getElementById("theme_light")
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === dark || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add(dark)
    localStorage.theme = dark
    } else {
    localStorage.theme = light
    document.documentElement.classList.remove(dark)
    }
    update_icon(localStorage.theme)
    switcher.onclick = change_theme
})

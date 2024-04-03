const [light, dark, hidden] = ["light", "dark", "hidden"]
const light_switch = document.getElementById(light)
const dark_switch = document.getElementById(dark)
const theme = localStorage.getItem("theme")

light_switch.onclick    = () => setTheme(light)
dark_switch.onclick     = () => setTheme(dark)

if (theme === null) {
    if (localStorage.theme === dark || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setTheme(dark)
    } else {
        setTheme(light)
    }
} else {
    setTheme(theme)
}

function setTheme(theme) {
    if (theme == light) {
        document.documentElement.classList.remove(dark)
        light_switch.classList.add(hidden)
        dark_switch.classList.remove(hidden)
    }
    else {
        document.documentElement.classList.add(dark)
        light_switch.classList.remove(hidden)
        dark_switch.classList.add(hidden)
    }
    localStorage.setItem('theme', theme);
} 
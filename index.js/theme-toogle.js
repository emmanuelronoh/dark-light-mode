const toggleButton = document.getElementById('theme-toggle');
const themeStylesheet = document.getElementById('theme-stylesheet');

toggleButton.addEventListener('click', () => {
    if (themeStylesheet.getAttribute('href') === 'css/light-mode.css') {
        themeStylesheet.setAttribute('href', 'css/dark-mode.css');
        localStorage.setItem('theme', 'dark');
    } else {
        themeStylesheet.setAttribute('href', 'css/light-mode.css');
        localStorage.setItem('theme', 'light');
    }
});

// Load the saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    themeStylesheet.setAttribute('href', savedTheme === 'dark' ? 'css/dark-mode.css' : 'css/light-mode.css');
}

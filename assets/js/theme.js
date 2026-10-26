var themeToggle = document.getElementById('theme-toggle');
var root = document.documentElement;
var systemTheme = window.matchMedia('(prefers-color-scheme: dark)');

function isDarkTheme() {
  return root.dataset.theme ? root.dataset.theme === 'dark' : systemTheme.matches;
}

function updateThemeToggle() {
  var darkTheme = isDarkTheme();
  themeToggle.setAttribute('aria-pressed', String(darkTheme));
  themeToggle.setAttribute('aria-label', darkTheme ? 'Switch to light mode' : 'Switch to dark mode');
  themeToggle.querySelector('.fa-moon').hidden = darkTheme;
  themeToggle.querySelector('.fa-sun').hidden = !darkTheme;
}

themeToggle.addEventListener('click', function () {
  var theme = isDarkTheme() ? 'light' : 'dark';
  root.dataset.theme = theme;
  updateThemeToggle();
});

systemTheme.addEventListener('change', function () {
  if (!root.dataset.theme) {
    updateThemeToggle();
  }
});

updateThemeToggle();

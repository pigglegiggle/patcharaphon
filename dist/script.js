const button = document.querySelector("#theme");
const root = document.documentElement;
const themes = ["system", "light", "dark"];
let theme = "system";

try {
  const saved = localStorage.getItem("portfolio-theme");
  if (themes.includes(saved)) theme = saved;
} catch {
  // Theme can still be changed when storage is unavailable.
}

function applyTheme() {
  root.dataset.theme = theme;
  button.textContent = `Theme: ${theme}`;
}

applyTheme();
button.hidden = false;
button.addEventListener("click", () => {
  theme = themes[(themes.indexOf(theme) + 1) % themes.length];
  applyTheme();
  try {
    localStorage.setItem("portfolio-theme", theme);
  } catch {
    // Keep the selected theme for this visit.
  }
});

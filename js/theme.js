(() => {
  const root = document.documentElement;
  const toggle = document.querySelector('.theme-toggle');
  const system = matchMedia('(prefers-color-scheme: dark)');
  let manual = false;
  try { manual = ['light', 'dark'].includes(localStorage.getItem('sk-theme')); } catch {}
  function updateTheme(theme) {
    root.dataset.theme = theme;
    toggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    document.querySelector('meta[name="theme-color"]').content = theme === 'dark' ? '#171e1e' : '#f6f5f0';
  }
  updateTheme(root.dataset.theme || (system.matches ? 'dark' : 'light'));
  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
    manual = true;
    updateTheme(theme);
    try { localStorage.setItem('sk-theme', theme); } catch {}
  });
  system.addEventListener('change', event => {
    if (!manual) updateTheme(event.matches ? 'dark' : 'light');
  });
})();

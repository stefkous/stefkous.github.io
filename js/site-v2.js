(() => {
  document.querySelectorAll('.company-tabs').forEach(list => {
  const tabs = [...list.querySelectorAll('[role="tab"]')];
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
  function orientation() {
    list.setAttribute('aria-orientation', list.dataset.orientation === 'horizontal' || matchMedia('(max-width: 640px)').matches ? 'horizontal' : 'vertical');
  }
  function select(tab, focus = false) {
    tabs.forEach(item => {
      const selected = item === tab;
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
    });
    if (focus) tab.focus({ preventScroll: true });
  }
  list.setAttribute('role', 'tablist');
  orientation();
  window.addEventListener('resize', orientation);
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => select(tab));
    tab.addEventListener('keydown', event => {
      const horizontal = list.getAttribute('aria-orientation') === 'horizontal';
      const next = horizontal ? 'ArrowRight' : 'ArrowDown';
      const previous = horizontal ? 'ArrowLeft' : 'ArrowUp';
      let target;
      if (event.key === next) target = (index + 1) % tabs.length;
      if (event.key === previous) target = (index - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') target = 0;
      if (event.key === 'End') target = tabs.length - 1;
      if (target !== undefined) { event.preventDefault(); select(tabs[target], true); }
    });
  });
  // Keep the complete experience readable when JavaScript is unavailable.
  panels.forEach((panel, index) => { panel.hidden = index !== 0; });
  });
})();

// Hover and keyboard reveal details; clicking pins them open for reading or touch.
document.querySelectorAll('details.recognition-details').forEach(details => {
  const summary = details.querySelector('summary');
  let pinned = false;
  let hovering = false;
  function sync() {
    details.open = pinned || hovering || details.contains(document.activeElement);
  }
  details.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') { hovering = true; sync(); }
  });
  details.addEventListener('pointerleave', () => { hovering = false; sync(); });
  details.addEventListener('focusin', sync);
  details.addEventListener('focusout', () => queueMicrotask(sync));
  summary.addEventListener('click', event => {
    event.preventDefault();
    pinned = !pinned;
    details.open = pinned;
  });
  details.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      pinned = false;
      hovering = false;
      summary.focus();
      details.open = false;
    }
  });
});

// Keep the navigation clear over content and visually quiet over the landing page.
const siteHeader = document.querySelector('.site-header');
const landing = document.getElementById('home');
if (landing && siteHeader) {
  const observer = new IntersectionObserver(([entry]) => {
    siteHeader.classList.toggle('is-scrolled', !entry.isIntersecting);
  }, { rootMargin: '-100px 0px 0px 0px', threshold: 0 });
  observer.observe(landing);
}

// Reveal the bio beside the name on pointer hover, keyboard focus, or tap.
const bioRow = document.querySelector('.hero-intro-row');
const bioTrigger = document.getElementById('bio-trigger');
const heroBio = document.getElementById('hero-bio');
if (bioRow && bioTrigger && heroBio) {
  let pinned = false;
  let hovering = false;
  let focused = false;
  let focusDismissed = false;

  function syncBio() {
    const expanded = pinned || hovering || (focused && !focusDismissed);
    heroBio.hidden = !expanded;
    bioTrigger.setAttribute('aria-expanded', String(expanded));
  }

  bioRow.addEventListener('pointerenter', event => {
    if (event.pointerType === 'mouse') { hovering = true; syncBio(); }
  });
  bioRow.addEventListener('pointerleave', event => {
    if (event.pointerType === 'mouse') { hovering = false; syncBio(); }
  });
  bioRow.addEventListener('focusin', () => {
    focused = true;
    focusDismissed = false;
    syncBio();
  });
  bioRow.addEventListener('focusout', () => queueMicrotask(() => {
    focused = bioRow.contains(document.activeElement);
    if (!focused) focusDismissed = false;
    syncBio();
  }));
  bioTrigger.addEventListener('click', () => {
    if (pinned) {
      pinned = false;
      if (focused) focusDismissed = true;
    } else {
      pinned = true;
      focusDismissed = false;
    }
    syncBio();
  });
  bioTrigger.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      pinned = false;
      hovering = false;
      focusDismissed = true;
      syncBio();
    }
  });
}

(() => {
  const TRANSITION_MS = 240;

  const revealSelectors = [
    '.section-block',
    '.panel',
    '.page-link-card',
    '.stat-card',
    '.analysis-block',
    '.findings-box',
    '.hero-nav-card',
    '.qss-item'
  ];

  const heroSelectors = [
    '.home-hero .hero-eyebrow',
    '.home-hero h1',
    '.home-hero .home-hero-sub'
  ];

  const ensureTransitionOverlay = () => {
    let overlay = document.querySelector('.page-transition-overlay');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.className = 'page-transition-overlay';
    overlay.setAttribute('aria-hidden', 'true');
    document.body.appendChild(overlay);
    return overlay;
  };

  const shouldAnimateLink = (anchor, event) => {
    if (!anchor || anchor.hasAttribute('download')) return false;
    if (anchor.getAttribute('target') === '_blank') return false;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
      return false;
    }

    const href = anchor.getAttribute('href') || '';
    if (!href || href.startsWith('#') || href.startsWith('javascript:')) return false;

    const url = new URL(anchor.href, window.location.href);
    if (url.origin !== window.location.origin) return false;

    const currentPath = `${window.location.pathname}${window.location.search}`;
    const targetPath = `${url.pathname}${url.search}`;
    return currentPath !== targetPath || url.hash === '';
  };

  const initMotion = () => {
    document.documentElement.classList.add('js-enabled');
    document.documentElement.classList.remove('page-leaving');
    ensureTransitionOverlay();

    const revealItems = Array.from(
      document.querySelectorAll(revealSelectors.join(','))
    );

    revealItems.forEach((el, index) => {
      el.classList.add('reveal-item');
      el.style.setProperty('--reveal-delay', `${Math.min(index, 12) * 70}ms`);
    });

    const heroItems = Array.from(document.querySelectorAll(heroSelectors.join(',')));
    heroItems.forEach((el, index) => {
      el.classList.add('hero-pop');
      el.style.animationDelay = `${120 + index * 55}ms`;
    });

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -6% 0px'
      }
    );

    revealItems.forEach((el) => observer.observe(el));
  };

  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a');
    if (!anchor || !shouldAnimateLink(anchor, event)) return;

    event.preventDefault();
    document.documentElement.classList.add('page-leaving');
    window.setTimeout(() => {
      window.location.href = anchor.href;
    }, TRANSITION_MS);
  });

  window.addEventListener('pageshow', () => {
    document.documentElement.classList.remove('page-leaving');
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMotion);
  } else {
    initMotion();
  }
})();

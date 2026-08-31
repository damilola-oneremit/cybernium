/**
 * Scroll smoothing + entrance reveals.
 *
 * Reveal timing comes from the Figma prototype (get_motion_context on 1:1067):
 * elements fade in and rise ~24px over ~700ms with cubic-bezier(0.16,1,0.3,1),
 * staggered per element. Elements opt in with `data-reveal`; containers can
 * mark `data-reveal-stagger` to reveal their children 90ms apart.
 *
 * Supported attributes:
 *   data-reveal-delay    ms before the transition starts (default 0)
 *   data-reveal-duration transition length in ms (default 700)
 *   data-reveal-y        rise distance in px (default 24)
 *   data-reveal-x        horizontal translate to preserve (e.g. "-50%")
 */
import Lenis from 'lenis';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  new Lenis({ autoRaf: true });

  const EASE = 'cubic-bezier(0.16, 1, 0.3, 1)';
  const items: HTMLElement[] = [];

  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => items.push(el));
  document.querySelectorAll<HTMLElement>('[data-reveal-stagger]').forEach((group) => {
    Array.from(group.children).forEach((child, i) => {
      const el = child as HTMLElement;
      if (!el.dataset.revealDelay) el.dataset.revealDelay = String(i * 90);
      items.push(el);
    });
  });

  for (const el of items) {
    el.dataset.revealTo = getComputedStyle(el).opacity;
    el.style.opacity = '0';
    el.style.translate = `${el.dataset.revealX ?? '0'} ${el.dataset.revealY ?? '24'}px`;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        io.unobserve(el);
        const delay = Number(el.dataset.revealDelay ?? 0);
        const duration = Number(el.dataset.revealDuration ?? 700);
        el.style.transition = `opacity ${duration}ms ${EASE} ${delay}ms, translate ${duration}ms ${EASE} ${delay}ms`;
        el.style.opacity = el.dataset.revealTo ?? '1';
        el.style.translate = `${el.dataset.revealX ?? '0'} 0`;
        // Drop the inline styles once settled so utility classes take back over.
        window.setTimeout(() => {
          el.style.transition = '';
          el.style.opacity = '';
          el.style.translate = '';
        }, delay + duration + 120);
      }
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  );

  items.forEach((el) => io.observe(el));
}

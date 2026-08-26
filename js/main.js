// Populate every .bubbles container with a handful of randomized bubbles.
// Purely decorative — respects prefers-reduced-motion via CSS.
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.bubbles, .banner-bubbles');
  containers.forEach((el) => {
    const count = el.classList.contains('banner-bubbles') ? 10 : 7;
    for (let i = 0; i < count; i++) {
      const b = document.createElement('span');
      const size = 4 + Math.random() * 10;
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${5 + Math.random() * 90}%`;
      b.style.animationDelay = `${Math.random() * 3.6}s`;
      b.style.animationDuration = `${2.8 + Math.random() * 2.2}s`;
      el.appendChild(b);
    }
  });

  // Goldfish silhouette: rounded body, forked comet tail, dorsal + pectoral
  // fins, small eye — fill inherits from currentColor per-fish.
  const FISH_SVG = `
    <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 25 C10 10, 23 8, 31 18 C24 25, 24 25, 31 32 C23 42, 10 40, 0 25 Z" fill="currentColor" opacity="0.82"/>
      <ellipse cx="58" cy="25" rx="28" ry="13" fill="currentColor"/>
      <path d="M50 13 C55 2, 66 2, 70 12 C63 14.5, 56 14.5, 50 13 Z" fill="currentColor" opacity="0.82"/>
      <path d="M55 33 C52 41, 45 43, 41 40 C45 34, 50 32, 55 33 Z" fill="currentColor" opacity="0.65"/>
      <circle cx="80" cy="21" r="1.9" fill="rgba(20,20,20,0.55)"/>
    </svg>`;

  const FISH_COLORS = ['#ffb27a', '#ffa584', '#ffc99a', '#f79a68', '#ffcaa0'];

  const fishBg = document.querySelector('.fish-bg-layer');
  if (fishBg) {
    const count = 6;
    for (let i = 0; i < count; i++) {
      const fish = document.createElement('div');
      fish.className = 'fish-bg' + (Math.random() > 0.5 ? ' fish-reverse' : '');
      fish.innerHTML = FISH_SVG;
      fish.style.color = FISH_COLORS[Math.floor(Math.random() * FISH_COLORS.length)];
      fish.style.top = `${8 + Math.random() * 78}%`;
      const size = 26 + Math.random() * 30;
      fish.style.width = `${size}px`;
      fish.style.opacity = 0.55 + (size / 56) * 0.35; // bigger = closer = more opaque
      fish.style.animationDuration = `${22 + Math.random() * 20}s`;
      fish.style.animationDelay = `${Math.random() * -30}s`;
      fishBg.appendChild(fish);
    }
  }

  // Ambient bokeh discs drifting up like sunlit dew and light glints.
  const bokeh = document.querySelector('.bokeh-layer');
  if (bokeh) {
    const count = 12;
    for (let i = 0; i < count; i++) {
      const b = document.createElement('span');
      const size = 6 + Math.random() * 30;
      b.style.width = `${size}px`;
      b.style.height = `${size}px`;
      b.style.left = `${Math.random() * 100}%`;
      b.style.top = `${100 + Math.random() * 20}%`;
      b.style.animationDelay = `${Math.random() * 22}s`;
      b.style.animationDuration = `${18 + Math.random() * 20}s`;
      bokeh.appendChild(b);
    }
  }
});

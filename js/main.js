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

  // Simple fish silhouette: oval body + tail fin + dorsal fin, fill inherits
  // from currentColor so each fish can be tinted independently.
  const FISH_SVG = `
    <svg viewBox="0 0 64 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 16 L14 9 L14 23 Z" fill="currentColor" opacity="0.9"/>
      <ellipse cx="36" cy="16" rx="24" ry="10" fill="currentColor"/>
      <path d="M34 8 L40 1 L44 9 Z" fill="currentColor" opacity="0.85"/>
      <circle cx="52" cy="13" r="2" fill="rgba(10,20,25,0.55)"/>
    </svg>`;

  const FISH_COLORS = ['#ffd76a', '#ff9f6b', '#f6f6f6', '#ffe9a8'];

  document.querySelectorAll('.fish-layer').forEach((layer) => {
    const count = 1 + Math.floor(Math.random() * 2); // 1–2 fish per tank
    for (let i = 0; i < count; i++) {
      const fish = document.createElement('div');
      fish.className = 'fish' + (Math.random() > 0.5 ? ' fish-reverse' : '');
      fish.innerHTML = FISH_SVG;
      fish.style.color = FISH_COLORS[Math.floor(Math.random() * FISH_COLORS.length)];
      fish.style.top = `${15 + Math.random() * 55}%`;
      fish.style.width = `${22 + Math.random() * 16}px`;
      fish.style.animationDuration = `${9 + Math.random() * 7}s`;
      fish.style.animationDelay = `${Math.random() * -8}s`;
      layer.appendChild(fish);
    }
  });

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

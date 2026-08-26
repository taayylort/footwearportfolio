// Populate every .bubbles container with a handful of randomized bubbles.
// Purely decorative — respects prefers-reduced-motion via CSS.
document.addEventListener('DOMContentLoaded', () => {
  const containers = document.querySelectorAll('.bubbles');
  containers.forEach((el) => {
    const count = 7;
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

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
});

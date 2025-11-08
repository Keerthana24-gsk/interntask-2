console.log('Internship Task 2 — assets loaded');
// small microinteraction example: highlight sections on click
document.addEventListener('click', (e) => {
  const el = e.target.closest('.section-card');
  if (el) {
    el.style.transition = 'box-shadow .25s, transform .15s';
    el.style.transform = 'translateY(-4px)';
    setTimeout(()=>{ el.style.transform=''; }, 220);
  }
});

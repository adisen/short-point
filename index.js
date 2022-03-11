// Select needed components
const finishButton = document.getElementById('btn');
const innerSpan = document.querySelectorAll('.inner-bar');

finishButton.addEventListener('click', () => {
  // update all span
  innerSpan.forEach(span => {
    span.style.width = '100%';
    span.innerHTML = '100%';
  });
});

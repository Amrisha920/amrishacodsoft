const heartIcon = document.querySelector('.heart-icon');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

heartIcon.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});
const confettiContainer = document.querySelector('#confetti-container');
const showConfetti = () => {
  const confetti = document.createElement('div');
  confetti.textContent = '🎉';
  confetti.classList.add('confetti');
  confetti.style.left = Math.random() * innerWidth + 'px';
  confettiContainer.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();a
  }, 5000);
};

setInterval(() => {
  showConfetti();
}, 400);

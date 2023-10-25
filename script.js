const heartIcon = document.querySelector('.heart-icon');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');

heartIcon.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

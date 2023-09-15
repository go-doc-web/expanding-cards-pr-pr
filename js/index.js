const refs = {
  cards: document.querySelectorAll('.card'),
};

const removeActiveClasses = () => {
  refs.cards.forEach(card => {
    if (card.classList.contains('active')) {
      card.classList.remove('active');
    }
  });
};

refs.cards.forEach(card => {
  card.addEventListener('click', () => {
    removeActiveClasses();
    card.classList.add('active');
    console.log(card);
  });
});

// Get all domain cards

document.addEventListener('DOMContentLoaded', () => {

  const cards = document.querySelectorAll('.mouseoverCard');
  
  let button=document.getElementById('buttonProveri');
  
  button.addEventListener('click', (e) => {
    e.preventDefault();
    // Shuffle the cards array
    const shuffledCards = Array.from(cards).sort(() => Math.random() - 0.5);
    
    //clear all classes
    for (let i = 0; i < 6; i++) {
      shuffledCards[i].classList.remove('greenCard');
      shuffledCards[i].classList.remove('redCard');
    }


    // Color the first three cards red
    for (let i = 0; i < 3; i++) {
      shuffledCards[i].classList.add('greenCard');
    }
  
    // Color the next three cards green
    for (let i = 3; i < 6; i++) {
      shuffledCards[i].classList.add('redCard');
    }
  });
  
  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      card.classList.add('border-primary'); // Add a border when the card is hovered
    });
  
    card.addEventListener('mouseout', () => {
      card.classList.remove('border-primary'); // Remove the border when the mouse leaves the card
    });
  });
});


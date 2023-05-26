let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let openLikes = document.querySelector('.likes img');
let closeLikes = document.querySelector('.closelikes');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let list2 = document.querySelector('.list2');
let card2 = document.querySelector('.card2');

openShopping.addEventListener('click', () => {
  body.classList.add('shopping-active');
});

closeShopping.addEventListener('click', () => {
  body.classList.remove('shopping-active');
});

openLikes.addEventListener('click', () => {
  list2.style.display = 'block';
  card2.style.display = 'block';
  body.classList.add('likes-active');
});

closeLikes.addEventListener('click', () => {
  list2.style.display = 'none';
  card2.style.display = 'none';
  body.classList.remove('likes-active');
});

// Hide likes section initially
list2.style.display = 'none';
card2.style.display = 'none';

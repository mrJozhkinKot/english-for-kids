import '../css/style.css';
import '../css/style.scss';


import  {
  CardCategories
} from './CardCategories';
import  {
  Card
} from './Card';

const data = require('./data.js');
const dataSection = require('./dataSection.js');



function generateCardsCategories(dataSection) {
  const cards = [];
  dataSection.forEach(card => {
    cards.push(new CardCategories(card))
  })
  return cards;
}

function getCardContainer(){
  const cardsWrapper = document.querySelector('.cards');
  cardsWrapper.innerHTML = '';
  return cardsWrapper
}

function renderCardsCategories() { const cardsContainer = getCardContainer();
  generateCardsCategories(dataSection).forEach(card => {
    cardsContainer.append(card.generateCardCategories())
  })
 }

function generateCards(data, item) {
  const cards = [];
  data[item].forEach(card => {
      cards.push(new Card(card))
        })
    
    return cards;
}


function getId() {
  const cards = document.querySelectorAll('.card-front');
  cards.forEach((card, item) => {
   card.setAttribute('data-id', `#${item}`)
  })
}


function renderCards(item) {
  const cardsContainer = getCardContainer();
  generateCards(data, item).forEach(card => {
    cardsContainer.append(card.generateCard());
     getId();
        })
    
            
          }

  
 function clickMenuHandler() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.navigation__list');
  //const links = document.querySelectorAll('.navigation-links');
  function toogleMenu() {
  menu.classList.toggle('navigation__list-showed');
  if (hamburger.firstElementChild.classList.contains('hamburger-open')) {
  hamburger.firstElementChild.classList.remove('hamburger-open');
  hamburger.firstElementChild.classList.add('hamburger-close');
  } else {
  hamburger.firstElementChild.classList.remove('hamburger-close');
  hamburger.firstElementChild.classList.add('hamburger-open');
  }
  }
  hamburger.addEventListener('click', toogleMenu);
  menu.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    toogleMenu();
  
      for (let i=0; i<8; i++){
      if (e.target.getAttribute('href') === `#${i}`) {
       renderCards(i);
      };
    }
    
    if (e.target.getAttribute('href') === "#main") {
      renderCardsCategories();
     }
     }
    })
  }
  
  function clickCategoriesHandler() {
    const cards = document.querySelector('.cards');
    const categories = document.querySelectorAll('.card-categories');
    
    cards.addEventListener('click', (e) => {
      categories.forEach(item => {
        const i = item.getAttribute('data-id');
              if (e.target.parentElement.getAttribute('data-id') === i) {
          renderCards(i);
          }
      })
    })
       
  
    }

  function clickTrainHandler() {
    const cards = document.querySelector('.cards');
    cards.addEventListener('click', (e) => {
      if (e.target.classList.contains('icon-reverse'))
      {
        e.target.parentElement.parentElement.parentElement.classList.add('card-reverse')
       }
    })
  }

  function mouseOut() {
    const cards = document.querySelector('.cards');
    cards.addEventListener('mouseout', (e) => {
      if (e.target.parentElement.parentElement.classList.contains('card-reverse'))
      {
        e.target.parentElement.parentElement.classList.remove('card-reverse')
               }
    })
  }


window.onload = function() {
  if(dataSection) {
  renderCardsCategories();
  clickMenuHandler();
  clickCategoriesHandler();
  clickTrainHandler();
  mouseOut();
  soundClick();

 

  }
}



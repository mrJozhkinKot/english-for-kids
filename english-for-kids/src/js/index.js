import '../css/style.css';
import '../css/style.scss';


import {
  CardCategories
} from './CardCategories';
import {
  Card
} from './Card';

const data = require('./data.js');
const dataSection = require('./dataSection.js');

const checkbox = document.querySelector('.checkbox');
const button = document.querySelector('.button-play');

function generateCardsCategories(dataSection) {
  const cards = [];

  dataSection.forEach(card => {
    cards.push(new CardCategories(card))
  })
  return cards;
}

function getCardContainer() {
  const cardsWrapper = document.querySelector('.cards');
  cardsWrapper.innerHTML = '';
  return cardsWrapper
}

function renderCardsCategories() {
  const cardsContainer = getCardContainer();

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


// function getId() {
//   const cards = document.querySelectorAll('.card-front');
//   cards.forEach((card, item) => {
//     card.setAttribute('data-id', `#${item}`)
//   })
// }

function soundOn() {
  const cards = document.querySelector('.cards');
  function playSound(e) {
    if (e.target.parentElement.classList.contains('card-front')) {
      const audio = new Audio();
      audio.src = e.target.parentElement.parentElement.nextSibling.nextSibling.firstChild.nextSibling.getAttribute('src');
      audio.play();
    }
  };


  if (checkbox.checked) {
    cards.removeEventListener('click', playSound)
  } else {
    cards.addEventListener('click', playSound)
  }
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      cards.removeEventListener('click', playSound)
    } else {
      cards.addEventListener('click', playSound)
    }
  })

}


function checkMode() {
  const categories = document.querySelectorAll('.card');
  const instance = document.querySelectorAll('.card-instance');
  categories.forEach(card => {
    if (checkbox.checked) {
      if (card.classList.contains('card-instance')) return;
      card.classList.add('card-categories-play');
    }
    else {
      card.classList.remove('card-categories-play');
    }
  })

  instance.forEach(card => {
    if (card.classList.contains('card-categories')) return;
    if (checkbox.checked) {
      card.classList.add('card-play');
    }
    else {
      card.classList.remove('card-play');
    }
   
  })

}

function showButton() {
  const cards = document.querySelector('.cards');
  if (cards.firstChild.classList.contains('card-categories')) {
    button.classList.remove('button-play-on')
  }
  if (cards.firstChild.classList.contains('card-instance')) {
  if (checkbox.checked) {
    button.classList.add('button-play-on')
  }
  else {
    button.classList.remove('button-play-on')
  }
}
}

function startGame() {
  
  checkbox.addEventListener('change', () => {
        showButton();
  })


}

function clickSwitcher() {
  checkbox.addEventListener('change', checkMode);
  checkbox.addEventListener('change', () => {
    const menu = document.querySelector('.navigation__list');
    menu.classList.toggle('navigation__list-play');
  });
}


function renderCards(item) {
  const cardsContainer = getCardContainer();
  generateCards(data, item).forEach(card => {
    cardsContainer.append(card.generateCard());
    //getId();
    checkMode()
    soundOn();
  })
}


function clickMenuHandler() {
  const hamburger = document.querySelector('.hamburger');
  const menu = document.querySelector('.navigation__list');
  const overlay = document.querySelector('.overlay');


  function toogleMenu() {
    menu.classList.toggle('navigation__list-showed');
    overlay.classList.toggle('overlay-on');

    if (hamburger.firstElementChild.classList.contains('hamburger-open')) {
      hamburger.firstElementChild.classList.remove('hamburger-open');
      hamburger.firstElementChild.classList.add('hamburger-close');
    } else {
      hamburger.firstElementChild.classList.remove('hamburger-close');
      hamburger.firstElementChild.classList.add('hamburger-open');
    }
  }

  overlay.addEventListener('click', () => {

    menu.classList.remove('navigation__list-showed');
    overlay.classList.remove('overlay-on');
    hamburger.firstElementChild.classList.remove('hamburger-close');
    hamburger.firstElementChild.classList.add('hamburger-open');
  }
  );
  hamburger.addEventListener('click', toogleMenu);
  menu.addEventListener('click', (e) => {
    menu.querySelectorAll('a').forEach(el => {
      el.classList.remove('active');
      e.target.classList.add('active');
    })
    if (e.target.tagName === 'A') {
      toogleMenu();

      for (let i = 0; i < 8; i++) {
        if (e.target.getAttribute('href') === `#${i}`) {
          checkMode();
          renderCards(i);
          showButton();
        };
      }

      if (e.target.getAttribute('href') === "#main") {
        renderCardsCategories();
        showButton();
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
        showButton();
      }
    })
  })
}



function clickTrainHandler() {
  const cards = document.querySelector('.cards');
  cards.addEventListener('click', (e) => {
    if (e.target.classList.contains('icon-reverse')) {
      e.target.parentElement.parentElement.parentElement.classList.add('card-reverse')
    }
  })
}

function mouseOut() {
  const cards = document.querySelector('.cards');
  cards.addEventListener('mouseout', (e) => {
    if (e.target.parentElement.parentElement.classList.contains('card-reverse')) {
      e.target.parentElement.parentElement.classList.remove('card-reverse')
    }
  })

}


// function changeMode() {
//   localStorage.setItem('mode', 'train');
//   checkbox.addEventListener('change', () => {
//        if (checkbox.checked) {
//       localStorage.setItem('mode', 'play');

//             }
//     else  {localStorage.setItem('mode', 'train');}  
//         })
//      }



window.onload = function () {

  clickSwitcher();
  renderCardsCategories();
  startGame();
  clickMenuHandler();
  clickCategoriesHandler();
  clickTrainHandler();
  mouseOut();
 

}



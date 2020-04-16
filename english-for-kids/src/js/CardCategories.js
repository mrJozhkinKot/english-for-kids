
export class CardCategories {
    constructor ({id, title, image}) {
        this.id = id;
        this.title = title;
        this.image = image;
    }

    generateCardCategories() {
      let template = '';
      const cardCategories = document.createElement('div');
      cardCategories.className = 'card card-categories';
      if(localStorage.getItem('mode') == 'play') {
      cardCategories.className = 'card card-categories card-categories-play';
      }
      cardCategories.setAttribute('data-id', this.id);
      
      template += `<img src=${this.image} alt="card">
      <p>${this.title.toUpperCase()}</p>`;
    
    cardCategories.innerHTML = template;
    return cardCategories;
}
}


export class Card {
    constructor ({word, translation, image, audioSrc}) {
        this.word = word;
        this.translation = translation;
        this.image = image;
        this.audioSrc = audioSrc;      
    }

    generateCard() {
      let template = '';
      const card = document.createElement('div');
      card.className = 'card card-instance';
       card.onclick = () => {
       const audio = new Audio()
       audio.src = this.audioSrc; 
       audio.play()
           }
         
      template += `<div class = 'card-inner'>
      <div class = 'card-front'>
      <img src=${this.image} alt=${this.word}>
          <p>${this.word.toUpperCase()}<i class="icon-reverse fas fa-sync-alt"></i></p>
      </div>
      <div class = 'card-back'>
         <img src=${this.image} alt=${this.word}>
          <p>${this.translation.toUpperCase()}</p>
      </div>
      <audio> <sourse src="${this.audioSrc}" type="audio/mp3"</audio>
    </div>`;
    
    card.innerHTML = template;
    return card;
}

}


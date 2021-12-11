let imgArr = [
  '/Images/img1.jpeg',
  '/Images/img2.jpeg',
  '/Images/img3.jpeg',
  '/Images/img4.jpeg',
  '/Images/img1.jpeg',
  '/Images/img6.jpeg'
];

function shuffleArray(arr) {
  arr.sort(() => Math.random() - 0.5);
}
shuffleArray(imgArr);

// variables
let outercont = document.querySelector('.outer-cont');
let divCont = document.querySelectorAll('.cont');
let divContArr = Array.from(divCont);

// compare cards
let hasFlipped = false;
let firstCard, secondCard;

divContArr.forEach(function(e,i){
  e.style.backgroundImage = `url(${imgArr[i]})`;
});


function flipCard(){
  if(hasFlipped === false){
    //first time the player clicked the card
    hasFlipped = true;
    firstCard = this.style.backgroundImage;
  } else {
    //second card
    hasFlipped = false;
    secondCard = this.style.backgroundImage;
    
    if(firstCard === secondCard){
      //if they match they win
      // firstCard.removeEventListener('click', flipCard);
      // secondCard.removeEventListener('click', flipCard);
      console.log('you win')
    }

  }
}

divContArr.forEach(function(e,i){
  e.addEventListener('click', flipCard);

});

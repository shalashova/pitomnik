
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let cards = document.querySelectorAll('.team-person_item');

prev.addEventListener('click', prevCard);
next.addEventListener('click', nextCard);

let idx=0;


function nextCard(){
    let i=idx;
    cards[i].style.display = 'none';
    i ++;
    if(i >= cards.length){
        i = 0;
    }
    cards[i].style.display = 'block';
    idx=i;
 return idx;
}

function prevCard(){
    let i=idx;
    cards[i].style.display = 'none';
    i --;
    if(i < 0){
        i = cards.length - 1;
    }

    cards[i].style.display = 'block';
    idx=i;
 return idx;

}




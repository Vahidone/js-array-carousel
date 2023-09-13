

const photos = [
  'img/01.webp',
  'img/02.webp',
  'img/03.webp',
  'img/04.webp',
  'img/05.webp'
];

const btnPrev = document.getElementById('btn-b');
const btnNext = document.getElementById('btn-t');
const itemsWrap = document.querySelector('.items-wrapper');

// reset 
itemsWrap.innerHTML= '';
let counterImg = 0;

for (let i = 0; i < photos.length; i++) {
  const photo = photos[i];
  itemsWrap.innerHTML += `<img src="${photo}" class="item hide">`;
}

const itemCollection = document.getElementsByClassName('item');

itemCollection[0].classList.remove('hide');

// botton next 
btnNext.addEventListener('click', function(){
  itemCollection[counterImg].classList.add('hide');
  counterImg++;
  itemCollection[counterImg].classList.remove('hide');
});

// botton prev 
btnPrev.addEventListener('click', function () {
  itemCollection[counterImg].classList.add('hide');
  counterImg--;
  itemCollection[counterImg].classList.remove('hide');
});




const musicBtn = document.getElementById('music-toggle');
const music = document.getElementById('bg-music');
const musicIcon = document.getElementById('music-icon');
musicBtn.addEventListener('click', () => {
  if(music.paused){
    music.play();
    musicIcon.src = 'music_on.png';
  } else {
    music.pause();
    musicIcon.src = 'music_off.png';
  }
});
const petalsContainer = document.querySelector('.petals-container');
const numPetals = 30; // number of petals

for(let i = 0; i < numPetals; i++) {
  const petal = document.createElement('div');
  petal.classList.add('petal');

  // random horizontal position
  petal.style.left = Math.random() * 100 + 'vw';

  // random size
  const size = Math.random() * 15 + 10;
  petal.style.width = size + 'px';
  petal.style.height = size + 'px';

  // random shade of red/pink
  const shades = ['#FF4D6D', '#FF6677', '#FF3344', '#FF99AA', '#FF1A3D'];
  petal.style.backgroundColor = shades[Math.floor(Math.random() * shades.length)];

    const duration = 5 + Math.random() * 5;
  petal.style.animationDuration = duration + 's';
  
  // random delay to prevent stacking at start
  petal.style.animationDelay = Math.random() * duration + 's';

  petalsContainer.appendChild(petal);
}

const cards = document.querySelectorAll('.card');
const panel = document.getElementById('side-panel');
const panelImg = document.getElementById('panel-img');
const panelTitle = document.getElementById('panel-title');
const panelDesc = document.getElementById('panel-desc');
const closePanel = document.getElementById('close-panel');
const overlay = document.getElementById('overlay-blur');

// Side panel functionality
cards.forEach(card => {
  card.addEventListener('click', () => {
    const img = card.querySelector('img').src; // first image of the group
    const title = card.dataset.title;
    const desc = card.dataset.desc;
    panelImg.src = img;
    panelTitle.textContent = title;
    panelDesc.textContent = desc;
     panel.classList.add('active'); // show centered panel
    overlay.classList.add('active'); // show blur
  });
});

closePanel.addEventListener('click', () => {
  panel.classList.remove('active'); // hide panel
  overlay.classList.remove('active'); // hide blur
});

// Assign left/right classes automatically and set images count
cards.forEach((card, index) => {
  card.classList.add(index % 2 === 0 ? 'left' : 'right');
  const imagesCount = card.querySelectorAll('img').length;
  card.style.setProperty('--images-count', imagesCount);
});

// Intersection Observer for scroll-triggered animation
const observerOptions = { threshold: 0.2 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('visible'); // slide smoothly into view
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

cards.forEach(card => observer.observe(card));



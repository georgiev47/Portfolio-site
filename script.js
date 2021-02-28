let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelectorAll(".slides");

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  
  slides.forEach(function(s) {
    s.className = s.className.replace(" active", "");
  });

  slides[slideIndex-1].className += " active";
}

document.querySelector('.prev').addEventListener('click', () => plusSlides(-1));
document.querySelector('.next').addEventListener('click', () => plusSlides(1));

// Start Portfolio section

const filterButtons = document.getElementById('filter-btns').children;
const items = document.querySelectorAll('.item');


[...filterButtons].forEach(btn => btn.addEventListener('click',function(){
  [...filterButtons].forEach(k => k.classList.remove('active'));
  this.classList.add('active');

  const target = this.getAttribute('data-target');
  [...items].forEach(function(i){
    i.style.display = 'none';
    if(target==i.getAttribute('data-id')) {
      i.style.display = 'block';
    }
    if(target=='all') {
      i.style.display = 'block';
    }
  });
}));

// Lightbox

const lightbox = document.querySelector('.lightbox');
const closeLightbox = document.querySelector('.close-lightbox');
const lightboxImg = lightbox.getElementsByTagName('img');

lightbox.addEventListener('click',function(e){
  if(e.target != lightboxImg) {
    lightbox.style.display = 'none';
  }
});

closeLightbox.addEventListener('click',() => {
  lightbox.style.display = 'none';
});

const gallery = document.querySelector('.portfolio-gallery');
const galleryItem = gallery.querySelectorAll('.item');

galleryItem.forEach(function(element){
  element.querySelector('.fa-plus').addEventListener('click',function(){
    lightbox.style.display = 'flex';
    lightboxImg[0].src = element.querySelector('img').getAttribute('src');
    
  })
});

// End Portfolio section

// Scrolling functionality

const containerArray = document.querySelectorAll('section');
const containerPos = {};

containerArray.forEach((section) => {
  containerPos[section.id] = section.offsetTop;
});

window.addEventListener('scroll', () => {
  var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  for(id in containerPos){
    if(containerPos[id] <= scrollPosition){
      document.querySelector('.active').classList.remove('active');
      document.querySelector(`a[href*=${id}]`).classList.add('active');
      document.querySelector('section').classList.remove('active');
    }
  }
});

// Contact Send button
document.getElementById('contact-send').addEventListener('click',(e) => {
  e.preventDefault();
});


// Hamburger
const hamburger = document.querySelector('header label');
hamburger.addEventListener('click',function(){
  document.querySelector('.navbar').classList.toggle('show');
});
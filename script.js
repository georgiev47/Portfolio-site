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


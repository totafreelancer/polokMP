
$('#Slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    }
  ]
});


// navbar
function scrollValue() {
    const navbar = document.getElementById('navbar');
    const logo_light = document.querySelector('.logo-light');
    const logo_dark = document.querySelector('.logo-dark');
    const liColor =  document.getElementById('nav_link');
    const liColor2 =  document.getElementById('nav_link2');
    const liColor3 =  document.getElementById('nav_link3');
    const liColor4 =  document.getElementById('nav_link4');
    const liColor5 =  document.getElementById('nav_link5');
    const liColor6 =  document.getElementById('nav_link6');

  const scroll = window.scrollY;
  if (scroll < 100) {
      navbar.classList.remove('darkheader');
      logo_light.classList.remove('img_none');
      logo_dark.classList.add('img_none');
      liColor.classList.remove('Color')
      liColor2.classList.remove('Color')
      liColor3.classList.remove('Color')
      liColor4.classList.remove('Color')
      liColor5.classList.remove('Color')
      liColor6.classList.remove('Color')
  } else {
      navbar.classList.add('darkheader');
      logo_dark.classList.remove('img_none');
      logo_light.classList.add('img_none');
      liColor.classList.add('Color')
      liColor2.classList.add('Color')
      liColor3.classList.add('Color')
      liColor4.classList.add('Color')
      liColor5.classList.add('Color')
      liColor6.classList.add('Color')
  }
}
window.addEventListener('scroll', scrollValue);
// navbar


// CONTACT
(() => {
  'use strict'
  const forms = document.querySelectorAll('.needs-validation')
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
// CONTACT




// Photos
$('.slider').slick({
  centerMode: true,
  centerPadding: '200px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
// Photos

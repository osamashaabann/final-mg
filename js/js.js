$(document).ready(function(){
    // Adding The sticky Class to The Header Sticky Clone
    let $header = $("header");
    let $sticky = $header.before($header.clone()).addClass("sticky");

    // Scroll function to add Our Class
    $(window).on("scroll" , function(){
        let $windowScrolly =  $(window).scrollTop();
        $("body").toggleClass("scroll" , ($windowScrolly > 250));
    });

    // Carousel
    $('#carouselFade').carousel();

    
    // Slick Slider
    $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrow: false,


        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }

        ]
    });

    // Projects slick 

    $('.projects').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrow: true,
        accessibility: true,
        touchMove: true,
        Infinite: true,
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',


        responsive: [
            

            {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 2
              }
          },

            

            {
                breakpoint: 476,
                settings: {
                    slidesToShow: 1
                }
            }

        ]


      });
    

    // Menu Active
    let body = $('body');
    let menuTrigger = $('.js-menu-trigger');
    let mainOverlay = $('.js-main-overlay');
    let close = $('.main-overlay').after();

    menuTrigger.on('click', function(){
        body.addClass("menu-active");
    });

    mainOverlay.on('click', function(){
        body.removeClass("menu-active");
    });

    $(".menu li a").on('click', function(){
        body.removeClass("menu-active");
    });

});


//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}

// Form Validation 

const form = document.querySelector("form[name='contact-form']");
const nameInput = document.querySelector("input[name='name']");
const emailInput = document.querySelector("input[name='email']");
const phoneInput = document.querySelector("input[name='phone']");
const messageInput = document.querySelector("textarea[name='message']");

nameInput.isValid = () => !!nameInput.value;
emailInput.isValid = () => isValidEmail(emailInput.value);
phoneInput.isValid = () => isValidPhone(phoneInput.value);
messageInput.isValid = () => !!messageInput.value;

const inputFields = [nameInput, emailInput, phoneInput, messageInput];

const isValidEmail = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPhone = (phone) => {
  const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return re.test(String(phone).toLowerCase());
};

let shouldValidate = false;
let isFormValid = false;

const validateInputs = () => {
  console.log("we are here");
  if (!shouldValidate) return;

  isFormValid = true;
  inputFields.forEach((input) => {
    input.classList.remove("invalid");
    input.nextElementSibling.classList.add("hide");

    if (!input.isValid()) {
      input.classList.add("invalid");
      isFormValid = false;
      input.nextElementSibling.classList.remove("hide");
    }
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  shouldValidate = true;
  validateInputs();
  if (isFormValid) {
    // TODO: DO AJAX REQUEST
  }
});

inputFields.forEach((input) => input.addEventListener("input", validateInputs));
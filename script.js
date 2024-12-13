// Get the toggle button and sidebar elements
let toggle = document.querySelector('.toggle');
let navbar = document.querySelector('.navbar');

// Add event listener to toggle the sidebar visibility
toggle.addEventListener('click', function () {
    navbar.classList.toggle('active');
    toggle.querySelector('.open').classList.toggle('close');
    toggle.querySelector('.close').classList.toggle('open');
});


// Select all the cards
const cards = document.querySelectorAll('.card');

// Add a click event listener to each card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Toggle the 'clicked' class to show the effect
        card.classList.toggle('clicked');
    });
});

var swiper = new Swiper(".team-slider", {
    loop:true,
    grabCursor:true,
    spaceBetween:20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
    },
});





function popup(popup_name) {
    var get_popup = document.getElementById(popup_name);
    if(get_popup.style.display == "flex") {
      get_popup.style.display = "none";
    } else {
      get_popup.style.display = "flex";
    }
  }

  







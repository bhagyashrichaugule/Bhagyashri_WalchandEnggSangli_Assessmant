//for sliding search bar
let searchForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchForm.classList.toggle('active');
    //only one form should be ative
    shoppingCart.classList.remove('active');
    userProfile.classList.remove('active');
    menuBar.classList.remove('active');
};

//for sliding cart
let shoppingCart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = ()=>{
    shoppingCart.classList.toggle('active');

    searchForm.classList.remove('active');
    userProfile.classList.remove('active');
    menuBar.classList.remove('active');
};

//for sliding userProfile
let userProfile=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = ()=>{
    userProfile.classList.toggle('active');

    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    menuBar.classList.remove('active');
};

//menu-bar
let menuBar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    menuBar.classList.toggle('active');
    
    userProfile.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
};


window.onscroll=()=>{
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    userProfile.classList.remove('active');
    menuBar.classList.remove('active');
}

// var swiper = new Swiper(".product-slider", {
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });

  var swiper = new Swiper(".product-slider", {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 10,
    autoplay:{
                 delay:7500,
                 disableOnInteraction: false,
             },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        450:{
        slidesPerView: 2,
        spaceBetween: 20,
        },
      540: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  });




// //slider
// var swiper = new Swiper(".product-slider", {
//     // slidesPerView: 1,
//     loop:true,
//     spaceBetween: 20,
//     autoplay:{
//         delay:7500,
//         disableOnInteraction: false,
//     },
//     // pagination: {
//     //   el: ".swiper-pagination",
//     //   clickable: true,
//     // },
//     breakpoints: {
//       0: {
//         slidesPerView: 1
//       },
//       768: {
//         slidesPerView: 2
//       },
//       1024: {
//         slidesPerView: 3
//       },
//     },
//   });

// //slidercard
// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel({
//         loop:true,
//         margin:10,
//         nav:true,

//         center:true,
//         navText:[
//             "<i class='fa fa-angle-left'></i>",
//             "<i class='fa fa-angle-left'></i>"
//         ],
//         responsive:{
//             0:{
//                 items:1
//             },
//             600:{
//                 items:1
//             },
//             1000:{
//                 items:3
//             }
//         }
//     });
// });


function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.style.display = 'none';
    errorMessage.innerHTML = '';
    
    if (name === '') {
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Name field cannot be empty.';
        return false;
    }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Please enter a valid email address.';
        return false;
    }
    
    if (message === '') {
        errorMessage.style.display = 'block';
        errorMessage.innerHTML = 'Message field cannot be empty.';
        return false;
    }
    
    return true;
}
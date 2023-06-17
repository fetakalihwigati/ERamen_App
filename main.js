// var swiper = new Swiper(".other__container", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     loop:true,
//     grabCursor:true,
// });

document.addEventListener("DOMContentLoaded", function() {
  // Initialize Swiper
  var swiper = new Swiper('.swiper-container', {
    // Swiper configuration options
  });
});

var swiper = new Swiper(".other__container", {
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop:true,
    grabCursor:true,
  });

  var swiper = new Swiper(".drinks-menu", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    slidesPerView: 3,
    spaceBetween: 30,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    loop:true,
    grabCursor:true,
  });


const button = document.getElementById("done-button");

// function onClick(){

// }

button.addEventListener("click", () =>{
  // ====== Name ======
  const nameinput = document.getElementById("name").value;
  // console.log(nameinput.value);

  if(nameinput.length > 100){
    alert('Your name is too long');
    return;
  }

  // ====== Email =======
  const email = document.getElementById("email").value;

  if(!email.endsWith('@gmail.com')){
    alert('Email must end with @gmail.com');
    return;
  }

  // ===== Phone Number ======
  const phonenumber = document.getElementById("phonenumber").value;

  if(phonenumber.length < 9 || phonenumber.length > 15){
    alert('Phone number must be between 9 and 15 characters long');
  }
  else if(isNaN(phonenumber)){
    alert('Phone number can only contain numbers');
  }

  // ========= prefer =========
  const ramen = document.getElementById("ramen");
  const dryramen = document.getElementById("dryramen");

  if(!ramen.checked && !dryramen.checked){
    alert('you have to choose your choice');
    return;
  }


  // ========= agree ==========
  const agree = document.getElementById("agree");

  if(!agree.checked){
    alert('You must agree to receive the newsletter');
    return;
  }

  // ===== done ======
  alert('Done! Thank you and have a nice day!')
});

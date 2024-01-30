// const learnMoreBtn = document.querySelector(".lm-btn");
// learnMoreBtn.addEventListener("click", function () {
//   alert("Learn more button clicked!");
// });

// const homeHeader = document.querySelector(".home-header");
// homeHeader.addEventListener("mouseover", function () {
//   homeHeader.style.color = "#743C2B";
//   console.log("This second script is working.");
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const cards = document.querySelectorAll(".port-card");

//   cards.forEach(function (card) {
//     card.addEventListener("mouseenter", function () {
//       card.classList.add("w-100");
//     });

//     card.addEventListener("mouseleave", function () {
//       card.classList.remove("w-100");
//     });
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let currentIndex = 0;
//   const slides = document.querySelectorAll(".col-md-4");

//   function showSlide(index) {
//     slides.forEach((slide, i) => {
//       slide.style.display = i === index ? "block" : "none";
//     });
//   }

//   function nextSlide() {
//     currentIndex = (currentIndex + 1) % slides.length;
//     showSlide(currentIndex);
//   }

//   function prevSlide() {
//     currentIndex = (currentIndex - 1 + slides.length) % slides.length;
//     showSlide(currentIndex);
//   }

//   // Show the initial slide
//   showSlide(currentIndex);

//   // Add event listeners for next and previous buttons
//   document.querySelector("#nextBtn").addEventListener("click", nextSlide);
//   document.querySelector("#prevBtn").addEventListener("click", prevSlide);
// });

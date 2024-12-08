document.addEventListener("scroll", function () {
  // CP
  const infoDiv = document.querySelector(".info");
  const animatedText1 = document.querySelectorAll(".animated-text-1");
  const rect = infoDiv.getBoundingClientRect();
  // CSR
  const infoDiv2 = document.querySelector(".info-csr");
  const animatedText2 = document.querySelectorAll(".animated-text-2");
  const rect2 = infoDiv2.getBoundingClientRect();
  // IPR
  const infoDiv3 = document.querySelector(".info-ipr");
  const animatedText3 = document.querySelectorAll(".animated-text-3");
  const rect3 = infoDiv3.getBoundingClientRect();
  // MOU
  const infoDiv4 = document.querySelector(".info-mou");
  const animatedText4 = document.querySelectorAll(".animated-text-4");
  const rect4 = infoDiv4.getBoundingClientRect();
  // TT
  const infoDiv5 = document.querySelector(".info-tt");
  const animatedText5 = document.querySelectorAll(".animated-text-5");
  const rect5 = infoDiv5.getBoundingClientRect();

  // Check if the element is in the viewport
  if (rect.top < window.innerHeight && rect.bottom > 0) {
    for (element of animatedText1) element.classList.add("visible"); // Add the visible class to trigger animation
  } else {
    for (element of animatedText1) element.classList.remove("visible");
  }
  if (rect2.top < window.innerHeight && rect2.bottom > 0) {
    for (element of animatedText2) element.classList.add("visible"); // Add the visible class to trigger animation
  } else {
    for (element of animatedText2) element.classList.remove("visible");
  }
  if (rect3.top < window.innerHeight && rect3.bottom > 0) {
    for (element of animatedText3) element.classList.add("visible"); // Add the visible class to trigger animation
  } else {
    for (element of animatedText3) element.classList.remove("visible");
  }
  if (rect4.top < window.innerHeight && rect4.bottom > 0) {
    for (element of animatedText4) element.classList.add("visible"); // Add the visible class to trigger animation
  } else {
    for (element of animatedText4) element.classList.remove("visible");
  }
  if (rect5.top < window.innerHeight && rect5.bottom > 0) {
    for (element of animatedText5) element.classList.add("visible"); // Add the visible class to trigger animation
  } else {
    for (element of animatedText5) element.classList.remove("visible");
  }
});

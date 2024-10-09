let openMap = () => {
  window.location.assign(
    "https://www.google.com/maps/place/BI+City+Seoul+Condominium+Complex/@51.1329187,71.3996691,16.09z/data=!4m14!1m7!3m6!1s0x424585b3f4555559:0xc8bd2ae10f838da2!2sKhan+Shatyr!8m2!3d51.1325301!4d71.4037303!16s%2Fg%2F12vtlxj25!3m5!1s0x42458683f79c99c7:0x9d20d3fafc387589!8m2!3d51.1296799!4d71.3986242!16s%2Fg%2F11cs2654tw?entry=ttu&g_ep=EgoyMDI0MDkxMS4wIKXMDSoASAFQAw%3D%3D"
  );
};
// Get the current URL
const currentUrl = window.location.href;
const languageToggleBtn = document.getElementById("languageToggle");
const languageToggleBtnn = document.getElementById("languageTogglle");

// Check if the current URL includes russian.html or english.html
if (currentUrl.includes("russian.html")) {
  languageToggleBtn.textContent = "Переключиться на английский";
  languageToggleBtnn.textContent = "Переключиться на английский";
} else {
  languageToggleBtn.textContent = "Switch to Russian";
  languageToggleBtnn.textContent = "Switch to Russian";
}

// Toggle between Russian and English pages
languageToggleBtn.addEventListener("click", () => {
  if (currentUrl.includes("russian.html")) {
    // Switch to english.html if currently on russian.html
    window.location.href = "index.html";
  } else if (currentUrl.includes("index.html")) {
    // Switch to russian.html if currently on english.html
    window.location.href = "russian.html";
  } else {
    // Default to switching to russian.html if on an unspecified page
    window.location.href = "russian.html";
  }
});
languageToggleBtnn.addEventListener("click", () => {
  if (currentUrl.includes("russian.html")) {
    // Switch to english.html if currently on russian.html
    window.location.href = "index.html";
  } else if (currentUrl.includes("index.html")) {
    // Switch to russian.html if currently on english.html
    window.location.href = "russian.html";
  } else {
    // Default to switching to russian.html if on an unspecified page
    window.location.href = "russian.html";
  }
});
// let slideIndex = 1;
// showSlides(slideIndex);

// // Next/previous controls
// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// // Thumbnail image controls
// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }
let items = document.querySelectorAll(".slider .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

let active = 3;
function loadShow() {
  let stt = 0;
  items[active].style.transform = `none`;
  items[active].style.zIndex = 1;
  items[active].style.filter = "none";
  items[active].style.opacity = 1;
  for (var i = active + 1; i < items.length; i++) {
    stt++;
    items[i].style.transform = `translateX(${120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(-1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
  stt = 0;
  for (var i = active - 1; i >= 0; i--) {
    stt++;
    items[i].style.transform = `translateX(${-120 * stt}px) scale(${
      1 - 0.2 * stt
    }) perspective(16px) rotateY(1deg)`;
    items[i].style.zIndex = -stt;
    items[i].style.filter = "blur(5px)";
    items[i].style.opacity = stt > 2 ? 0 : 0.6;
  }
}
loadShow();
next.onclick = function () {
  active = active + 1 < items.length ? active + 1 : active;
  loadShow();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : active;
  loadShow();
};

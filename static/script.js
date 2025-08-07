// Typewriter Effect
const textArray = [
  "A Python Developer.",
  "A Flask Developer.",
  "A Problem Solver.",
  "An Aspiring ML Engineer.",
  "A Passionate Coder."
];

let textIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenTexts = 2000;
const typewriterElement = document.getElementById("typewriter");

function type() {
  if (charIndex < textArray[textIndex].length) {
    typewriterElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    typewriterElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex = (textIndex + 1) % textArray.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typewriterElement) setTimeout(type, 1000);
});

// Theme Toggle
const toggleBtn = document.getElementById("themeToggle");
if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-theme");
    toggleBtn.textContent = toggleBtn.textContent === "🌙" ? "☀️" : "🌙";
  });
}

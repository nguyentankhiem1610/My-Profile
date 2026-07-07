// Create Stars
function createStars() {
  const container = document.getElementById("starsContainer");
  const starCount = 100;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";

    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const delay = Math.random() * 2;

    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${x}%`;
    star.style.top = `${y}%`;
    star.style.animationDelay = `${delay}s`;

    container.appendChild(star);
  }
}

createStars();

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
let isLightTheme = false;

themeToggle.addEventListener("click", () => {
  isLightTheme = !isLightTheme;
  document.body.classList.toggle("light-theme");
});

// Music Player
const musicToggle = document.getElementById("musicToggle");
const bgMusic = document.getElementById("bgMusic");
const musicIcon = musicToggle.querySelector(".music-icon");
let isPlaying = false;

musicToggle.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    musicToggle.classList.remove("playing");
    musicIcon.classList.remove("fa-pause");
    musicIcon.classList.add("fa-music");
  } else {
    bgMusic.play();
    musicToggle.classList.add("playing");
    musicIcon.classList.remove("fa-music");
    musicIcon.classList.add("fa-pause");
  }
  isPlaying = !isPlaying;
});

// Contact Modal
const floatingBtn = document.getElementById("floatingContactBtn");
const contactModal = document.getElementById("contactModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const navContactLink = document.getElementById("navContactLink");

function openModal() {
  contactModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  contactModal.classList.remove("active");
  document.body.style.overflow = "";
}

floatingBtn.addEventListener("click", openModal);
navContactLink.addEventListener("click", (e) => {
  e.preventDefault();
  openModal();
});
modalOverlay.addEventListener("click", closeModal);
modalCloseBtn.addEventListener("click", closeModal);

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && contactModal.classList.contains("active")) {
    closeModal();
  }
});

// Typewriter Effect
const phrases = [
  "IT student at UEH",
  "Tech Enthusiast",
  "Future Software Engineer",
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterText = document.querySelector(".typewriter-text");

function typeWriter() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    typewriterText.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;

    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeWriter, 2000);
      return;
    }
  } else {
    typewriterText.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;

    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeWriter, 500);
      return;
    }
  }

  const typingSpeed = isDeleting ? 50 : 100;
  setTimeout(typeWriter, typingSpeed);
}

// Start the typewriter effect after a short delay
setTimeout(typeWriter, 1000);

// Scroll Reveal Animation
const revealElements = document.querySelectorAll(".scroll-reveal");

const revealOnScroll = () => {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      element.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active NavLink
window.addEventListener("scroll", () => {
  let current = "";
  const sections = document.querySelectorAll("section");

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Skill Card Hover Effect
document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
  });
  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

// Project Card Hover Effect
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px)";
  });
  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)";
  });
});

console.log("Profile Website Loaded Successfully! 🚀");

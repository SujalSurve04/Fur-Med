// Sticky Navbar
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("sticky-navbar");
  } else {
    navbar.classList.remove("sticky-navbar");
  }
});

// Optional: Animated Cards (Handled by CSS, can be removed if not needed)
const animatedCards = document.querySelectorAll(".animated-card");

animatedCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "scale(1)";
  });
});

// Automatic Disease Card Swapping with Smooth Animation
let currentGroup = 1;
const totalGroups = 2; // Total groups of cards

function swapCards() {
  // Fade out current group
  document.querySelectorAll(`.group-${currentGroup}`).forEach((card) => {
    card.classList.add('fade-out');
    setTimeout(() => {
      card.style.display = "none";
      card.classList.remove('fade-out');
    }, 500); // Duration matches CSS transition
  });

  // Show next group
  currentGroup = (currentGroup % totalGroups) + 1;
  document.querySelectorAll(`.group-${currentGroup}`).forEach((card) => {
    card.style.display = "block";
    card.classList.add('fade-in');
    setTimeout(() => {
      card.classList.remove('fade-in');
    }, 500); // Duration matches CSS transition
  });
}

// Initialize Card Swapping
setInterval(swapCards, 5000); // Swap every 5 seconds

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
// document.addEventListener('DOMContentLoaded', () => {
//   const headerSection = document.getElementById('headerSection');
//   if (headerSection) {
//     const bgUrl = headerSection.getAttribute('data-bg-url');
//     headerSection.style.background = `url('${bgUrl}') no-repeat center center / cover`;
//   }
// });

document.addEventListener("DOMContentLoaded", () => {

  const navbar = document.querySelector('.navbar');
  const navbarNav = document.querySelector('.navbar-nav');
  const menuItems = document.querySelectorAll('.menu-item');
  const menuBtn = document.querySelector('[data-feather="menu"]');

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = "rgba(47, 36, 34, 0.85)";
    } else {
      navbar.style.background = "transparent";
    }
  });

    
  // Mobile menu toggle
  if (menuBtn) {
    menuBtn.addEventListener('click', () => {
      navbarNav.classList.toggle('active');
    });
  }

  // Hover animation menu card
  menuItems.forEach(item => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "scale(1.05)";
      item.style.transition = "0.4s ease";
      item.style.boxShadow = "0 20px 40px rgba(0,0,0,0.3)";
    });

    item.addEventListener("mouseleave", () => {
      item.style.transform = "scale(1)";
      item.style.boxShadow = "none";
    });
  });

  // Icons actions
 document.querySelector(".nav-icon.icon-search")
  ?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("🔍 Search feature coming soon!");
  });

document.querySelector(".nav-icon.icon-cart")
  ?.addEventListener("click", (e) => {
    e.preventDefault();
    alert("🛒 Cart feature coming soon!");
  });

// ==================
// MENU IMAGE COOKIES
// ==================

const cookiesImg = document.querySelector(".cookies-img");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  cookiesImg.style.transform = `translateY(${scrollY * 0.15}px)`;
});



// ===============================
// MENU CARD ANIMATION ON SCROLL
// ===============================
const menuCards = document.querySelectorAll(".menu-item");

function animateMenuCards() {
  menuCards.forEach((card, index) => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight - 100) {
      setTimeout(() => {
        card.classList.add("show");
      }, index * 150);
    }
  });
}

window.addEventListener("scroll", animateMenuCards);

animateMenuCards();

const aboutSection = document.querySelector(".about-section");

window.addEventListener("scroll", () => {
  const sectionTop = aboutSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 150) {
    aboutSection.classList.add("show");
  }
});
});
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  slides[index].classList.add("active");
  dots[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

// Auto-advance slider
setInterval(nextSlide, 5000);

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

// Product size selection
document.querySelectorAll(".size-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    // Remove active class from siblings
    this.parentNode.querySelectorAll(".size-btn").forEach((sibling) => {
      sibling.classList.remove("active");
    });
    // Add active class to clicked button
    this.classList.add("active");
  });
});

// Add to cart functionality
document.querySelectorAll(".btn-add-cart").forEach((btn) => {
  btn.addEventListener("click", function () {
    // Add animation
    this.style.transform = "scale(0.95)";
    this.textContent = "¡Agregado!";
    this.style.background = "#28a745";

    setTimeout(() => {
      this.style.transform = "scale(1)";
      this.textContent = "Agregar al carrito";
      this.style.background = "#6B46C1";
    }, 1500);
  });
});

// Product navigation arrows
document.querySelector(".nav-arrow.prev")?.addEventListener("click", () => {
  const container = document.querySelector(".products-grid");
  container.scrollBy({ left: -300, behavior: "smooth" });
});

document.querySelector(".nav-arrow.next")?.addEventListener("click", () => {
  const container = document.querySelector(".products-grid");
  container.scrollBy({ left: 300, behavior: "smooth" });
});

// Search functionality
document
  .querySelector(".search-bar button")
  .addEventListener("click", function () {
    const searchTerm = document.querySelector(".search-bar input").value;
    if (searchTerm.trim()) {
      alert(`Buscando: ${searchTerm}`);
      // Here you would implement actual search functionality
    }
  });

// Newsletter subscription
document
  .querySelector(".newsletter button")
  ?.addEventListener("click", function (e) {
    e.preventDefault();
    const email = document.querySelector(".newsletter input").value;
    if (email && email.includes("@")) {
      alert("¡Gracias por suscribirte!");
      document.querySelector(".newsletter input").value = "";
    } else {
      alert("Por favor ingresa un email válido");
    }
  });

// Category hover effects
document.querySelectorAll(".category-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.05)";
  });

  item.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Smooth scrolling for navigation
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

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(".category-item, .feature-item, .product-card, .brand-item")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Mobile menu toggle (if needed)
function toggleMobileMenu() {
  const nav = document.querySelector(".nav-menu");
  nav.classList.toggle("mobile-active");
}

// WhatsApp button click
document
  .querySelector(".whatsapp-btn")
  ?.addEventListener("click", function (e) {
    e.preventDefault();
    window.open("https://wa.me/573137700791", "_blank");
  });

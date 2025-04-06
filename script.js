
// Initialize Particles
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 150, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#383838" },
        "shape": { "type": "circle" },
        "opacity": { "value": 1.5 },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#383838", "opacity": 0.7, "width": 1.5 },
        "move": { "enable": true, "speed": 6 }
    },
    "interactivity": {
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } }
    },
    "retina_detect": true
});

// Particle Counter
var count_particles = document.querySelector(".js-count-particles");
var update = function () {
    requestAnimationFrame(update);
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
};
requestAnimationFrame(update);

// skills

document.addEventListener("DOMContentLoaded", () => {
  const skillCards = document.querySelectorAll(".skill-card");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.5 });
  skillCards.forEach(card => observer.observe(card));
});  


// education

document.addEventListener("DOMContentLoaded", () => {
  const timelineItems = document.querySelectorAll(".timeline-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.5 });
  timelineItems.forEach(item => observer.observe(item));
});  

// projects

const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('active');
  });
});


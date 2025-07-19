const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

let message = "";

if (hour >= 5 && hour < 12) {
  message = "Good Morning 🌇,";
} else if (hour >= 12 && hour < 17) {
  message = "Good Afternoon 🌆";
} else if (hour >= 17 && hour < 23) {
  message = "Good Evening 🌃";
}

greeting.textContent = message;


function scrolltoexp(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
function scrolltohome(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
function scrolltoabout(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
function scrolltocontact(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href").substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
}
let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "30px";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

document.querySelectorAll('.text').forEach(el => observer.observe(el));

const track = document.querySelector('.carousel-track');
const slides = document.querySelectorAll('.slide');
const container = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let index = 0;
let intervalId;

function updateSlidePosition() {
  track.style.transform = `translateX(-${index * 0}%)`;
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function goToSlide(i) {
  index = i;
  updateSlidePosition();
}

function nextSlide() {
  index = (index + 1) % slides.length;
  updateSlidePosition();
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  updateSlidePosition();
}

function startSlider() {
  intervalId = setInterval(nextSlide, 3000);
}

function pauseSlider() {
  clearInterval(intervalId);
}

// Events
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    goToSlide(parseInt(dot.dataset.index));
  });
});

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

container.addEventListener('mouseenter', pauseSlider);
container.addEventListener('mouseleave', startSlider);

updateSlidePosition();
startSlider();
const form = document.querySelector(".contact-form");
  const successMessage = document.getElementById("success-message");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = form.getAttribute("action");

    try {
      await fetch(action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });
      form.reset();
      successMessage.style.display = "block";
    } catch (error) {
      alert("❌ Something went wrong. Try again later.");
    }
  });

  const modal = document.getElementById("fileModal");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");
  
  openBtn.onclick = () => {
    modal.style.display = "block";
  };
  
  closeBtn.onclick = () => {
    modal.style.display = "none";
  };
  
  window.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
  openBtn.onclick = (e) => {
    e.preventDefault();
    modal.style.display = "block";
  };
/* ════════════════════════════════════════════
   CONFIGURATION GLOBALE
   ════════════════════════════════════════════ */
const CONFIG = {
  firebase: {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
  },
  telegram: {
    botToken: "YOUR_TELEGRAM_BOT_TOKEN",
    chatId: "YOUR_TELEGRAM_CHAT_ID",
  },
  whatsapp: {
    number: "+243891754005",
  },
  countdown: {
    days: 30,
  },
  messages: {
    noButton: [
      "Tu es sûre ? 😅",
      "Réfléchis encore ❤️",
      "Mon cœur va pleurer 💔",
      "Essaie plutôt le bouton Oui 😄",
      "S'il te plaît ? 🥺",
      "Je suis trop timide pour demander deux fois 😭",
    ],
  },
};

/* ════════════════════════════════════════════
   ÉTAT GLOBAL
   ════════════════════════════════════════════ */
let db = null;
let isPlaying = false;
let yesClicked = false;
let noAttempts = 0;

/* ════════════════════════════════════════════
   FIREBASE
   ════════════════════════════════════════════ */
function initializeFirebase() {
  try {
    firebase.initializeApp(CONFIG.firebase);
    db = firebase.firestore();
    console.log("✓ Firebase initialisé");
  } catch (error) {
    console.log("ℹ Firebase non configuré:", error.message);
  }
}

async function saveResponseToFirebase(reponse) {
  if (!db) return;

  try {
    const now = new Date();
    await db.collection("declarations").add({
      reponse,
      date: now.toLocaleDateString("fr-FR"),
      heure: now.toLocaleTimeString("fr-FR"),
      navigateur: navigator.userAgent,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    console.log("✓ Réponse enregistrée dans Firebase");
  } catch (error) {
    console.error("✗ Erreur Firebase:", error.message);
  }
}

/* ════════════════════════════════════════════
   TELEGRAM
   ════════════════════════════════════════════ */
async function sendTelegramNotification(reponse) {
  const { botToken, chatId } = CONFIG.telegram;

  if (botToken === "YOUR_TELEGRAM_BOT_TOKEN") {
    console.log("ℹ Telegram non configuré");
    return;
  }

  const now = new Date();
  let message =
    reponse === "Oui"
      ? `❤️ *Elle a accepté la demande !*\n\nDate : ${now.toLocaleDateString("fr-FR")}\nHeure : ${now.toLocaleTimeString("fr-FR")}\n\n🎉 Célébration en cours !`
      : `💔 *Réponse reçue*\n\nDate : ${now.toLocaleDateString("fr-FR")}\nHeure : ${now.toLocaleTimeString("fr-FR")}\nRéponse : ${reponse}`;

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown",
      }),
    });
    console.log("✓ Notification Telegram envoyée");
  } catch (error) {
    console.error("✗ Erreur Telegram:", error.message);
  }
}

/* ════════════════════════════════════════════
   WHATSAPP
   ════════════════════════════════════════════ */
function openWhatsApp() {
  const message = encodeURIComponent(
    "Oui ❤️, j'accepte d'être ta petite amie.",
  );
  const whatsappUrl = `https://wa.me/${CONFIG.whatsapp.number}?text=${message}`;
  window.open(whatsappUrl, "_blank");
}

/* ════════════════════════════════════════════
   CURSEUR PERSONNALISÉ
   ════════════════════════════════════════════ */
function initCustomCursor() {
  const cursor = document.getElementById("customCursor");
  if (!cursor) return;

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
  });

  document.addEventListener(
    "mouseenter",
    () => (cursor.style.display = "flex"),
  );
  document.addEventListener(
    "mouseleave",
    () => (cursor.style.display = "none"),
  );
  document.documentElement.style.cursor = "none";
}

/* ════════════════════════════════════════════
   ANIMATIONS - PÉTALES ET CŒURS
   ════════════════════════════════════════════ */
function initAnimations() {
  initPetals();
  initFloatingHearts();
}

function initPetals() {
  const petalsContainer = document.querySelector(".petals-container");
  if (!petalsContainer) return;

  function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.style.left = Math.random() * 100 + "%";
    petal.style.top = "-10px";
    petal.style.animationDuration = Math.random() * 3 + 4 + "s";
    petal.style.opacity = Math.random() * 0.5 + 0.3;
    petalsContainer.appendChild(petal);
    setTimeout(() => petal.remove(), 7000);
  }

  setInterval(createPetal, 300);
}

function initFloatingHearts() {
  const floatingHeartsContainer = document.querySelector(".floating-hearts");
  if (!floatingHeartsContainer) return;

  function createFloatingHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "%";
    heart.style.animationDuration = Math.random() * 4 + 6 + "s";
    heart.style.animationDelay = Math.random() * 2 + "s";
    floatingHeartsContainer.appendChild(heart);
    setTimeout(() => heart.remove(), 10000);
  }

  setInterval(createFloatingHeart, 2000);
}

/* ════════════════════════════════════════════
   MUSIQUE
   ════════════════════════════════════════════ */
function initMusic() {
  const playBtn = document.getElementById("playBtn");
  const bgMusic = document.getElementById("bgMusic");
  if (!playBtn || !bgMusic) return;

  playBtn.addEventListener("click", () => toggleMusic(bgMusic, playBtn));
  bgMusic.addEventListener("canplay", () => {
    bgMusic.play().catch(() => {
      console.log("ℹ Autoplay bloqué - cliquez sur le bouton");
    });
  });
}

function toggleMusic(audioElement, buttonElement) {
  if (isPlaying) {
    audioElement.pause();
    buttonElement.classList.remove("playing");
    isPlaying = false;
  } else {
    audioElement.play();
    buttonElement.classList.add("playing");
    isPlaying = true;
  }
}

function playMusic(audioElement, buttonElement) {
  if (!isPlaying) {
    audioElement.currentTime = 0;
    audioElement.play();
    if (buttonElement) buttonElement.classList.add("playing");
    isPlaying = true;
  }
}

/* ════════════════════════════════════════════
   DÉFILEMENT FLUIDE
   ════════════════════════════════════════════ */
function initSmoothScroll() {
  window.scrollToSection = function (sectionId) {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };
}

/* ════════════════════════════════════════════
   ANIMATIONS AU DÉFILEMENT
   ════════════════════════════════════════════ */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.animation = "fadeInUp 0.8s ease forwards";
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll("[data-aos]").forEach((el) => observer.observe(el));
}

/* ════════════════════════════════════════════
   CITATIONS - MACHINE À ÉCRIRE
   ════════════════════════════════════════════ */
function initQuoteAnimation() {
  const quoteCards = document.querySelectorAll(".quote-text");
  if (quoteCards.length === 0) return;

  quoteCards.forEach((card, index) => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setTimeout(() => typeWriter(card), index * 500);
        observer.unobserve(card);
      }
    });
    observer.observe(card);
  });
}

function typeWriter(element) {
  const text = element.dataset.text;
  let index = 0;
  element.textContent = "";

  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }

  type();
}

/* ════════════════════════════════════════════
   COMPTE À REBOURS
   ════════════════════════════════════════════ */
function initCountdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + CONFIG.countdown.days);
  targetDate.setHours(0, 0, 0, 0);

  function updateTimer() {
    const distance = targetDate - new Date().getTime();

    if (distance <= 0) {
      setCountdownValues(0, 0, 0, 0);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountdownValues(days, hours, minutes, seconds);
  }

  function setCountdownValues(days, hours, minutes, seconds) {
    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(
      2,
      "0",
    );
    document.getElementById("minutes").textContent = String(minutes).padStart(
      2,
      "0",
    );
    document.getElementById("seconds").textContent = String(seconds).padStart(
      2,
      "0",
    );
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

/* ════════════════════════════════════════════
   EFFETS VISUELS
   ════════════════════════════════════════════ */
function createProposalParticles() {
  const container = document.querySelector(".particles");
  if (!container) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 2 + "s";
    container.appendChild(particle);
  }
}

function createConfetti() {
  const container = document.getElementById("confetti-container");
  const colors = ["#ff1744", "#ff69b4", "#ffd700", "#ff6b9d"];

  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.background =
      colors[Math.floor(Math.random() * colors.length)];
    confetti.style.animationDelay = Math.random() * 1 + "s";
    container.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3500);
  }
}

function createHeartFireworks() {
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "50vh";
    heart.style.fontSize = Math.random() * 2 + 1 + "rem";
    heart.style.animation = "confetti-fall 3s ease-in forwards";
    heart.style.animationDelay = Math.random() * 0.5 + "s";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 3500);
  }
}

function showFloatingMessage(text) {
  const message = document.createElement("div");
  message.textContent = text;
  message.style.cssText = `
    position: fixed;
    left: ${Math.random() * (window.innerWidth - 200)}px;
    top: ${Math.random() * (window.innerHeight - 100)}px;
    background: rgba(255, 23, 68, 0.9);
    color: white;
    padding: 15px 25px;
    border-radius: 50px;
    font-size: 1rem;
    font-weight: 600;
    z-index: 1500;
    animation: fadeInUp 0.5s ease forwards, fadeOut 0.5s ease 2s forwards;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  `;

  document.body.appendChild(message);
  setTimeout(() => message.remove(), 2500);
}

/* ════════════════════════════════════════════
   BOUTONS
   ════════════════════════════════════════════ */
function initYesButton() {
  const yesBtn = document.getElementById("yesBtn");
  if (yesBtn) yesBtn.addEventListener("click", handleYesClick);
}

async function handleYesClick() {
  if (yesClicked) return;
  yesClicked = true;

  createConfetti();
  createHeartFireworks();

  const bgMusic = document.getElementById("bgMusic");
  const playBtn = document.getElementById("playBtn");
  playMusic(bgMusic, playBtn);

  showModal("successModal");
  await saveResponseToFirebase("Oui");
  await sendTelegramNotification("Oui");
  openWhatsApp();

  setTimeout(() => showCertificate(), 3000);
}

function initNoButton() {
  const noBtn = document.getElementById("noBtn");
  if (noBtn) noBtn.addEventListener("mouseover", handleNoHover);
}

async function handleNoHover(event) {
  noAttempts++;

  const maxX = window.innerWidth - event.target.offsetWidth;
  const maxY = window.innerHeight - event.target.offsetHeight;

  event.target.style.position = "fixed";
  event.target.style.left = Math.random() * maxX + "px";
  event.target.style.top = Math.random() * maxY + "px";
  event.target.style.transform = `scale(${Math.max(0.3, 1 - noAttempts * 0.15)})`;

  if (noAttempts <= CONFIG.messages.noButton.length) {
    showFloatingMessage(CONFIG.messages.noButton[noAttempts - 1]);
  }

  if (noAttempts > CONFIG.messages.noButton.length) {
    event.target.disabled = true;
    showModal("refusalModal");
    await saveResponseToFirebase("Non");
    await sendTelegramNotification("Non");
  }
}

/* ════════════════════════════════════════════
   MODALES
   ════════════════════════════════════════════ */
function initModals() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  });
}

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) modal.classList.remove("hidden");
}

function closeModal() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.classList.add("hidden");
  });
}

/* ════════════════════════════════════════════
   CERTIFICAT
   ════════════════════════════════════════════ */
function showCertificate() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  document.getElementById("certificateDate").textContent = dateStr;
  showModal("certificateModal");
}

function downloadCertificate() {
  const now = new Date();
  const dateStr = now.toLocaleDateString("fr-FR");

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1200;
  canvas.height = 800;

  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#f5f1e8");
  gradient.addColorStop(1, "#e8dcc8");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 6;
  ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

  ctx.fillStyle = "#333";
  ctx.font = "bold 40px Georgia";
  ctx.textAlign = "center";
  ctx.fillText("Certificat Officiel", canvas.width / 2, 120);

  ctx.font = "normal 30px Georgia";
  ctx.fillText("Ceci certifie que", canvas.width / 2, 200);

  ctx.font = "bold 50px Georgia";
  ctx.fillStyle = "#ff1744";
  ctx.fillText(
    "Nous sommes Officiellement en Couple ❤️",
    canvas.width / 2,
    350,
  );

  ctx.font = "normal 30px Georgia";
  ctx.fillStyle = "#333";
  ctx.fillText("À partir de ce jour", canvas.width / 2, 450);
  ctx.fillText(dateStr, canvas.width / 2, 520);

  ctx.font = "italic 25px Georgia";
  ctx.fillStyle = "#666";
  ctx.fillText("Avec Amour et Sincérité", canvas.width / 2, 700);

  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `certificat-couple-${dateStr}.png`;
  link.click();
}

/* ════════════════════════════════════════════
   STYLES DYNAMIQUES
   ════════════════════════════════════════════ */
function injectDynamicStyles() {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes fadeOut {
      to {
        opacity: 0;
        transform: translateY(-20px);
      }
    }
    @keyframes confetti-fall {
      to {
        opacity: 0;
        transform: translateY(100vh) rotateZ(720deg);
      }
    }
  `;
  document.head.appendChild(style);
}

/* ════════════════════════════════════════════
   GESTION RESPONSIVE
   ════════════════════════════════════════════ */
function initResponsive() {
  window.addEventListener("resize", () => {
    const noBtn = document.getElementById("noBtn");
    if (noBtn && noBtn.style.position === "fixed") {
      const maxX = window.innerWidth - noBtn.offsetWidth;
      const maxY = window.innerHeight - noBtn.offsetHeight;

      let x = parseFloat(noBtn.style.left) || 0;
      let y = parseFloat(noBtn.style.top) || 0;

      if (x > maxX) noBtn.style.left = maxX - 20 + "px";
      if (y > maxY) noBtn.style.top = maxY - 20 + "px";
    }
  });
}

/* ════════════════════════════════════════════
   UTILITAIRES
   ════════════════════════════════════════════ */
function formatDate(date) {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function loadPersonalPhotos(photoUrls) {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  photoUrls.forEach((url, index) => {
    if (galleryItems[index]) galleryItems[index].src = url;
  });
}

/* ════════════════════════════════════════════
   INITIALISATION
   ════════════════════════════════════════════ */
function initialize() {
  console.log(
    "%c💕 SITE DE DÉCLARATION D'AMOUR 💕",
    "color: #ff1744; font-size: 20px; font-weight: bold;",
  );
  console.log(
    "%cConfiguration requise :",
    "color: #ff69b4; font-weight: bold;",
  );
  console.log("1. Firebase: CONFIG.firebase");
  console.log("2. Telegram: CONFIG.telegram");
  console.log("3. WhatsApp: CONFIG.whatsapp.number");
  console.log("4. Musique: index.html (section audio)");
  console.log("5. Photos: Galerie (images)");
  console.log(
    "%cBonne chance ! ❤️",
    "color: #ffd700; font-size: 16px; font-weight: bold;",
  );

  initializeFirebase();
  initCustomCursor();
  initAnimations();
  initMusic();
  initSmoothScroll();
  initScrollAnimations();
  initQuoteAnimation();
  initCountdown();
  createProposalParticles();
  initYesButton();
  initNoButton();
  initModals();
  initResponsive();
  injectDynamicStyles();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initialize);
} else {
  initialize();
}

console.log(
  "%c✨ Prêt pour une déclaration d'amour inoubliable ! ✨",
  "color: #ff69b4; font-size: 14px; font-weight: bold;",
);

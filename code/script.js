/* ============================================
   CONFIGURATION FIREBASE
   ============================================ */
// IMPORTANT: Remplacez ces valeurs par vos propres identifiants Firebase
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};

// Configuration Telegram Bot
const TELEGRAM_BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const TELEGRAM_CHAT_ID = "YOUR_TELEGRAM_CHAT_ID";

// Configuration WhatsApp (numéro de téléphone au format international)
const WHATSAPP_NUMBER = "+33612345678"; // Remplacez par votre numéro

// ============================================
// INITIALISATION FIREBASE
// ============================================
let db = null;
try {
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
} catch (error) {
  console.log("Firebase non configuré (optionnel):", error);
}

// ============================================
// CURSEUR PERSONNALISÉ
// ============================================
const cursor = document.getElementById("customCursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

document.addEventListener("mouseenter", () => {
  cursor.style.display = "flex";
});

document.addEventListener("mouseleave", () => {
  cursor.style.display = "none";
});

// Masquer le curseur par défaut
document.documentElement.style.cursor = "none";

// ============================================
// FOND ANIMÉ - PÉTALES DE ROSES
// ============================================
const petalsContainer = document.querySelector(".petals-container");

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

// ============================================
// CŒURS FLOTTANTS
// ============================================
const floatingHeartsContainer = document.querySelector(".floating-hearts");

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

// ============================================
// MUSIQUE
// ============================================
const playBtn = document.getElementById("playBtn");
const bgMusic = document.getElementById("bgMusic");
let isPlaying = false;

playBtn.addEventListener("click", () => {
  if (isPlaying) {
    bgMusic.pause();
    playBtn.classList.remove("playing");
    isPlaying = false;
  } else {
    bgMusic.play();
    playBtn.classList.add("playing");
    isPlaying = true;
  }
});

// Démarrer la musique en autoplay (peut être bloqué par le navigateur)
bgMusic.addEventListener("canplay", () => {
  bgMusic.play().catch(() => {
    console.log("Autoplay bloqué - cliquez sur le bouton pour lire la musique");
  });
});

// ============================================
// DÉFILEMENT FLUIDE
// ============================================
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

// ============================================
// ANIMATIONS AU DÉFILEMENT
// ============================================
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

document.querySelectorAll("[data-aos]").forEach((element) => {
  observer.observe(element);
});

// ============================================
// CITATIONS - EFFET MACHINE À ÉCRIRE
// ============================================
const quoteCards = document.querySelectorAll(".quote-text");

function typeWriterEffect(element) {
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

  return type;
}

quoteCards.forEach((card, index) => {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      setTimeout(() => {
        typeWriterEffect(card)();
      }, index * 500);
      observer.unobserve(card);
    }
  });
  observer.observe(card);
});

// ============================================
// COMPTE À REBOURS
// ============================================
function updateCountdown() {
  // Définir la date cible (à personnaliser)
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 30); // 30 jours à partir d'aujourd'hui
  targetDate.setHours(0, 0, 0, 0);

  const updateTimer = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) {
      document.getElementById("days").textContent = "00";
      document.getElementById("hours").textContent = "00";
      document.getElementById("minutes").textContent = "00";
      document.getElementById("seconds").textContent = "00";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

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
  };

  updateTimer();
  setInterval(updateTimer, 1000);
}

updateCountdown();

// ============================================
// CRÉER DES PARTICULES ANIMÉES
// ============================================
function createProposalParticles() {
  const particlesContainer = document.querySelector(".particles");
  if (!particlesContainer) return;

  for (let i = 0; i < 50; i++) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 2 + "s";
    particlesContainer.appendChild(particle);
  }
}

createProposalParticles();

// ============================================
// CONFETTIS
// ============================================
function createConfetti() {
  const container = document.getElementById("confetti-container");
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-10px";
    confetti.style.background = ["#ff1744", "#ff69b4", "#ffd700", "#ff6b9d"][
      Math.floor(Math.random() * 4)
    ];
    confetti.style.delay = Math.random() * 0.5 + "s";
    confetti.style.animationDelay = Math.random() * 1 + "s";
    container.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3500);
  }
}

// ============================================
// FEU D'ARTIFICE DE CŒURS
// ============================================
function createHeartFireworks() {
  const container = document.getElementById("confetti-container");
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "50vh";
    heart.style.fontSize = Math.random() * 2 + 1 + "rem";
    heart.style.animation = `confetti-fall 3s ease-in forwards`;
    heart.style.animationDelay = Math.random() * 0.5 + "s";
    container.appendChild(heart);

    setTimeout(() => heart.remove(), 3500);
  }
}

// ============================================
// BOUTON OUI
// ============================================
let yesClicked = false;

document.getElementById("yesBtn").addEventListener("click", async () => {
  if (yesClicked) return;
  yesClicked = true;

  // Effets visuels
  createConfetti();
  createHeartFireworks();

  // Jouer la musique de célébration
  bgMusic.currentTime = 0;
  bgMusic.play();
  document.getElementById("playBtn").classList.add("playing");
  isPlaying = true;

  // Afficher la modale de succès
  showModal("successModal");

  // Enregistrer dans Firebase
  await saveResponseToFirebase("Oui");

  // Envoyer notification Telegram
  await sendTelegramNotification("Oui");

  // Ouvrir WhatsApp
  openWhatsApp();

  // Afficher le certificat après 3 secondes
  setTimeout(() => {
    showCertificate();
  }, 3000);
});

// ============================================
// BOUTON NON - COMPORTEMENT AMUSANT
// ============================================
let noAttempts = 0;
const noMessages = [
  "Tu es sûre ? 😅",
  "Réfléchis encore ❤️",
  "Mon cœur va pleurer 💔",
  "Essaie plutôt le bouton Oui 😄",
  "S'il te plaît ? 🥺",
  "Je suis trop timide pour demander deux fois 😭",
];

document.getElementById("noBtn").addEventListener("mouseover", function () {
  noAttempts++;

  // Récupérer les dimensions du bouton et du viewport
  const maxX = window.innerWidth - this.offsetWidth;
  const maxY = window.innerHeight - this.offsetHeight;

  // Position aléatoire
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  this.style.position = "fixed";
  this.style.left = randomX + "px";
  this.style.top = randomY + "px";

  // Rétrécir progressivement
  const scale = Math.max(0.3, 1 - noAttempts * 0.15);
  this.style.transform = `scale(${scale})`;

  // Afficher un message amusant
  if (noAttempts <= 6) {
    showFloatingMessage(noMessages[noAttempts - 1]);
  }

  // Après plusieurs tentatives, afficher un message final
  if (noAttempts > 6) {
    document.getElementById("noBtn").disabled = true;
    showModal("refusalModal");
    setTimeout(async () => {
      await saveResponseToFirebase("Non");
      await sendTelegramNotification("Non");
    }, 500);
  }
});

// ============================================
// MESSAGE FLOTTANT
// ============================================
function showFloatingMessage(text) {
  const message = document.createElement("div");
  message.textContent = text;
  message.style.position = "fixed";
  message.style.left = Math.random() * (window.innerWidth - 200) + "px";
  message.style.top = Math.random() * (window.innerHeight - 100) + "px";
  message.style.background = "rgba(255, 23, 68, 0.9)";
  message.style.color = "white";
  message.style.padding = "15px 25px";
  message.style.borderRadius = "50px";
  message.style.fontSize = "1rem";
  message.style.fontWeight = "600";
  message.style.zIndex = "1500";
  message.style.animation =
    "fadeInUp 0.5s ease forwards, fadeOut 0.5s ease 2s forwards";
  message.style.backdropFilter = "blur(10px)";
  message.style.border = "1px solid rgba(255, 255, 255, 0.2)";

  document.body.appendChild(message);
  setTimeout(() => message.remove(), 2500);
}

// ============================================
// FIREBASE - ENREGISTRER RÉPONSE
// ============================================
async function saveResponseToFirebase(reponse) {
  if (!db) {
    console.log("Firebase non configuré");
    return;
  }

  try {
    const now = new Date();
    const data = {
      reponse: reponse,
      date: now.toLocaleDateString("fr-FR"),
      heure: now.toLocaleTimeString("fr-FR"),
      navigateur: navigator.userAgent,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    await db.collection("declarations").add(data);
    console.log("Réponse enregistrée dans Firebase ✓");
  } catch (error) {
    console.log("Erreur Firebase:", error);
  }
}

// ============================================
// TELEGRAM - ENVOYER NOTIFICATION
// ============================================
async function sendTelegramNotification(reponse) {
  const now = new Date();
  let message = "";

  if (reponse === "Oui") {
    message = `❤️ *Elle a accepté la demande !*\n\nDate : ${now.toLocaleDateString("fr-FR")}\nHeure : ${now.toLocaleTimeString("fr-FR")}\n\n🎉 Célébration en cours !`;
  } else {
    message = `💔 *Réponse reçue*\n\nDate : ${now.toLocaleDateString("fr-FR")}\nHeure : ${now.toLocaleTimeString("fr-FR")}\nRéponse : ${reponse}`;
  }

  // Méthode alternative si clé API manquante : afficher une alerte pour test
  if (TELEGRAM_BOT_TOKEN === "YOUR_TELEGRAM_BOT_TOKEN") {
    console.log("Telegram non configuré (test mode):", message);
    return;
  }

  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: "Markdown",
      }),
    });
    console.log("Notification Telegram envoyée ✓");
  } catch (error) {
    console.log("Erreur Telegram:", error);
  }
}

// ============================================
// WHATSAPP - OUVRIR AVEC MESSAGE PRÉREMPLI
// ============================================
function openWhatsApp() {
  const message = encodeURIComponent(
    "Oui ❤️, j'accepte d'être ta petite amie.",
  );
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  window.open(whatsappUrl, "_blank");
}

// ============================================
// MODALES
// ============================================
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove("hidden");
  }
}

function closeModal() {
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.classList.add("hidden");
  });
}

// Fermer la modale en cliquant en dehors
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
});

// ============================================
// CERTIFICAT
// ============================================
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

  // Créer un élément canvas pour générer le certificat en image
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = 1200;
  canvas.height = 800;

  // Fond
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
  gradient.addColorStop(0, "#f5f1e8");
  gradient.addColorStop(1, "#e8dcc8");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Border
  ctx.strokeStyle = "#ffd700";
  ctx.lineWidth = 6;
  ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);

  // Texte
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

  // Télécharger
  const link = document.createElement("a");
  link.href = canvas.toDataURL("image/png");
  link.download = `certificat-couple-${dateStr}.png`;
  link.click();
}

// ============================================
// ANIMATION FADEOUT (CSS)
// ============================================
const style = document.createElement("style");
style.textContent = `
    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// GESTION RESPONSIVE - AJUSTER POSITIONS
// ============================================
window.addEventListener("resize", () => {
  const noBtn = document.getElementById("noBtn");
  if (noBtn.style.position === "fixed") {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    let x = parseFloat(noBtn.style.left);
    let y = parseFloat(noBtn.style.top);

    if (x > maxX) noBtn.style.left = maxX - 20 + "px";
    if (y > maxY) noBtn.style.top = maxY - 20 + "px";
  }
});

// ============================================
// LOGS DE DÉBOGAGE
// ============================================
console.log(
  "%c💕 SITE DE DÉCLARATION D'AMOUR 💕",
  "color: #ff1744; font-size: 20px; font-weight: bold;",
);
console.log("%cConfiguration requise :", "color: #ff69b4; font-weight: bold;");
console.log("1. Firebase: Remplacez firebaseConfig avec vos identifiants");
console.log("2. Telegram: Remplacez TELEGRAM_BOT_TOKEN et TELEGRAM_CHAT_ID");
console.log("3. WhatsApp: Remplacez WHATSAPP_NUMBER par votre numéro");
console.log("4. Musique: Remplacez l'URL dans index.html (section audio)");
console.log("5. Photos: Remplacez les images SVG par vos photos personnelles");
console.log(
  "%cBonne chance ! ❤️",
  "color: #ffd700; font-size: 16px; font-weight: bold;",
);

// ============================================
// FONCTION UTILITAIRE - FORMATTER DATES
// ============================================
function formatDate(date) {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

// ============================================
// CHARGER LES IMAGES PERSONNELLES
// ============================================
// Exemple pour remplacer les images : modifier les src des <img> dans le HTML
// ou utiliser cette fonction pour charger dynamiquement
function loadPersonalPhotos(photoUrls) {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  photoUrls.forEach((url, index) => {
    if (galleryItems[index]) {
      galleryItems[index].src = url;
    }
  });
}

// Exemple d'usage :
// loadPersonalPhotos([
//     'https://example.com/photo1.jpg',
//     'https://example.com/photo2.jpg',
//     'https://example.com/photo3.jpg',
//     'https://example.com/photo4.jpg'
// ]);

console.log(
  "%c✨ Prêt pour une déclaration d'amour inoubliable ! ✨",
  "color: #ff69b4; font-size: 14px; font-weight: bold;",
);

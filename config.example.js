<!-- 
    ================================================
    EXEMPLE DE CONFIGURATION FIREBASE
    ================================================
    
    Ce fichier montre comment charger les variables
    de configuration depuis un fichier externe.
    
    ÉTAPES:
    1. Créez un fichier 'config.js' à côté de script.js
    2. Copiez le contenu ci-dessous
    3. Remplacez les valeurs par vos propres clés
    4. Modifiez script.js pour charger depuis ce fichier
    
    SÉCURITÉ:
    - Ne JAMAIS committer ce fichier avec les vraies clés
    - Utilisez des Secrets GitHub pour la production
    - Utilisez un .gitignore pour le fichier local
-->

<!-- Créer un fichier: config.example.js -->

// Configuration REQUISE - À PERSONNALISER

const CONFIG = {
    // Firebase Configuration
    firebase: {
        apiKey: "YOUR_API_KEY_HERE",
        authDomain: "your-project.firebaseapp.com",
        projectId: "your-project-id",
        storageBucket: "your-project.appspot.com",
        messagingSenderId: "123456789012",
        appId: "1:123456789012:web:abcdef1234567890"
    },

    // Telegram Configuration
    telegram: {
        botToken: "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11",
        chatId: "987654321"
    },

    // WhatsApp Configuration
    whatsapp: {
        phoneNumber: "+33612345678"  // Format international avec +
    },

    // Musique (URL HTTPS)
    music: {
        url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    },

    // Photos Personnelles
    photos: {
        gallery: [
            "https://example.com/photo1.jpg",
            "https://example.com/photo2.jpg",
            "https://example.com/photo3.jpg",
            "https://example.com/photo4.jpg"
        ]
    },

    // Textes Personnalisés
    texts: {
        heroTitle: "J'ai quelque chose<br>d'important à te dire...",
        proposalIntro: [
            "Depuis quelque temps, tu occupes une place particulière dans mon cœur.",
            "Chaque sourire, chaque conversation et chaque moment partagé comptent énormément pour moi.",
            "Aujourd'hui, j'aimerais te poser une question importante..."
        ],
        proposalQuestion: "Veux-tu être ma petite amie ? ❤️",
        successMessage: "Tu viens de faire de moi la personne la plus heureuse du monde ❤️",
        letterText: [
            "Chère Amour,",
            "Je t'écris aujourd'hui pour te dire ce que mon cœur ressent depuis le jour où tu es entrée dans ma vie.",
            "Tu as apporté de la lumière, de la joie et du sens à mes jours. Chaque moment avec toi est précieux et mémorable.",
            "Tes sourires me font oublier tous mes soucis, ta présence me rassure, et ton amitié me fait devenir une meilleure personne.",
            "Je souhaite construire un avenir magnifique avec toi, rempli de moments heureux, de rires et d'amour sincère.",
            "Avec tout mon amour,",
            "Celui qui t'aime ❤️"
        ]
    },

    // Compte à Rebours
    countdown: {
        targetDate: "2024-12-31T20:00:00"  // Format ISO 8601
    },

    // Couleurs Personnalisées
    colors: {
        primaryColor: "#ff1744",
        secondaryColor: "#ff69b4",
        accentColor: "#ffd700"
    }
};

// Exporter la configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// ================================================
// ÉTAPES POUR UTILISER CETTE CONFIGURATION
// ================================================

/*

1. CRÉER LE FICHIER config.js:
   - Renommez 'config.example.js' en 'config.js'
   - Remplacez les valeurs placeholder
   - N'ajoutez PAS config.js à Git

2. AJOUTER À .gitignore:
   config.js
   config.local.js

3. MODIFIER script.js POUR CHARGER LA CONFIG:

   // En haut de script.js, après les imports Firebase :
   
   // Charger la configuration
   let firebaseConfig = CONFIG.firebase;
   let TELEGRAM_BOT_TOKEN = CONFIG.telegram.botToken;
   let TELEGRAM_CHAT_ID = CONFIG.telegram.chatId;
   let WHATSAPP_NUMBER = CONFIG.whatsapp.phoneNumber;

4. UTILISER LES TEXTES PERSONNALISÉS:

   // Exemple pour la lettre:
   const letterText = CONFIG.texts.letterText;
   const letterLines = document.querySelectorAll('.letter-line');
   letterLines.forEach((line, index) => {
       if (letterText[index]) {
           line.textContent = letterText[index];
       }
   });

5. POUR LA PRODUCTION (GitHub Secrets):
   
   // Au lieu de config.js, utilisez:
   const firebaseConfig = {
       apiKey: process.env.VITE_FIREBASE_API_KEY,
       // ...
   };

*/

// ================================================
// TEMPLATE MINIMAL (Si vous préférez une approche simple)
// ================================================

/*

window.SITE_CONFIG = {
    firebase: {
        apiKey: process.env.FIREBASE_API_KEY || "YOUR_API_KEY",
        projectId: process.env.FIREBASE_PROJECT_ID || "YOUR_PROJECT_ID"
    },
    telegram: {
        botToken: process.env.TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN",
        chatId: process.env.TELEGRAM_CHAT_ID || "YOUR_CHAT_ID"
    }
};

*/

// ================================================
// VÉRIFIER QUE LA CONFIGURATION EST CHARGÉE
// ================================================

if (typeof CONFIG !== 'undefined') {
    console.log('✅ Configuration chargée avec succès');
    // Vérifier que toutes les clés sont présentes
    if (CONFIG.firebase.apiKey === 'YOUR_API_KEY_HERE') {
        console.warn('⚠️ ATTENTION: Veuillez configurer Firebase dans config.js');
    }
} else {
    console.error('❌ Fichier config.js non trouvé. Utilisez config.example.js');
}


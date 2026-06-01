# 💕 Site de Déclaration d'Amour Premium 💕

Un magnifique site web romantique premium créé en HTML, CSS et JavaScript pour faire une déclaration d'amour inoubliable.

## 🌟 Caractéristiques

### Design & Animations
- ✨ Design moderne inspiré d'Apple avec Glassmorphism
- 🎨 Palette de couleurs romantique (rouge, rose, blanc, doré)
- 🌹 Pétales de roses animés tombant
- ❤️ Cœurs flottants subtils
- 💫 Effets lumineux et particules animées
- 📱 Entièrement responsive (mobile, tablette, desktop)
- 🎯 Animations fluides et élégantes

### Sections
1. **Écran d'Accueil** - Introduction dramatique avec animation
2. **Notre Histoire** - Timeline romantique avec 4 étapes
3. **Galerie Photo** - Galerie moderne avec effets de zoom
4. **Citations Romantiques** - 4 citations avec effet machine à écrire
5. **Lettre d'Amour** - Lettre élégante qui s'affiche progressivement
6. **Bouquet de Fleurs** - Roses rouges animées
7. **Musique** - Lecteur audio moderne avec contrôles
8. **Compte à Rebours** - Compte à rebours animé jusqu'à une date importante
9. **La Grande Demande** - Section spectaculaire avec demande officielle

### Fonctionnalités Interactives
- ❤️ Curseur personnalisé en forme de cœur
- 🎵 Lecteur de musique background
- 🎉 Confettis et feu d'artifice de cœurs
- 📸 Galerie photo moderne
- 💬 Citations avec animation machine à écrire
- ⏱️ Compte à rebours en direct

### Intégrations Techniques
- 🔥 Firebase Firestore (enregistrement des réponses)
- 📱 Telegram Bot (notifications)
- 💬 WhatsApp (message prérempli)
- 📜 Certificat romantique généré automatiquement
- 🎊 Confettis et animations de célébration

### Comportement des Boutons
- **Bouton OUI** :
  - Déclenche confettis et feu d'artifice
  - Joue la musique
  - Enregistre dans Firebase
  - Envoie notification Telegram
  - Ouvre WhatsApp
  - Affiche certificat officiel

- **Bouton NON** :
  - Change de position (fuit le curseur)
  - Rétrécit progressivement
  - Affiche messages amusants
  - Enregistre la réponse
  - Envoie notification Telegram

## 🚀 Démarrage Rapide

### 1. Installation Locale

```bash
# Clonez le repository ou téléchargez les fichiers
cd demande_girl_friend

# Ouvrez index.html dans un navigateur
# Ou utilisez un serveur local :
python -m http.server 8000
# Puis accédez à http://localhost:8000
```

### 2. Configuration Requise

Avant de déployer, vous devez configurer :

#### 🔧 Configuration Firebase

1. Créez un compte sur [Firebase Console](https://console.firebase.google.com)
2. Créez un nouveau projet
3. Activez Firestore Database
4. Copiez votre configuration :

```javascript
// Dans script.js, ligne 6-14
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

#### 🤖 Configuration Telegram Bot

1. Créez un bot via [@BotFather](https://t.me/botfather) sur Telegram
2. Récupérez votre **TELEGRAM_BOT_TOKEN**
3. Trouvez votre **TELEGRAM_CHAT_ID** (envoyez un message à [@userinfobot](https://t.me/userinfobot))
4. Mettez à jour dans script.js (lignes 17-18) :

```javascript
const TELEGRAM_BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const TELEGRAM_CHAT_ID = "YOUR_TELEGRAM_CHAT_ID";
```

#### 📱 Configuration WhatsApp

Dans script.js ligne 21, remplacez par votre numéro :

```javascript
const WHATSAPP_NUMBER = "+33612345678"; // Format international
```

#### 🎵 Configuration Musique

1. Trouvez une musique romantique (royalty-free)
2. Hébergez-la (Firebase Storage, Cloudinary, etc.)
3. Dans index.html ligne 55, remplacez l'URL :

```html
<source src="https://votre-url-musique.mp3" type="audio/mpeg">
```

#### 📸 Remplacer les Photos

Dans la section Galerie, remplacez les images SVG par vos photos :

```html
<!-- Ancienne image -->
<img src="data:image/svg+xml,..." alt="Photo 1">

<!-- Nouvelle image -->
<img src="https://votre-photo.jpg" alt="Photo 1">
```

Ou utiliser la fonction JavaScript :

```javascript
loadPersonalPhotos([
    'https://example.com/photo1.jpg',
    'https://example.com/photo2.jpg',
    'https://example.com/photo3.jpg',
    'https://example.com/photo4.jpg'
]);
```

#### 📅 Personnaliser la Lettre et le Compte à Rebours

**Lettre d'Amour** (index.html, section #letter) :
```html
<p class="letter-line">Remplacez ce texte par votre message personnel</p>
```

**Compte à Rebours** (script.js, fonction updateCountdown()) :
```javascript
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30); // Remplacez par votre date
```

## 📦 Déploiement sur GitHub Pages

### Étape 1 : Créer un Repository GitHub

```bash
# Créez un repository nommé : yourusername.github.io
# Ou un repository normal avec Pages activées
```

### Étape 2 : Pousser les Fichiers

```bash
# Initialisez git
git init

# Ajoutez les fichiers
git add .

# Commitez
git commit -m "Ajout site de déclaration d'amour premium"

# Poussez vers GitHub
git push -u origin main
```

### Étape 3 : Activer GitHub Pages

1. Allez dans **Settings** > **Pages**
2. Sélectionnez **main** comme branche source
3. Attendez le déploiement (quelques minutes)
4. Votre site est en ligne sur `https://yourusername.github.io`

### Étape 4 : Partager le Lien

Partagez votre lien avec la personne spéciale ! 💕

## 🎨 Personnalisation Avancée

### Modifier les Couleurs

Dans `style.css`, variables CSS (lignes 1-12) :

```css
:root {
    --primary-color: #ff1744;      /* Rouge */
    --secondary-color: #ff69b4;    /* Rose */
    --accent-color: #ffd700;       /* Doré */
    --dark-bg: #0a0a0a;            /* Fond noir */
}
```

### Modifier les Animations

Les durées et effets sont configurables :

```css
--duration: 0.6s;          /* Durée des animations */
--easing: cubic-bezier(...) /* Courbe d'accélération */
```

### Ajouter une Musique Personnelle

1. Convertissez votre fichier en MP3
2. Hébergez-le (Firebase Storage, etc.)
3. Mettez à jour le `<audio>` dans index.html

### Modifier les Citations

Dans index.html, section #quotes :

```html
<div class="quote-card">
    <p class="quote-text" data-text="Votre citation ici"></p>
</div>
```

### Ajouter des Sections Personnalisées

Copiez une section existante et personnalisez-la. N'oubliez pas :
1. Ajouter le CSS correspondant
2. Ajouter la logique JavaScript si nécessaire

## 🔒 Sécurité & Bonnes Pratiques

### ⚠️ Important pour Firebase

Ne commitez **JAMAIS** votre configuration Firebase réelle en public !

Options :
1. **Utiliser des variables d'environnement** (recommandé)
2. **Restreindre les règles Firestore** à un document spécifique
3. **Utiliser Firebase Web App Security Rules**

Exemple de règle sécurisée :

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /declarations/{doc=**} {
      allow create: if true;
      allow read, write: if request.auth.uid != null;
    }
  }
}
```

### 🔐 Telegram & WhatsApp

Ne commitez pas vos tokens réels ! Utilisez :
- Secrets GitHub (dans Settings > Secrets)
- Variables d'environnement
- Fichiers .env (dans .gitignore)

## 📱 Vérification Mobile

Testez sur différents appareils :
- iPhone
- Android
- iPad
- Tablette

Le site est optimisé pour tous les écrans.

## 🐛 Dépannage

### La musique ne se lit pas
- Vérifiez l'URL du fichier MP3
- Vérifiez les permissions CORS
- Certains navigateurs nécessitent une interaction utilisateur avant la lecture automatique

### Firebase ne fonctionne pas
- Vérifiez votre configuration firebaseConfig
- Vérifiez que Firestore Database est activé
- Vérifiez les règles de sécurité

### Telegram ne reçoit pas les notifications
- Vérifiez le TELEGRAM_BOT_TOKEN
- Vérifiez le TELEGRAM_CHAT_ID
- Testez le bot manuellement : `https://api.telegram.org/botYOUR_TOKEN/getMe`

### Les photos ne s'affichent pas
- Vérifiez les URLs (HTTPS)
- Vérifiez les permissions CORS
- Utilisez des services comme Imgur ou Cloudinary

## 📊 Analyser les Réponses

### Via Firebase Console

1. Allez sur Firebase Console
2. Firestore Database > Collection "declarations"
3. Visualisez toutes les réponses avec dates et heures

### Via Telegram

Les notifications vous sont envoyées en direct sur Telegram quand la réponse est donnée.

## 🎓 Ressources Utiles

- [Firebase Documentation](https://firebase.google.com/docs)
- [Telegram Bot API](https://core.telegram.org/bots/api)
- [GitHub Pages](https://pages.github.com/)
- [MDN Web Docs](https://developer.mozilla.org/)

## 📄 Licence

Ce projet est libre d'utilisation. Sentez-vous libre de le modifier et l'adapter à vos besoins ! 💕

## 💬 Astuces

1. **Testez avant de partager** - Vérifiez tous les boutons et animations
2. **Personnalisez les textes** - Rendez-le unique et personnel
3. **Choisissez une belle musique** - Elle définit l'ambiance
4. **Utilisez de belles photos** - Racontez votre histoire à travers les images
5. **Testez sur mobile** - C'est important !
6. **Partage en privé d'abord** - Assurez-vous que tout fonctionne
7. **Préparez un moment romantique** - Choisissez le bon moment pour partager le lien 🕯️

## 🎉 Résultat Final

Un site web romantique premium qui :
- ✨ Impressionne avec un design élégant
- 💕 Raconte votre histoire d'amour
- 🎊 Célèbre la réponse "Oui" spectaculairement
- 📱 Fonctionne parfaitement sur tous les appareils
- 🔐 Enregistre les données en toute sécurité
- 🤖 Vous notifie immédiatement

## ❓ Questions Fréquentes

**Q : Puis-je ajouter plus de photos ?**
A : Oui ! Dupliquez les `.gallery-item` dans la section galerie.

**Q : Comment changer la date du compte à rebours ?**
A : Modifiez la fonction `updateCountdown()` dans script.js.

**Q : Puis-je modifier les animations ?**
A : Bien sûr ! Modifiez les @keyframes dans style.css.

**Q : Le site fonctionne-t-il hors ligne ?**
A : Oui, sauf pour Firebase, Telegram et WhatsApp qui nécessitent Internet.

---

**Bonne chance pour votre demande ! 💕✨**

*Fait avec ❤️ pour une déclaration d'amour inoubliable*

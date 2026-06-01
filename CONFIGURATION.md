# 🔑 Configuration Exemple

Ce fichier montre comment configurer tous les services requis.

## 📋 Checklist de Configuration

- [ ] Firebase Firestore
- [ ] Telegram Bot
- [ ] WhatsApp Number
- [ ] Musique (MP3)
- [ ] Photos personnelles

---

## 🔥 Firebase Configuration

### Étapes :

1. Accédez à [Firebase Console](https://console.firebase.google.com)
2. Créez un nouveau projet
3. Choisissez "Add Firebase to your web app"
4. Copiez votre configuration et replacez les valeurs dans `script.js` :

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyDxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef1234567890"
};
```

### Créer la Collection Firestore :

1. Allez dans **Firestore Database**
2. Créez une nouvelle collection : `declarations`
3. Laissez les permissions publiques pour les tests
4. **IMPORTANT** : Sécurisez avant la production !

### Règles de Sécurité Recommandées :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /declarations/{doc=**} {
      allow create: if true;
      allow read: if false;
      allow write: if false;
    }
  }
}
```

---

## 🤖 Telegram Bot Configuration

### Étapes :

1. Ouvrez Telegram
2. Cherchez `@BotFather` et démarrez une conversation
3. Envoyez `/newbot`
4. Suivez les instructions
5. Vous recevrez votre **TELEGRAM_BOT_TOKEN**

Exemple : `123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11`

### Trouver votre CHAT_ID :

1. Envoyez un message à votre bot
2. Accédez à : `https://api.telegram.org/botYOUR_TOKEN/getUpdates`
3. Trouvez votre `chat.id`

Exemple de réponse :

```json
{
  "ok": true,
  "result": [
    {
      "update_id": 123456789,
      "message": {
        "message_id": 1,
        "from": {
          "id": 987654321,  ← C'est votre CHAT_ID
          "first_name": "John"
        }
      }
    }
  ]
}
```

### Mettre à jour script.js :

```javascript
const TELEGRAM_BOT_TOKEN = "123456:ABC-DEF1234ghIkl-zyx57W2v1u123ew11";
const TELEGRAM_CHAT_ID = "987654321";
```

---

## 📱 WhatsApp Configuration

### Format Attendu :

```javascript
const WHATSAPP_NUMBER = "+33612345678";
```

### Règles :

- Format international avec le `+`
- Pas d'espaces, tirets ou parenthèses
- Exemple France : `+33612345678`
- Exemple USA : `+12025551234`
- Exemple Belgique : `+32473123456`

---

## 🎵 Configuration Musique

### Option 1 : Utiliser un URL Direct

1. Trouvez une musique romantique (Pixabay, Free Music Archive, etc.)
2. Copiez l'URL (doit être en HTTPS)
3. Dans `index.html` ligne 55 :

```html
<source src="https://example.com/romantic-music.mp3" type="audio/mpeg">
```

### Option 2 : Firebase Storage

1. Dans Firebase Console > Storage
2. Uploadez votre fichier MP3
3. Copiez le lien téléchargeable
4. Utilisez-le comme URL

### Recommandations :

- Format : MP3 ou OGG
- Durée : 3-5 minutes
- Taille : < 5MB (pour la performance)
- Licence : Libre de droits ou avec permission

### Sources Recommandées :

- [Pixabay Music](https://pixabay.com/music/)
- [Free Music Archive](https://freemusicarchive.org/)
- [Incompetech](https://www.incompetech.com/)
- [YouTube Audio Library](https://www.youtube.com/audiolibrary)

---

## 📸 Configuration Photos

### Ajouter vos Photos :

#### Méthode 1 : URLs Directes

```html
<div class="gallery-item">
    <img src="https://your-photo-url.jpg" alt="Photo 1">
    <div class="gallery-overlay">Photo 1</div>
</div>
```

#### Méthode 2 : Firebase Storage

1. Uploadez vos photos dans Firebase Storage
2. Copiez les URLs
3. Utilisez-les dans le HTML

#### Méthode 3 : Fonction JavaScript

```javascript
const photoUrls = [
    'https://example.com/photo1.jpg',
    'https://example.com/photo2.jpg',
    'https://example.com/photo3.jpg',
    'https://example.com/photo4.jpg'
];

loadPersonalPhotos(photoUrls);
```

### Services Gratuits :

- [Imgur](https://imgur.com/) - Upload et partage
- [Cloudinary](https://cloudinary.com/) - CDN et optimisation
- [Firebase Storage](https://firebase.google.com/products/storage)
- [Google Drive](https://drive.google.com/) - Lien direct

---

## 📝 Personnalisation de la Lettre

Dans `index.html`, section **#letter** :

```html
<p class="letter-line">Chère Amour,</p>
<p class="letter-line">Remplacez ces lignes par votre message personnel.</p>
<p class="letter-line">Plus c'est personnel, plus c'est romantique !</p>
<p class="letter-line">Avec tout mon amour,</p>
<p class="letter-signature">Celui qui t'aime ❤️</p>
```

---

## ⏱️ Personnalisation du Compte à Rebours

Dans `script.js`, fonction `updateCountdown()` :

```javascript
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30); // Changez 30 par vos jours
targetDate.setHours(0, 0, 0, 0);

// Ou utilisez une date spécifique :
const targetDate = new Date('2024-12-25T20:00:00');
```

---

## 🛠️ Variables d'Environnement (Recommandé)

### Créer un fichier `.env` :

```
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID

VITE_TELEGRAM_BOT_TOKEN=YOUR_BOT_TOKEN
VITE_TELEGRAM_CHAT_ID=YOUR_CHAT_ID

VITE_WHATSAPP_NUMBER=+33612345678
VITE_MUSIC_URL=https://example.com/music.mp3
```

### Charger depuis `.env` dans `script.js` :

```javascript
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    // ... autres configs
};
```

---

## 🔒 Secrets GitHub (pour CI/CD)

### Ajouter un Secret :

1. Repository Settings > Secrets > New Repository Secret
2. Ajoutez vos clés :
   - `FIREBASE_CONFIG`
   - `TELEGRAM_TOKEN`
   - `TELEGRAM_CHAT_ID`
   - `WHATSAPP_NUMBER`

### Utiliser dans GitHub Actions :

```yaml
env:
  TELEGRAM_BOT_TOKEN: ${{ secrets.TELEGRAM_TOKEN }}
  TELEGRAM_CHAT_ID: ${{ secrets.TELEGRAM_CHAT_ID }}
```

---

## ✅ Test Avant Déploiement

### Checklist de Test :

- [ ] Ouvrir dans Chrome, Firefox, Safari
- [ ] Tester sur mobile
- [ ] Cliquer sur le bouton OUI - vérifier confettis
- [ ] Cliquer sur le bouton NON - vérifier comportement
- [ ] Vérifier le message de succès
- [ ] Vérifier l'enregistrement Firebase
- [ ] Vérifier la notification Telegram
- [ ] Vérifier WhatsApp
- [ ] Tester la musique
- [ ] Scroller à travers toutes les sections
- [ ] Vérifier toutes les animations
- [ ] Tester sur un appareil réel

---

## 🚀 Déploiement en Production

### Avant de Déployer :

1. **Ne pas** committer `.env` ou les secrets
2. **Utiliser** les Secrets GitHub pour les secrets sensibles
3. **Tester** en local avec les vraies clés
4. **Configurer** les règles Firestore
5. **Tester** sur le site live

### Après Déploiement :

1. Vérifiez que le site charge
2. Testez tous les boutons
3. Vérifiez que les données s'enregistrent
4. Vérifiez que les notifications arrivent

---

## 📞 Support

Si quelque chose ne fonctionne pas :

1. **Firebase** : Vérifiez les règles Firestore et les permissions
2. **Telegram** : Testez l'URL de l'API dans un navigateur
3. **WhatsApp** : Vérifiez que le numéro est correct
4. **Musique** : Vérifiez que l'URL est en HTTPS et CORS est activé
5. **Photos** : Vérifiez les URLs et les permissions

---

**Vous êtes maintenant prêt ! 💕✨**

*Personnalisez, testez, et créez le moment magique ! 🎉*

# 🔧 Dépannage et FAQ

Vous avez un problème ? Trouvez la réponse ici ! 💡

---

## 🖥️ Problèmes d'Affichage

### Le site ne s'affiche pas du tout

**Problème:** Page blanche ou erreur

**Solutions:**
1. Vérifiez que `index.html` est au bon endroit
2. Ouvrez la console (F12) pour voir les erreurs
3. Assurez-vous que le navigateur supporte HTML5
4. Essayez un autre navigateur (Chrome, Firefox, Safari)

---

### Les images ne s'affichent pas

**Problème:** Images SVG gris avec "Photo ici"

**Solution 1: Ajouter vos vraies photos**
```html
<!-- Avant (image de test) -->
<img src="data:image/svg+xml,..." alt="Photo 1">

<!-- Après (votre photo) -->
<img src="https://your-photo-url.jpg" alt="Photo 1">
```

**Solution 2: Vérifier l'URL**
- Doit être HTTPS (pas HTTP)
- Doit être une URL complète
- Vérifiez que l'image existe en cliquant sur l'URL

**Solution 3: Utiliser un service**
- [Imgur](https://imgur.com) - Uploadez et copiez le lien
- [Google Photos](https://photos.google.com) - Partagez et copiez le lien
- [Firebase Storage](https://firebase.google.com) - Uploadez et copiez le lien

---

### Les animations sont figées

**Problème:** Rien ne bouge, pas d'animations

**Solutions:**
1. Actualisez la page (Ctrl+F5)
2. Videz le cache (Ctrl+Shift+Suppr)
3. Vérifiez que JavaScript est activé (F12 > Console)
4. Essayez dans un autre navigateur

---

### Le site ne répond pas au défilement

**Problème:** Le site ne scroll pas ou scroll très lentement

**Solutions:**
1. Vérifiez votre connexion Internet
2. Fermez les autres onglets
3. Redémarrez le navigateur
4. Essayez sur un autre appareil

---

## 🎨 Problèmes de Style

### Les couleurs sont moches

**Solution:**
1. Ouvrez `style.css`
2. Changez les couleurs aux lignes 5-7
3. Lisez PERSONALIZATION.md pour des idées

Exemples:
```css
--primary-color: #ff69b4;      /* Rose */
--secondary-color: #9370db;    /* Violet */
--accent-color: #00bcd4;       /* Cyan */
```

---

### Le texte est trop petit/gros

**Solution:**
1. Ouvrez `style.css`
2. Cherchez `font-size`
3. Augmentez ou diminuez la valeur
4. Utilisez Ctrl+F5 pour voir les changements

---

### Le site n'est pas responsive (mobile)

**Problème:** Site bizarre sur téléphone

**Solutions:**
1. Vérifiez que la balise meta viewport existe:
   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   ```

2. Testez avec F12 → Device Toggle (☎️ icône)
3. Testez sur un vrai téléphone

---

## 🎵 Problèmes de Musique

### La musique ne se lit pas

**Problème:** Bouton musique gris, pas de son

**Solutions:**

1. **Vérifier l'URL:**
```html
<!-- Dans index.html ligne ~55 -->
<source src="https://example.com/music.mp3" type="audio/mpeg">
```
   - L'URL doit être valide
   - Doit être HTTPS
   - Fichier doit exister

2. **Vérifier les permissions CORS:**
   - Essayez une URL de Pixabay
   - Évitez les URLs restreintes

3. **Vérifier le format:**
   - Format MP3: ✅
   - Format OGG: ✅
   - Format WAV: Peut ne pas marcher
   - Format FLAC: Ne marche pas

4. **Problème d'autoplay:**
   ```javascript
   // Dans script.js, commentez cette ligne si vous avez des erreurs
   bgMusic.play(); // Peut être bloqué par le navigateur
   ```

---

### Le son est fort/bas

**Solution:** Ajouter un contrôle de volume

```html
<!-- Dans index.html, remplacez la balise audio -->
<audio id="bgMusic" loop controls>
    <source src="https://example.com/music.mp3" type="audio/mpeg">
</audio>
```

---

### La musique coupe les effets sonores

**Solution:** Utiliser deux fichiers audio différents

```html
<!-- Musique de fond -->
<audio id="bgMusic" loop volume="0.3">
    <source src="background.mp3" type="audio/mpeg">
</audio>

<!-- Bruit de succès -->
<audio id="successSound">
    <source src="ding.mp3" type="audio/mpeg">
</audio>
```

---

## 🎬 Problèmes d'Interactions

### Le bouton OUI ne fonctionne pas

**Problème:** Cliquer sur OUI ne déclenche rien

**Solutions:**
1. Ouvrez la console (F12)
2. Regardez s'il y a des erreurs rouges
3. Vérifiez que le JavaScript n'est pas bloqué
4. Essayez un autre navigateur

**Erreur courante:** Firebase non configuré
```javascript
// Dans script.js, vérifiez que firebaseConfig n'est pas vide
const firebaseConfig = {
    apiKey: "YOUR_API_KEY", // Ne doit pas être "YOUR_API_KEY"
    // ...
};
```

---

### Le bouton NON ne bouge pas

**Problème:** Le bouton NON reste statique

**Solutions:**
1. Testez sur desktop d'abord (moins stable sur mobile)
2. Vérifiez que le navigateur supporte les événements souris
3. Essayez avec la souris (pas le trackpad)

**Note:** Le comportement du bouton NON peut être buggé sur certains téléphones.

---

### Les confettis ne s'affichent pas

**Problème:** Pas de confettis quand on clique OUI

**Solutions:**
1. Vérifiez JavaScript dans Console (F12)
2. Cherchez des erreurs
3. Actualisez et réessayez

**Dépannage:**
```javascript
// Testez cela dans la console (F12)
createConfetti(); // Devrait afficher des confettis
```

---

## 🔥 Problèmes Firebase

### Erreur: "Firebase is not defined"

**Problème:** Firebase ne charge pas

**Solution:**
1. Vérifiez que le CDN Firebase est chargé (dans index.html)
2. Vérifiez votre connexion Internet
3. Attendez que Firebase se charge

```html
<!-- Vérifiez ces lignes dans index.html -->
<script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"></script>
```

---

### Les données ne s'enregistrent pas dans Firestore

**Problème:** Les réponses ne sont pas sauvegardées

**Solutions:**
1. **Vérifier la configuration:**
```javascript
// Dans script.js, vérifiez firebaseConfig
const firebaseConfig = {
    apiKey: "VOTRE_VRAIE_CLE", // Pas "YOUR_API_KEY"
    projectId: "votre-projet", // Doit exister
    // ...
};
```

2. **Vérifier les règles Firestore:**
   - Allez dans Firebase Console
   - Firestore > Rules
   - Vérifiez que `collection('declarations')` est accessible

3. **Règles minimales (pas sécurisées, pour les tests):**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

---

### Configuration Firebase manquante

**Problème:** Console dit "Firebase non configuré"

**Solution:**
1. Créez un compte [Firebase](https://firebase.google.com)
2. Créez un projet
3. Copiez votre configuration
4. Remplacez dans `script.js` (lignes 6-14)

```javascript
const firebaseConfig = {
    apiKey: "AIzaSyD...",  // Copié depuis Firebase Console
    authDomain: "projet.firebaseapp.com",
    projectId: "mon-projet",
    // ... autres champs
};
```

---

## 📱 Problèmes Telegram

### Pas de notification Telegram

**Problème:** Rien n'est reçu sur Telegram

**Solutions:**
1. **Vérifier le token:**
```javascript
// Dans script.js, vérifiez que ce n'est pas vide
const TELEGRAM_BOT_TOKEN = "123456:ABC..."; // Doit avoir ":" au milieu
```

2. **Vérifier le chat ID:**
```javascript
const TELEGRAM_CHAT_ID = "987654321"; // Doit être un numéro
```

3. **Tester manuellement:**
```
Accédez à :
https://api.telegram.org/botYOUR_TOKEN/getMe

Devrait répondre OK
```

4. **Vérifier les permissions:**
   - Assurez-vous que le bot peut vous envoyer des messages
   - Envoyez un message au bot d'abord

---

### Bot Telegram ne existe pas

**Solution:**
1. Ouvrez Telegram
2. Cherchez `@BotFather`
3. Tapez `/newbot`
4. Suivez les instructions
5. Copiez le TOKEN

---

## 💬 Problèmes WhatsApp

### WhatsApp ne s'ouvre pas

**Problème:** Clicker sur le lien ne fait rien

**Solutions:**
1. **Vérifier le numéro:**
```javascript
// Dans script.js, le numéro DOIT être au format international
const WHATSAPP_NUMBER = "+33612345678"; // Avec le +
```

2. **Vérifier que WhatsApp est installé:**
   - Sur mobile: Installez WhatsApp
   - Sur desktop: La version web doit être ouverte

3. **Tester le lien:**
   Ouvrez dans navigateur:
   ```
   https://wa.me/33612345678?text=Hello
   ```

---

### Le message prérempli n'apparaît pas

**Problème:** WhatsApp s'ouvre mais le message est vide

**Solution:**
1. Le message doit être URL-encodé
2. Le code le fait automatiquement
3. Vérifiez la console pour les erreurs

---

## 🌐 Problèmes de Déploiement GitHub Pages

### Le site ne s'affiche pas après déploiement

**Problème:** GitHub Pages montre 404

**Solutions:**
1. Vérifiez que le repository est **PUBLIC**
2. Vérifiez que GitHub Pages est activé:
   - Settings > Pages
   - Source: main branch, / folder
3. Attendez 5 minutes
4. Videz le cache du navigateur

---

### Les fichiers CSS/JS ne chargent pas en ligne

**Problème:** Page sans style sur GitHub Pages

**Solution:** Vérifiez les chemins relatifs
```html
<!-- ✅ CORRECT (chemins relatifs) -->
<link rel="stylesheet" href="style.css">

<!-- ❌ INCORRECT (chemins absolus) -->
<link rel="stylesheet" href="/style.css">
```

---

### Le site est très lent en ligne

**Problème:** GitHub Pages lent

**Solutions:**
1. C'est normal les 5 premières minutes
2. Vérifiez votre connexion
3. Videz le cache du navigateur
4. Attendez un peu

---

## 📧 Erreurs Courantes de Code

### "Cannot read property 'add' of null"

**Problème:** Firebase Firestore n'est pas initialisé

**Solution:** Vérifiez la configuration Firebase

```javascript
// Doit afficher: ✅ Configuration chargée avec succès
// Pas: ❌ Firebase non configuré
```

---

### "Syntax Error in CSS"

**Problème:** Les styles ne chargent pas

**Solution:**
1. Cherchez la ligne d'erreur (F12 > Sources)
2. Vérifiez la syntaxe CSS
3. Cherchez les accolades manquantes

---

### "ReferenceError: CONFIG is not defined"

**Problème:** Le fichier `config.js` n'existe pas

**Solution:**
1. Créez `config.js` depuis `config.example.js`
2. Remplacez les valeurs placeholder
3. Rechargez la page

---

## 🔒 Sécurité

### Mes secrets sont visibles sur GitHub !

**Danger:** Quelqu'un pourrait utiliser votre Firebase

**Solutions:**
1. **Changez immédiatement les clés:**
   - Firebase Console > Regenerate Key
   - @BotFather > Telegram > Nouveau token

2. **Supprimez les secrets du Git:**
   ```bash
   git rm --cached script.js
   echo "script.js" >> .gitignore
   git add .gitignore
   git commit -m "Remove secrets"
   git push
   ```

3. **Utilisez GitHub Secrets:**
   - Settings > Secrets > Actions
   - Ajoutez vos clés là-bas
   - Ne les mettez pas dans le code

---

## 📞 Besoin d'Aide Supplémentaire ?

### Avant de vous rendre fou:

1. ✅ Lisez la Console (F12 > Console)
2. ✅ Cherchez l'erreur sur Google
3. ✅ Consultez la documentation
4. ✅ Testez dans un autre navigateur
5. ✅ Essayez sur un autre appareil

### Ressources Utiles:

- [MDN Web Docs](https://developer.mozilla.org/)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Stack Overflow](https://stackoverflow.com/)
- [W3Schools](https://www.w3schools.com/)

---

## ✨ Si Tout Échoue

1. **Revenez aux bases:**
   - Supprimez tous les changements
   - Recommencez avec la version originale
   - Ajoutez une modification à la fois

2. **Testez en local d'abord:**
   - Ne déployez que quand c'est parfait en local

3. **Posez des questions:**
   - Décrivez le problème précisément
   - Incluez les erreurs de console
   - Mentionnez le navigateur/appareil

---

**Vous êtes coincé ? Commencez par la console (F12) ! 🔍**

*La plupart des problèmes sont affichés là ! 💡*

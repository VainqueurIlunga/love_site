# 🎨 Guide de Personnalisation

Rendez ce site VRAIMENT unique en le personnalisant complètement !

## 📝 1. Personnaliser les Textes

### Écran d'Accueil

**Fichier:** `index.html` (ligne ~55)

```html
<!-- Avant -->
<h1 class="hero-title">J'ai quelque chose<br>d'important à te dire...</h1>

<!-- Après (votre idée) -->
<h1 class="hero-title">Mon amour...<br>J'ai une question à te poser</h1>
```

Exemples alternatifs :
- "Tu es prête pour une surprise ?" 
- "Je dois te parler... 💕"
- "Tu es ma plus grande joie"

### Notre Histoire - Timeline

**Fichier:** `index.html` (section #story)

Modifiez chaque étape :

```html
<!-- Avant -->
<div class="timeline-item">
    <h3>Notre Rencontre</h3>
    <p>Le moment où tout a commencé. Un instant magique qui a changé ma vie.</p>
</div>

<!-- Après (votre histoire) -->
<div class="timeline-item">
    <h3>16 Juillet 2023 - Café du coin</h3>
    <p>Quand tu as souri en me voyant. Ce moment a changé ma vie à jamais.</p>
</div>
```

**Idées pour chaque étape:**

1. **Notre Rencontre** : Lieu, date, première impression
2. **Premiers Échanges** : Premier message, premier appel, première blague
3. **Nos Souvenirs** : Moment mémorable, voyage, événement spécial
4. **Les Moments Importants** : Progression de votre relation

### Citations Romantiques

**Fichier:** `index.html` (section #quotes)

```html
<p class="quote-text" data-text="Votre citation personnalisée ici"></p>
```

Remplacez par vos citations préférées :
- Vos mots dits à haute voix
- Citations de films que vous aimez
- Paroles de chansons que vous aimez
- Citations de poètes romantiques

### Lettre d'Amour

**Fichier:** `index.html` (section #letter)

C'est la section LA PLUS IMPORTANTE ! Écrivez vos vrais sentiments :

```html
<p class="letter-line">Chère [son nom],</p>
<p class="letter-line">Depuis [durée] que je te connais, tu as changé ma vie.</p>
<p class="letter-line">Je veux te parler de [moment/sentiment spécifique].</p>
<!-- ... continuer avec vos mots -->
```

**Conseils:**
- Soyez sincère
- Mentionnez des moments spécifiques
- Parlez de vos sentiments
- Exprimez pourquoi elle est spéciale
- Terminez avec votre vision de l'avenir ensemble

### La Grande Demande

**Fichier:** `index.html` (section #proposal)

```html
<!-- Personnalisez les intro paragraphes -->
<p class="proposal-intro">Ton amitié m'a montré ce qu'était l'amour véritable.</p>
<p class="proposal-intro">Tes yeux me disent tout ce que j'ai besoin de savoir.</p>
<p class="proposal-intro">Alors aujourd'hui, je dois te demander...</p>

<!-- Vous pouvez aussi changer la question -->
<h1 class="proposal-question">Veux-tu faire de moi l'homme le plus heureux du monde ? ❤️</h1>
```

---

## 🎵 2. Personnaliser la Musique

### Changer la Musique

**Fichier:** `index.html` (ligne ~55)

```html
<audio id="bgMusic" loop>
    <source src="VOTRE_URL_ICI.mp3" type="audio/mpeg">
</audio>
```

**Suggestions de musiques romantiques:**

- "Perfect" - Ed Sheeran
- "A Thousand Years" - Christina Perri
- "All of Me" - John Legend
- "Love Story" - Taylor Swift
- "Thinking Out Loud" - Ed Sheeran
- "Falling" - Harry Styles

**Où trouver la musique:**
1. [Pixabay Music](https://pixabay.com/music/) ⭐ Recommandé
2. [Free Music Archive](https://freemusicarchive.org/)
3. [Incompetech](https://www.incompetech.com/)
4. [YouTube Audio Library](https://www.youtube.com/audiolibrary)

---

## 📸 3. Personnaliser les Photos

### Ajouter vos Photos

**Fichier:** `index.html` (section #gallery)

```html
<!-- Avant -->
<img src="data:image/svg+xml,..." alt="Photo 1">

<!-- Après -->
<img src="https://votre-photo-url.jpg" alt="Photo de nous deux">
```

### Organiser les Photos

**Idées de progression:**

1. Première photo ensemble
2. Un moment heureux
3. Une blague privée en image
4. Vous deux en ce moment

### Héberger les Photos

**Option 1: Imgur (Gratuit & Facile)**
1. Allez sur [Imgur](https://imgur.com/)
2. Uploadez votre photo
3. Cliquez droit > "Copier l'adresse de l'image"
4. Collez dans `src="`

**Option 2: Google Photos**
1. Uploadez sur Google Photos
2. Cliquez droit sur la photo
3. "Ouvrir l'image dans un nouvel onglet"
4. Copiez l'URL

**Option 3: Firebase Storage** (Plus professionnel)
1. Firebase Console > Storage
2. Upload votre photo
3. Cliquez sur la photo
4. Copiez le lien téléchargeable

---

## 🎨 4. Personnaliser les Couleurs

### Modifier la Palette

**Fichier:** `style.css` (lignes 1-15)

```css
:root {
    --primary-color: #ff1744;      /* Rouge/Rose principal */
    --secondary-color: #ff69b4;    /* Rose secondaire */
    --accent-color: #ffd700;       /* Doré/Accent */
}
```

**Combinaisons prêtes à l'emploi:**

**Option 1 - Romantique Classique (Par défaut)**
```css
--primary-color: #ff1744;      /* Rouge vif */
--secondary-color: #ff69b4;    /* Rose chaud */
--accent-color: #ffd700;       /* Doré */
```

**Option 2 - Doux & Pastel**
```css
--primary-color: #ff69b4;      /* Rose poudreé */
--secondary-color: #ffb6c1;    /* Rose pâle */
--accent-color: #ffe4e1;       /* Coquille d'œuf */
```

**Option 3 - Élégant & Luxe**
```css
--primary-color: #c41e3a;      /* Bordeaux */
--secondary-color: #8b0000;    /* Marron rouge */
--accent-color: #ffd700;       /* Or */
```

**Option 4 - Moderne & Trendy**
```css
--primary-color: #e91e63;      /* Rose moderne */
--secondary-color: #9c27b0;    /* Violet */
--accent-color: #00bcd4;       /* Cyan */
```

### Tester les Couleurs

1. Ouvrez DevTools (F12)
2. Allez dans l'onglet Styles
3. Modifiez les variables CSS en temps réel
4. Une fois satisfait, copiez-collez dans style.css

---

## 🎭 5. Personnaliser le Style

### Changer les Emojis

**Fichier:** `index.html` (partout)

Remplacez les emojis par vos favoris :
```html
<!-- Avant -->
<h1>❤️ Oui</h1>

<!-- Après -->
<h1>💖 Oui</h1>
```

**Emojis alternatifs:**
- Cœurs: ❤️ 💕 💖 💗 💝 💓
- Fleurs: 🌹 🌸 🌺 🌻 🌷
- Étincelles: ✨ 💫 ⭐ 🌟
- Divers: 💑 👫 💑 🎊 🎉

### Modifier les Animations

**Fichier:** `style.css`

Trouvez les animations et modifiez-les :

```css
/* Exemple: Ralentir le cœur battant */
@keyframes heartBeat {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.15); }  /* Plus grand */
    50% { transform: scale(1.25); }  /* Plus d'effet */
}
```

### Changer les Polices

**Fichier:** `style.css` (ligne ~21)

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
```

Remplacez par :
```css
font-family: 'Georgia', serif;                    /* Classique */
font-family: 'Courier New', monospace;            /* Moderne */
font-family: 'Arial Black', sans-serif;           /* Gras */
font-family: 'Comic Sans MS', cursive;            /* Amusant */
```

---

## 📅 6. Personnaliser les Dates

### Compte à Rebours

**Fichier:** `script.js` (fonction updateCountdown)

```javascript
// Avant (30 jours depuis maintenant)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 30);

// Après (date spécifique)
const targetDate = new Date('2024-12-31T20:00:00');

// Ou encore
const targetDate = new Date(2024, 11, 25, 20, 0, 0); // Année, Mois (0-11), Jour, Heure
```

**Idées de dates:**
- Votre anniversaire ensemble
- Jour de votre rencontre
- Une date importante pour vous deux
- Un voyage prévu

### Certificat (Date automatique)

La date du certificat est automatique (aujourd'hui).

Pour la changer:
```javascript
// Dans script.js, fonction showCertificate()
const now = new Date('2024-07-14'); // Votre date
```

---

## 🔊 7. Ajouter des Sons

### Ajouter un Son au Clic

**Fichier:** `script.js` (fonction oui click)

```javascript
// Créer un son pour le bouton Oui
const successSound = new Audio('https://example.com/ding.mp3');
successSound.play();
```

**Sources de sons gratuits:**
- [Freesound](https://freesound.org/)
- [Zapsplat](https://www.zapsplat.com/)
- [Pixabay Sounds](https://pixabay.com/sound-effects/)

---

## 📱 8. Adapter à Mobile

### Test Mobile

1. Ouvrez DevTools (F12)
2. Cliquez sur l'icône téléphone
3. Testez la responsive

### Vérifier sur Téléphone Réel

1. Sur le même WiFi
2. Dans le terminal: `python -m http.server 8000`
3. Trouvez votre IP: `ipconfig` (Windows) ou `ifconfig` (Mac/Linux)
4. Allez sur: `http://YOUR_IP:8000`

---

## ✨ 9. Ajouter des Sections Personnalisées

### Créer une Nouvelle Section

1. **HTML:** Copiez une section existante dans `index.html`
2. **CSS:** Copiez les styles correspondants dans `style.css`
3. **JS:** Ajoutez la logique dans `script.js` si nécessaire

Exemple:

```html
<!-- Section personnalisée -->
<section id="custom" class="section custom-section">
    <h2>Nos Meilleures Blagues 😄</h2>
    <p>Ici vous pouvez ajouter du contenu unique !</p>
</section>
```

```css
.custom-section {
    background: linear-gradient(135deg, rgba(15, 10, 20, 0.5), rgba(30, 10, 25, 0.5));
}
```

---

## 🎬 10. Avant/Après - Exemples Complets

### Exemple 1: Minimaliste

```html
<h1>Veux-tu m'accorder le privilège d'être heureux avec toi ?</h1>
```

### Exemple 2: Poétique

```html
<h1>Mon amour, viens construire une vie merveilleuse avec moi</h1>
```

### Exemple 3: Humoristique

```html
<h1>Oui, je sais que je suis en retard... Veux-tu quand même de moi ? ❤️</h1>
```

### Exemple 4: Direct

```html
<h1>Je t'aime. Veux-tu être ma petite amie ?</h1>
```

---

## 🚀 Checklist de Personnalisation

- [ ] Texte de l'écran d'accueil
- [ ] Histoire de la timeline
- [ ] Citations personnalisées
- [ ] Lettre d'amour écrite
- [ ] 4 photos ajoutées
- [ ] Musique changée
- [ ] Couleurs personnalisées
- [ ] Compte à rebours configuré
- [ ] Textes de demande adaptés
- [ ] Emojis vérifiés
- [ ] Testé sur mobile
- [ ] Testé sur navigateurs différents

---

## 💡 Conseils Finales

1. **Plus personnel = plus émouvant** ✨
2. **Utilisez vos photos ensemble** 📸
3. **Écrivez avec le cœur** 💕
4. **Testez chaque changement** ✅
5. **Faites plusieurs sauvegardes** 💾
6. **Demandez une opinion de confiance** 👥
7. **Choisissez le bon moment** 🕯️

---

**Votre site est un blanc blanc! Rendez-le UNIQUE ! 💕✨**

*N'oubliez pas: C'est votre amour et votre histoire qui rendent ce site spécial.*

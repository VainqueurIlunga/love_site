# 🚀 Guide de Déploiement sur GitHub Pages

Déployez votre site d'amour en 5 minutes sur GitHub Pages !

## 📋 Prérequis

- Un compte GitHub
- Git installé sur votre ordinateur
- Les fichiers du projet configurés

## 🎯 Étapes de Déploiement

### Étape 1 : Créer un Repository GitHub

1. Allez sur [GitHub.com](https://github.com)
2. Cliquez sur **+** en haut à droite
3. Choisissez **New repository**
4. Nommez-le : `demande-mariage` (ou un autre nom)
5. Choisissez **Public** (important pour GitHub Pages)
6. Cliquez sur **Create repository**

⚠️ **NE NE PAS** cocher "Initialize with README" si vous avez déjà les fichiers

### Étape 2 : Préparer votre Ordinateur

Ouvrez un terminal et naviguez vers votre dossier de projet :

```bash
cd /home/mr/Documents/Project_program/demande_girl_friend
```

### Étape 3 : Initialiser Git

```bash
# Initialiser le repository Git
git init

# Ajouter votre nom d'utilisateur et email
git config user.name "Votre Nom"
git config user.email "votre.email@example.com"

# Ajouter tous les fichiers
git add .

# Créer un commit
git commit -m "✨ Site de déclaration d'amour premium ❤️"
```

### Étape 4 : Connecter à GitHub

Copiez les commandes depuis votre repository GitHub et exécutez-les :

```bash
# Ajouter le remote (remplacez par votre username et repo)
git remote add origin https://github.com/YOUR_USERNAME/demande-mariage.git

# Renommer la branche en 'main' si nécessaire
git branch -M main

# Pousser le code
git push -u origin main
```

### Étape 5 : Activer GitHub Pages

1. Allez dans votre repository sur GitHub
2. Cliquez sur **Settings** (Paramètres)
3. Dans la barre de gauche, cliquez sur **Pages**
4. Sous **Source**, sélectionnez :
   - Branch: **main**
   - Folder: **/ (root)**
5. Cliquez sur **Save**

### Étape 6 : Attendre le Déploiement

GitHub Pages va construire et déployer votre site automatiquement.

Cela peut prendre **2-5 minutes**.

Une fois terminé, vous verrez un message vert :
> ✅ Your site is published at `https://YOUR_USERNAME.github.io/demande-mariage`

### Étape 7 : Tester votre Site

1. Visitez votre URL publique
2. Testez tous les boutons
3. Vérifiez les animations
4. Testez sur mobile

## 📱 Partager votre Lien

Votre site est maintenant en ligne ! 🎉

Partagez le lien :
```
https://YOUR_USERNAME.github.io/demande-mariage
```

Avec un message romantique ! 💕

## 🔄 Mettre à Jour votre Site

Après chaque modification :

```bash
# Ajouter les changements
git add .

# Committer
git commit -m "Description de votre modification"

# Pousser
git push
```

GitHub Pages se mettra à jour automatiquement (1-2 minutes après).

## ⚠️ Secrets et Configuration

### Ne pas Committer les Secrets !

Si vous avez des fichiers `.env` ou des secrets, ils ne doivent **JAMAIS** être committé.

```bash
# Vérifiez que .gitignore existe
cat .gitignore

# Vérifiez que votre secrets ne sont pas dans le git
git status

# Si accidentellement ajouté :
git rm --cached script.js
# Puis remplacez les secrets dans script.js
git add script.js
git commit -m "Remove secrets"
git push
```

### Utiliser GitHub Secrets

Pour les variables sensibles (Telegram, Firebase) :

1. Allez dans **Settings** > **Secrets and variables** > **Actions**
2. Cliquez sur **New repository secret**
3. Ajoutez :
   - `TELEGRAM_BOT_TOKEN`
   - `FIREBASE_CONFIG`
   - Etc.

## 🚨 Dépannage Déploiement

### Mon site n'apparaît pas

1. Vérifiez que le repository est **PUBLIC**
2. Vérifiez que vous avez un fichier **index.html** à la racine
3. Attendez 5 minutes et rechargez
4. Videz le cache du navigateur (Ctrl+Shift+Suppr)

### Les fichiers CSS/JS ne chargent pas

1. Vérifiez que les chemins sont **relatifs** :
   ```html
   ✅ <link rel="stylesheet" href="style.css">
   ❌ <link rel="stylesheet" href="/style.css">
   ```

2. Vérifiez les URLs dans Firefox DevTools (F12)

### GitHub Pages est lent

GitHub Pages peut être lent la première fois. Patientez 5-10 minutes.

## 🔧 Configuration Avancée

### Utiliser un Domaine Personnel

1. Dans **Settings** > **Pages**
2. Sous **Custom domain**, entrez votre domaine
3. Suivez les instructions DNS

Exemple :
```
demande.com → https://demande.com
```

### Certificat SSL/HTTPS

GitHub Pages active automatiquement le **HTTPS** !

### Personnaliser l'URL

Par défaut : `https://username.github.io/demande-mariage`

Pour avoir : `https://username.github.io`

Renommez votre repository en : `username.github.io`

## 📊 Vérifier les Statistiques

Visitez votre site et vous pouvez voir les stats dans :

GitHub > Repository > Insights > Traffic

## 💡 Conseils

1. **Testez en local d'abord** : Ouvrez `index.html` dans un navigateur
2. **Utilisez un serveur local** si vous avez des problèmes :
   ```bash
   python -m http.server 8000
   # Ou avec Node :
   npx http-server
   ```

3. **Commits réguliers** : Commitez après chaque changement
4. **Messages clairs** : Utilisez des messages de commit explicites
5. **Branche principale** : Gardez la branche `main` stable

## 🎯 Checklist Final

- [ ] Repository créé sur GitHub
- [ ] Code pushé sur GitHub
- [ ] GitHub Pages activé (Settings > Pages)
- [ ] Site accessible en ligne
- [ ] Site responsive mobile/desktop
- [ ] Tous les boutons fonctionnent
- [ ] Firebase/Telegram/WhatsApp configurés
- [ ] Lien partagé avec la personne spéciale ❤️

## 📞 Support

### Problèmes Courants

**Q: Je reçois une erreur 404**
A: Assurez-vous que `index.html` est à la racine du repository

**Q: Mon site est vide**
A: Vérifiez que le repository est public et attendez quelques minutes

**Q: Les médias ne chargent pas**
A: Utilisez des URLs absolues HTTPS pour les images et musiques

**Q: Je veux un sous-domaine**
A: Utilisez le format : `your-username.github.io/project-name`

## 🎉 Résultat

Votre site romantique premium est maintenant en ligne et prêt à être partagé !

```
✨ https://YOUR_USERNAME.github.io/demande-mariage ✨
```

**Bonne chance pour votre déclaration ! 💕**

---

## 📚 Ressources Supplémentaires

- [GitHub Pages Documentation](https://pages.github.com/)
- [GitHub Help - Configuring GitHub Pages](https://docs.github.com/en/pages)
- [Markdown Syntax](https://www.markdownguide.org/)

---

*Fait avec ❤️ pour rendre votre déclaration mémorable*

**Questions ? Consultez README.md et CONFIGURATION.md ! 📖**

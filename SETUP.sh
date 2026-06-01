#!/bin/bash

# 🎉 Site de Déclaration d'Amour - Checklist Installation & Déploiement
# =====================================================================

# ÉTAPE 1: VÉRIFIER LES FICHIERS
echo "✅ Vérification des fichiers créés..."
files=(
    "index.html"
    "style.css"
    "script.js"
    "README.md"
    "CONFIGURATION.md"
    "DEPLOYMENT.md"
    "PERSONALIZATION.md"
    "QUICKSTART.md"
    "config.example.js"
    ".gitignore"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "  ✅ $file"
    else
        echo "  ❌ $file (MANQUANT!)"
    fi
done

echo ""
echo "=========================================="
echo "🚀 ÉTAPES DE DÉMARRAGE"
echo "=========================================="
echo ""
echo "1️⃣  TESTEZ LOCALEMENT (Immédiat)"
echo "    └─ Ouvrez index.html dans votre navigateur"
echo "    └─ Vérifiez que tout fonctionne"
echo ""
echo "2️⃣  PERSONNALISEZ (20 minutes)"
echo "    └─ Lisez QUICKSTART.md"
echo "    └─ Modifiez la lettre d'amour"
echo "    └─ Ajoutez vos photos"
echo "    └─ Changez la musique"
echo ""
echo "3️⃣  CONFIGUREZ LES SERVICES (Optionnel, 30 minutes)"
echo "    └─ Lisez CONFIGURATION.md"
echo "    └─ Configurez Firebase, Telegram, WhatsApp"
echo ""
echo "4️⃣  DÉPLOYEZ (GitHub Pages, 15 minutes)"
echo "    └─ Lisez DEPLOYMENT.md"
echo "    └─ Pushez votre code sur GitHub"
echo ""
echo "=========================================="
echo "📚 DOCUMENTATION"
echo "=========================================="
echo ""
echo "📄 README.md"
echo "   └─ Vue d'ensemble complète du projet"
echo ""
echo "🚀 QUICKSTART.md ⭐ COMMENCEZ PAR CELUI-CI"
echo "   └─ Guide de démarrage rapide (5 minutes)"
echo ""
echo "🎨 PERSONALIZATION.md"
echo "   └─ Comment personnaliser textes, couleurs, photos"
echo ""
echo "🔧 CONFIGURATION.md"
echo "   └─ Comment configurer Firebase, Telegram, WhatsApp"
echo ""
echo "🌐 DEPLOYMENT.md"
echo "   └─ Comment déployer sur GitHub Pages"
echo ""
echo "=========================================="
echo "✨ PROCHAINE ACTION"
echo "=========================================="
echo ""
echo "👉 Ouvrez QUICKSTART.md pour commencer !"
echo ""
echo "=========================================="
echo ""

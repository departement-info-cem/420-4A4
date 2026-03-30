# 🛠️ Utiliser Colab Enterprise

Pour accéder à *Colab Enterprise* :

1. Allez sur [Google Cloud](https://cloud.google.com/).
2. Cliquez sur **Console** en haut à droite.
3. Cliquez sur le rectangle à côté du logo Google Cloud et sélectionnez votre projet.
4. Cliquez sur les 3 lignes horizontales à gauche du logo Google Cloud, placez le pointeur sur **Vertex AI**, cliquez sur **Colab Enterprise**.


## 1. Lancer l'environnement d'exécution 🚀

Avant de connecter un GPU, vous devez démarrer un environnement d'exécution :

1. Dans le menu de gauche de **Colab Enterprise**, cliquez sur **Environnements d'exécution**.
2. Cliquez sur **+ Créer** en haut de la page.
3. Dans la fenêtre de dialogue à droite, sélectionnez votre modèle d'exécution (voir [la création de compte](/googlecloud/comptecreation#5-créer-un-modèle-dinstance-gpu-%EF%B8%8F)), puis cliquez sur **Créer**.
4. Vous verrez que l'instance va se lancer, il faut attendre qu'elle soit opérationnelle (cela peut prendre quelques minutes).

---

## 2. Ouvrir un notebook 📓

1. Dans le menu de gauche de **Colab Enterprise**, cliquez sur **Mes Notebooks**.
2. Assurez-vous de bien sélectionner la région : `us-west1 (Oregon)`.
3. Vous pouvez ici importer des notebooks, en ouvrir un existant ou en créer un nouveau.
4. Cliquez sur le notebook à ouvrir. S'il n'est pas en cours d'exécution, cliquez sur la petite flèche à côté de **Connecter** en haut à droite.
5. Cliquez sur **Connexion à un environnement d'exécution**, choisissez l'instance en cours d'exécution et cliquez sur **Connecter**.

---

Vous avez maintenant un notebook similaire à ce que vous utilisez dans Google Colab. Il y a cependant **quelques différences** :


:::tip
Au lieu de monter le Drive avec la fonction `drive.mount`, nous allons monter le *bucket Cloud Storage* avec le code suivant :

```python
mount_path = "drive_[votrenom]"  # le nom du bucket Cloud Storage

# Nous allons monter le système de fichiers dans le même répertoire que d'habitude
local_path = f"/content/drive"
# Création du dossier 
!mkdir -p {local_path}

# Voici la commande qui monte le bucket Cloud Storage
!gcsfuse --implicit-dirs {mount_path} {local_path}
```
:::


:::danger
Un environnement d'exécution en fonctionnement consomme du crédit sur vos 50 $. 
Assurez-vous de toujours supprimer vos environnements d'exécution quand vous ne vous en servez plus :

1. Dans le menu de gauche de **Colab Enterprise**, cliquez sur **Environnements d'exécution**.
2. Cochez la case de l'environnement d'exécution à arrêter et cliquez sur **Supprimer** en haut.

Par défaut, l'environnement d'exécution fonctionne pendant 17 heures. Assurez-vous de bien sauvegarder vos données dans le dossier 
où le *bucket Cloud Storage* est monté.
:::

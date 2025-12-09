# 🖥️ Types de sessions

Dans Google Colab, tu peux travailler avec **trois types de sessions** :

1. Session **hébergée avec CPU** (par défaut)
2. Session **hébergée avec accélérateur GPU**
3. Une **session locale**, qui utilise ta propre machine

---

## 1. Hébergée avec CPU ☁️🐌

1. Ouvre ton notebook dans **Google Colab**.
2. En haut du notebook, clique sur le menu `Exécution`.
3. Clique sur `Modifier le type d’exécution`.
4. Dans la fenêtre qui s’ouvre :
   - **Accélérateur matériel** : choisis **Processeur**.
5. Clique sur **Enregistrer**.

Ta session utilise maintenant une machine cloud avec **CPU uniquement**, ce n'est pas très rapide mais 
ça te permet de travailler même si tu n'as plus de quotas pour des machines avec accélérateur.

---

## 2. Hébergée avec accélérateur GPU ☁️🚀

Ce mode te permet d’utiliser une **carte graphique (GPU)** pour accélérer les calculs parallélisables.

### 2.1. Activer un GPU dans Colab

1. Dans ton notebook Colab, clique sur le menu `Exécution`.
2. Clique sur `Modifier le type d’exécution`.
3. Dans la fenêtre :
   - **Type de matériel d’accélération** : choisis **GPU T4**.
4. Clique sur **Enregistrer**.

Une nouvelle session sera lancée avec un GPU.

### 2.2. Vérifier que le GPU est bien disponible

```python
import torch

print("GPU disponible ?", torch.cuda.is_available())
if torch.cuda.is_available():
    print("Nom du GPU :", torch.cuda.get_device_name(0))
```

### 2.3. Précautions avec les sessions GPU

:::warning
- Vous ne pouvez avoir qu'une seule session GPU d'ouverte.
- Le temps de session GPU est **limité** (quotas Google).
- En cas d’inactivité, la session peut être **coupée**.

Nous allons donc devoir utiliser des stratégies pour sauvegarder nos modèles pendant l'entraînement.
:::

---

## 3. Session locale 🏠

Il est aussi possible d’utiliser Google Colab comme **interface**, mais d’exécuter le code **sur ton propre ordinateur**.

Avantages :
- Tu utilises ton **CPU / GPU local** (si tu en as un).
- Tu n’es plus limité par les quotas de temps des sessions hébergées.
- Tu peux chauffer ta maison 🌋.

Inconvénients :
- Tu dois installer/configurer tous les logiciels nécessaires.
- Les performances dépendent de ton matériel.
- Tu payes l'électricité ⚡.

### 3.1. Pré-requis (déjà fait pour les machines des laboratoires)

1. Installe **Python** et **pip** sur ta machine.
2. Installe/configure toutes les librairies utilisées dans les laboratoires 😱
3. Installe **Jupyter** :
   ```bash
   pip install jupyter
   ```

### 3.2. Lancer et connecter le serveur


1. Lance un serveur Jupyter local :
   ```bash
   jupyter notebook --NotebookApp.allow_origin='https://colab.research.google.com' --port=8888 --NotebookApp.port_retries=0 --NotebookApp.allow_credentials=True
   ```
2. Le programme affichera dans la console l'URL du serveur: `http://localhost:8888/?token=...`, copie le.
3. Dans Colab, clique sur `Connecter` (en haut à droite), puis sur la petite flèche ▾ et clique sur l’option `Connecter à un environnement d'éxecution local`.
4. Colle l'URL dans le champ correspondant.

Une fois connecté, l’exécution des cellules se fera **sur ta machine**, mais l’interface restera celle de Google Colab.

:::danger
Pour pouvoir rouler le code des laboratoires, il faudra installer toutes les librairies nécessaires (**PyTorch**, **Keras**, **Numpy**...). Il faudra aussi configurer ton GPU, si tu en as un, pour qu'il soit utilisable.

Les machines des laboratoires ont les librairies nécessaires mais pas de GPU. tu ne pourras également pas lier le Google Drive de la façon que nous avons vu. 

Ce type de session ne devra être utilisée qu'**en dernier recours**.
:::

---
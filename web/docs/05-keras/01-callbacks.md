# 📞 Callbacks

Dans nos scripts d'entraînement, on va utiliser **trois callbacks Keras**.

Un callback permet d'exécuter une action (ici sauvegarder des données) à différents moments de l'apprentissage (ici à intervalle régulier).

## 1. Dossiers d'une expérience 📁

Pour chaque expérience, on va créer les dossiers suivants:

```python
dossier_experience = "drive/MyDrive/4A4/experiences/laboratoire1/" + str(id_experience)
dossier_experience_sauvegarde = dossier_experience + "/sauvegarde"
os.makedirs(dossier_experience, exist_ok=True)
os.makedirs(dossier_experience_sauvegarde, exist_ok=True)
```

---

## 2. `BackupAndRestore` : sauvegarde et reprise automatique 💾

```python
callback_sauvegarde = keras.callbacks.BackupAndRestore(
    backup_dir=dossier_experience_sauvegarde,
    save_freq=1000,
    double_checkpoint=True,
    delete_checkpoint=False)
```

- `backup_dir` : dossier où seront stockées les sauvegardes de l'entraînement.
- `save_freq=1000` : une sauvegarde est faite **toutes les 1000 batches**.
- `double_checkpoint=True` : double la sauvegarde pour prévenir les risques de fichiers corrompus.

Utilité :
- Si la session Colab se coupe ou si tu arrêtes l'entraînement, tu peux **reprendre là où tu t'es arrêté**.

---

## 3. `ModelCheckpoint` : garder le « meilleur » modèle 🏆

```python
fichier_sauvegarde = checkpoint_dir + '/meilleur.model.keras'
callback_meilleur = keras.callbacks.ModelCheckpoint(
    filepath=fichier_sauvegarde,
    monitor='val_acc',
    mode='max',
    save_freq=20,
    save_best_only=True)
```

- `filepath` : chemin du fichier où sera enregistré le **meilleur modèle**.
- `monitor='val_acc'` : métrique surveillée (ici, la **précision sur le jeu de validation**).
- `mode='max'` : plus la valeur de `val_acc` est **grande**, mieux c'est.
- `save_freq=1000` : vérifie/sauvegarde toutes les 1000 itérations (batches).
- `save_best_only=True` : n'écrit le fichier que si le modèle actuel est **meilleur** que le précédent.

Utilité :
- À la fin de l'entraînement, tu peux recharger **le meilleur modèle obtenu** (meilleure `val_acc`), et pas simplement le dernier état.

Exemple de rechargement :

```python
meilleur_model = keras.models.load_model(fichier_sauvegarde)
```

---

## 4. `CSVLogger` : journal d'entraînement dans un fichier CSV 📈

```python
fichier_log = dossier_experience + '/log.csv'
callback_log = keras.callbacks.CSVLogger(fichier_log, append=True)
```

- `fichier_log` : chemin du fichier CSV où seront écrites les informations d'entraînement.
- `append=True` : si le fichier existe déjà, on **ajoute** les nouvelles lignes au lieu d'écraser.

À chaque epoch, Keras écrit une ligne dans ce CSV avec, par exemple :
- `epoch`
- `loss`, `accuracy`
- `val_loss`, `val_accuracy` (si un jeu de validation est utilisé)

Utilité :
- Permet d'analyser l'entraînement **après coup** (dans Excel, Google Sheets, pandas, etc.).
- Pratique pour tracer des courbes `loss` / `accuracy`.

Exemple d'analyse rapide avec pandas :

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv(logger_filepath)
plt.plot(df["loss"], label="loss")
plt.plot(df["val_acc"], label="val_acc")
plt.legend()
plt.show()
```

---

## 5. Regrouper les callbacks

```python
callback = keras.callbacks.CallbackList([
    callback_sauvegarde,
    callback_meilleur,
    callback_log])
```

Cette liste de callbacks est ensuite passée à `model.fit(...)`, par exemple :

```python
history = model.fit(
    x_train,
    y_train,
    epochs=50,
    batch_size=32,
    validation_data=(x_val, y_val),
    callbacks=[callback])
```

---

## Pour résumer

:::info
Ainsi, **pendant tout l'entraînement** :
- l'état est régulièrement sauvegardé (`BackupAndRestore`),
- le meilleur modèle est conservé (`ModelCheckpoint`),
- un journal détaillé est écrit dans un fichier CSV (`CSVLogger`).


Nous allons avoir dans le drive une arborescence de dossier de la forme :

```text
drive/
└── MyDrive/
    └── 4A4/
        └── experiences/
            └── laboratoire1/
                └── <id_experience>/
                    ├── meilleur.model.keras    # meilleur modèle sauvegardé (ModelCheckpoint)
                    ├── log.csv                 # journal d'entraînement (CSVLogger)
                    └── sauvegarde/             # sauvegardes pour la reprise automatique (BackupAndRestore)
                        ├── checkpoint          # derniers poids / état optimiseur
                        └── checkpoint.bk       # doublons des derniers poids (sécurité)
```

- `<id_experience>` : identifiant unique de l'expérience (ex: hyper-paramètres, type de modèle ...).
- `sauvegarde/` : contient les fichiers nécessaires pour reprendre un entraînement interrompu.
- `best.model.keras` : modèle à recharger pour l'évaluation ou la suite des expériences.
- `log.csv` : fichier à charger pour tracer les courbes d'apprentissage.

:::
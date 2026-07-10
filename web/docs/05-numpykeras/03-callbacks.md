# 📞 Callbacks (Keras)

Dans nos scripts d'entraînement, on va utiliser **trois callbacks Keras**.

Un callback permet d'exécuter une action (ici sauvegarder des données) à différents moments de l'apprentissage (ici à intervalle régulier).

## Dossiers d'une expérience 📁

Pour chaque expérience, on va créer les dossiers suivants:

```python
tache = "Laboratoire1"

id_experience = 1
dossier_experience = f"drive/MyDrive/4A4/Experiences/{tache}/{id_experience}"
dossier_sauvegarde = f"{dossier_experience}/sauvegarde"
os.makedirs(dossier_sauvegarde, exist_ok=True)
```

---

## 1. `BackupAndRestore` : sauvegarde et reprise automatique 💾 
[🔗Documentation](https://keras.io/api/callbacks/backup_and_restore/)
```python
callback_sauvegarde = keras.callbacks.BackupAndRestore(
    backup_dir=dossier_sauvegarde,
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

## 2. `ModelCheckpoint` : garder le « meilleur » modèle 🏆
[🔗Documentation](https://keras.io/api/callbacks/model_checkpoint/)
```python
fichier_sauvegarde = dossier_experience + "/meilleur.model.keras"
callback_meilleur = keras.callbacks.ModelCheckpoint(
    filepath=fichier_sauvegarde,
    monitor="val_accuracy",
    mode="max",
    save_best_only=True,
    initial_value_threshold=ancienne_meilleure_valeur)
```
À chaque epoch, Keras sauvegarde le modèle s'il obtient une meilleure valeur pour la métrique spécifiée.

- `filepath` : chemin du fichier où sera enregistré le **meilleur modèle**.
- `monitor="val_accuracy"` : métrique surveillée (ici, **l'exactitude sur le jeu de validation**).
- `mode="max"` : plus la valeur de `val_accuracy` est **grande**, mieux c'est.
- `save_best_only=True` : n'écrit le fichier que si le modèle actuel est **meilleur** que le précédent.
- `initial_value_threshold`: à chaque fois que l'on relance l'expérience, la meilleure valeur est rénitialisée, il faut donc lire dans les fichiers de log (voir ci-dessous) quelle était la meilleure valeur précédente pour ne sauvegarder un nouveau modèle que lorsque l'on a une amélioration.

Utilité :
- À la fin de l'entraînement, tu peux recharger **le meilleur modèle obtenu** (meilleure `val_accuracy`), et pas simplement le dernier état.

Exemple de rechargement :

```python
meilleur_model = keras.models.load_model(fichier_sauvegarde)
```

---

## 3. `CSVLogger` : journal d'entraînement dans un fichier CSV 📈
[🔗Documentation](https://keras.io/api/callbacks/csv_logger/)
```python
fichier_log = dossier_experience + "/log.csv"
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

df = pd.read_csv(fichier_log)
plt.plot(df["loss"], label="loss")
plt.plot(df["val_accuracy"], label="val_accuracy")
plt.legend()
plt.show()
```

Ou pour obtenir la meilleure valeur de la métrique surveillée :

```python
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv(fichier_log)
ancienne_meilleure_valeur = df["val_accuracy"].max()
```

---

## Utiliser les callbacks

Il suffit de passer les callbacks sous forme de liste à `model.fit(...)`, par exemple :

```python
history = model.fit(
    x_train,
    y_train,
    epochs=50,
    batch_size=32,
    validation_data=(x_val, y_val),
    callbacks=[callback_sauvegarde,
               callback_meilleur,
               callback_log],
    )
```

---

## Pour résumer

:::info
Ainsi, **pendant tout l'entraînement** :
- l'état est régulièrement sauvegardé (`BackupAndRestore`),
- le meilleur modèle est conservé (`ModelCheckpoint`),
- un journal détaillé est écrit dans un fichier CSV (`CSVLogger`).


Nous allons avoir dans le drive une arborescence de dossiers de la forme :

```text
drive/
└── MyDrive/
    └── 4A4/
        └── Experiences/
            └── <tache>/
                └── <id_experience>/
                    ├── meilleur.model.keras    # meilleur modèle sauvegardé (ModelCheckpoint)
                    ├── log.csv                 # journal d'entraînement (CSVLogger)
                    └── sauvegarde/             # sauvegardes pour la reprise automatique (BackupAndRestore)
                        ├── checkpoint          # derniers poids / état optimiseur
                        └── checkpoint.bk       # doublons des derniers poids (sécurité)
```

- `<id_experience>` : identifiant unique de l'expérience (ex: hyper-paramètres, type de modèle ...).
- `sauvegarde/` : contient les fichiers nécessaires pour reprendre un entraînement interrompu.
- `meilleur.model.keras` : modèle à recharger pour l'évaluation.
- `log.csv` : fichier à charger pour tracer les courbes d'apprentissage.

:::
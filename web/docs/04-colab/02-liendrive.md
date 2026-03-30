# 🔗 Lier Google Drive

:::info
Lier ton Google Drive ![Drive](../../static/img/icons/drive.svg) à un notebook Google Colab ![colab](../../static/img/icons/colab.svg) permet de :

- lire/écrire des fichiers (données, modèles, images, etc.) directement depuis Drive ;
- sauvegarder des résultats sans les perdre quand la session Colab se termine.

Cela te permettra d'utiliser ton Google Drive comme un disque dur partagé pour tous tes notebooks Colab.
:::


:::warning
Dans une [session](/colab/typesessions) locale ou sur [Google Cloud](/googlecloud/utilisation) (Colab Enterprise), il n'est pas possible de monter le drive.

**Dans ce cas, il faudra sauvegarder les fichiers manuellement à la fin des exécutions.**
:::

---

## 1. Monter Google Drive dans Colab

1. Ouvre ton notebook dans **[Google Colab](https://colab.research.google.com/)**.
2. Ajoute une nouvelle cellule **Code** et colle ce code :

   ```python
   from google.colab import drive
   drive.mount("/content/drive")
   ```

3. Exécute la cellule (`Ctrl` + `Entrée`).
4. Un message apparaît pour autoriser l'accès:
   - clique sur "Se connecter à Google Drive" ;
   - choisis ton **compte Google du CÉGEP** ;
   - clique sur **Continuer** ;
   - si nécessaire valide les différents droits d'accès puis clique sur **Continuer**;

5. Si tout est correct, Colab affiche :

   ```text
   Mounted at /content/drive
   ```

Ton Google Drive est maintenant monté dans le dossier :

```text
/content/drive/MyDrive
```

---

## 2. Naviguer, lire et écrire

### Explorateur de fichiers

Tu peux naviguer dans **l’explorateur de fichiers** à gauche de Colab :
- clique sur l’icône **dossier** ![dossier](../../static/img/icons/folder.svg) ;
- clique sur `drive` → `MyDrive`.


### Écrire un fichier dans Drive

```python
chemin_fichier = "/content/drive/MyDrive/test_colab.txt"

with open(chemin_fichier, "w") as f:
    f.write("👋 Bonjour depuis Google Colab ! 👋")

print("Fichier créé :", chemin_fichier)
```

Le fichier apparaît ensuite dans ton Google Drive (dossier « Mon Drive »).

### Lire ce fichier

```python
with open(chemin_fichier, "r") as f:
    contenu = f.read()

print(contenu)
```

---

## 3. Conseils pratiques

- **Toujours monter le Drive** au début de ton notebook.

:::warning
- Vérifie bien les **chemins** :
  - `"/content/drive/MyDrive/mon_fichier.extension"`
  - respecte la casse (majuscules/minuscules) et les noms de dossiers.

- Si tu changes de notebook ou si la session expire, il faudra **remonter** le Drive (réexécuter `drive.mount(...)`).
:::

---
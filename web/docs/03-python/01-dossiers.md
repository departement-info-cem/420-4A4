# 📁 Système de dossier

Le module `os` de Python permet d'interagir avec le système d'exploitation. Voici comment utiliser quelques fonctions essentielles pour manipuler les dossiers.

## Importer le module

Avant tout, il faut importer le module :

```python
import os
```

## Obtenir le dossier courant : `os.getcwd()`

La fonction `os.getcwd()` (**G**et **C**urrent **W**orking **D**irectory) retourne le chemin absolu du dossier dans lequel le script est exécuté.

```python
dossier_courant = os.getcwd()
print(f"Dossier courant : {dossier_courant}")
```

## Lister le contenu d'un dossier : `os.listdir()`

`os.listdir()` retourne une **liste** contenant les noms des fichiers et dossiers dans le répertoire donné. Si aucun argument n'est fourni, elle liste le répertoire courant.

```python
contenu = os.listdir("dossier_parent/dossier_à_lister")
print("Contenu du dossier dossier_parent/dossier_à_lister:", contenu)

```

## Créer une arborescence de dossiers : `os.makedirs()`

`os.makedirs()` permet de créer des dossiers récursivement (c'est-à-dire créer toute une structure de dossiers parents s'ils n'existent pas).

```python
chemin_arborescence = "dossier_parent/sous_dossier/sous_sous_dossier"

# exist_ok=True évite l'erreur si le dossier existe déjà
os.makedirs(chemin_arborescence, exist_ok=True)
print(f"Arborescence {chemin_arborescence} créée.")
```

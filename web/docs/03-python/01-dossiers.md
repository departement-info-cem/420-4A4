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
# Lister le dossier courant
contenu = os.listdir()
print("Contenu du dossier :", contenu)

# Lister un dossier spécifique (exemple)
# contenu_specifique = os.listdir('C:/Users/Nom/Documents')
```

## Créer un dossier : `os.mkdir()`

`os.mkdir()` crée un nouveau dossier. Si le dossier existe déjà, une erreur `FileExistsError` est levée. Cette fonction ne peut créer qu'un seul niveau de dossier à la fois (le dossier parent doit exister).

```python
nom_dossier = "nouveau_dossier"

try:
    os.mkdir(nom_dossier)
    print(f"Dossier '{nom_dossier}' créé.")
except FileExistsError:
    print(f"Le dossier '{nom_dossier}' existe déjà.")
```

## Créer une arborescence de dossiers : `os.makedirs()`

`os.makedirs()` est plus puissant que `os.mkdir()` car il permet de créer des dossiers récursivement (c'est-à-dire créer toute une structure de dossiers parents s'ils n'existent pas).

```python
chemin_arborescence = "dossier_parent/sous_dossier/final"

# exist_ok=True évite l'erreur si le dossier existe déjà
os.makedirs(chemin_arborescence, exist_ok=True)
print(f"Arborescence '{chemin_arborescence}' créée.")
```

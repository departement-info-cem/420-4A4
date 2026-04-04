# 🗄️ Archives (zip) avec shutil

Le module `shutil` est très utile pour effectuer des opérations de haut niveau sur les fichiers et les dossiers. En particulier, il permet de créer des archives (comme des fichiers ZIP) facilement.

C'est particulièrement pratique dans Google Colab pour télécharger tout un dossier d'un coup.

## Créer une archive

La fonction `make_archive` prend principalement :
1. Le nom du fichier de sortie (sans l'extension).
2. Le format de l'archive (ex: `"zip"`, `"tar"`).
3. Le dossier racine à compresser.

```python
import shutil

# Créer une archive "sauvegarde.zip" contenant tout le contenu du dossier "drive"
shutil.make_archive("sauvegarde", "zip", "drive")
```

## Décompresser une archive

Pour ensuite transférer les fichiers de résultats sur un autre environnement d'exécution, il n'y aura qu'à importer l'archive puis à utiliser la fonction `unpack_archive`:

```python
import shutil
shutil.unpack_archive("sauvegarde.zip", "drive", "zip")
```

## Copier un fichier

Avec shutil, on peut également copier des fichiers avec la fonction `copy`:

```python
import shutil
# Copier le fichier 'fichier.txt' vers 'dossier/copie_fichier.txt'
shutil.copy('fichier.txt', 'dossier/copie_fichier.txt')
```
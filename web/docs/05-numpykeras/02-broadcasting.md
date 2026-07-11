# 👥 Broadcasting (NumPy)

Le **Broadcasting** est une fonctionnalité puissante de NumPy qui permet d'effectuer des opérations arithmétiques ($+$, $-$, $\times$, ...) sur des tableaux de dimensions différentes.

Sans broadcasting, pour additionner deux tableaux, ils doivent avoir exactement les mêmes dimensions. Le broadcasting relâche cette contrainte en "étirant" implicitement les tableaux pour que leur ``shape`` correspondent.

## Exemple simple : scalaire + vecteur

Le cas le plus simple est l'addition d'un nombre (scalaire) à un vecteur.

```python
import numpy as np

vec = np.array([1, 2, 3])
resultat = vec + 4

print(resultat)
# [5 6 7]
```

**Ce qui se passe "sous le capot" :**

NumPy "imagine" que le `4` est en fait un vecteur `[4, 4, 4]` de même taille que `vec`, puis effectue l'addition **élément par élément**.

## Les règles du Broadcasting

Pour que deux `ndarray` soient compatibles pour le broadcasting, NumPy compare leurs dimensions **en partant de la droite** (de la dernière dimension vers la première).

Deux dimensions sont compatibles si :
> 1.  Elles sont **égales**
>
>                    **OU**
>
> 2.  L'une d'elles vaut **1**.

Si des dimensions de gauche (les premières) manquent à l'un des deux `ndarray`, **elles seront rajoutées et le broadcasting aura lieu sur celles-ci**.

Si ces conditions ne sont pas remplies, vous obtiendrez une erreur `ValueError: operands could not be broadcast together`.

Voici quelques exemples pour illustrer les différents cas d'application de ces règles 🕵️:

* `ndarray` de 'shape': $(\textcolor{FireBrick}{2},\textcolor{Green}{4})$ compatible avec $(\textcolor{FireBrick}{1},\textcolor{Green}{4})$, le résultat sera $(\textcolor{FireBrick}{2},\textcolor{Green}{4})$
* `ndarray` de 'shape': $(\textcolor{FireBrick}{2},\textcolor{Green}{4})$ compatible avec $(\textcolor{Green}{4})$, le résultat sera $(\textcolor{FireBrick}{2},\textcolor{Green}{4})$
* `ndarray` de 'shape': $(2,\textcolor{Green}{4})$ non compatible avec $(\textcolor{Green}{2})$ (le broadcasting ne rajoute pas de dimension à droite)
* `ndarray` de 'shape': $(\textcolor{FireBrick}{2},\textcolor{Green}{4})$ compatible avec $(\textcolor{FireBrick}{2},\textcolor{Green}{1})$, le résultat sera $(\textcolor{FireBrick}{2},\textcolor{Green}{4})$
* `ndarray` de 'shape': $(\textcolor{FireBrick}{2},\textcolor{Green}{4},\textcolor{RoyalBlue}{6},\textcolor{Orchid}{1})$ compatible avec $(\textcolor{Green}{4},\textcolor{RoyalBlue}{1},\textcolor{Orchid}{8})$, le résultat sera $(\textcolor{FireBrick}{2},\textcolor{Green}{4},\textcolor{RoyalBlue}{6},\textcolor{Orchid}{8})$

## Exemple : Vecteur + Matrice

Supposons que nous ayons une matrice de notes (2 étudiants, 3 examens): 

```python
import numpy as np

# Matrice 2x3 (2 étudiants, 3 examens)
notes = np.array([[70, 80, 85],
                  [60, 75, 80]])
```

Nous voulons ajouter des points bonus différents **pour chaque examen**.

```python
# Bonus pour les 3 examens (taille 3)
bonus_examen = np.array([2, 5, 0])

# Addition grâce au broadcasting
notes_finales = notes + bonus_examen
```

### Analyse des dimensions

*   `notes` : $(2,\textcolor{FireBrick}{3})$
*   `bonus` : $(\textcolor{FireBrick}{3})$

Les dernières dimensions (3 et 3) correspondent. NumPy va "broadcaster" le vecteur `bonus_examen` sur chaque rangée de la matrice `notes`.

Résultat :
```text
             n1  n2  n3            n1    n2    n3
Étudiant 1 [[72  85  85],   <-- [[70+2, 80+5, 85+0],
Étudiant 2  [62  80  80]]   <--  [60+2, 75+5, 80+0]]
```

:::warning Attention
## Attention à l'ordre des dimensions (utilité de `reshape`)

Si on veut ajouter un bonus **pour chaque étudiant** (donc par rangée), il faut faire ici attention à l'ordre des dimensions.

```python
import numpy as np

notes = np.array([[70, 80],
                  [60, 75]])       # (2, 2)

# Bonus pour les 2 étudiants
bonus_etudiant = np.array([5, 10]) # (2,)

resultat_incorrect = notes + bonus_etudiant
# Résultat non correct car (2,) s'aligne sur la dernière dimension donc sur les examens au lieu des étudiants 
# [[75, 90], <-- +[5, 10]
#  [65, 85]] <-- +[5, 10]
```

Pour que le "broadcasting" s'applique sur les rangées, il faut transformer le vecteur 1D en vecteur colonne (2, 1). On peut faire cela grâce à la méthode **`reshape`** de NumPy.

```python
import numpy as np

bonus_colonne = bonus_etudiant.reshape(2, 1) # Forme (2, 1)

# notes         : (2, 2)
# bonus_colonne : (2, 1)
#                  ^  ^
#                  |  compatible (2 vs 1)
#                  compatible (2 vs 2)

resultat_correct = notes + bonus_colonne
# [[75, 85],  <-- +5 partout
#  [70, 85]]  <-- +10 partout
```
:::

:::info Information
## Avantages

1.  **Code concis** : Pas besoin de boucles `for` imbriquées.
2.  **Performance** : Les opérations sont effectuées en C, beaucoup plus vite que des boucles Python.
3.  **Mémoire** : NumPy ne crée pas physiquement les copies des données dupliquées, l'opération est économe en mémoire.
:::

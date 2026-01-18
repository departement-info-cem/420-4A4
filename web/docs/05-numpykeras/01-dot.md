# 🔢 Produit matriciel (NumPy)

La fonction `np.dot` est fondamentale en NumPy pour effectuer des multiplications de matrices et des produits scalaires. Elle est omniprésente en science des données et en apprentissage machine.

## Qu'est-ce que le produit matriciel ?

Le produit matriciel n'est pas une simple multiplication élément par élément. C'est une opération qui combine les rangées de la première matrice avec les colonnes de la seconde.

Pour multiplier une matrice $A$ par une matrice $B$:
1.  Le nombre de **colonnes** de $A$ doit être égal au nombre de **rangées** de $B$.
2.  La matrice résultante aura le nombre de **rangées** de $A$ et le nombre de **colonnes** de $B$.

Imaginez que nous voulons calculer $C = A \cdot B$.

### Formule mathématique

Chaque élément $c_{ij}$ de la matrice résultat est la somme des produits des éléments de la rangée $i$ de $A$ et de la colonne $j$ de $B$.

$$c_{ij} = \sum_k a_{ik} b_{kj}$$

Cela correspond mathématiquement au **produit scalaire** du vecteur rangée $i$ de $A$ avec le vecteur colonne $j$ de $B$.

### Exemple détaillé

Prenons deux matrices :

$$
A = \begin{bmatrix} 
1 & 2 & 3 \\
4 & 5 & 6
\end{bmatrix}, \quad
B = \begin{bmatrix} 
7 & 8 \\
9 & 10 \\
11 & 12 
\end{bmatrix}
$$

Calculons le résultat :

*   **Position (0,0)** : rangée 0 de A $\cdot$ colonne 0 de B
    $$ (1 \times 7) + (2 \times 9) + (3 \times 11) = 7 + 18 + 33 = 58 $$

    $$
    \begin{bmatrix} 
    \textcolor{red}{1} & \textcolor{red}{2} & \textcolor{red}{3} \\
    4 & 5 & 6
    \end{bmatrix} \cdot
     \begin{bmatrix} 
    \textcolor{red}{7} & 8 \\
    \textcolor{red}{9} & 10 \\
    \textcolor{red}{11} & 12 
    \end{bmatrix} =
    \begin{bmatrix} 
        \textcolor{red}{58} & ... \\
        ... & ... 
    \end{bmatrix}
    $$

*   **Position (0,1)** : rangée 0 de A $\cdot$ colonne 1 de B
    $$ (1 \times 8) + (2 \times 10) + (3 \times 12) = 8 + 20 + 36 = 64 $$

*   **Position (1,0)** : rangée 1 de A $\cdot$ colonne 0 de B
    $$ (4 \times 7) + (5 \times 9) + (6 \times 11) = 28 + 45 + 66 = 139 $$

*   **Position (1,1)** : rangée 1 de A $\cdot$ colonne 1 de B
    $$ (4 \times 8) + (5 \times 10) + (6 \times 12) = 32 + 50 + 72 = 154 $$

Résultat final :
$$
C = \begin{bmatrix} 
58 & 64 \\
139 & 154 
\end{bmatrix}
$$

## Utilisation de `np.dot`

NumPy rend ce calcul très simple.

```python
import numpy as np

# Définition des matrices
A = np.array([[1, 2, 3], 
              [4, 5, 6]])

B = np.array([[7, 8], 
              [9, 10],
              [11,12]])

# Calcul du produit matriciel
C = np.dot(A, B)

print(C)
# Affiche :
# [[ 58  64]
#  [139 154]]
```

:::info Information

Depuis Python 3.5, vous pouvez utiliser l'opérateur `@` qui est un raccourci syntaxique pour le produit matriciel.

```python
C = A @ B  # Exactement équivalent à np.dot(A, B) pour des matrices 2D
```
:::


:::warning Attention

Une erreur fréquente est d'utiliser l'astérisque `*` pour multiplier des matrices. En NumPy, `*` effectue une **multiplication élément par élément**, ce qui est mathématiquement différent.
:::

:::tip Astuce
Pour ne pas avoir d'erreurs, vérifiez toujours les dimensions (shapes) :

> $(m, n) \cdot (n, p) \rightarrow (m, p)$

Les dimensions "intérieures" ($n$) doivent correspondre.
:::

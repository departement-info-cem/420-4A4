# 🔢 Produit matriciel (NumPy)

Le produit matriciel est une opération mathématique omniprésente en science des données. Il s'applique sur **deux matrices**. Le produit matriciel d'une matrice $A$ par une matrice $B$ s'écrit: 

$$
A \cdot B
$$

En NumPy, on peut calculer le produit matriciel avec la fonction `np.dot`.

## Qu'est-ce que le produit matriciel ?

Le produit matriciel n'est pas une simple multiplication élément par élément. C'est une opération qui combine les rangées de la première matrice avec les colonnes de la seconde.

Pour faire le produit matriciel d'une matrice $A$ par une matrice $B$:
1.  Le nombre de **colonnes** de $A$ doit être égal au nombre de **rangées** de $B$.
2.  La matrice résultante aura le nombre de **rangées** de $A$ et le nombre de **colonnes** de $B$.

### Formule mathématique

Chaque élément $c_{ij}$ de la matrice résultat est la somme des produits des éléments de la rangée $i$ de $A$ et de la colonne $j$ de $B$.

$$
c_{ij} = \sum_k a_{ik} b_{kj}
$$

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
    $$ \textcolor{FireBrick}{( 1 \times 7 )} + \textcolor{Green}{( 2 \times 9 )} + \textcolor{RoyalBlue}{( 3 \times 11 )} = \textcolor{FireBrick}{7} + \textcolor{Green}{18} + \textcolor{RoyalBlue}{33} = \textcolor{Orchid}{58} $$

    $$
    \begin{bmatrix} 
    \textcolor{FireBrick}{\textbf{1}} & \textcolor{Green}{\textbf{2}} & \textcolor{RoyalBlue}{\textbf{3}} \\
    4 & 5 & 6
    \end{bmatrix} \cdot
     \begin{bmatrix} 
    \textcolor{FireBrick}{\textbf{7}} & 8 \\
    \textcolor{Green}{\textbf{9}} & 10 \\
    \textcolor{RoyalBlue}{\textbf{11}} & 12 
    \end{bmatrix} =
    \begin{bmatrix} 
        \textcolor{Orchid}{58} & ... \\
        ... & ... 
    \end{bmatrix}
    $$

*   **Position (0,1)** : rangée 0 de A $\cdot$ colonne 1 de B
    $$ \textcolor{FireBrick}{( 1 \times 8 )} + \textcolor{Green}{( 2 \times 10 )} + \textcolor{RoyalBlue}{( 3 \times 12 )} = \textcolor{FireBrick}{8} + \textcolor{Green}{20} + \textcolor{RoyalBlue}{36} = \textcolor{Orchid}{64} $$

    $$
    \begin{bmatrix} 
    \textcolor{FireBrick}{\textbf{1}} & \textcolor{Green}{\textbf{2}} & \textcolor{RoyalBlue}{\textbf{3}} \\
    4 & 5 & 6
    \end{bmatrix} \cdot
     \begin{bmatrix} 
    7 & \textcolor{FireBrick}{\textbf{8}} \\
    9 &\textcolor{Green}{\textbf{10}} \\
    11 & \textcolor{RoyalBlue}{\textbf{12}} 
    \end{bmatrix} =
    \begin{bmatrix} 
        ... & \textcolor{Orchid}{64} \\
        ... & ... 
    \end{bmatrix}
    $$

*   **Position (1,0)** : rangée 1 de A $\cdot$ colonne 0 de B
    $$ \textcolor{FireBrick}{( 4 \times 7 )} + \textcolor{Green}{( 5 \times 9 )} + \textcolor{RoyalBlue}{( 6 \times 11 )} = \textcolor{FireBrick}{28} + \textcolor{Green}{45} + \textcolor{RoyalBlue}{66} = \textcolor{Orchid}{139} $$

    $$
    \begin{bmatrix} 
    1 & 2 & 3 \\
    \textcolor{FireBrick}{\textbf{4}} & \textcolor{Green}{\textbf{5}} & \textcolor{RoyalBlue}{\textbf{6}}
    \end{bmatrix} \cdot
     \begin{bmatrix} 
    \textcolor{FireBrick}{\textbf{7}} & 8 \\
    \textcolor{Green}{\textbf{9}} & 10 \\
    \textcolor{RoyalBlue}{\textbf{11}} & 12 
    \end{bmatrix} =
    \begin{bmatrix} 
        ... & ... \\
        \textcolor{Orchid}{139} & ... 
    \end{bmatrix}
    $$

*   **Position (1,1)** : rangée 1 de A $\cdot$ colonne 1 de B
    $$ \textcolor{FireBrick}{( 4 \times 8 )} + \textcolor{Green}{( 5 \times 10 )} + \textcolor{RoyalBlue}{( 6 \times 12 )} = \textcolor{FireBrick}{32} + \textcolor{Green}{50} + \textcolor{RoyalBlue}{72} = \textcolor{Orchid}{154} $$

    $$
    \begin{bmatrix} 
    1 & 2 & 3 \\
    \textcolor{FireBrick}{\textbf{4}} & \textcolor{Green}{\textbf{5}} & \textcolor{RoyalBlue}{\textbf{6}}
    \end{bmatrix} \cdot
     \begin{bmatrix} 
    7 & \textcolor{FireBrick}{\textbf{8}} \\
    9 & \textcolor{Green}{\textbf{10}} \\
    11 & \textcolor{RoyalBlue}{\textbf{12}} 
    \end{bmatrix} =
    \begin{bmatrix} 
        ... & ... \\
        ... & \textcolor{Orchid}{154} 
    \end{bmatrix}
    $$


**Résultat final** :
$$

C = \begin{bmatrix} 
\textcolor{Orchid}{58} & \textcolor{Orchid}{64} \\
\textcolor{Orchid}{139} & \textcolor{Orchid}{154} 
\end{bmatrix}
$$


:::danger Attention
Vous pouvez constater que si l'on intervertit $A$ et $B$, le résultat n'est pas le même.
$$
A \cdot B \neq B \cdot A
$$
Mathématiquement, on dit que l'opérateur n'est pas commutatif.
:::

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

$$
(m, \textcolor{Orchid}{n}) \cdot (\textcolor{Orchid}{n}, p) \rightarrow (m, p)
$$

Les dimensions "intérieures" (ici $\textcolor{Orchid}{n}$) doivent correspondre.
:::

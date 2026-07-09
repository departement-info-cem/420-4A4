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
    $$ \textcolor{red}{( 1 \times 7 )} + \textcolor{green}{( 2 \times 9 )} + \textcolor{blue}{( 3 \times 11 )} = \textcolor{red}{7} + \textcolor{green}{18} + \textcolor{blue}{33} = \textcolor{purple}{58} $$

    $$
    \begin{bmatrix} 
    \textcolor{red}{\textbf{1}} & \textcolor{green}{\textbf{2}} & \textcolor{blue}{\textbf{3}} \\
    4 & 5 & 6
    \end{bmatrix} \cdot
     \begin{bmatrix} 
    \textcolor{red}{\textbf{7}} & 8 \\
    \textcolor{green}{\textbf{9}} & 10 \\
    \textcolor{blue}{\textbf{11}} & 12 
    \end{bmatrix} =
    \begin{bmatrix} 
        \textcolor{purple}{58} & ... \\
        ... & ... 
    \end{bmatrix}
    $$

*   **Position (0,1)** : rangée 0 de A $\cdot$ colonne 1 de B
    $$ \textcolor{red}{( 1 \times 8 )} + \textcolor{green}{( 2 \times 10 )} + \textcolor{blue}{( 3 \times 12 )} = \textcolor{red}{8} + \textcolor{green}{20} + \textcolor{blue}{36} = \textcolor{purple}{64} $$

    $$
    \begin{bmatrix} 
    \textcolor{red}{\textbf{1}} & \textcolor{green}{\textbf{2}} & \textcolor{blue}{\textbf{3}} \\
    4 & 5 & 6
    \end{bmatrix} \cdot
     \begin{bmatrix} 
    7 & \textcolor{red}{\textbf{8}} \\
    9 &\textcolor{green}{\textbf{10}} \\
    11 & \textcolor{blue}{\textbf{12}} 
    \end{bmatrix} =
    \begin{bmatrix} 
        ... & \textcolor{purple}{64} \\
        ... & ... 
    \end{bmatrix}
    $$

*   **Position (1,0)** : rangée 1 de A $\cdot$ colonne 0 de B
    $$ \textcolor{red}{( 4 \times 7 )} + \textcolor{green}{( 5 \times 9 )} + \textcolor{blue}{( 6 \times 11 )} = \textcolor{red}{28} + \textcolor{green}{45} + \textcolor{blue}{66} = \textcolor{purple}{139} $$

    $$
    \begin{bmatrix} 
    1 & 2 & 3 \\
    \textcolor{red}{\textbf{4}} & \textcolor{green}{\textbf{5}} & \textcolor{blue}{\textbf{6}}
    \end{bmatrix} \cdot
     \begin{bmatrix} 
    \textcolor{red}{\textbf{7}} & 8 \\
    \textcolor{green}{\textbf{9}} & 10 \\
    \textcolor{blue}{\textbf{11}} & 12 
    \end{bmatrix} =
    \begin{bmatrix} 
        ... & ... \\
        \textcolor{purple}{139} & ... 
    \end{bmatrix}
    $$

*   **Position (1,1)** : rangée 1 de A $\cdot$ colonne 1 de B
    $$ \textcolor{red}{( 4 \times 8 )} + \textcolor{green}{( 5 \times 10 )} + \textcolor{blue}{( 6 \times 12 )} = \textcolor{red}{32} + \textcolor{green}{50} + \textcolor{blue}{72} = \textcolor{purple}{154} $$

    $$
    \begin{bmatrix} 
    1 & 2 & 3 \\
    \textcolor{red}{\textbf{4}} & \textcolor{green}{\textbf{5}} & \textcolor{blue}{\textbf{6}}
    \end{bmatrix} \cdot
     \begin{bmatrix} 
    7 & \textcolor{red}{\textbf{8}} \\
    9 & \textcolor{green}{\textbf{10}} \\
    11 & \textcolor{blue}{\textbf{12}} 
    \end{bmatrix} =
    \begin{bmatrix} 
        ... & ... \\
        ... & \textcolor{purple}{154} 
    \end{bmatrix}
    $$


**Résultat final** :
$$
\textcolor{purple}{
C = \begin{bmatrix} 
58 & 64 \\
139 & 154 
\end{bmatrix}}
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
(m, \textcolor{Brown}{n}) \cdot (\textcolor{Brown}{n}, p) \rightarrow (m, p)
$$

Les dimensions "intérieures" (ici $\textcolor{Brown}{n}$) doivent correspondre.
:::

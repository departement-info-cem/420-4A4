# 🐣 Initialisation du compte

## 1. Se déconnecter de son compte Google personnel ⛓️‍💥


:::warning
Avant tout, il est important de vous assurer que vous êtes déconnecté de votre compte Google personnel dans votre navigateur pour que le coupon soit bien appliqué à votre compte Google du CEGEP.
:::

---

## 2. Appliquer le coupon 🎟️

1. Suivez le lien présent dans le courriel : **Your Google Cloud Education Credit Coupon**.
2. Connectez-vous avec votre compte Google **du CEGEP**, ou assurez-vous d'utiliser ce compte en regardant en haut à droite.
3. Entrez votre nom, prénom et le code du coupon et validez.

---

## 3. Créer votre projet 🏗️

1. Allez sur [Google Cloud](https://cloud.google.com/).
2. Cliquez sur **Console** en haut à droite.
3. Cliquez sur le rectangle à côté du logo Google Cloud en haut à gauche.
4. Cliquez sur **Nouveau projet**.
5. Donnez-lui le nom: "projet-*votrenom*-*votreprénom*"
6. Assurez-vous que l'organisation et la ressource parente soient bien **cegepmontpetit.ca**. Cliquez sur **Créer**.
6. Attendez que le projet soit créé (vous devriez avoir une confirmation).
7. Cliquez sur les 3 lignes horizontales à gauche du logo Google Cloud, cliquez sur **IAM et administration**.
8. Cliquez sur: **+ Accorder l'accès**
9. Dans **Nouveaux Principaux**, entrez: *xavier.glorot@cegepmontpetit.ca*. Dans **Sélectionnez un rôle**, entrez: *Propriétaire*.
10. Cliquez sur **Enregistrer**.

---

## 4. Augmenter vos quotas pour les GPUs 🧇

1. Cliquez de nouveau sur le rectangle à côté du logo Google Cloud puis sélectionnez votre nouveau projet.
2. Cliquez sur les 3 lignes horizontales à gauche du logo Google Cloud, placez le pointeur sur **Vertex AI**, cliquez sur **Colab Enterprise**.
3. Une fenêtre va apparaître pour activer des API. Cliquez sur **Activer** et attendez (cela peut prendre quelques minutes).
4. Cliquez sur les 3 lignes horizontales à gauche du logo Google Cloud, mettez le pointeur sur **IAM et administration**, attendez, puis cliquez sur **Quotas et limites du système**.
5. Au-dessus de la table des quotas, il y a un champ *"Saisissez le nom ou la valeur de la propriété"*. Entrez-y : `GPUs (all regions)`.
6. Cliquez sur les 3 points tout à droite de la ligne sélectionnée et cliquez sur **Modifier le quota**. Mettez la valeur `1` et, dans la description, mettez le texte : `quota for my cloud EDU grant project`.
7. Attendez de recevoir une confirmation d'acceptation du changement par courriel (généralement, cela prend quelques minutes).

---

## 5. Créer un modèle d'exécution GPU ⚙️
1. Cliquez sur les 3 lignes horizontales à gauche du logo Google Cloud, placez le pointeur sur **Vertex AI**, cliquez sur **Colab Enterprise**.
2. Cliquez sur **Modèles d'exécution**.
3. En haut, au milieu, cliquez sur **+ Nouveau modèle**.
4. Donnez-lui un nom (ex. : "GPU"), sélectionnez la région `us-west1 (Oregon)`, puis cliquez sur **Continuer**.
5. Sélectionnez la machine : `g2-standard-4`, ne touchez pas au reste.
6. Cliquez sur **Créer** en bas de la page.

---

## 6. Créer un *bucket Cloud Storage* 🪣

:::info
Avec Colab Enterprise, nous n'avons pas accès au Drive. Nous allons créer un *bucket Cloud Storage*, qui nous servira d'équivalent.
:::

1. Cliquez sur les 3 lignes horizontales à gauche du logo Google Cloud, mettez le pointeur sur **Cloud Storage**, cliquez sur **Buckets**.
2. En haut, au milieu, cliquez sur **+ Créer**.
3. Donnez-lui un nom (ex. : "drive_*votrenom*" tout en minuscules), puis cliquez sur **Continuer**.
4. Sélectionnez **Region**, puis, dans la liste déroulante : `us-west1 (Oregon)`.
5. Cliquez sur **Créer** en bas de la page.
6. Dans la page d'information du bucket, vous pouvez téléverser des dossiers/fichiers (par exemple des données d'entraînement).

---

Ça y est ! Vous êtes enfin prêts ! 🥵
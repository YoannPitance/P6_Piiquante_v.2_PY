# P6 Piiquante

## Projet d'apprentissage n°6 du parcours Dévellopeur Web Openclassrooms
### "Construisez une API sécurisée pour une application d'avis gastronomiques"

### La validation de ce projet nécessitait de respecter les caracteristiques techniques suivantes:<br><br>
* Création d'une API sécurisée
* Utiliser ube base de données (MongoDB) 
* Créer modèle utilisateur et modèle produit avec mongoose.
* Créer des middlewares.
* Gestion des utilisateurs de manière sécurisée avec bcrypt et JWT.
* Construction des routeurs utilisateur et routeurs produits.
* Utiliser multer pour intégrer et gérer les images
* Mise en place de controllers
* Création d'un système de notation sous forme de like<br>

**PROJET validé!**<br>

### Vous pouvez voir et tester le rendu ici:<br>
### Installation:
Vous aurez besoin d'installer node et npm sur votre machine pour pouvoir accéder à cette version.<br><br>
1- Clonez le repo et ouvrez le dans un éditeur de code. Vous trouverez 2 dossiers, BACK et FRONT. A la racine du dossier BACK créez un dossier "images".<br>
2- Ouvrez un terminal depuis le dossier **back** et executez la commande **npm install**, attendez la fin de l'installation<br>
3- Ouvrez un terminal depuis le dossier **front**<br>
4- Exécutez la commande **npm start** dans chaque terminal<br>
5- Si tout est ok pour la partie **back** vous aurez ce message affiché:<br>

**" nodemon starting node server.js`<br>
Listening on port 3000<br>
connecté à mongodb "**<br>

6- Si tout est ok pour la partie **front** vous aurez ce message affiché:<br>

**Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/**

**Compiled successfully.
✔ Browser application bundle generation complete.**

**5 unchanged chunks**

Build at: \***\*\_\*\*** - Hash: **\*\***\_**\*\*** - Time: **\_**ms

**√ Compiled successfully."**<br><br>

### Utilisation:<br>

* **SIGNUP ----**: la 1ère fois que vous arrivez sur la page d'accueil vous devez vous enregistrer comme utilisateur, vous devrez renseigner votre email qui doit être unique ainsi qu'un mot de passe. Votre mot de passe doit obligatoirement contenir :
  - minimum 6 caractères
  - maximum 100 caractères
  - minimum une majuscule et une minuscule
  - minimum 2 chiffres
  - ne pas contenir d'espaces<br>

Si ces paramètres ne sont pas respectés votre mot de passe ne sera pas valide et vous devrez recommencer jusqu'à saisir un mot de passe valide.
Une fois enregistré vous êtes loggé automatiquement et avez accès à toutes les sauces créées par d'autres utilisateurs.<br>

* **LOGIN ----**: Lorsque vous revenez sur le site vous devez vous reconnecter via l'onglet **LOGIN** en haut à droite.<br>
Saisissez l'email et le mot de passe associé que vous avez utilisés lors de la création de votre compte.<br>
Une fois votre navigation terminée vous pouvez cliquer sur LOGOUT pour vous deconnecter et vous serez redirigé vers la page d'authentification.<br>

* **GESTION DES SAUCES ----** : Quand vous êtes authentifié, vous pouvez voir toutes les sauces existantes et interagir avec. Par exemple en cliquant sur une sauce vous avez accès à un descriptif plus détaillé et vous pouvez également voter si vous aimez ou n'aimez pas cette sauce.<br>
Vous pouvez créer votre propre sauce, que ce soit une recette personnelle ou bien une sauce découverte dans un pays étranger peu importe, mais il faudra cependant respecter quelques critères lors de sa création.<br>
Pour ajouter votre sauce, cliquer sur **ADD SAUCE** en haut à gauche du titre, ensuite remplissez les champs demandés. Attention, tous les champs sont requis, l'ajout d'une image également ainsi que le curseur indiquant à quel point votre sauce est **PIIquante sur une échelle de 1 à 10**. Si tout est rempli correctement votre sauce apparaitra avec les autres sauces.<br>
Vous pouvez également modifier ou supprimer une sauce que vous avez créée. D'ailleurs les sauces ne peuvent être gérées que par leur créateur.<br>
Pour cela cliquez sur une de vos sauces et vous verrez à droite de l'image 2 boutons un pour modifier et l'autre pour supprimer votre sauce.<br>
Si vous n'êtes pas l'auteur de cette sauce ces boutons n'apparaitront pas. Cliquez ensuite sur celui que vous voulez et modifiez ou supprimez votre sauce.

///// ENJOY !!!!!!!!!!!!!!!!!






 




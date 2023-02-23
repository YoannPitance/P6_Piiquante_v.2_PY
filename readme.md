///// TITRE: --------------PIIQUANTE--------------

///// CONTEXTE: Vous avez passé la dernière année en tant que développeur back-end indépendant et vous avez travaillé sur plusieurs projets de tailles et de difficultés variées.

La semaine dernière, vous avez reçu un message sur votre plateforme de freelance vous demandant de l'aide pour un nouveau projet. Les sauces piquantes sont de plus en plus populaires, en grande partie grâce à la série YouTube « Hot Ones » . C’est pourquoi ce nouveau client, la marque de condiments à base de piment Piiquante, veut développer une application web de critique des sauces piquantes appelée « Hot Takes » .

Deux piments rouges dans dans un bol, avec le nom en rouge
Piiquante : Marque de sauces piquantes
Si la responsable produit de Piiquante souhaite à terme transformer l'application d'évaluation en une boutique en ligne, elle souhaite que la première version soit une « galerie de sauces » permettant aux utilisateurs de télécharger leurs sauces piquantes préférées et de liker ou disliker les sauces que d'autres partagent. Le front-end de l'application a été développé à l'aide d'Angular et a été précompilé après des tests internes, mais Piiquante a besoin d'un développeur back-end pour construire l'API.

///// INSTALLATION : Pour mettre en place le projet, clonez le repo et ouvrez le dans un éditeur de code. Vous trouverez 2 dossiers, un dossier BACK et un dossier FRONT. A la racine du dossier BACK créez un dossier "images".

Vous devrez ouvrir un terminal depuis le dossier FRONT ainsi qu'un autre depuis le dossier BACK afin d'y executer la commande " npm install ".
Une fois npm installé vous pourrez executer la même commande pour chaque dossier à savoir " npm start "
Si la commande de démarrage du FRONT s'est bien déroulée vous devriez voir apparaitre dans le terminal ceci :

" ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **

Compiled successfully.
✔ Browser application bundle generation complete.

5 unchanged chunks

Build at: \***\*\_\*\*** - Hash: **\*\***\_**\*\*** - Time: **\_**ms

√ Compiled successfully."

si ce n'est pas le cas vous avez peut-être oublié la commande npm install avant de lancer le projet.

pour le BACK vous devriez avoir ceci :

" nodemon starting node server.js`
Listening on port 3000
connecté à mongodb "

Le projet est lancé et la base de données est bien connectée vous pouvez à présent vous rendre sur http://localhost:4200/ pour afficher la page web du projet.

///// UTILISATION :

        ---- SIGNUP ---- : la 1ère fois que vous arrivez sur la page d'accueil vous devez vous enregistrer comme utilisateur, vous devrez renseigner votre email qui doit être unique ainsi qu'un mot de passe. Votre mot de passe doit obligatoirement contenir :
                                                                     - minimum 6 caractères
                                                                     - maximum 100 caractères
                                                                     - minimum une majuscule et une minuscule
                                                                     - minimum 2 chiffres
                                                                     - ne pas contenir d'espaces

    Si ces paramètres ne sont pas respectés votre mot de passe ne sera pas valide et vous devrez recommencer jusqu'à saisir un mot de passe valide.
    Une fois enregistré vous êtes loggé automatiquement et avez accès à toutes les sauces créées par d'autres utilisateurs.

        ---- LOGIN ---- : Lorsque vous revenez sur le site vous devez vous reconnecter via l'onglet LOGIN en haut à droite. Saisissez l'email et le mot de passe associé que vous avez utilisés lors de la création de votre compte. Une fois votre navigation terminée vous pouvez cliquer sur LOGOUT pour vous deconnecter et vous serez redirigé vers la page d'authentification.

        ---- GESTION DES SAUCES ---- : Quand vous êtes authentifié, vous pouvez voir toutes les sauces existantes et interagir avec. Par exemple en cliquant sur une sauce vous avez accès à un descriptif plus détaillé et vous pouvez également voter si vous aimez ou n'aimez pas cette sauce.
        Vous pouvez également créer votre propre sauce, que ce soit une recette personnelle ou bien une sauce découverte dans un pays étranger peu importe, mais il faudra cependant respecter quelques critères lors de sa création.

                Pour ajouter votre sauce, cliquer sur " ADD SAUCE " en haut à gauche du titre, ensuite remplissez les champs demandés. Attention, tous les champs sont requis, l'ajout d'une image également ainsi que le curseur indiquant à quel point votre sauce est PIIquante sur une échelle de 1 à 10. Si tout est rempli correctement votre sauce apparaitra avec les autres sauces.

                Vous pouvez également modifier ou supprimer une sauce que vous avez créée. D'ailleurs les sauces ne peuvent être gérées que par leur créateur. Pour cela cliquez sur une de vos sauces et vous verrez à droite de l'image 2 boutons un pour modifier et l'autre pour supprimer votre sauce. Si vous n'êtes pas l'auteur de cette sauce ces boutons n'apparaitront pas. Cliquez ensuite sur celui que vous voulez et modifiez ou supprimez votre sauce.

///// ENJOY !!!!!!!!!!!!!!!!!

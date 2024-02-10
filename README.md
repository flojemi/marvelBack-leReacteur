# Test technique MARVEL

## Objectif

### CE QUE VOUS AUREZ À FAIRE

- Créez un site en React (avec un routeur) qui contiendra en haut : le logo MARVEL et un menu qui contiendra au minimum : personnages, comics et favoris.
- Sur la page principale « personnages », vous devrez faire apparaître la liste des personnages MARVEL (100 par page), sous forme de fiche (photo, nom, description). En cliquant sur chaque fiche, il devra être possible d’accéder à une page regroupant les comics liés au personnage.
- Sur la page « comics », vous devrez faire apparaître la liste des comics MARVEL, par ordre alphabétique, sous forme de fiche (photo, titre, description).
- Vous intégrerez également un moteur de recherche, afin de rechercher par nom/titre. Une barre de recherche pour la page « comics », une autre pour la page « personnages ». Vous prendrez également soin d’ajouter un système de pagination à chaque page.
- Pour les pages « personnages » et « comics », vous devrez créer un système permettant de mettre chaque fiche en favoris, en fonction des souhaits de l’utilisateur. Vous devrez conserver ces favoris dans la mémoire locale du navigateur (Cookies ou Local Storage) de l’utilisateur, dans un premier temps.
- Vous hébergerez votre frontend sur Netlify et votre backend sur NorthFlank.

### IMPORTANT

- Le style est libre, faites preuve d'imagination, épatez-nous et surtout éclatez-vous !
- Vous utiliserez l’API MARVEL, disponible à cette adresse : https://lereacteur-marvel-api.netlify.app/.
- Lisez (et relisez) bien la documentation, tout est décrit pour effectuer les requêtes.
- Toutes vos requêtes vers l’API MARVEL devront se faire depuis votre serveur et non depuis le navigateur.
- Attachez du soin au code et à la forme de votre application. Un joli site est toujours plus impressionnant pour un employeur ; ce projet aura toute sa place dans votre portoflio.

### BONUS

- Créez un système d’authentification par email et mot de passe.
- Enregistrez les favoris en base de données (et non dans la mémoire du navigateur, comme c'était le cas précédemment).
- Implémentez l’auto-complétion pour le moteur de recherche.
- Rendez le site totalement responsive.

## Feuille de route

|          | Jalons                                                                         | Status |
| :------- | :----------------------------------------------------------------------------- | :----- |
| Global   | Initialisation des répertoires back et front                                   | Done   |
| Global   | Initialisation des repositories Git associés                                   | Done   |
| Backend  | Création du character router                                                   | Done   |
| Backend  | Création du comics router                                                      | Done   |
| Frontend | Création de la page principale liée aux personnages                            | Done   |
| Frontend | Ajout de la pagination                                                         | Done   |
| Frontend | Accès à la liste des comics via clique sur un personnage                       | Done   |
| Frontend | Création de la page comics en s'appuyant sur les composants créés précédemment | Done   |
| Frontend | Mise en place des barres de recherches                                         | Done   |
| Frontend | Gestion des favoris à l'aide des cookies                                       | Done   |
| Frontend | Ajustement du look de l'application                                            | Done   |
| Global   | Hébergement du back et du front sur Northflank et Netlify                      |        |
| Backend  | Création de la base de donnée utilisateur MongoDb                              |        |
| BackEnd  | Création du userRouter                                                         |        |
| Frontend | Amélioration de la gestion des favoris en bdd                                  |        |
| Frontend | Rendre responsive                                                              |        |
| Bonus    | Auto complétion du moteur de recherche                                         |        |

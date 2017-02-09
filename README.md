# katbiznis

> Visit card exercise

* * *

**katbizniss** is an educational project, which will be used for HTML courses.

**Note:** the school where the course is given, the [HEPL](http://www.provincedeliege.be/hauteecole) from Liège, Belgium, is a french-speaking school. From this point, the instruction will be in french. Sorry.

* * *

## Installation

Pour faire tourner gulp, vous avez d'abord besoin d'installer ses _dépendances_. Pour cela, il vous suffit de lancer la commande `yarn install` dans votre projet, qui se chargera alors de regarder les dépendances listées dans le fichier **package.json** et de les installer pour vous.

## Fonctionnement

Tout nos fichiers se trouvent dans le dossier `src/` (bien rangés dans des sous-dossiers). Tels qu'ils sont là, vous ne pouvez rien en faire : il faut les _compiler_ avant de pouvoir les utiliser dans un navigateur.

Pour ça, nous allons utiliser **gulp**, un _task-runner_ dont le boulot est de lancer des _tâches_ qui vont transformer des fichiers (entre autres choses).

### Tâches Gulp

La configuration de ces tâches se fait dans le fichier `gulpfile.js`. Pour lancer une tâche, il suffit de lancer la commande `gulp NOM_DE_LA_TACHE` dans votre projet.
Chaque tâche va récupérer des fichiers dans le dossier `src`, leur appliquer un traitement et sauvegarder le résultat dans le dossier `assets`.

Nous en avons créé cinq, ainsi que deux _alias_ (des tâches qui en appellent d'autres).

* **images :** compresse et optimise nos images
* **html :** compile nos fichiers _pug_ en html (minifié)
* **css :** compile nos fichiers _scss_ en css (auto-prexifié et minifié)
* **js :** compile nos fichiers _js (ES2015)_ en js (minifié)

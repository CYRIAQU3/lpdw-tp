# Exercice 3 - Questions général

Voici une série de question (en vrac) sur ce que nous avons vu en cours. Elle ne sont pas directement liés à l'exercice mais elles peuvent vous aider à mieux comprendre l'environnement dans lequel sont executés les exercices.

1. Pouvez vous m'expliquez la fonction du fichier `index.js` ?

2. Quel est le rôle de webpack (en quelques mots/lignes) ?

3. Quel est le rôle de babel ?

4. Pourquoi devrais-je utilser tous ces outils alors que je pourrais me contenter d'un bloc-note et d'un navigateur ?

5. Pouvez vous me citez d'autres outils utiles au dévelopement Front et ReactJS en particulier ?

**Réponses**
1. Index.js se charge de charger les dépendances de react et va ensuite charger les classes qui se trouvent dans le réprtoire ./components/YourApp, comme j'avais quelques soucis j'ai chargé les dep manuellement et ai utilisé un fichier **helloworld.js**

2. Webpack sert a fournir des "plugins" au site web, le rendant ainsi plus flexible (en gros au lieu de charger les js 1 par 1, on utilise simplement leur nom en tant que plugin, webapck se charge des dépendance, un peu à la npm

3. Babel sert à compiler le jsx en js

4. Cela est plus rigoureux et permet d'éviter de se retoruver face à des soucis comme des dépendances manquantes.

5. Gulp, Sass, Grunt 

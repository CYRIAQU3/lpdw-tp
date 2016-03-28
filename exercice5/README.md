# Exercice 5 - State et binding

1. Comment puis-je définir le `state` par défaut d'un composant ?

2. Quelle est la particularité du `state` dans un composant React ?

3. Comment puis-je transférer la référence de mon objet (this) à une méthode lorsque j'utilise les attributs natif d'un élément tel que `onChange` ou `onClick` par exemple ?

4. Que ce passe t-il lorsqu'une propriété du `state` d'un composant React est modifiée ?

##Réponses

1. Il suffit de la déclarer lorsqu'on créé l'objet dans le return (X = 'lorem ipsum')
2. Il est dynamique et accessible par les autres composants
3. Il faut utiliser la variable de lobject réact  (par ex pour " var dv = React.createClass({...) ", alors il faut utiliser dv.state.x)
4. L'event OnChange sera alors appelé et sa fonction exécutée (si elle a été définie)

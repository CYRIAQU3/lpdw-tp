# Exercice 2 - Questionnaire

1. Dans du JSX, quelles sont les caractères spéciaux utilisés pour déclarer du HTML ? du Javascript ?

2. En JSX, puis-je attribuer du code html tel que
`<h2>Mon Super Titre</h2>` à une variable JSX ? 

**Réponses**

1. "" pour le html et {} pour du JS et du contenu dynamique

2. Non, pas directement dans la variable, il est plutot préferable de placer les balises voulu avant la variable js, ex :

`render: function () {
		    return <h1>Hello {this.props.message}!</h1>;
		  }`

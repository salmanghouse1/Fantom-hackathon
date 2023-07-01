

fetch('https://pokeapi.co/api/v2/pokemon/ditto/ability')
	.then(response => response.json())
	.then(data => console.log(data.abilities.ability))
	.catch(err => console.error(err));
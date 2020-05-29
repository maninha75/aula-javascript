let objeto = {
	"titulo": "Chocolate",
  "porcoes": 2,
  "ingredientes": ["cacau", "leite", "manteiga"]
};

console.log(objeto.titulo);
console.log("Porções: " + objeto.porcoes);
console.log("Ingrediente:");
for(let i=0; i< objeto.ingredientes.length; i++) {
	console.log(objeto.ingredientes[i])
}

let listaLivros = [
	{
  	"titulo": "A culpa é das estrelas",
    "autor": "Jhon Green",
    "livroLido": true
  },
  {
  	"titulo": "Quem é você Alaska",
    "autor": "Jhon Green",
    "livroLido": false
  },
  {
  	"titulo": "O Teorema Katherine ",
    "autor": "Jhon Green",
    "livroLido": true 
  },
  {
  	"titulo": "As Crônicas de Gelo e Fogo",
    "autor": " George RR Martin",
    "livroLido": false
  },
]

for(let i=0; i < listaLivros.length; i++) {
	if(listaLivros[i].livroLido) {
  	console.log("Você já leu este livro - " + listaLivros[i].titulo + " - " + listaLivros[i].autor);
  } else {
  	console.log("Você não leu este livro - " + listaLivros[i].titulo + " - " + listaLivros[i].autor);
  }
}    

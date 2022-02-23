const Pokedex = require("pokeapi-js-wrapper")
const P = new Pokedex.Pokedex()

// with await, be sure to be in an async function (and in a try/catch)
// (async () => {
//     const golduck = await P.getPokemonByName("golduck")
//     console.log(golduck)
//   })()
  
//   // or with Promises
//   P.getPokemonByName("eevee")
//     .then(function(response) {
//       console.log(response)
//     })
  
//   P.resource([
//     "/api/v2/pokemon/36",
//     "api/v2/berry/8",
//     "https://pokeapi.co/api/v2/ability/9/",
//   ]).then( response => {
//     console.log(response)
//   })




const fetchPokemons = () => {
    return new Promise((resolve, reject) => {
        P.getPokemonsList().then((data) => {
            console.log(data)
        })
    })
}


export {
    fetchPokemons
}
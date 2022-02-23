

const app = Vue.createApp({
    data() {
        return {
            pokemonsURL: [],
            start: false,
            nbPokePerScroll : 20,
            pokemonsDisplayed : [],
            pokemonCount: 0,
        }
    },
    methods: {
        updatePokemonDisplayed(){
            return new Promise((resolve,reject) => {
                for (let i = this.pokemonCount; i < this.pokemonCount + this.nbPokePerScroll - 1; i++){
                    console.log("URL = " + this.pokemonsURL[i])
                    fetch(this.pokemonsURL[i]).then((data) => {
                        data.json().then((pokemon) => {
                            this.pokemonsDisplayed.push(pokemon);
                            this.pokemonCount++
                        })
                    })
                }
                resolve(true)
            })
        },

        searchPokemon: function(string){
            console.log("yes")
        },

    }
})
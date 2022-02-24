

const app = Vue.createApp({
    data() {
        return {
            pokemons: [],
            start: false,
            nbPokePerScroll: 20,
            pokemonsDisplayed: [],
            pokemonCount: 0,
        }
    },
    methods: {
        updatePokemonDisplayed(){
            return new Promise((resolve,reject) => {
                for (let i = this.pokemonCount; i < this.pokemonCount + this.nbPokePerScroll - 1; i++){
                    console.log("URL = " + this.pokemons[i].url)
                    fetch(this.pokemons[i].url).then((data) => {
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
            this.pokemonsDisplayed = []
            for (let i = 0; i < this.pokemons.length; ++i){
                if (this.pokemons[i].name.includes(string) || i+1 == parseInt(string)){
                    fetch(this.pokemons[i].url).then((data) => {
                        data.json().then((pokemon) => {
                            this.pokemonsDisplayed.push(pokemon);
                            this.pokemonCount++
                        })
                    })
                }
            }

        },

    }
})
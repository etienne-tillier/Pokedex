app.component("pokedex", {
    props: {
        pokemons: {
            type: Array,
            required: true
        }
    },
    data(){
        return {
            nbPokePerScroll : 20,
            pokemonsDisplayed : [],
            nbScroll: 0,
            search: "",
            pokemonSelected: {},
            detailDisplay: false,
        }
    },
    created: function () {
    },
    template: 
    /*html*/
    `
        <section>
            <pokemondetail v-if="this.detailDisplay" @showPokedex="showPokedex" id="vuePokemonDetail" :data="this.pokemonSelected"></pokemondetail>
            <header v-if="!this.detailDisplay" id="headerPokedex">
                <div>
                    <label for="searchbar">Name or ID</label>
                    <input type="text" id="searchbar" name="searchbar"/>
                </div>
                <img v-on:click="handleSearch" id="searchIcon" src="./assets/img/searchIcon.png"/>
            </header>
            <ul v-if="!this.detailDisplay" id="pokedex">
                <pokemon v-for="poke in pokemons" class="pokemon" @selected="this.setPokemon" :pokemon="poke" :id="poke.id" :name="poke.name" :url="poke.sprites.front_default"></pokemon>
            </ul>
        </section>
    `,

    mounted: () => {
        document.querySelector('#pokedex').addEventListener('scroll', () => {
            console.log('scroll event fired!')
        });

    },

    methods: {
        handleSearch: function() {
            this.$emit("search",document.getElementById("searchbar").value)
        },

        setPokemon: function(pokemon) {
            console.log("setpoke")
            this.pokemonSelected = pokemon
            this.detailDisplay = true
        },

        showPokedex: function(){
            this.detailDisplay = false
        }

        
    },

    computed: {

    }

})
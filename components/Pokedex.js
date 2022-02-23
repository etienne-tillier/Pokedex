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
            idtest: "001",
            nametest: "Bulbizar",
            urltest: "./assets/img/001.png",
            search: ""
        }
    },
    created: function () {
    },
    template: 
    /*html*/
    `
    <section>
                <header id="headerPokedex">
                    <div>
                        <label for="searchbar">Name or ID</label>
                        <input type="text" id="searchbar" name="searchbar"/>
                    </div>
                    <img v-on:click="handleSearch" id="searchIcon" src="./assets/img/searchIcon.png"/>
                </header>
                <ul id="pokedex">
                    <pokemon v-for="poke in pokemons" class="pokemon" :id="poke.id" :name="poke.name" :url="poke.sprites.front_default"></pokemon>

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
        }
    },

    computed: {

    }

})
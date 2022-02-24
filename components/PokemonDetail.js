app.component("pokemondetail", {
    props: {
        data: {
            type: Object,
            required: true
        }
    },
    template: 
    /*html*/
    `
    <div class="pokemonCard">
        <header>
            <h5 class="namePokemonCard">{{name}}</h5>
            <p class="idPokemonCard">{{id}}</p>
            <img v-on:click="handleClick" id="leave" src="./assets/img/croix.png">
        </header>
        <div class="contentCard">
            <img class="imgPokeCard" :src="this.data.sprites.front_default"/>
            <section class="pokeCaracs">
                <div class="height caracSection">
                    <h6>Height</h6>
                    <p class="caracs">{{height}}</p>
                </div>
                <div class="category caracSection">
                    <h6>Category</h6>
                    <p class="caracs">Seed</p>
                </div>
                <div class="weight caracSection">
                    <h6>Weight</h6>
                    <p class="caracs">{{weight}}</p>
                </div>
                <div class="gender caracSection">
                    <h6>Gender</h6>
                    <p class="caracs">♂♀</p>
                </div>
                
            </section>
            <section class="pokeType">
                <h5>Type</h5>
                <ul>
                    <li v-for="type in this.data.types" class="item" :class="type.type.name">{{type.type.name}}</li>
                </ul>
            </section>
            <section class="pokeWeaknesses">
                <h5>Weaknesses</h5>
                <ul>
                    <li class="item fire">Fire</li>
                    <li class="item ice">Ice</li>
                    <li class="item psychic">Psychic</li>
                </ul>
            </section>
        </div>
    </div>
    `,

    methods: {
        handleClick: function(){
            this.$emit("showPokedex")
        }
    },

    computed: {
        name: function() {
            let nameUpp = this.data.name.toUpperCase()
            return nameUpp
        },

        id: function() {
            return "#" + this.data.id 
        },
        
        weight: function() {
            return this.data.weight + " lbs"
        },

        height: function() {
            return this.data.height + " cm"
        }

    }

})
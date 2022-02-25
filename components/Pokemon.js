app.component("pokemon", {
    props:{
        id:{
            type : String,
            required : true
        },
        name:{
            type : String,
            required : true
        },
        url:{
            type : String,
            required : true
        },
        pokemon:{
            type : Object,
            required : true
        }
    },
    template: 
    /*html*/
    `
    <li v-on:click="handleSelect">
        <img class="imgPoke" :src="this.url"/>
        <p class="idPokemon">{{ idPokemonDisplay }}</p>
        <h5 class="nomPokemon">{{this.name}}</h5>
    </li>   
    `,
    data() {
        return {
        }
      },
    methods: {
        handleSelect: function() {
            this.$emit("selected",this.pokemon)
            console.log("selected" + JSON.stringify(this.pokemon))
        }
    },

    computed: {
        idPokemonDisplay(){
            return "# " + this.id
        },
    }

})
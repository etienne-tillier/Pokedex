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
        }
    },
    template: 
    /*html*/
    `
    <li>
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

    },

    computed: {
        idPokemonDisplay(){
            return "# " + this.id
        },
    }

})
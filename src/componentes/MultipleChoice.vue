<template>

  <section class="src-componentes-formulario">
      <div class="jumbotron">

          <table class="table table-dark">
          <thead>
            <tr>
              <th>Pregunta</th>
              <th>Respuesta</th>
            </tr>
          </thead>
          <tr v-for="(pregunta, index) in preguntas" :key="index">
            <td> {{ pregunta.numero }} </td>
            <td>
              <span v-for="(item, index1) in pregunta.respuestas" :key="index1">
              <span v-if="index1>0">{{ ', ' }}</span>
              {{ item[0]}}</span>
            </td>
          </tr>
        </table>

      </div>


  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas:  [
              { 
                "numero": "1", 
                "respuestas":[ 'c' ]
              },
              { 
                "numero": "2", 
                "respuestas":[ 'c']
              },
              { 
                "numero": "3", 
                "respuestas":[ 'b','d']
              }
        ]
      }
    },
    methods: {
    },
    computed: {

    }
}


</script>

<style scoped>

.jumbotron {
  background-color: black;
  color: white;
}

hr {
  background-color: #eee;
}

    .reprobado{
     color: red;
    }
    .aprobado{
    color: yellow;
    }
    .promocionado{
    color: green;
    }

</style>

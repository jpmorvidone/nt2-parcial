<template>

  <section class="src-componentes-formulario">
      <div class="jumbotron">

        <h2>Notas</h2>
        <hr>
        <br>
        <vue-form :state="formState" @submit.prevent="enviar()">
          <validate tag="div">
            <label for="nombre">Nombre</label>
            <input type="text"
               id="nombre" 
               name="nombre" 
               class="form-control" 
               autocomplete="off"
               v-model.trim="formData.nombre"
               required
               :minlength="nombreLengthMin"
               :maxlength="nombreLengthMax">
            <field-messages name="nombre" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                <div v-if="formData.nombre.length < nombreLengthMin" slot="minlength" class="alert alert-danger mt-1">Campo requiere al menos {{ nombreLengthMin }} caracteres</div>
                <div v-if="formData.nombre.length == nombreLengthMax" class="alert alert-danger mt-1">Campo requiere como maximo {{ nombreLengthMax }} caracteres</div>       
             </field-messages>
          </validate>
          <validate tag="div">
            <label for="apellido">Apellido</label>
            <input type="text"
               id="apellido" 
               name="apellido" 
               class="form-control" 
               autocomplete="off"
               v-model.trim="formData.apellido"
               required
               :minlength="apellidoLengthMin"
               :maxlength="apellidoLengthMax">
            <field-messages name="apellido" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                <div v-if="formData.apellido.length < apellidoLengthMin" slot="minlength" class="alert alert-danger mt-1">Campo requiere al menos {{ apellidoLengthMin }} caracteres</div>
                <div v-if="formData.apellido.length == apellidoLengthMax" class="alert alert-danger mt-1">Campo requiere como maximo {{ apellidoLengthMax }} caracteres</div>       
             </field-messages>
          </validate>
          <validate tag="div">
            <label for="nota">Nota</label>
            <input type="number"
             id="nota"
             name="nota" 
             class="form-control" 
             autocomplete="off" 
             v-model.number="formData.nota"
             :min="notaMin"
             :max="notaMax">
              <field-messages name="nota" show="$dirty">
                <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
                <div slot="min" class="alert alert-danger mt-1">La nota minima debe ser mayor a {{ notaMin }} </div>
                <div slot="max" class="alert alert-danger mt-1">La nota maxima debe ser menor a {{ notaMax }} </div>       
              </field-messages>
          </validate>
          <button class="btn btn-success my-3" :disabled="formState.$invalid" type="submit">Agregar</button>
        </vue-form>

      </div>

       <table class="table table-dark" v-show="lista.length">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tr v-for="(persona, index) in lista" :key="index">
            <td> {{ persona.nombre }} </td>
            <td> {{ persona.apellido }} </td>
            <td v-bind:class="{ reprobado:persona.nota <= 3, aprobado: persona.nota >= 4 && persona.nota <= 6, 
            promocionado: persona.nota >= 7 && persona.nota <= 10} "> 
              
               {{ persona.nota }} </td>
          </tr>
           <tr><td colspan="3" v-bind:class="{ reprobado:promedio <= 3, aprobado: promedio >= 4 && promedio <= 6, 
            promocionado: promedio >= 7 && promedio <= 10} "> PROMEDIO TOTAL: {{ promedio }}</td></tr>
        </table>
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
        formData: this.getInitialData(),
        formState: {},
        nombreLengthMin: 3,
        nombreLengthMax: 15,
        apellidoLengthMin: 3,
        apellidoLengthMax: 15,
        notaMin: 0,
        notaMax: 10,
        lista: []
      }
    },
    methods: {
      enviar() {
        this.lista.push(this.formData)
        this.formState._reset()
        this.formData = this.getInitialData()
      },
      getInitialData() {
        return {
          nombre: '',
          apellido: '',
          nota: ''
        }
      }

    },
    computed: {
      promedio: function () {
      let sum = 0
       this.lista.forEach(element => {
         sum += element.nota
       });
      return sum / this.lista.length
    }
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

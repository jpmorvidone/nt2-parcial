<template>

  <section class="src-componentes-navbar">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="formulario">
              <a class="nav-link" href="#">Notas</a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="multiplechoice">
              <a class="nav-link" href="#">Multiple Choice</a>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-componentes-navbar {

  }
</style>

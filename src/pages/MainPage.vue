<!-- * Autor: Saúl García Medina -->
<!-- * Esta página se encarga de mostrar un mensaje de bienvenida al usuario. -->
<!-- * En caso de que el usuario no haya iniciado sesión, lo redirige a la página de login -->

<template>
    <div class="container">
      <header class="jumbotron">
        <h3>
          <strong>Bienvenido {{currentUser.username}}</strong>
        </h3>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainPage',
    computed: {
      currentUser() {
        return this.$store.state.auth.user;
      }
    },
    mounted() {
      if (!this.currentUser) {
        this.$router.push('/login');
      }
    }
  };
  </script>
<template>
  <h1>Página para buscar documentos</h1>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    beforeCreate() {
        // Verificamos que ya haya iniciado sesión, de no ser así,
        // redirigimos al login
        if(this.$store.state.auth.user == null) {
            this.$router.push('/login');
        }
    }
}
</script>

<style>

</style>
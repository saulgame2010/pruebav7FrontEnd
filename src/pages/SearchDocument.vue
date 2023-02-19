<!-- * Autor: Saúl García Medina -->
<!-- * Esta página es en donde el usuario puede consultar documentos. -->
<!-- * Aquí se incluye el componente InputSearch para el input de búsqueda. -->
<!-- * También se incluye el componente de ShowSearchingResults para mostrar los resultados de la búsqueda -->

<template>
  <div>
    <h1>Página para buscar documentos</h1>
  </div>
  <InputSearch class="input"/>
  <ShowSearchingResults />
</template>

<script>
import InputSearch from "@/components/InputSearch.vue";
import ShowSearchingResults from "./ShowSearchingResults.vue";
export default {
  components: {
    InputSearch,
    ShowSearchingResults,
  },
  data() {
    return {};
  },
  beforeCreate() {
    // Verificamos que ya haya iniciado sesión, de no ser así,
    // redirigimos al login
    if (this.$store.state.auth.user == null) {
      this.$router.push("/login");
    }
  },
};
</script>

<style scoped>
div{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  padding: 40px 80px;
  text-align: center;
}

.input {
  border: none;
  border-bottom: 1px solid green;
  margin: 0px auto;
  width: 50%;
  display: block;
}
</style>
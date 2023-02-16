<template>
  <h1>Página para buscar documentos</h1>
  <InputSearch />
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

<style>
</style>
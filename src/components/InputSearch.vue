<!-- * Autor: Saúl García Medina -->
<!-- * Este bloque de código corresponde al componente conformado por un input -->
<!-- * el cual se encarga de enviar la cadena de tecto ingresada por cada vez que se presiona -->
<!-- * una tecla al backend para así, obtener los documentos cuyas propiedades -->
<!-- * correspondan con la cadena introducida -->

<template>
  <input type="text" placeholder="Busca un documento por su nombre de Item" @keyup="searchDocuments" v-model="params">
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    data() {
        return {
            params: null
        }
    },
    methods: {
        searchDocuments() {
            this.getSearchedDocuments(this.params)
        },
        ...mapActions('jsonDocument', ['getSearchedDocuments'])
    },
    computed: {
        ...mapState('jsonDocument', ['docsSearched'])
    }
}
</script>

<style scoped>
input:focus {
    outline: none;
}
</style>
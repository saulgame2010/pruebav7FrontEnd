<template>
  <input type="text" placeholder="Busca un documento por su nombre de Item" @keyup="searchDocuments" v-model="params">
  <button @click="viewDocuments">Ver documentos obtenidos</button>
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
        viewDocuments() {
            console.log(this.docsSearched)
        },
        ...mapActions('jsonDocument', ['getSearchedDocuments'])
    },
    computed: {
        ...mapState('jsonDocument', ['docsSearched'])
    }
}
</script>

<style>

</style>
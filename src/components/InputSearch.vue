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
<template>
  <table>
    <tr>
        <th>Propiedad</th>
        <th>Valor</th>
    </tr>
    <tr v-for="(value, key) in doc" :key="key">
        <td>{{ key }}</td>
        <td>{{ value }}</td>
        <td>
            <button v-if="key != 'item'" @click="deleteProp(key)">Eliminar</button>
        </td>
    </tr>
  </table>
  <button @click="printJson">Botón de auxilio</button>
  <button @click="uploadDocument">Subir documento</button>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
    data() {
        return {
            hasData: null
        }
    },
    computed: {
        ...mapState('jsonDocument', ['doc'])
    },
    props: {
    },
    methods: {
        printJson() {
            console.log(this.doc)
        },
        deleteProp(key) {
            this.$store.commit('jsonDocument/deleteProp', key)
            this.hasData = Object.keys(this.doc).length > 2 ? false : true
        },
        uploadDocument() {
            this.pushDocument(this.doc)
        },
        ...mapActions('jsonDocument', ['pushDocument'])
    },
};
</script>

<style>
</style>
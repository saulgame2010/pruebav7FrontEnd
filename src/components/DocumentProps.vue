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
</template>

<script>
import { mapState } from 'vuex';
export default {
    data() {
        return {
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
        }
    },
};
</script>

<style>
</style>
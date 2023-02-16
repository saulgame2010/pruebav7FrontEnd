<template>
  <table>
    <tr>
        <th>Propiedad</th>
        <th>Valor</th>
    </tr>
    <tr v-for="(value, key) in jsonDoc" :key="key">
        <td>{{ key }}</td>
        <td>{{ value }}</td>
    </tr>
  </table>
  <button @click="prueba">VEAMOS QUE PASA</button>
</template>

<script>
export default {
    data() {
        return {
            jsonDoc: this.doc,
        }
    },
    props: {
        doc: {
            type: Object,
            required: true
        }
    },
    methods: {
        prueba() {
            console.log(this.jsonDoc)
        }
    }
}
</script>

<style>

</style>
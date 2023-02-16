<template>
  <label for="itemInput">Item</label>
  <input type="text" name="itemInput" id="itemInput" value="Item" disabled>
  <label for="itemValue">Valor del item</label>
  <input type="text" name="itemValue" id="itemValue" v-model="item">
  <label for="propInput">Propiedad</label>
  <input type="text" name="propInput" id="propInput" v-model="propKey">
  <label for="propValue">Valor</label>
  <input type="text" name="propValue" id="propValue" v-model="propValue">
  <button @click="setValues">Agregar propiedad</button>
  <DocumentProps />
</template>

<script>
import DocumentProps from '@/components/DocumentProps.vue'
import { mapState } from 'vuex';

export default {
    components: {
        DocumentProps
    },
    data() {
        return {
            item: null,
            propKey: null,
            propValue: null,
            properties: {},
            documentJson: {}
        }
    },
    computed: {
        ...mapState('jsonDocument', ['doc'])
    },
    methods: {
        setValues() {
            let jsonParameters = {
                item: this.item,
                propKey: this.propKey,
                propValue: this.propValue
            }
            this.$store.commit('jsonDocument/addProperty', jsonParameters)
            this.propKey = ""
            this.propValue = ""
        },
    }
}
</script>

<style>

</style>
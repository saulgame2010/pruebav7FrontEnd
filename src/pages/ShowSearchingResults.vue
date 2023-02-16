<template>
  <div>
    <div>
        <div>Resultados</div>
        <div>
            <button :disabled="!docsSearched">Exportar a Excel</button>
        </div>
    </div>
    <div>
        <!-- TODO: Agregar el componente que despliega las tablas con los resultados -->
        <ResultsTable v-for="(item, index) in docsSearched" :key="index" :doc="item" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ResultsTable from '@/components/ResultsTable.vue'
export default {
    components: {
        ResultsTable
    },
    computed: {
        ...mapState('jsonDocument', ['docsSearched'])
    }
}
</script>

<style>

</style>
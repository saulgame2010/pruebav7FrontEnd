<template>
  <div>
    <div>
      <div>Resultados</div>
      <div>
        <button :disabled="!docsSearched" @click="exportToExcel">
          Exportar a Excel
        </button>
      </div>
    </div>
    <div>
      <ResultsTable
        v-for="(item, index) in docsSearched"
        :key="index"
        :doc="item"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import ResultsTable from "@/components/ResultsTable.vue";
import axios from "axios";
import authHeader from '@/services/auth-header';
export default {
  components: {
    ResultsTable,
  },
  computed: {
    ...mapState("jsonDocument", ["docsSearched"]),
  },
  methods: {
    async exportToExcel() {
        console.log(authHeader())
      try {
        const response = await axios.post(
          "http://localhost:8080/api/document/items/export",
          {
            docsSearched: this.docsSearched,
          },
          {
            headers: authHeader()
          },
          {
            responseType: "blob",
          }
        );
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "exportedData.xlsx");
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error(error);
      }
    },
    ...mapActions("jsonDocument", ["getExcelDoc"]),
  },
};
</script>

<style>
</style>
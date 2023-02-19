<!-- * Autor: Saúl García Medina -->
<!-- * Esta página es para que el usuario pueda visualixar los resultados. -->
<!-- * Aquí se incluye la opción para exportar a Excel -->

<template>
  <div id="container">
    <div id="header">
      <div id="results">Resultados</div>
      <div id="button-export">
        <div>
          <button :disabled="!docsSearched" @click="exportToExcel">
            Exportar a Excel
          </button>
        </div>
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
import authHeader from "@/services/auth-header";
export default {
  components: {
    ResultsTable,
  },
  computed: {
    ...mapState("jsonDocument", ["docsSearched"]),
  },
  methods: {
    async exportToExcel() {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/document/export",
          this.docsSearched,
          {
            headers: authHeader(),
            responseType: "blob",
          }
        );
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "data.xlsx");
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.log(error);
      }
    },
    ...mapActions("jsonDocument", ["getExcelDoc"]),
  },
};
</script>

<style scoped>
#header {
  background: #424242;
  padding: 20px 30px;
}
#results {
  color: white;
  width: 50%;
  float: left;
  text-align: left;
  font-weight: bolder;
  text-transform: uppercase;
  font-size: 20px;
}

#button-export {
  width: 50%;
  float: left;
}

#button-export div {
  float: right;
}

/* Estilos para el botón de exportar a excel */
button {
  padding: 17px 40px;
  border-radius: 50px;
  border: 0;
  background-color: white;
  box-shadow: rgb(0 0 0 / 5%) 0 0 8px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-size: 15px;
  transition: all 0.5s ease;
}

button:hover {
  letter-spacing: 3px;
  background-color: hsl(110, 80%, 48%);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(63, 220, 24) 0px 7px 29px 0px;
}

button:active {
  letter-spacing: 3px;
  background-color: hsl(123, 80%, 48%);
  color: hsl(0, 0%, 100%);
  box-shadow: rgb(31, 220, 24) 0px 0px 0px 0px;
  transform: translateY(10px);
  transition: 100ms;
}
</style>
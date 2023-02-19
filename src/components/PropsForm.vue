<!-- * Autor: Saúl García Medina -->
<!-- * Este bloque de código corresponde al componente que se conforma -->
<!-- * por un conjunto de 3 inputs que reciben el nombre del item del documento -->
<!-- * así como un input para agregar el nombre de una nueva propiedad y el tercer -->
<!-- * input se encarga de recibir el valor de la propiedad. -->
<!-- * Por último, cuenta con un botón para agregar la propiedad al documento JSON -->
<!-- * que se enviará al backend para se guardado. -->

<template>
  <div>
    <h1>Alta de documentos</h1>
  </div>
  <table id="props">
    <tr>
      <th>Propiedad</th>
      <th>Valor</th>
    </tr>
    <tr>
      <td>
        <label for="itemInput">Item</label>
      </td>
      <td>
        <input
          type="text"
          name="itemInput"
          id="itemInput"
          value="Item"
          disabled
        />
      </td>
    </tr>
    <tr>
      <td>
        <label for="itemValue">Valor del item</label>
      </td>
      <td>
        <input type="text" name="itemValue" id="itemValue" v-model="item" />
      </td>
    </tr>
    <tr>
      <td>
        <label for="propInput">Propiedad</label>
      </td>
      <td>
        <input type="text" name="propInput" id="propInput" v-model="propKey" />
      </td>
    </tr>
    <tr>
      <td>
        <label for="propValue">Valor</label>
      </td>
      <td>
        <input
          type="text"
          name="propValue"
          id="propValue"
          v-model="propValue"
        />
      </td>
    </tr>
    <tr id="tr-button">
        <td></td>
      <td>
        <button class="button2" @click="setValues">Agregar propiedad</button>
      </td>
    </tr>
  </table>
  <DocumentProps />
</template>

<script>
import DocumentProps from "@/components/DocumentProps.vue";
import { mapState } from "vuex";

export default {
  components: {
    DocumentProps,
  },
  data() {
    return {
      item: null,
      propKey: null,
      propValue: null,
    };
  },
  computed: {
    ...mapState("jsonDocument", ["doc"]),
  },
  methods: {
    setValues() {
      if((this.item === null || this.item === "") || 
      (this.propKey === null || this.propKey === "") ||
      (this.propValue === null || this.propValue === "")) {
        alert('Debes agregar un valor en los campos')
        return;
      }
      let jsonParameters = {
        item: this.item,
        propKey: this.propKey,
        propValue: this.propValue,
      };
      this.$store.commit("jsonDocument/addProperty", jsonParameters);
      this.propKey = "";
      this.propValue = "";
    },
  },
};
</script>

<style scoped>
div{
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px auto;
  padding: 40px 80px;
  text-align: center;
}
#props {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  margin: 0px auto;
  width: 60%;
}

#props td, #props th {
  border: none;
  padding: 8px;
  width: 50%;
}

#props tr:last-child {
  background: #fff;
  border: none;
}

#props th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04AA6D;
  color: white;
}

/* Estilos del botón */
.button2 {
  display: inline-block;
  transition: all 0.2s ease-in;
  position: relative;
  overflow: hidden;
  z-index: 1;
  color: #090909;
  padding: 0.7em 1.7em;
  
  border-radius: 0.5em;
  background: #e8e8e8;
  border: 1px solid #e8e8e8;
  box-shadow: 3px 3px 6px #c5c5c5,
             -3px -3px 6px #ffffff;
}

.button2:active {
  color: #666;
  box-shadow: inset 4px 4px 12px #c5c5c5,
             inset -4px -4px 12px #ffffff;
}

.button2:before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translateX(-50%) scaleY(1) scaleX(1.25);
  top: 100%;
  width: 140%;
  height: 180%;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:after {
  content: "";
  position: absolute;
  left: 55%;
  transform: translateX(-50%) scaleY(1) scaleX(1.45);
  top: 180%;
  width: 160%;
  height: 190%;
  background-color: #009087;
  border-radius: 50%;
  display: block;
  transition: all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1);
  z-index: -1;
}

.button2:hover {
  color: #ffffff;
  border: 1px solid #009087;
}

.button2:hover:before {
  top: -35%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

.button2:hover:after {
  top: -45%;
  background-color: #009087;
  transform: translateX(-50%) scaleY(1.3) scaleX(0.8);
}

</style>
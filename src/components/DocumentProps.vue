<!-- * Autor: Saúl García Medina -->
<!-- * Este código es el componente que se encarga de crear la tabla -->
<!-- * en donde se enlistan las propiedades que se van agregando -->
<!-- * al documento JSON que se va a enviar al backend de la aplicación -->

<template>
  <div>
    <h3>Documento a subir</h3>
  </div>
  <table id="props">
    <tr>
      <th>Propiedad</th>
      <th>Valor</th>
    </tr>
    <tr v-for="(value, key) in doc" :key="key">
      <td>{{ key }}</td>
      <td>{{ value }}</td>
      <td>
        <button id="delete" v-if="key != 'item'" @click="deleteProp(key)">Eliminar</button>
      </td>
    </tr>
    <tr>
        <td></td>
        <td>
            <button id="upload" @click="uploadDocument">Subir documento <span></span></button>
        </td>
    </tr>
  </table>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      hasData: null,
    };
  },
  computed: {
    ...mapState("jsonDocument", ["doc"]),
  },
  props: {},
  methods: {
    deleteProp(key) {
      this.$store.commit("jsonDocument/deleteProp", key);
      this.hasData = Object.keys(this.doc).length > 2 ? false : true;
    },
    uploadDocument() {
        if(Object.keys(this.doc).length >= 2){
            this.pushDocument(this.doc);
        } else {
            alert('El documento debe tener al menos una propiedad además del item')
        }
    },
    ...mapActions("jsonDocument", ["pushDocument"]),
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

/* Estilos para el boton de eliminar */

#delete {
  padding: 5px 15px;
  border: 0;
  border-radius: 100px;
  background-color: red;
  color: #ffffff;
  font-weight: Bold;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}

#delete:hover {
  background-color: #fff;
  box-shadow: 0 0 20px red;
  color: red;
}

#delete:active {
  background-color: red;
  transition: all 0.25s;
  -webkit-transition: all 0.25s;
  box-shadow: none;
}


/* Estilos para el botón de subir documento */
#upload {
 border: none;
 display: block;
 position: relative;
 padding: 0.7em 2.4em;
 /* font-size: 18px; */
 background: transparent;
 cursor: pointer;
 user-select: none;
 overflow: hidden;
 color: #24c64f;
 z-index: 1;
 font-family: inherit;
 font-weight: 500;
}

#upload span {
 position: absolute;
 left: 0;
 top: 0;
 width: 100%;
 height: 100%;
 background: transparent;
 z-index: -1;
 border: 4px solid #24c64f;
}

#upload span::before {
 content: "";
 display: block;
 position: absolute;
 width: 8%;
 height: 500%;
 background: var(--lightgray);
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(-60deg);
 transition: all 0.3s;
}

#upload:hover span::before {
 transform: translate(-50%, -50%) rotate(-90deg);
 width: 100%;
 background: #24c64f;
}

#upload:hover {
 color: white;
}

#upload:active span::before {
 background: #24c64f;
}
</style>
<template>
  <table id="props">
    <tr>
      <th>Propiedad</th>
      <th>Valor</th>
    </tr>
    <tr v-for="(value, key) in jsonDoc" :key="key">
      <td>{{ key }}</td>
      <td>{{ value }}</td>
    </tr>
  </table>
  <hr>
</template>

<script>
export default {
  data() {
    return {
      jsonDoc: this.doc,
    };
  },
  props: {
    doc: {
      type: Object,
      required: true,
    },
  },
  methods: {},
};
</script>

<style scoped>
#props {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  margin: 0px auto;
  margin-bottom: 10px;
  width: 100%;
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
  text-align: center;
  background-color: #04AA6D;
  color: white;
}
</style>
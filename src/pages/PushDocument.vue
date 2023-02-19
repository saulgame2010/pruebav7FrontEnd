<!-- * Autor: Saúl García Medina -->
<!-- * Esta página es en donde el usuario puede subir documentos. -->
<!-- * Aquí se incluye el componente PropForms para agregar la información del documento -->

<template>
  <PropsForm />
</template>

<script>
import PropsForm from '@/components/PropsForm.vue';
import { mapActions, mapState } from 'vuex';
export default {
  components: { PropsForm },
    data() {
        return {
        }
    },
    beforeCreate() {
        if(this.$store.state.auth.user == null) {
            this.$router.push('/login');
        }
    },
    methods: {
        uploadDocument() {
            this.pushDocument(this.doc)
        },
        ...mapActions('jsonDocument', ['pushDocument'])
    },
    computed: {
        ...mapState('jsonDocument', ['doc'])
    }
}
</script>

<style scoped>

</style>
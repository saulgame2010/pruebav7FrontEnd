<template>
  <h1>Página para subir documentos</h1>
  <PropsForm />
  <button @click="uploadDocument">Subir documento</button>
</template>

<script>
import PropsForm from '@/components/PropsForm.vue';
import { mapActions, mapState } from 'vuex'
export default {
  components: { PropsForm },
    data() {
        return {
            item: "",
            properties: {},
            documentJson: {}
        }
    },
    beforeCreate() {
        if(this.$store.state.auth.user == null) {
            this.$router.push('/login');
        }
    },
    methods: {
        uploadDocument() {
            // console.log(this.doc)
            this.pushDocument(this.doc)
        },
        ...mapActions('jsonDocument', ['pushDocument'])
    },
    computed: {
        ...mapState('jsonDocument', ['doc'])
    }
}
</script>

<style>

</style>
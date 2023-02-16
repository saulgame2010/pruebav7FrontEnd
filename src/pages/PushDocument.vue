<template>
  <h1>Página para subir documentos</h1>
  <PropsForm />
</template>

<script>
import PropsForm from '@/components/PropsForm.vue';
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
    }
}
</script>

<style>

</style>
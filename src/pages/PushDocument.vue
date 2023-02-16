<template>
  <h1>Alta de documentos</h1>
  <PropsForm />
</template>

<script>
import PropsForm from '@/components/PropsForm.vue';
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
    },
    computed: {
    }
}
</script>

<style>

</style>
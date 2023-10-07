<template>
 
</template>

<script>
 
export default {
    head:{
        title:'Dashboard'
    },
    middleware: 'auth',
    methods: {
        async logout() {
            await this.$auth.logout()
        }
    },
}
</script>

<style>

  </style>

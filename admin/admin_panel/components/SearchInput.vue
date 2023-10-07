<template>
    <div>
      <input v-model="searchQuery" @input="search" placeholder="Search Categories" />
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        searchQuery: '',
      };
    },
    methods: {
      search() {
        this.$emit('search', this.searchQuery);
      },
    },
  };
  </script>
  
<template>
    <ul>
      <li v-for="category in categories" :key="category.id">
        {{ category.name }} <span @click="editCategory(category.id)"><i class="bx bx-edit"></i></span>
        <TreeView :categories="category.children" v-if="category.children && category.children.length > 0" />
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: {
      categories: Array
    },
    methods: {
        editCategory(id) {
            this.$router.push({
                path: '/ecommarce/category-edit', // Specify the path to the target page
                query: {
                    id
                } // Pass the parameter as a query parameter
            });
        },
        async fetchData() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/category/getCategoryList`);
                this.categories = response.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },

    },
  }







  
  </script>
  
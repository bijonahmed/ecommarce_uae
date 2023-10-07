<template>
    <div>
        <multiselect v-model="selectedValues" :options="options" :multiple="true" track-by="value" label="label" placeholder="Select options" :custom-label="customLabel" :show-labels="false" :close-on-select="false" @click="getValue"></multiselect>
    </div>
    </template>
    
    <script>
    import Multiselect from 'vue-multiselect';
    export default {
        components: {
            Multiselect
        },
        data() {
            return {
                selectedValues: [], // Will hold the selected options
                options: [],
                category: [],
            };
        },
        async mounted() {
            this.fetchDataParent();
        },
        methods: {
            getValue() {
                alert("sss");
            },
            async fetchDataParent() {
                try {
                    const response = await this.$axios.get(`/category/categoryForProducts`);
                    console.log(response.data);
                    this.options = response.data;
                } catch (error) {
                    console.error(error);
                }
            },
            customLabel(option) {
                return `${option.label}`;
            }
        }
    };
    </script>
    
    <style scoped>
    /* Add any custom CSS styling if needed */
    </style>
    
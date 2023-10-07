<template>
<div class="multiselect-checkbox">
    <div @click="toggleDropdown" class="selected-values">
        <span v-if="selectedValues.length === 0">Select options</span>
        <span v-else>{{ selectedValues.join(', ') }}</span>
        <i class="fa fa-chevron-down"></i>
    </div>
    <div v-if="isOpen" class="dropdown form-select-sm">
        <label v-for="(option, index) in options" :key="index">
            <input type="checkbox" v-model="selectedValues" :value="option.value" @click="handleCheckboxClick(option.value)" />
            {{ option.label }}
        </label>
    </div>
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
            isOpen: false,
            selectedValues: [], // Will hold the selected options
            options: [],
            category: [],
        };
    },
    async mounted() {
        this.fetchDataParent();
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
        },
        handleCheckboxClick(value) {
            // Display an alert with the value of the clicked checkbox
            alert(`Checkbox clicked with value: ${value}`);
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
.multiselect-checkbox {
    position: relative;
}

.selected-values {
    border: 1px solid #ccc;
    padding: 10px;
    cursor: pointer;
}

.dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    border: 1px solid #ccc;
    background-color: #fff;
    max-height: 150px;
    overflow-y: auto;
    padding: 5px;
    width: 100%;
}

label {
    display: block;
}
</style>

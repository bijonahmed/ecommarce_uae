<template>
<div>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center">
                <div class="ps-3">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb mb-0 p-0">
                            <li class="breadcrumb-item">
                                <router-link to="/"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Category List</li>
                        </ol>
                    </nav>
                </div>
                <div class="ms-auto">
                    <div class="btn-group mb-3">

                        <Nuxt-link to="/ecommarce/category-add"><button type="button" class="btn btn-primary" style="margin-right: 10px;"><i class="bx bx-plus"></i>New</button></Nuxt-link>
                        <button type="button" class="btn btn-primary" @click="fetchData"><i class="lni lni-search"></i></button>
                    </div>
                </div>
            </div>
            <!--end breadcrumb-->
            <!-- <span class="loader"></span> -->
            <div class="card">
                <div class="card-body">

                    <div style="display: none;" class="customerSpinner">
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-8">
                            <ul class="nav nav-tabs nav-primary" role="tablist">
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link active" data-bs-toggle="tab" href="#primaryhome" role="tab" aria-selected="true">
                                        <div class="d-flex align-items-center">
                                            <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                            </div>
                                            <div class="tab-title">Active List</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation">
                                    <a class="nav-link" data-bs-toggle="tab" href="#primaryprofile" role="tab" aria-selected="false">
                                        <div class="d-flex align-items-center">
                                            <div class="tab-icon"><i class='bx bx-link font-18 me-1'></i>
                                            </div>
                                            <div class="tab-title">Inactive List</div>
                                        </div>
                                    </a>
                                </li>

                            </ul>
                            <div class="tab-content py-3">
                                <div class="tab-pane fade show active" id="primaryhome" role="tabpanel">
                                    <ul>
                                        <li v-for="category in categories" :key="category.id">
                                            <span class="badge bg-dark">{{ category.name }} <span @click="editCategory(category.id)"><i class="bx bx-edit"></i></span></span>
                                            <TreeView :categories="category.children" v-if="category.children && category.children.length > 0" />
                                        </li>
                                    </ul>
                                </div>
                                <div class="tab-pane fade" id="primaryprofile" role="tabpanel">
                                    <ul>
                                        <li v-for="category in Inacategories" :key="category.id">
                                            <span class="badge bg-danger">{{ category.name }} <span @click="editCategory(category.id)"><i class="bx bx-edit"></i></span></span>

                                        </li>
                                    </ul>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->

    <!-- END Modal -->
    <!--end page wrapper -->
</div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Category List',
    },
    data() {
        return {
            insertdata: {
                id: '',
                name: '',
                status: '',
            },
            notifmsg: '',
            errors: {},
            data: [],
            categories: [],
            Inacategories: [],

        };
    },
    async mounted() {
        await this.fetchData();
        await this.fetchInacCatData();
    },
    computed: {

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

        async fetchInacCatData() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/category/getInacCategoryList`);
                this.Inacategories = response.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },

    },
};
</script>

<style scoped>
/* Add CSS styles for the hover effect */
ul li:hover {
    background-color: #f0f0f0;
    /* Change the background color on hover */
    cursor: pointer;
    /* Change the cursor to a pointer on hover */
}

ul li:hover .bx-edit {
    color: #007bff;
    /* Change the color of the edit icon on hover */
}
</style>

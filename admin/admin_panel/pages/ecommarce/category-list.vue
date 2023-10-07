<template>
<div>
    <!--start page wrapper -->
    <div class="page-wrapper">
        <div class="page-content">
            <!--breadcrumb-->
            <div class="page-breadcrumb d-none d-sm-flex align-items-center mb-3">
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
                        <button type="button" class="btn btn-primary"  @click="fetchData"><i class="lni lni-search"></i></button> 
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
                            <ul>
                                <span v-for="category in categories">
                                    <li :key="category.id">
                                        <span class="badge bg-primary"> {{ category.name }}</span>
                                        <span @click="editCategory(category.id)"><i class="bx bx-edit"></i></span>
                                        <ul v-if="category.children && category.children.length > 0">
                                            <span v-for="childCategory in category.children">
                                                <li :key="childCategory.id">
                                                    {{ childCategory.name }}
                                                    <span @click="editCategory(childCategory.id)"><i class="bx bx-edit"></i></span>
                                                    <ul v-if="childCategory.children && childCategory.children.length > 0">
                                                        <span v-for="inSubCategory in childCategory.children">
                                                            <li :key="inSubCategory.id">{{ inSubCategory.name }}  <span @click="editCategory(inSubCategory.id)"><i class="bx bx-edit"></i></span></li>
                                                        </span>
                                                    </ul>
                                                </li>
                                            </span>
                                        </ul>
                                    </li>
                                </span>
                            </ul>

                            <!-- <div v-for="category in categories" :key="category.id">
                                <div class="d-flex position-relative">
                                    <img class="user-img me-1" src="http://127.0.0.1:8000/backend/files/2LRy0wweiDi1mISlUSyv.jpg">
                                    <div>
                                        <span class="mt-0"><b>{{ category.name }}</b> |</span>
                                        Status: <span v-if="category.status == 1" class="badge bg-success">Active</span>
                                        <span v-if="category.status == 0" class="badge bg-danger">Inactive</span>
                                        <span @click="editCategory(category.id)"><i class="bx bx-edit"></i></span>

                                    </div>
                                </div>
                                <hr>
                                <ul v-if="category.children.length > 0">
                                    <li v-for="child in category.children" :key="child.id"> {{ child.name }}&nbsp;|&nbsp;
                                        <span v-if="child.status == 1" class="badge bg-success">Active</span>
                                        <span v-if="child.status == 0" class="badge bg-danger">Inactive</span>
                                        <span @click="editCategory(category.id)"><i class="bx bx-edit"></i></span>

                                    </li>
                                </ul>
                            </div> -->
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

        };
    },
    async mounted() {
        await this.fetchData();
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

    },
};
</script>
 
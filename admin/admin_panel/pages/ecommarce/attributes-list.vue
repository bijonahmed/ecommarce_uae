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
                            <li class="breadcrumb-item active" aria-current="page">Attributes</li>
                        </ol>
                    </nav>
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
                        <div class="col-md-12">
                            <ul class="nav nav-pills nav-pills-success" role="tablist">
                                <li class="nav-item " role="presentation">
                                    <a class="nav-link active" data-bs-toggle="pill" href="#warning-pills-profile" role="tab" aria-selected="false">
                                        <div class="d-flex align-items-center">
                                            <div class="tab-icon"><i class='fadeIn animated bx bx-add-to-queue font-18 me-1'></i>
                                            </div>
                                            <div class="tab-title">Add New Attributes</div>
                                        </div>
                                    </a>
                                </li>
                                <li class="nav-item" role="presentation" @click="fetchAttributeValList">
                                    <a class="nav-link" data-bs-toggle="pill" href="#warning-pills-contact" role="tab" aria-selected="false">
                                        <div class="d-flex align-items-center">
                                            <div class="tab-icon"><i class='fadeIn animated bx bx-add-to-queue font-18 me-1'></i>
                                            </div>
                                            <div class="tab-title">Attributes Value Lists</div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane fade show active" id="warning-pills-profile" role="tabpanel">
                                    <hr />
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <form @submit.prevent="saveAttributeData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                                                        <div class="row mb-3">
                                                            <label for="input-meta-description-1" class="col-sm-3 col-form-label">Name</label>
                                                            <div class="col-sm-9">
                                                                <input class="form-control form-control-sm" type="text" placeholder="Name" v-model="insertAttributedata.name">
                                                                <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <label for="input-meta-description-1" class="col-sm-3 col-form-label">Value</label>
                                                            <div class="col-sm-9">
                                                                <textarea class="form-control form-control-sm" v-model="insertAttributedata.arr_value" placeholder="Must use comma , to separate different options."></textarea>
                                                                <!-- <input class="form-control form-control-sm" type="text" placeholder="Name" v-model="insertAttributedata.name"> -->
                                                                <span class="text-danger" v-if="errors.arr_value">{{ errors.arr_value[0] }}</span>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-3">
                                                            <label for="input-meta-description-1" class="col-sm-3 col-form-label">Status</label>
                                                            <div class="col-sm-9">
                                                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="insertAttributedata.status">
                                                                    <option selected value="1">Active</option>
                                                                    <option value="0">Inactive</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-check-circle mr-1"></i> Submit</button>
                                                    </form>
                                                </div>
                                                <div class="col-md-7">
                                                    <div class="scrollable-div-attribute">
                                                        <div class="table-responsive">
                                                            <table class="table table-hover table-sm">
                                                                <thead>
                                                                    <tr>
                                                                        <th>Name</th>
                                                                        <th>Status</th>
                                                                        <th class="text-center">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr v-for="item in attributeslist" :key="item.id">
                                                                        <td>{{ item.name }}</td>
                                                                        <td>
                                                                            <span v-if="item.status == 1" class="badge bg-primary text-white">Active</span>
                                                                            <span v-else class="badge bg-danger text-white">Inactive</span>
                                                                        </td>
                                                                        <td>
                                                                            <center @click="attribute(item.id)">
                                                                                <button type="button"><i class="bx bx-edit"></i>EDIT</button>
                                                                            </center>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="warning-pills-contact" role="tabpanel">
                                    <hr />
                                    <div class="row">
                                        <!-- Start -->
                                        <div class="row">
                                            <div class="col-md-7">
                                                <div class="input-group mb-3">
                                                    <input type="text" class="form-control name" placeholder="Name" v-model="searchQuery.name" @input="handleSearch">
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="input-group mb-3">
                                                    <select class="form-select form-select-solid status" v-model="searchQuery.status" @change="handleSearch">
                                                        <option value="">All Status</option>
                                                        <option value="1">Active</option>
                                                        <option value="0">Inactive</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="input-group mb-3">
                                                    <button class="btn btn-primary w-100" type="button" @click="fetchAttributeValList">Search</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="table-responsive">
                                            <table class="table table-hover table-sm">
                                                <thead>
                                                    <tr>
                                                        <th>Attr. Name</th>
                                                        <th>Value</th>
                                                        <th class="text-center">Status</th>
                                                        <th class="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="item in paginatedData" :key="item.id">
                                                        <td>{{ item.att_name }}</td>
                                                        <td>{{ item.name }}</td>
                                                        <td class="text-center">
                                                            <span v-if="(item.status == 1)"> Active </span>
                                                            <span v-else> Inactive </span>
                                                        </td>
                                                        <td>
                                                            <center>
                                                                <!-- <nuxt-link :to="{name: 'customer-edit-id', params: {id: item.id}}" variant="warning" size="sm"><i class="bx bx-edit"></i>EDIT
                                            </nuxt-link> -->
                                                                <span @click="editAttrival(item.id)"><i class="bx bx-edit"></i>Edit</span>
                                                            </center>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="pagenation">
                                            <div style="text-align: right;">
                                                <button @click="previousPage" :disabled="currentPage === 1" class="btn btn-primary btn-sm">
                                                    <center><i class="lni lni-angle-double-left"></i></center>
                                                </button>
                                                <span>Page {{ currentPage }} of {{ totalPages }}</span>
                                                <button @click="nextPage" :disabled="currentPage === totalPages" class="btn btn-primary btn-sm">
                                                    <center><i class="lni lni-angle-double-right"></i></center>
                                                </button>
                                            </div>
                                        </div>
                                        <!-- END -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <form @submit.prevent="saveAttributeData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closemodal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <label for="input-meta-description-1" class="col-sm-3 col-form-label">Name</label>
                            <div class="col-sm-9">
                                <input class="form-control form-control-sm" type="text" placeholder="Name" v-model="insertAttributedata.name">
                                <input type="hidden" v-model="insertAttributedata.id">
                                <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="input-meta-description-1" class="col-sm-3 col-form-label">Status</label>
                            <div class="col-sm-9">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="insertAttributedata.status">
                                    <option selected value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closemodal">Close</button>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </div>
            </form>

        </div>
    </div>

    <div class="modal fade" id="attrValModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <form @submit.prevent="saveAttributeVal()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Attribute Val Edit</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="closemodalVal">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="row mb-3">
                            <label for="input-meta-description-1" class="col-sm-3 col-form-label">Name</label>
                            <div class="col-sm-9">
                                <input class="form-control form-control-sm" type="text" placeholder="Name" v-model="insertAttributeVal.name">
                                <input type="hidden" v-model="insertAttributeVal.id">
                                <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="input-meta-description-1" class="col-sm-3 col-form-label">Status</label>
                            <div class="col-sm-9">
                                <select class="form-select form-select-sm" aria-label=".form-select-sm example" v-model="insertAttributeVal.status">
                                    <option selected value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="closemodalVal">Close</button>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
    <!-- END Modal -->
    <!--end page wrapper -->
</div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Attributes List',
    },
    data() {
        return {
            insertAttributedata: {
                id: '',
                arr_value: '',
                name: '',
                status: 1,
            },
            data: [],
            searchQuery: {
                name: '',
                status: 1
            },
            searchQueryPhone: '',
            currentPage: 1,
            perPage: 10, // Number of items per page
            insertAttributeVal: {
                id: '',
                name: '',
                status: 1,
            },
            notifmsg: '',
            errors: {},
            data: [],
            attributes: [],
            parentAttributesVal: [],
            attributeslist: [],
            attrValList: [],
        };
    },
    async mounted() {
        await this.fetchAttributeList();
        await this.fetchAttributeValList();
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredData.length / this.perPage);
        },
        filteredData() {
            let result = this.parentAttributesVal;
            if (this.searchQuery.name) {
                result = result.filter(item =>
                    item.name.toLowerCase().includes(this.searchQuery.name.toLowerCase())
                );
            }
            if (this.searchQuery.status) {
                result = result.filter(item =>
                    item.status == this.searchQuery.status
                );
            }
            return result;
        },
        paginatedData() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            return _.slice(this.filteredData, startIndex, startIndex + this.perPage);
        },
    },
    methods: {
        closemodalVal() {
            $('#attrValModal').modal('hide');
        },
        
        closemodal() {
            $('#myModal').modal('hide');
        },
        handleSearch() {
            this.currentPage = 1;
        },
        previousPage() {
            this.currentPage--;
        },
        nextPage() {
            this.currentPage++;
        },
        addnewproduct() {
            this.$router.push('/ecommarce/product-add');
        },
        editAttrival(id) {
            $('#attrValModal').modal('show');
            $(".customerSpinner").show();
            this.$axios.get(`/category/attributeValRow/${id}`).then(response => {
                $(".customerSpinner").hide();
                this.insertAttributeVal.id = response.data.data.id;
                this.insertAttributeVal.name = response.data.data.name;
                this.insertAttributeVal.status = response.data.data.status;
            });
        },
        attribute(id) {
            $('#myModal').modal('show');
            this.$axios.get(`/category/attributeRow/${id}`).then(response => {
                //$(".customerSpinner").hide();
                this.insertAttributedata.id = response.data.data.id;
                this.insertAttributedata.name = response.data.data.name;
                this.insertAttributedata.status = response.data.data.status;
            });
        },
        saveAttributeVal() {
            const formData = new FormData();
            formData.append('id', this.insertAttributeVal.id);
           // formData.append('attributes_id', this.insertAttributeVal.attributes_id);
            formData.append('name', this.insertAttributeVal.name);
            formData.append('status', this.insertAttributeVal.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/category/saveAttributeVal',
                formData, {
                    headers
                }).then((res) => {
                $('#attrValModal').modal('hide');
                $('#formrest')[0].reset();
                this.success_noti();
                this.callingParentAtts();
                this.insertAttributeVal.name = "";
                // this.$router.push('/ecommarce/category-list');
            }).catch(error => {
                if (error.response.status === 422) {
                   // this.errors = error.response.data.errors;
                }
            });
        },
        saveAttributeData() {
            const formData = new FormData();
            formData.append('id', this.insertAttributedata.id);
            formData.append('arr_value', this.insertAttributedata.arr_value);
            formData.append('name', this.insertAttributedata.name);
            formData.append('status', this.insertAttributedata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/category/saveAttribute',
                formData, {
                    headers
                }).then((res) => {
                $('#myModal').modal('hide');
                $('#formrest')[0].reset();
                this.success_noti();
                this.fetchAttributeList();
                this.insertAttributedata.name = "";
                this.insertAttributedata.arr_value = "";
                // this.$router.push('/ecommarce/category-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        
        async fetchAttributeValList() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/category/attributes-val-list`);
                this.parentAttributesVal = response.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },
        async fetchAttributeList() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/category/attributes-list`);
                this.attributeslist = response.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Your data has been successfully inserted.'
            });
        },
    },
};
</script>

<style>
.pagenation {
    margin-top: 10px;
}

.pagination {
    /*! display: flex; */
    padding-left: 0;
    list-style: none
}

/* Apply a custom style to the list */
.custom-list {
    list-style: none;
    padding: 0;
    font-family: Arial, sans-serif;
}

.custom-list li {
    margin: 5px 0;
    padding: 1px 3px;
    background-color: #f2f2f2;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #333;
    transition: background-color 0.3s;
}

.custom-list li:hover {
    background-color: #ddd;
    cursor: pointer;
}

.scrollable-div-attribute {
    max-height: 400px;
    overflow-y: scroll;
    padding: 10px;
    background-color: #f4f4f4;
}
</style>

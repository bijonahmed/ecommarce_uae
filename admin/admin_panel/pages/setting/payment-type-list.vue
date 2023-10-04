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
                            <li class="breadcrumb-item active" aria-current="page">Payment Type List</li>
                        </ol>
                    </nav>
                </div>
                <div class="ms-auto">
                    <div class="btn-group">
                        <Nuxt-link to="/setting/payment-type-add"><button type="button" class="btn btn-primary"><i class="bx bx-plus"></i>New</button></Nuxt-link>
                    </div>
                </div>
            </div>
            <!--end breadcrumb-->
            <!-- <span class="loader"></span> -->
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control name" placeholder="Payment Type" v-model="searchQuery.name" @input="handleSearch">
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
                                <button class="btn btn-primary w-100" type="button" @click="fetchData">Search</button>
                            </div>
                        </div>

                    </div>
                    <div style="display: none;" class="customerSpinner">
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                                <span class="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive">
                        <table class="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th>Payment Type</th>
                                    <th>Min. Working Hour</th>
                                    <th>Rate</th>
                                    <th class="text-center">Status</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in paginatedData" :key="item.id">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.working_hour }}</td>
                                    <td>{{ item.rate }}</td>
                                    <td class="text-center">
                                        <span v-if="(item.status == 1)"> Active </span>
                                        <span v-else> Inactive </span>
                                    </td>
                                    <td>
                                        <center>
                                            <span @click="edit(item.id)"><i class="bx bx-edit"></i>Edit</span>
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
                </div>
            </div>
        </div>
    </div>
    <!-- Modal -->
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hideModal">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="border p-4 rounded">
                        <center>
                            <div v-for="(errorArray, idx) in notifmsg" :key="idx">
                                <div v-for="(allErrors, idx) in errorArray" :key="idx">
                                    <span class="text-danger">{{ allErrors}} </span>
                                </div>
                            </div>
                        </center>
                        <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">
                            <div class="row mb-3">
                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Payment Type</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control name" v-model="insertdata.name" id="name" placeholder="Payment Type">
                                    <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Min. Working Hour</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control working_hour" v-model="insertdata.working_hour" id="working_hour" placeholder="Min. Working Hour">
                                    <span class="text-danger" v-if="errors.working_hour">{{ errors.working_hour[0] }}</span>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="inputEnterYourName" class="col-sm-3 col-form-label">Rate</label>
                                <div class="col-sm-9">
                                    <input type="text" class="form-control rate" v-model="insertdata.rate" id="rate" placeholder="Rate">
                                    <span class="text-danger" v-if="errors.rate">{{ errors.rate[0] }}</span>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Status</label>
                                <div class="col-sm-9">
                                    <select name="status" v-model="insertdata.status" class="form-select">
                                        <option value="1" selected>Active</option>
                                        <option value="0">Inactive</option>
                                    </select>
                                </div>
                            </div>
                            <div class="row">
                                <label class="col-sm-3 col-form-label"></label>
                                <div class="col-sm-9">
                                    <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-check-circle mr-1"></i> Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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
        title: 'Payment Type List',
    },
    data() {
        return {
            insertdata: {
                    id: '',
                    name: '',
                    working_hour: '',
                    rate: '',
                    status: 1,
                },
            notifmsg: '',
            errors: {},
            data: [],
            searchQuery: {
                name: '',
                status: 1
            },
            searchQueryPhone: '',
            currentPage: 1,
            perPage: 10, // Number of items per page
        };
    },
    async mounted() {
        await this.fetchData();
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredData.length / this.perPage);
        },
        filteredData() {
            let result = this.data;
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
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
                formData.append('name', this.insertdata.name);
                formData.append('working_hour', this.insertdata.working_hour);
                formData.append('rate', this.insertdata.rate);
                formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/setting/insertPaymentType',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.hideModal();
                this.fetchData();
            }).catch(error => {
                if (error.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        async fetchData() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/setting/getPaymentType`);
                this.data = response.data.data;
                $(".customerSpinner").hide();
            } catch (error) {
                console.error(error);
            }
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
        edit(id) {
            $('#myModal').modal('show')
            this.$axios.get(`/setting/checkrowPaymenttype/${id}`).then(response => {
                console.log(response.data.data.name)
                this.insertdata.id = response.data.data.id;
                this.insertdata.name = response.data.data.name;
                this.insertdata.working_hour = response.data.data.working_hour;
                this.insertdata.rate = response.data.data.rate;
                this.insertdata.status = response.data.data.status;
            });
        },
        hideModal() {
            $('#myModal').modal('hide')
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

<style scoped>
.pagenation {
    margin-top: 10px;
}

.pagination {
    /*! display: flex; */
    padding-left: 0;
    list-style: none
}
</style>

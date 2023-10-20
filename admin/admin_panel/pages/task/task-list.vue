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
                                <router-link to="/hrm/dashboard"><a href="javascript:;"><i class="bx bx-home-alt"></i></a></router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Task List</li>
                        </ol>
                    </nav>
                </div>
                <div class="ms-auto">
                    <div class="btn-group">
                        <Nuxt-link to="/task/add-task"><button type="button" class="btn btn-primary"><i class="bx bx-plus"></i>New</button></Nuxt-link>
                    </div>
                </div>
            </div>
            <!--end breadcrumb-->
            <!-- <span class="loader"></span> -->
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control name" placeholder="Title" v-model="searchQuery.name" @input="handleSearch">
                            </div>
                        </div>
                        <div class="col-md-2">
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
                                <select name="department_id" class="form-select" v-model="searchQuery.project_id" @change="handleSearch">
                                    <option value="">Select</option>
                                    <!-- <option v-for='data in pro' :value='data.id'>{{data.name}}</option> -->
                                </select>
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="input-group mb-3">
                                <select name="department_id" v-model="searchQuery.emp_id" class="form-select">
                                    <option value="">Select</option>
                                    <!-- <option v-for='data in emp' :value='data.id'>{{data.name}}</option> -->
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
                                    <th>Title</th>
                                    <th>Employee</th>
                                    <th>Project</th>
                                    <th>Assign Start Date</th>
                                    <th>Assign End Date</th>
                                    <th>Created By</th>
                                    <th class="text-center">Status</th>
                                    <th class="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in paginatedData" :key="item.id">
                                    <td>{{ item.title }}</td>
                                    <td>{{ item.employeeName }}</td>
                                    <td>{{ item.projectName }}</td>
                                    <td>{{ item.start_date }}</td>
                                    <td>{{ item.end_date }}</td>
                                    <td>{{ item.createdBy }}</td>
                                    <td class="text-center">
                                        <span v-if="(item.status == 1)"> Pending </span>
                                        <span v-else-if="(item.status == 2)"> Processing </span>
                                        <span v-else-if="(item.status == 3)"> Done </span>
                                        <span v-else> Nothing </span>
                                    </td>
                                    <td>
                                        <center>
                                            <nuxt-link :to="{name: 'task-edit-id', params: {id: item.id}}" variant="warning" size="sm"><i class="bx bx-edit"></i>EDIT
                                            </nuxt-link>
                                            <!-- <span @click="editCustomer(item.id)"><i class="bx bx-edit"></i>Edit</span> -->
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

    <!-- END Modal -->
    <!--end page wrapper -->
</div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Task List',
    },
    data() {
        return {

            notifmsg: '',
            errors: {},
            data: [],
            searchQuery: {
                title: '',
                project_id: '',
                emp_id: '',
                status: 1
            },
            emp: [],
            pro: [],
            searchQueryPhone: '',
            currentPage: 1,
            perPage: 10, // Number of items per page
        };
    },
    async mounted() {
        this.employee();
        this.projects();
        await this.fetchData();
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredData.length / this.perPage);
        },
        filteredData() {
            let result = this.data;
            if (this.searchQuery.title) {
                result = result.filter(item =>
                    item.title.toLowerCase().includes(this.searchQuery.title.toLowerCase())
                );
            }

            if (this.searchQuery.project_id) {
                result = result.filter(item =>
                    item.project_id == this.searchQuery.project_id
                );
            }

            if (this.searchQuery.emp_id) {
                result = result.filter(item =>
                    item.emp_id == this.searchQuery.emp_id
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
        async fetchData() {
            $(".customerSpinner").show();
            try {
                // let name = $(".name").val();
                // let status = $(".status").val();
                //const response = await this.$axios.get('/customer/allCustomers?name=' + name + '&status=' + status);  
                const response = await this.$axios.get(`/project/geTaskList`);
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
        employee() {
            this.$axios.get(`/user/getEmployeeList`).then(response => {
                this.emp = response.data.data;
            });
        },
        projects() {
            this.$axios.get(`/project/allProject`).then(response => {
                this.pro = response.data.data;
            });
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

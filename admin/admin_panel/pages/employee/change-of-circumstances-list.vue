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
                            <li class="breadcrumb-item active" aria-current="page">Change Of Circumstances List</li>
                        </ol>
                    </nav>
                </div>


        <div class="ms-auto">
            <div class="btn-group">
                <Nuxt-link to="/employee/change-of-circumstances-add"><button type="button" class="btn btn-primary"><i class="bx bx-plus"></i>New</button></Nuxt-link>
            </div>
        </div>
        
            </div>
            <!--end breadcrumb-->
            <!-- <span class="loader"></span> -->
            <div class="card">
                <div class="card-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAoklEQVR4nOXVPQrCQBCG4adObWGlpYhlam9i7SU8SQ6hR/AEgl2u4DVkYEEJ2Zg1RUA/+GBgZ1/2b2Z5qUL9pSs9ioEWTaHbNLcXGAmlan4HeMMWpxR3Pf8Kj1hgn+Ku5wf+4aU0WOGQKbliYJ2Kfp1pCMXAnLpd6TIV+N6VrnhgORUYeRvcsfuUOAYYKwtYPKtRWxnyOW1zEBYq+QJ6zyz0BAaVSoEIYUgwAAAAAElFTkSuQmCC">Change Of Circumstances List</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 50 50">
                                    <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
                                </svg>
                                Contract Agreement </button>
                        </li>
                    </ul>
                    <br>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
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
                                            <th>Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Department</th>
                                            <th>Designation</th>
                                            <th>Salary</th>
                                            <th class="text-center">Status</th>
                                            <th class="text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in paginatedData" :key="item.id">
                                            <td>{{ item.name }}</td>
                                            <td>{{ item.phone }}</td>
                                            <td>{{ item.email }}</td>
                                            <td>{{ item.dpt_name }}</td>
                                            <td>{{ item.des_name }}</td>
                                            <td>{{ item.salary }}</td>
                                            <td class="text-center">
                                                <span v-if="(item.status == 1)"> Active </span>
                                                <span v-else> Inactive </span>
                                            </td>
                                            <td>
                                                <center>
                                                    <nuxt-link :to="{name: 'employee-cir-edit-id', params: {id: item.id}}" variant="warning" size="sm"><i class="bx bx-edit"></i>EDIT
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
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="row">
                                <div class="col-md-4">
                                    <label for="inputPassword4">Employment Type</label>
                                    <select name="employee_type" v-model="insertdata.employee_type" class="form-select" @change="getEmployee">
                                        <option value="">Select</option>
                                        <option value="FULL TIME">FULL TIME</option>
                                        <option value="CONTRACTUAL">CONTRACTUAL</option>
                                        <option value="SUSPEND">SUSPEND</option>
                                        <option value="PART TIME">PART TIME</option>
                                        <option value="LEFT">LEFT</option>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <label for="inputPassword4">Employment</label>
                                    <select name="employe_id" v-model="insertdata.employe_id" class="form-select employe_id">
                                        <option value="">All</option>
                                        <option v-for='data in emp_data' :value='data.employe_id'>{{ data.name }} [{{ data.employee_code }}]
                                        </option>
                                    </select>
                                </div>
                                <div class="col-md-3">
                                    <br>
                                    <button type="button" class="btn btn-primary w-100" @click="filterContractAgg">Filter</button>
                                    <br>
                                </div>
                                <br>

                                <div class="table-responsive">
                                    <table class="table table-hover table-sm">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Phone</th>
                                                <th>Email</th>
                                                <th>Department</th>
                                                <th>Designation</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="item in report_data" :key="item.id">
                                                <td>{{ item.name }}</td>
                                                <td>{{ item.phone }}</td>
                                                <td>{{ item.email }}</td>
                                                <td>{{ item.dpt_name }}</td>
                                                <td>{{ item.des_name }}</td>
                                                <td>
                                                    <center>
                                                        <nuxt-link :to="{name: 'employee-cir-edit-id', params: {id: item.id}}" variant="warning" size="sm"><i class="bx bx-edit"></i>EDIT
                                                        </nuxt-link>
                                                        <!-- <span @click="editCustomer(item.id)"><i class="bx bx-edit"></i>Edit</span> -->
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
    </div>
    <!-- END Modal -->
    <!--end page wrapper -->
</div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Circumstances List',
    },
    data() {
        return {
            insertdata: {
                employee_type: '',
                employe_id: '',
                name: '',
                status: '',
            },
            notifmsg: '',
            errors: {},
            data: [],
            emp_data: [],
            report_data: [],
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
        filterContractAgg() {
            this.$axios.get('/user/chkContractAggData', {
                params: {
                    employee_type: this.insertdata.employee_type,
                    employe_id: this.insertdata.employe_id
                }
            }).then(response => {
                this.report_data = response.data.data;
            });

        },
        getEmployee() {
            var employee_type = this.insertdata.employee_type;
            this.$axios.get(`/user/getEmpType/${employee_type}`).then(response => {
                this.emp_data = response.data.data;
            });
        },
        async fetchData() {
            $(".customerSpinner").show();
            try {
                let name = $(".name").val();
                let status = $(".status").val();
                //const response = await this.$axios.get('/customer/allCustomers?name=' + name + '&status=' + status);  
                const response = await this.$axios.get(`/user/getCircumstancesList`);
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

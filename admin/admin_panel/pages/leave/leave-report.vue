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
                            <li class="breadcrumb-item active" aria-current="page">Leave Report</li>
                        </ol>
                    </nav>
                </div>
                <div class="ms-auto d-none">
                    <div class="btn-group">
                        <Nuxt-link to="/employee/employee-add"><button type="button" class="btn btn-primary"><i class="bx bx-plus"></i>New</button></Nuxt-link>
                    </div>
                </div>
            </div>
            <!--end breadcrumb-->
            <!-- <span class="loader"></span> -->
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            Employee Type
                            <div class="input-group mb-3">
                                <select name="employee_type" v-model="insertdata.employee_type" class="form-select employee_type" @change="getEmployee">
                                    <option value="">Select Employee Type</option>
                                    <option v-for='data in empType' :value='data.name'>{{ data.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2">
                            Employee
                            <div class="input-group mb-3">
                                <select name="employe_id" v-model="insertdata.employe_id" class="form-select employe_id">
                                    <option value="">Select Employee</option>
                                    <option v-for='data in emp_data' :value='data.employe_id'>{{ data.name }} [{{ data.employee_code }}]
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-2">
                            From Date
                            <div class="input-group mb-3">
                                <input type="date" class="form-control frm_date" placeholder="From Date" v-model="insertdata.frm_date">
                            </div>
                        </div>
                        <div class="col-md-2">
                            TO Date
                            <div class="input-group mb-3">
                                <input type="date" class="form-control to_date" placeholder="To Date" v-model="insertdata.to_date">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <br>
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
                                    <th>Employee Code</th>
                                    <th>Employee Name</th>
                                    <th>Leave Type</th>
                                    <th>Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in paginatedData" :key="item.id">
                                    <td>{{ item.employee_code }}</td>
                                    <td>{{ item.emp_name }}</td>
                                    <td>{{ item.leave_type }}</td>
                                    <td>{{ item.maximum_no_annual - item.leave_in_hand}}</td>
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
    <!-- END Modal -->
    <!--end page wrapper -->
</div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Leave Report',
    },
    data() {
        return {
            insertdata: {
                employee_type: '',
                employe_id: '',
                frm_date: '',
                to_date: ''

            },
            notifmsg: '',
            errors: {},
            data: [],
            empType: [],
            emp_data: [],
            leaveType: [],
            searchQuery: {
                emp_name: '',
                status: 1
            },
            searchQueryPhone: '',
            currentPage: 1,
            perPage: 10, // Number of items per page
        };
    },
    async mounted() {
        await this.fetchData();
        this.getEmployeeType();
        this.getLeaveType();
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredData.length / this.perPage);
        },
        filteredData() {
            let result = this.data;
            if (this.searchQuery.emp_name) {
                result = result.filter(item =>
                    item.emp_name.toLowerCase().includes(this.searchQuery.emp_name.toLowerCase())
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

        getEmployee() {
            var employee_type = this.insertdata.employee_type;
            this.$axios.get(`/user/getEmpType/${employee_type}`).then(response => {
                this.emp_data = response.data.data;
            });
        },
        getEmployeeType() {
            this.$axios.get(`/user/allemployeeType`).then(response => {
                this.empType = response.data.data;
            });
        },
        getLeaveType() {
            this.$axios.get(`/leave/getLeaveTypeList`).then(response => {
                this.leaveType = response.data.data;
            });
        },
        async fetchData() {
            $(".customerSpinner").show();
            try {
                let employe_id = this.insertdata.employe_id
                let employee_type = this.insertdata.employee_type
                let frm_date = this.insertdata.frm_date
                let to_date = this.insertdata.to_date
                console.log(`EmployeID: ${employe_id} ===Type ${employee_type} === Frm${frm_date} === To${to_date}`)
                const params = {
                    employe_id: employe_id,
                    employee_type: employee_type,
                    frm_date: frm_date,
                    to_date: to_date
                };
                const response = await this.$axios.get(`/leave/getLeaveReport`, {
                    params: params
                });
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

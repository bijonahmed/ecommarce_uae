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
                            <li class="breadcrumb-item active" aria-current="page">Report</li>
                        </ol>
                    </nav>
                </div>

            </div>
            <!--end breadcrumb-->
            <!-- <span class="loader"></span> -->
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="input-group mb-3">
                                <select name="status" v-model="insertdata.status" class="form-select status">
                                    <option value="">Select Status</option>
                                    <option v-for='data in jobstatus' :value='data.id'>{{ data.name }}</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="input-group mb-3">
                                <input type="date" class="form-control frmdate" placeholder="From">
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="input-group mb-3">
                                <input type="date" class="form-control todate" placeholder="To">
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
                                    <th>Job Title</th>
                                    <th>Candi. Name</th>
                                    <th>Candi. Phone</th>
                                    <th>Candi. Address</th>
                                    <th>Candi. Email</th>
                                    <th>Exp. Salary</th>
                                    <th>Status</th>  
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in paginatedData" :key="item.id">
                                    <td>{{ item.job_title }}</td>
                                    <td>{{ item.candidate_name }}</td>
                                    <td>{{ item.candidate_num }}</td>
                                    <td>{{ item.candidate_address }}</td>
                                    <td>{{ item.candidate_email }}</td>
                                    <td>{{ item.expeted_salary }}</td>
                                    <td>{{ item.job_status }}</td>
                                   
                                </tr>
                            </tbody>
                        </table>
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
        title: 'Employee List',
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
            jobstatus: [],
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
        this.job_status();
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
        job_status() {
            this.$axios.get(`/recruitment/getjobStatus`).then(response => {
                this.jobstatus = response.data.data;
            });
        },
        async fetchData() {
            $(".customerSpinner").show();
            try {
                let frmdate = $(".frmdate").val();
                let status = $(".status").val();
                let todate = $(".todate").val();
                const response = await this.$axios.get('/recruitment/getreportRecuitment?frmdate=' + frmdate + '&todate=' + todate + '&status=' + status);
                console.log(response.data.data);
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

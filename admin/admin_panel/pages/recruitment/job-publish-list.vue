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
                            <li class="breadcrumb-item active" aria-current="page">Job Publish List</li>
                        </ol>
                    </nav>
                </div>
                <div class="ms-auto">
                    <div class="btn-group">
                        <Nuxt-link to="/recruitment/new-job-publish"><button type="button" class="btn btn-primary"><i class="bx bx-plus"></i>New</button></Nuxt-link>
                    </div>
                </div>
            </div>
            <!--end breadcrumb-->
            <!-- <span class="loader"></span> -->
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-5">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control job_title" placeholder="Job Title" v-model="searchQuery.job_title" @input="handleSearch">
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control soc_code" placeholder="SOC Code" v-model="searchQuery.soc_code" @input="handleSearch">
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
                                    <th>SOC Code</th>
                                    <th>Job Title</th>
                                    <th>Department</th>
                                    <th>Status</th>
                                    <th class="text-left">Action</th>
                                    <th class="text-left">Apply URL</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in paginatedData" :key="item.id">
                                    <td>{{ item.soc_code }}</td>
                                    <td>{{ item.job_title }}</td>
                                    <td>{{ item.department }}</td>
                                    <td class="text-left">
                                        <span v-if="(item.status == 1)"> Publish </span>
                                        <span v-else> Draft </span>
                                    </td>
                                    <td>

                                        <center>
                                            <nuxt-link :to="{name: 'recruitment-edit-jpublish-id', params: {id: item.id}}" variant="warning" size="sm"><i class="bx bx-edit"></i>EDIT
                                            </nuxt-link>
                                        </center>
                                    </td>

                                    <td>
                                        <span v-if="(item.status == 1)"> 
                                                <center>
                                                    <nuxt-link :to="{name: 'recruitment-apply-job-id', params: {id: item.id}}" variant="warning" size="sm"><i class="bx bx-link"></i>Apply URL
                                                    </nuxt-link>
                                                </center>
                                         </span>

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
        title: 'Job Posting List',
    },
    data() {
        return {
            insertdata: {
                id: '',
                name: '',
                status: 1,
            },
            notifmsg: '',
            errors: {},
            data: [],
            searchQuery: {
                job_title: '',
                soc_code: '',
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
            if (this.searchQuery.job_title) {
                result = result.filter(item =>
                    item.job_title.toLowerCase().includes(this.searchQuery.job_title.toLowerCase())
                );
            }
            if (this.searchQuery.soc_code) {
                result = result.filter(item =>
                    item.soc_code == this.searchQuery.soc_code
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
                const response = await this.$axios.get(`/recruitment/getAllJobPublish`);
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
        hideModal() {
            $('#myModal').modal('hide')
        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Your data has been successfully update.'
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

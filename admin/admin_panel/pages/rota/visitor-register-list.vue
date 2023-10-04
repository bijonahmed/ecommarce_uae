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
                            <li class="breadcrumb-item active" aria-current="page">Visitor Register</li>
                        </ol>
                    </nav>
                </div>
                <div class="ms-auto">
                    <div class="btn-group">
                        <button type="button" class="btn btn-primary" @click="goTonewVisitorPage"><i class="bx bx-plus"></i>Copy Visitor Register Link</button>
                    </div>
                </div>
            </div>
            <!--end breadcrumb-->
            <!-- <span class="loader"></span> -->
            <div class="card">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control name" placeholder="Name" v-model="searchQuery.name" @input="handleSearch">
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
                                    <th>Designation </th>
                                    <th>Email ID</th>
                                    <th>Contact NO.</th>
                                    <th>Address</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                    <th>Reference</th>
                                   
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in paginatedData" :key="item.id">
                                    <td>{{ item.name }}</td>
                                    <td>{{ item.designation }}</td>
                                    <td>{{ item.email_id }}</td>
                                    <td>{{ item.contact_no }}</td>
                                    <td>{{ item.address }}</td>
                                    <td>{{ item.date }}</td>
                                    <td>{{ item.time }}</td>
                                    <td>{{ item.reference }}</td>
                                 
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
    <!--end page wrapper -->
</div>
</template>

<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Visitor Register List',
    },
    data() {
        return {
            data: [],
            job_title: '',
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

           
            return result;
        },
        paginatedData() {
            const startIndex = (this.currentPage - 1) * this.perPage;
            return _.slice(this.filteredData, startIndex, startIndex + this.perPage);
        },
    },
    methods: {

        goTonewVisitorPage() {
            let dname = window.location.hostname;
            let port = window.location.port;
            const tempInput = document.createElement('input');
            tempInput.value = `${dname}:${port}/rota/create-new-visitor-register`;
            document.body.appendChild(tempInput);
            // Select the input field and execute the copy command
            tempInput.select();
            document.execCommand('copy');

            // Remove the temporary input
            document.body.removeChild(tempInput);

            // Optionally, show a success message or perform other actions
            alert('URL copied to clipboard');
        },
        async fetchData() {
            $(".customerSpinner").show();
            try {
                const response = await this.$axios.get(`/rota/getAllVisitorRegister`);
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

        editCustomer(id) {
            this.$router.push({
                path: `/edit/${id}`
            });
        }
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

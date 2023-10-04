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
                            <li class="breadcrumb-item active" aria-current="page">Employee Archive Report</li>
                        </ol>
                    </nav>
                </div>

            </div>
            <!--end breadcrumb-->
            <!-- <span class="loader"></span> -->
            <div class="card">
                <div class="card-body">

                    <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">

                        <div class="row mb-3">
                            <label for="inputEnterYourName" class="col-sm-3 col-form-label">Employee Code</label>
                            <div class="col-sm-9">
                                <select name="department_id" v-model="insertdata.emp_id" class="form-select">
                                    <option value="">Select</option>
                                    <option v-for='data in emp' :value='data.id'>{{data.name}}</option>
                                </select>
                                <span class="text-danger" v-if="errors.emp_id">{{ errors.emp_id[0] }}</span>

                            </div>
                        </div>

                        <div class="row mb-3">
                            <label for="inputEnterYourName" class="col-sm-3 col-form-label">Employee Document</label>
                            <div class="col-sm-9">
                                <select name="proof" v-model="insertdata.proof" class="form-select">
                                    <option value="pr_add_proof">Proof Of Correspondence Address </option>
                                    <option value="pass_docu">Passport Document </option>
                                    <option value="visa_upload_doc">Visa Document </option>
                                    <option value="dbs_upload_doc">DBS Document </option>
                                </select>
                                <span class="text-danger" v-if="errors.emp_id">{{ errors.emp_id[0] }}</span>

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
    <!-- END Modal -->
    <!--end page wrapper -->
</div>
</template>

    
<script>
import _ from 'lodash';
export default {
    head: {
        title: 'Employee Archive Report',
    },
    data() {
        return {
            insertdata: {
                emp_id: '',
                proof: '',
            },
            notifmsg: '',
            errors: {},
            data: [],
            emp: [],

        };
    },
    async mounted() {
        this.employee();
    },

    methods: {
        saveData() {

        },
        employee() {
            this.$axios.get(`/user/getEmployeeList`).then(response => {
                this.emp = response.data.data;
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

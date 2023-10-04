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
                                <router-link to="/" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">
                                <router-link to="/employee/change-of-circumstances-list">Circumstances List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Edit Circumstances</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <!--end breadcrumb-->
            <!--end row-->
            <div class="row">
                <div class="col-xl-12 mx-auto">
                    <div class="card border-top border-0 border-4 border-info">
                        <div class="card-body">
                            <div class="border p-4 rounded">
                                <form @submit.prevent="saveData()" id="formrest" class="forms-sample" enctype="multipart/form-data">

                                    <input type="hidden" id="id" v-model="insertdata.id">
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Job Type</label>
                                        <div class="col-sm-9">
                                            <select name="job_type_code" v-model="insertdata.job_type_code" class="form-select">
                                                <option value="">Select</option>
                                                <option value="New" selected>New</option>
                                                <option value="Existing">Existing</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.job_type_code">{{ errors.job_type_code[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">SOC Code</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control department" v-model="insertdata.soc_code">
                                            <span class="text-danger" v-if="errors.soc_code">{{ errors.soc_code[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Department</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control department" v-model="insertdata.department">
                                            <span class="text-danger" v-if="errors.department">{{ errors.department[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Job Title</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control job_title" v-model="insertdata.job_title" id="name">
                                            <span class="text-danger" v-if="errors.job_title">{{ errors.job_title[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Job Descriptions</label>
                                        <div class="col-sm-9">
                                            <textarea type="text" class="form-control job_description" v-model="insertdata.job_description" id="job_description"></textarea>
                                            <span class="text-danger" v-if="errors.job_description">{{ errors.job_description[0] }}</span>
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
            <!--end row-->
        </div>
    </div>
    <!--end page wrapper -->
</div>
</template>

<style>
.bg-dark {
    background-color: #0d4b88 !important;
}
</style>

<script>
import $ from "jquery";
export default {
    head: {
        title: 'Job Edit',
    },
    data() {
        return {
            insertdata: {
                id: '',
                job_type_code: '',
                job_title: '',
                job_description: '',
                department: '',
                soc_code: '',
            },
            notifmsg: '',
            department: [],
            designation: [],
            allcountry: [],
            emplist: [],
            errors: {},
        }
    },
    created() {
        this.getrow();
    },
    methods: {
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('job_type_code', this.insertdata.job_type_code);
            formData.append('job_title', this.insertdata.job_title);
            formData.append('department', this.insertdata.department);
            formData.append('soc_code', this.insertdata.soc_code);
            formData.append('job_description', this.insertdata.job_description);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/recruitment/saveJoblist',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/recruitment/job-list');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },

        getrow() {
            let id = this.$route.params.id;
            this.$axios.get(`/recruitment/checkRow/${id}`).then(response => {
                this.insertdata.id = response.data.data.id;
                this.insertdata.job_type_code = response.data.data.job_type_code;
                this.insertdata.job_title = response.data.data.job_title;
                this.insertdata.department = response.data.data.department;
                this.insertdata.soc_code = response.data.data.soc_code;
                this.insertdata.job_description = response.data.data.job_description;
                //END
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
}
</script>

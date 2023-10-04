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
                                <router-link to="/recruitment/job-applied-list">Job Applied</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Job Applied Details</li>
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
                                <form @submit.prevent="saveData()" id="formrest" enctype="multipart/form-data">
                                    <div class="row">
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Candidate Name</label>
                                            <input type="text" class="form-control candidate_name" v-model="insertdata.candidate_name" id="candidate_name" disabled>
                                            <input type="hidden" class="form-control id" v-model="insertdata.id" id="id">
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Candidate Email</label>
                                            <input type="text" class="form-control candidate_email" v-model="insertdata.candidate_email" id="candidate_email" disabled>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Candidate Number </label>
                                            <input type="text" class="form-control candidate_num" v-model="insertdata.candidate_num" id="candidate_num" disabled>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Total Year of Experience</label>
                                            <input type="text" class="form-control total_year_exp" v-model="insertdata.total_year_exp" id="total_year_exp" disabled>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Skill Set</label>
                                            <input type="text" class="form-control skill_set" v-model="insertdata.skill_set" id="skill_set" disabled>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Expected Salary</label>
                                            <input type="text" class="form-control skill_set" v-model="insertdata.skill_set" id="skill_set" disabled>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Candidate Address</label>
                                            <textarea class="form-control name" v-model="insertdata.candidate_address" id="candidate_address" disabled></textarea>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Remarks</label>
                                            <textarea class="form-control remarks" v-model="insertdata.remarks" id="remarks"></textarea>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Download Resume</label>
                                            <div id="show_files"></div>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Status</label>
                                        <div class="col-sm-9">
                                            <select name="status" v-model="insertdata.status" class="form-select">
                                                <option value="">Select Status</option>
                                                <option v-for='data in jobstatus' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <hr>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
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
export default {
    head: {
        title: 'Job Applied Details',
    },
    data() {
        return {
            insertdata: {
                id: '',
                job_title: '',
                candidate_name: '',
                candidate_email: '',
                candidate_address: '',
                candidate_num: '',
                total_year_exp: '',
                skill_set: '',
                educa_qualifcation: '',
                expeted_salary: '',
                remarks: '',
                status: '',
            },
            notifmsg: '',
            jobstatus: [],
            errors: {},
        }
    },
    created() {
        this.getrow();
        this.job_status();
    },
    methods: {
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('status', this.insertdata.status);
            formData.append('remarks', this.insertdata.remarks);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/recruitment/updateAppliedJob',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/recruitment/job-applied-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        getrow() {
            let id = this.$route.params.id;
            this.$axios.get(`/recruitment/checkapplyjobrow/${id}`).then(response => {
                console.log(`files : ${response.data.files}`)
                this.insertdata.id = response.data.data.id;
                this.insertdata.job_title = response.data.data.job_title;
                this.insertdata.candidate_name = response.data.data.candidate_name;
                this.insertdata.candidate_email = response.data.data.candidate_email;
                this.insertdata.candidate_address = response.data.data.candidate_address;
                this.insertdata.candidate_num = response.data.data.candidate_num;
                this.insertdata.total_year_exp = response.data.data.total_year_exp;
                this.insertdata.skill_set = response.data.data.skill_set;
                this.insertdata.educa_qualifcation = response.data.data.educa_qualifcation;
                this.insertdata.expeted_salary = response.data.data.expeted_salary;
                this.insertdata.status = response.data.data.status;
                $('#show_files').append(`<a target='_blank' href='${response.data.files}'>Download Resume</a>`);
                //END
            });
        },

        job_status(){
            this.$axios.get(`/recruitment/getjobStatus`).then(response => {
                this.jobstatus = response.data.data;
            });
        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Successfully Update.'
            });
        },
    },
}
</script>

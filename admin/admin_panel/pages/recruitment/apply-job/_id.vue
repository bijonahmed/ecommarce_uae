<template>
<div>
    <div class="container mt-5">
        <div class="container mt-5">
            <h1>Job Details</h1>
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Job Title</h5>
                    <p class="card-text">{{ insertdata.job_title }}</p>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <h5 class="card-title">Department</h5>
                    <p class="card-text">{{ insertdata.department }}</p>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <h5 class="card-title">Job Description</h5>
                    <p class="card-text"><span style="white-space: pre;">{{ insertdata.job_description }}</span></p>
                    <span id="show_file_1"></span>
                    <span id="show_file_2"></span>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <h5 class="card-title">Application</h5>
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#applyJobModal">
                        Apply
                    </button>
                </div>
            </div>
        </div>
        <!-- Other job details cards here -->
    </div>
    <!-- Apply Job Modal -->
    <div class="modal fade" id="applyJobModal" tabindex="-1" aria-labelledby="applyJobModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="applyJobModalLabel">Apply for the Job</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                    <form @submit.prevent="saveData()" id="formrest" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-4 mb-1">
                                <label for="applicantName" class="form-label">Job Title</label>
                                <input type="text" class="form-control" id="applicantName" v-model="insertdata.job_title" readonly>

                            </div>
                            <div class="col-4 mb-1">
                                <label for="applicantEmail" class="form-label">Your Name</label>
                                <input type="text" class="form-control" id="candidate_name" name="candidate_name" v-model="insertdata.candidate_name">
                                <span class="text-danger" v-if="errors.candidate_name">{{errors.candidate_name[0] }}</span>
                            </div>
                            <div class="col-4 mb-1">
                                <label for="applicantEmail" class="form-label">Your Email</label>
                                <input type="email" class="form-control" id="candidate_email" name="candidate_email" v-model="insertdata.candidate_email">
                                <span class="text-danger" v-if="errors.candidate_email">{{errors.candidate_email[0] }}</span>
                            </div>

                            <div class="col-5 mb-1">
                                <label for="applicantName" class="form-label">Your Address</label>
                                <input type="text" class="form-control" id="candidate_address" name="candidate_address" v-model="insertdata.candidate_address">
                                <span class="text-danger" v-if="errors.candidate_address">{{errors.candidate_address[0] }}</span>
                            </div>
                            <div class="col-3 mb-1">
                                <label for="applicantName" class="form-label">Your Phone Number</label>
                                <input type="text" class="form-control" id="candidate_num" name="candidate_num" v-model="insertdata.candidate_num">
                                <span class="text-danger" v-if="errors.candidate_num">{{errors.candidate_num[0] }}</span>
                            </div>
                            <div class="col-4 mb-1">
                                <label for="applicantName" class="form-label">Total Year of Experience</label>
                                <input type="text" class="form-control" id="total_year_exp" name="total_year_exp" v-model="insertdata.total_year_exp">
                                <span class="text-danger" v-if="errors.total_year_exp">{{errors.total_year_exp[0] }}</span>
                            </div>
                            <div class="col-12 mb-1">
                                <label for="applicantName" class="form-label">Skill Set</label>
                                <input type="text" class="form-control" id="skill_set" v-model="insertdata.skill_set" name="skill_set" placeholder="Communication, Analytical Skills, Project Management">
                                <span class="text-danger" v-if="errors.skill_set">{{errors.skill_set[0] }}</span>

                            </div>
                            <div class="col-12 mb-1">
                                <label for="applicantName" class="form-label">Education Qualification</label>
                                <input type="text" class="form-control" id="educa_qualifcation" name="educa_qualifcation" v-model="insertdata.educa_qualifcation">
                                <span class="text-danger" v-if="errors.educa_qualifcation">{{errors.educa_qualifcation[0] }}</span>
                            </div>
                            <div class="col-6 mb-1">
                                <label for="applicantName" class="form-label">Expected Salary (GBP)</label>
                                <input type="text" class="form-control" id="expeted_salary" name="expeted_salary" v-model="insertdata.expeted_salary" @input="validateInput">
                                <span class="text-danger" v-if="errors.expeted_salary">{{errors.expeted_salary[0] }}</span>
                            </div>
                            <div class="col-6 mb-1">
                                <label for="applicantResume" class="form-label">Upload Resume</label>
                                <input type="file" class="form-control" id="files" name="files" accept=".pdf,.doc,.docx" ref="files" @change="onFileSelected">
                                <span class="text-danger" v-if="errors.files">{{errors.files[0] }}</span>
                            </div>
                        </div>
                        <br>
                        <hr>
                        <button type="submit" class="btn btn-primary">Submit Application</button>
                    </form>

                </div>
            </div>
        </div>
    </div>
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
    auth: 'guest',
    head: {
        title: 'Job Apply ',
    },
    data() {
        return {
            insertdata: {
                job_title: '',
                candidate_name: '',
                candidate_email: '',
                candidate_address: '',
                candidate_num: '',
                total_year_exp: '',
                skill_set: '',
                educa_qualifcation: '',
                expeted_salary: '',

            },
            notifmsg: '',
            files: '',
            errors: {},
        }
    },
    created() {
        this.getrow();
    },
    methods: {
        validateInput() {
            // Remove any non-numeric characters from the input
            this.insertdata.expeted_salary = this.insertdata.expeted_salary.replace(/[^0-9]/g, '');
        },
        onFileSelected() {
            this.files = this.$refs.files.files[0];
        },
       
        saveData() {
            const formData = new FormData();
            formData.append('files', this.files);
            formData.append('job_title', this.insertdata.job_title);
            formData.append('job_publish_id', this.$route.params.id);
            formData.append('candidate_name', this.insertdata.candidate_name);
            formData.append('candidate_email', this.insertdata.candidate_email);
            formData.append('candidate_address', this.insertdata.candidate_address);
            formData.append('candidate_num', this.insertdata.candidate_num);
            formData.append('total_year_exp', this.insertdata.total_year_exp);
            formData.append('skill_set', this.insertdata.skill_set);
            formData.append('educa_qualifcation', this.insertdata.educa_qualifcation);
            formData.append('expeted_salary', this.insertdata.expeted_salary);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/unauthenticate/applyJob',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                $(".btn-close").click();
                //this.$router.push('/recruitment/job-publish-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        getrow() {
            let id = this.$route.params.id;
            this.$axios.get(`/unauthenticate/checkPublishRow/${id}`).then(response => {
                console.log(`job_title : ${response.data.data.job_title}`)
                this.insertdata.id = response.data.data.id;
                this.insertdata.soc_code = response.data.data.soc_code;
                this.insertdata.job_title = response.data.data.job_title;
                this.insertdata.department = response.data.data.department;
                this.insertdata.job_description = response.data.data.job_description;
                this.insertdata.publish_website_url_1 = response.data.data.publish_website_url_1;
                this.insertdata.publish_website_url_2 = response.data.data.publish_website_url_2;
                this.insertdata.status = response.data.data.status;
                $('#show_file_1').append(`<a target='_blank' href='${response.data.file_1}'>Attachment 1</a>`);
                $('#show_file_2').append(`<a target='_blank' href='${response.data.file_2}'>Attachment 2</a>`);
                //END
            });
        },
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Thank you for applying to the job.'
            });
        },
    },
}
</script>

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
                                <router-link to="/recruitment/job-publish-list">Job Publish List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">New Job Publish</li>
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
                                            <label for="inputEmail4">SOC Code</label>
                                            <input type="text" class="form-control soc_code" v-model="insertdata.soc_code" id="soc_code">
                                            <span class="text-danger" v-if="errors.soc_code">{{errors.soc_code[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Job Title</label>
                                            <input type="text" class="form-control first_name" v-model="insertdata.job_title" id="job_title">
                                            <span class="text-danger" v-if="errors.job_title">{{ errors.job_title[0]}}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Department</label>
                                            <input type="text" class="form-control department" v-model="insertdata.department" id="department">
                                            <span class="text-danger" v-if="errors.department">{{ errors.department[0]
                                                        }}</span>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Job Description</label>
                                            <textarea class="form-control name" v-model="insertdata.job_description" id="job_description"></textarea>
                                            <span class="text-danger" v-if="errors.job_description">{{ errors.job_description[0]}}</span>
                                        </div>
                                        <div class="col-md-12" style="margin-top: 5px;">
                                            <br>
                                            <label for="inputPassword4" class="bg-dark w-100 text-white"><span style="color: #133f80; color:white">Published websites </span></label>
                                            <hr>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Published websites url/link </label>
                                            <input type="url" class="form-control publish_website_url_1" v-model="insertdata.publish_website_url_1" id="publish_website_url_1">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Upload Document </label>
                                            <input type="file" ref="file_1" class="form-control file_1" id="file_1" @change="onFileSelected">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Published websites url/link </label>
                                            <input type="url" class="form-control publish_website_url_2" v-model="insertdata.publish_website_url_2" id="publish_website_url_2">
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Upload Document</label>
                                            <input type="file" ref="file_2"  class="form-control file_2" id="file_2" @change="onFileSelected_two">
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
        title: 'New Job Post',
    },
    data() {
        return {
            insertdata: {
                id: '',
                soc_code: '',
                job_title: '',
                job_code:'',
                department: '',
                status: 1,
                job_description: '',
                publish_website_url_1: '',
                publish_website_url_2: '',
                
            },
            file_1: '',
            file_2: '',
            notifmsg: '',
            errors: {},
        }
    },
    created() {
    },
    methods: {
        onFileSelected() {
            this.file_1 = this.$refs.file_1.files[0];
        },

        onFileSelected_two() {
            this.file_2 = this.$refs.file_2.files[0];
        },
        
        saveData() {
            const formData = new FormData();

            formData.append('file_1', this.file_1);
            formData.append('file_2', this.file_2);
            formData.append('id', this.insertdata.id);
            formData.append('soc_code', this.insertdata.soc_code);
            formData.append('job_code', this.insertdata.job_code);
            formData.append('department', this.insertdata.department);
            formData.append('job_title', this.insertdata.job_title);
            formData.append('job_description', this.insertdata.job_description);
            formData.append('publish_website_url_1', this.insertdata.publish_website_url_1);
            formData.append('publish_website_url_2', this.insertdata.publish_website_url_2);
            formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/recruitment/saveJobPublish',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/recruitment/job-publish-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
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

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
                                <router-link to="/recruitment/message-center-list">Send Message Center List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Send Mail</li>
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
                                        <div class="form-group col-md-6">
                                            <label for="inputEmail4">Candidate Name</label>
                                            <input type="text" class="form-control candidate_name" v-model="insertdata.candidate_name" id="candidate_name">
                                            <span class="text-danger" v-if="errors.candidate_name">{{errors.candidate_name[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label for="inputPassword4">Candidate Email</label>
                                            <input type="text" class="form-control candidate_email" v-model="insertdata.candidate_email" id="candidate_email">
                                            <span class="text-danger" v-if="errors.candidate_email">{{ errors.candidate_email[0]}}</span>
                                        </div>
                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">CC</label>
                                            <input type="text" class="form-control candidate_cc" v-model="insertdata.candidate_cc" id="candidate_cc">
                                        </div>

                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Subject</label>
                                            <input type="text" class="form-control subject" v-model="insertdata.subject" id="subject">
                                            <span class="text-danger" v-if="errors.subject">{{ errors.subject[0]
                                                            }}</span>
                                        </div>

                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Description</label>
                                            <textarea class="form-control name" rows="8" v-model="insertdata.description" id="description"></textarea>
                                            <span class="text-danger" v-if="errors.description">{{ errors.description[0]}}</span>
                                        </div>

                                        <div class="form-group col-md-12">
                                            <label for="inputPassword4">Upload Attachment</label>
                                            <input type="file" ref="file" class="form-control file" id="file" @change="onFileSelected">
                                        </div>

                                    </div>
                                    <div class="col-md-12">
                                        <hr>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-send mr-1"></i> Send Mail</button>
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
        title: 'Send Message For Candidate ',
    },
    data() {
        return {
            insertdata: {
                id: '',
                candidate_name: '',
                candidate_email: '',
                candidate_cc: '',
                subject: '',
                description: '',
                file: '',

            },
            notifmsg: '',
            errors: {},
        }
    },
    created() {},
    methods: {
        onFileSelected() {
            this.file = this.$refs.file.files[0];
        },

        saveData() {
            const formData = new FormData();
            formData.append('file', this.file);
            formData.append('id', this.insertdata.id);
            formData.append('candidate_name', this.insertdata.candidate_name);
            formData.append('candidate_email', this.insertdata.candidate_email);
            formData.append('candidate_cc', this.insertdata.candidate_cc);
            formData.append('subject', this.insertdata.subject);
            formData.append('description', this.insertdata.description);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/recruitment/send-message',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/recruitment/message-center-list');
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

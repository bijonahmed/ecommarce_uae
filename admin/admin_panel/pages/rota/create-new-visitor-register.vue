<template>
<div>
    <div class="container mt-5">
        <div class="container mt-5">
            <h1>Visitor Details</h1>
            <hr>
            <div class="card">
                <div class="card-body">
                    <form @submit.prevent="saveData()" id="formrest" enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-4 mb-1">
                                <label for="applicantName" class="form-label">Name</label>
                                <input type="text" class="form-control" id="name" v-model="insertdata.name">
                                <span class="text-danger" v-if="errors.name">{{errors.name[0] }}</span>
                            </div>
                            <div class="col-4 mb-1">
                                <label for="applicantEmail" class="form-label">Designation</label>
                                <input type="text" class="form-control" id="designation" name="designation" v-model="insertdata.designation">
                                <span class="text-danger" v-if="errors.designation">{{errors.designation[0] }}</span>
                            </div>
                            <div class="col-4 mb-1">
                                <label for="applicantEmail" class="form-label">Email ID</label>
                                <input type="email" class="form-control" id="email_id" name="email_id" v-model="insertdata.email_id">
                                <span class="text-danger" v-if="errors.email_id">{{errors.email_id[0] }}</span>
                            </div>

                            <div class="col-3 mb-1">
                                <label for="applicantName" class="form-label">Contact No</label>
                                <input type="text" class="form-control" id="contact_no" name="contact_no" v-model="insertdata.contact_no">
                                <span class="text-danger" v-if="errors.contact_no">{{errors.contact_no[0] }}</span>
                            </div>
                            <div class="col-3 mb-1">
                                <label for="applicantName" class="form-label">Address</label>
                                <input type="text" class="form-control" id="address" name="address" v-model="insertdata.address">
                                <span class="text-danger" v-if="errors.address">{{errors.address[0] }}</span>
                            </div>

                            <div class="col-6 mb-1">
                                <label for="applicantName" class="form-label">Date</label>
                                <input type="date" class="form-control" id="date" v-model="insertdata.date" name="date">
                                <span class="text-danger" v-if="errors.date">{{errors.date[0] }}</span>

                            </div>
                            <div class="col-6 mb-1">
                                <label for="applicantName" class="form-label">Time</label>
                                <input type="time" class="form-control" id="time" name="time" v-model="insertdata.time">
                                <span class="text-danger" v-if="errors.time">{{errors.time[0] }}</span>
                            </div>
                            <div class="col-6 mb-1">
                                <label for="applicantName" class="form-label">Reference</label>
                                <input type="text" class="form-control" id="reference" name="reference" v-model="insertdata.reference">

                            </div>

                        </div>
                        <br>
                        <hr>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>

                </div>
            </div>

        </div>
        <!-- Other job details cards here -->
    </div>
    <!-- Apply Job Modal -->

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
        title: 'Visitor Register ',
    },
    data() {
        return {
            insertdata: {
                name: '',
                designation: '',
                email_id: '',
                contact_no: '',
                address: '',
                date: '',
                time: '',
                reference: '',

            },
            notifmsg: '',
            files: '',
            errors: {},
        }
    },
    created() {
        //  this.getrow();
    },
    methods: {
        validateInput() {
            // Remove any non-numeric characters from the input
            this.insertdata.expeted_salary = this.insertdata.expeted_salary.replace(/[^0-9]/g, '');
        },
        saveData() {
            const formData = new FormData();
            formData.append('name', this.insertdata.name);
            formData.append('designation', this.insertdata.designation);
            formData.append('email_id', this.insertdata.email_id);
            formData.append('contact_no', this.insertdata.contact_no);
            formData.append('address', this.insertdata.address);
            formData.append('date', this.insertdata.date);
            formData.append('time', this.insertdata.time);
            formData.append('reference', this.insertdata.reference);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/unauthenticate/visitorRegistration',
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
        success_noti() {
            Lobibox.notify('success', {
                pauseDelayOnHover: true,
                continueDelayOnInactiveTab: false,
                position: 'top right',
                icon: 'bx bx-check-circle',
                msg: 'Thank you for registration.'
            });
        },
    },
}
</script>

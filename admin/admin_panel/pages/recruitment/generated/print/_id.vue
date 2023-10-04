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
                                <router-link to="/recruitment/generate-offer-letter-list">Generated offer Letter</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Offer Letter</li>
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
                                <div class="container">
                                    <button type="submit" class="btn btn-success px-5 w-100" id='btn' @click='printDiv'><i class="bx bx-check-circle mr-1" ></i>Print</button>
                                    <br>
                                    <div id="printarea">
                                    <span style="white-space: pre;">{{ insertdata.msg_body }}</span>
                                </div>
                                </div>
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
 </style>
<script>
import $ from "jquery";
export default {
    head: {
        title: 'Offer Letter Print',
    },
    data() {
        return {
            insertdata: {
                id: '',
                currentDate: '',
                candidate_name: '',
                payment_type: '',
                offerd_salary: '',
                dateofjoining: '',
                msg_body: '',
            },
            notifmsg: '',
            candidade: [],
            errors: {},
        }
    },
    created() {
        this.getrow();
        this.getCandidade();
    },
    methods: {
        printDiv() {
            var divContents = document.getElementById("printarea").innerHTML;
            var a = window.open('', '', 'height=500, width=500');
            a.document.write('<html>');
            a.document.write('<body>');
            a.document.write(divContents);
            a.document.write('</body></html>');
            a.document.close();
            a.print();
        },
        getCandidade() {
            this.$axios.get(`/recruitment/getallHiredList`).then(response => {
                this.candidade = response.data.data;
            });
        },
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('currentDate', this.insertdata.currentDate);
            formData.append('candidate_name', this.insertdata.candidate_name);
            formData.append('payment_type', this.insertdata.payment_type);
            formData.append('offerd_salary', this.insertdata.offerd_salary);
            formData.append('dateofjoining', this.insertdata.dateofjoining);
            formData.append('body', this.insertdata.body);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/recruitment/generatedOfferLetter',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/recruitment/generate-offer-letter-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        getrow() {
            let id = this.$route.params.id;
            this.$axios.get(`/recruitment/checkgeneOfferLetterRow/${id}`).then(response => {
                this.insertdata.id = response.data.data.id;
                this.insertdata.currentDate = response.data.data.currentDate;
                this.insertdata.candidate_name = response.data.data.candidate_name;
                this.insertdata.payment_type = response.data.data.payment_type;
                this.insertdata.offerd_salary = response.data.data.offerd_salary;
                this.insertdata.dateofjoining = response.data.data.dateofjoining;
                this.insertdata.msg_body = response.data.data.msg_body;
                //END
            });
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
}
</script>

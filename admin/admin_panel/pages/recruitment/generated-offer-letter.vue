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
                                <router-link to="/recruitment/generate-offer-letter-list">Generated List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Generated Offer Letter</li>
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
                                            <label for="inputEmail4">Select Candidate</label>
                                            <select name="candidate_name" v-model="insertdata.candidate_name" class="form-select candidate_name">
                                                <option value="">Select</option>
                                                <option v-for='data in candidade' :value='data.candidate_name'>{{ data.candidate_name }}
                                                </option>
                                            </select>
                                            <span class="text-danger" v-if="errors.candidate_name">{{errors.candidate_name[0] }}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Offered Salary</label>
                                            <input type="number" class="form-control offerd_salary" v-model="insertdata.offerd_salary" id="offerd_salary">
                                            <span class="text-danger" v-if="errors.offerd_salary">{{ errors.offerd_salary[0]}}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Payment Type</label>

                                            <select name="payment_type" v-model="insertdata.payment_type" class="form-select payment_type">
                                                <option value="">Select Year</option>
                                                <option value="Month">Month</option>
                                                <option value="Week">Week</option>
                                                <option value="Day">Day</option>
                                                <option value="Hour">Hour</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.payment_type">{{ errors.payment_type[0]}}</span>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <label for="inputPassword4">Date Of Joining</label>
                                            <input type="date" class="form-control dateofjoining" v-model="insertdata.dateofjoining" id="dateofjoining">
                                            <span class="text-danger" v-if="errors.dateofjoining">{{ errors.dateofjoining[0]}}</span>
                                        </div>

                                    </div>
                                    <div class="col-md-12">
                                        <hr>
                                    </div>
                                    <div class="row">
                                        <div class="col-sm-12">
                                            <button type="submit" class="btn btn-success px-5 w-100"><i class="bx bx-check-circle mr-1"></i>Generated Offer Letter</button>
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
        title: 'Generated Offer Letter',
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
                body: '',
            },
            candidade: [],
            notifmsg: '',
            errors: {},
        }
    },
    created() {
        var currentDate = new Date();
        console.log(currentDate);
        var currentDateWithFormat = new Date().toJSON().slice(0, 10).replace(/-/g, '/');
        console.log(currentDateWithFormat);
        this.insertdata.currentDate = currentDateWithFormat;
        this.getCandidade();
    },
    methods: {
        
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
        getCandidade() {
            this.$axios.get(`/recruitment/getallHiredList`).then(response => {
                this.candidade = response.data.data;
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

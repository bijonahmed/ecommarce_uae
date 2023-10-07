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
                                <router-link to="/hrm/dashboard" href="javascript:;"><i class="bx bx-home-alt"></i></router-link>
                            </li>
                            <li class="breadcrumb-item" aria-current="page">
                                <router-link to="/holiday/holiday-list">Holiday List </router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">New Holidays</li>
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
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">From Date </label>
                                        <div class="col-sm-9">
                                            <input type="date" class="form-control frm_date" v-model="insertdata.frm_date" id="frm_date" @change="calculateDateRange">
                                            <span class="text-danger" v-if="errors.frm_date">{{ errors.frm_date[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPhoneNo2" class="col-sm-3 col-form-label">To Date</label>
                                        <div class="col-sm-9">
                                            <input type="date" class="form-control to_date" v-model="insertdata.to_date" id="to_date" @change="calculateDateRange">
                                            <span class="text-danger" v-if="errors.to_date">{{ errors.to_date[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPhoneNo2" class="col-sm-3 col-form-label">No. of Days</label>
                                        <div class="col-sm-9">
                                            <!-- <p v-if="dateRange">Date Range: {{ dateRange }}</p> -->
                                            <input type="text" class="form-control no_of_days" v-model="insertdata.no_of_days" id="no_of_days">
                                            <span class="text-danger" v-if="errors.no_of_days">{{ errors.no_of_days[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Day</label>
                                        <div class="col-sm-9">
                                            <select name="day" v-model="insertdata.day" class="form-select day">
                                                <option value="">Selec</option>
                                                <option value="Sunday">Sunday</option>
                                                <option value="Monday">Monday</option>
                                                <option value="Tuesday">Tuesday</option>
                                                <option value="Wednesday">Wednesday</option>
                                                <option value="Thrusday">Thursday</option>
                                                <option value="Friday">Friday</option>
                                                <option value="Saturday">Saturday</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.day">{{ errors.day[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEmailAddress2" class="col-sm-3 col-form-label">Holiday Type</label>
                                        <div class="col-sm-9">
                                            <select name="holiday_type_id" v-model="insertdata.holiday_type_id" class="form-select holiday_type_id">
                                                <option value="">Select</option>
                                                <option v-for='data in holidaytype' :value='data.id'>{{ data.name }}</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.holiday_type_id">{{ errors.holiday_type_id[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputPhoneNo2" class="col-sm-3 col-form-label">Holiday Description</label>
                                        <div class="col-sm-9">
                                            <textarea type="text" class="form-control holiday_description" v-model="insertdata.holiday_description" id="holiday_description" placeholder="Holiday Description"></textarea>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Status</label>
                                        <div class="col-sm-9">
                                            <select name="status" v-model="insertdata.status" class="form-select">
                                                <option value="1" selected>Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.status">{{ errors.status[0] }}</span>
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

<script>
export default {
    head: {
        title: 'Add Holiday List',
    },
    data() {
        return {
            insertdata: {
                id: '',
                frm_date: '',
                to_date: '',
                no_of_days: '',
                day: '',
                holiday_type_id: '',
                holiday_description: '',
                status: 1,
            },
            holidaytype: [],
            notifmsg: '',
            errors: {},
        }
    },
    created() {
        this.getholidaylist();
    },
    methods: {
        calculateDateRange() {
            if (this.insertdata.frm_date && this.insertdata.to_date) {
                const start = new Date(this.insertdata.frm_date);
                const end = new Date(this.insertdata.to_date);
                const timeDiff = Math.abs(end - start);
                const days = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
                console.log(days);
                this.insertdata.no_of_days = days;
            } else {
                this.insertdata.no_of_days = null;
            }
        },
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('frm_date', this.insertdata.frm_date);
            formData.append('to_date', this.insertdata.to_date);
            formData.append('no_of_days', this.insertdata.no_of_days);
            formData.append('day', this.insertdata.day);
            formData.append('holiday_type_id', this.insertdata.holiday_type_id);
            formData.append('holiday_description', this.insertdata.holiday_description);
            formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/holiday/createEditHolidayList',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/holiday/holiday-list');
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

        getholidaylist() {
            this.$axios.get(`/holiday/getholidaylist`).then(response => {
                this.holidaytype = response.data.data;
            });

        }
    },
}
</script>

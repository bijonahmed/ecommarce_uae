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
                                <router-link to="/employee/leave-approval-list">Leave Approval Request List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Leave Approval Request </li>
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
                                        <label for="inputpassword_confirmation2" class="col-sm-3 col-form-label">Leave Type</label>
                                        <div class="col-sm-9">
                                            <select name="leave_type_id" v-model="insertdata.leave_type_id" class="form-select leave_type_id">
                                                <option value="" selected>Select</option>
                                                <option v-for='data in ltype' :value='data.id'>{{data.name}}</option>
                                            </select>
                                            <span class="text-danger" v-if="errors.leave_type_id">{{ errors.leave_type_id[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">From Date</label>
                                        <div class="col-sm-9">
                                            <input type="date" class="form-control frm_date" v-model="insertdata.frm_date" id="frm_date" @change="calculateDays">
                                            <span class="text-danger" v-if="errors.frm_date">{{ errors.frm_date[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">To Date</label>
                                        <div class="col-sm-9">
                                            <input type="date" class="form-control to_date" v-model="insertdata.to_date" id="frm_date" @change="calculateDays">
                                            <span class="text-danger" v-if="errors.to_date">{{ errors.to_date[0] }}</span>
                                        </div>
                                    </div>
                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">No. of Leave</label>
                                        <div class="col-sm-9">
                                            <input type="number" class="form-control no_of_leave" v-model="insertdata.no_of_leave" id="no_days_allow">
                                            <span class="text-danger" v-if="errors.no_of_leave">{{ errors.no_of_leave[0] }}</span>
                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Remarks</label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control remarks" v-model="insertdata.remarks" id="remarks"></textarea>

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
        title: 'Leave Approval Request  '
    },
    data() {
        return {
            insertdata: {
                id: '',
                leave_type_id: '',
                frm_date: '',
                to_date: '',
                no_of_leave: '',
                remarks: '',
                status: 0,
            },
           
            errors: {},
            ltype: [],
        }
    },
    created() {
        this.leaveType();

    },

    methods: {
        calculateDays() {
            if (this.insertdata.frm_date && this.insertdata.to_date) {
                const from = new Date(this.insertdata.frm_date);
                const to = new Date(this.insertdata.to_date);
                const timeDifference = to.getTime() - from.getTime();
                const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

                this.insertdata.no_of_leave = daysDifference;
            } else {
                this.insertdata.no_of_leave = null;
            }
        },
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('leave_type_id', this.insertdata.leave_type_id);
            formData.append('frm_date', this.insertdata.frm_date);
            formData.append('to_date', this.insertdata.to_date);
            formData.append('no_of_leave', this.insertdata.no_of_leave);
            formData.append('remarks', this.insertdata.remarks);
            formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/leave/createEditLeaveRequest',
                formData, {
                    headers
                }).then((res) => {
                $('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/employee/leave-approval-list');
            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        leaveType() {
            this.$axios.get('/leave/getLeaveTypeList').then(response => {
                this.ltype = response.data.data;
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

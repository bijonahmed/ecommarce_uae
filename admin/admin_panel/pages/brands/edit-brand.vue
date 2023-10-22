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
                                <router-link to="/brands/brands-list">Brand List</router-link>
                            </li>
                            <li class="breadcrumb-item active" aria-current="page">Edit</li>
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
                                        <label for="inputEnterYourName" class="col-sm-3 col-form-label">Name</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control name" v-model="insertdata.name" id="name" placeholder="Name">
                                            <span class="text-danger" v-if="errors.name">{{ errors.name[0] }}</span>
                                            <input type="hidden" class="form-control" v-model="insertdata.id">

                                        </div>
                                    </div>

                                    <div class="row mb-3">
                                        <label for="inputConfirmPassword2" class="col-sm-3 col-form-label">Status</label>
                                        <div class="col-sm-9">
                                            <select name="status" v-model="insertdata.status" class="form-select">
                                                <option value="1" selected>Active</option>
                                                <option value="0">Inactive</option>
                                            </select>
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
        title: 'Manufacturer Edit',
    },
    data() {
        return {
            insertdata: {
                id: '',
                name: '',
                status: 1,
            },
            notifmsg: '',
            errors: {},
        }
    },
    async mounted() {
        this.defaultLoading();
    },
    methods: {
        saveData() {
            const formData = new FormData();
            formData.append('id', this.insertdata.id);
            formData.append('name', this.insertdata.name);
            formData.append('status', this.insertdata.status);
            const headers = {
                'Content-Type': 'multipart/form-data'
            };
            this.$axios.post('/brands/save',
                formData, {
                    headers
                }).then((res) => {
                //$('#formrest')[0].reset();
                this.success_noti();
                this.$router.push('/brands/brands-list');

            }).catch(error => {
                if (error.response.status === 422) {
                    this.errors = error.response.data.errors;
                }
            });
        },
        defaultLoading() {
            let id = this.$route.query.id;
            this.$axios.get(`/brands/brandrow/${id}`).then(response => {
                //console.log("product row:" + response.data);
                this.insertdata.id = response.data.data.id;
                this.insertdata.name = response.data.data.name;
                this.insertdata.status = response.data.data.status;
                // = response.data.product_cat;

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

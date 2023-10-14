<template>
<body class="bg-login">
    <!--wrapper-->
    <div class="wrapper">
        <div class="section-authentication-signin d-flex align-items-center justify-content-center my-5 my-lg-0">
            <div class="container-fluid">
                <div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3">
                    <div class="col mx-auto">
                        <div class="text-center">
                            <img src="/images/futuregenit-logo.png" width="180" alt="" />
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="border rounded">
                                    <div class="form-body">
                                        <div class="alert alert-danger" v-if="loginForm.errors.errors.account">
                                            {{ loginForm.errors.errors.account[0] }}
                                        </div>
                                        <form @submit.prevent="userLogin" @keydown="loginForm.onKeydown($event)" class="row g-3">
                                            <div class="col-12">
                                                <label for="inputEmailAddress" class="form-label">Email Address</label>
                                                <input type="text" v-model="loginForm.email" class="form-control" name="email" placeholder="Enter email" :class="{ 'is-invalid': loginForm.errors.has('email') }">
                                                <!-- <has-error :form="loginForm" field="email"></has-error> -->
                                            </div>
                                            <div class="col-12">
                                                <label for="inputChoosePassword" class="form-label">Enter Password</label>
                                                <div class="input-group" id="show_hide_password">
                                                    <input type="password" v-model="loginForm.password" class="form-control" name="passwrd" placeholder="Enter password" :class="{ 'is-invalid': loginForm.errors.has('password') }">
                                                    <!-- <has-error :form="loginForm" field="password"></has-error> -->
                                                </div>
                                            </div>
                                            <div class="col-md-6 d-none">
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked>
                                                    <label class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
                                                </div>
                                            </div>
                                            <div class="col-md-6 text-end d-none"> <a href="authentication-forgot-password.html">Forgot Password ?</a>
                                            </div>
                                            <div class="col-12">
                                                <div class="d-grid">
                                                    <button :disabled="loginForm.busy" type="submit" class="btn btn-success"><i class="bx bxs-lock-open"></i>Sign in</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <!--end row-->
            </div>
        </div>
    </div>
</body>
</template>

<script>
export default {
    auth: 'guest',
    data() {
        return {
            loginForm: this.$vform({
                email: '',
                password: '',
            }),
        }
    },
    methods: {
        async userLogin() {
            try {
                let {
                    data
                } = await this.loginForm.post('/auth/login');
                await this.$auth.setUserToken(data.access_token);
                // this.$toast.success({
                //     title: 'Success!',
                //     message: 'Welcome to our app',
                // })

                this.loginForm.reset();
            } catch (err) {
                console.log(err)
            }
        }
    }
}
</script>

<style>

</style>
